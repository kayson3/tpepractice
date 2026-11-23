import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ANSWERS } from './answers.mjs';
import { SECTION_A } from './sectionA.mjs';
import { SECTION_B } from './sectionB.mjs';
import { SECTION_C } from './sectionC.mjs';
import { SECTION_D } from './sectionD.mjs';
import { SECTION_E } from './sectionE.mjs';
import { SECTION_F } from './sectionF.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '..', 'src', 'data', 'questions.json');

const raw = [
  ...SECTION_A,
  ...SECTION_B,
  ...SECTION_C,
  ...SECTION_D,
  ...SECTION_E,
  ...SECTION_F,
];

const questions = raw.map((q) => {
  const answer = ANSWERS[q.id];
  if (!answer) throw new Error(`Missing answer for question ${q.id}`);
  if (!q.choices.some((c) => c.key === answer)) {
    throw new Error(`Answer "${answer}" not in choices for question ${q.id}`);
  }
  return { ...q, answer };
});

if (questions.length !== 150) {
  throw new Error(`Expected 150 questions, got ${questions.length}`);
}

for (let i = 1; i <= 150; i++) {
  if (!questions.some((q) => q.id === i)) {
    throw new Error(`Missing question id ${i}`);
  }
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(questions, null, 2));
console.log(`Wrote ${questions.length} questions to ${outPath}`);
