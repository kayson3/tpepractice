export type ProficiencyBand = {
  letter: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  label: string;
  min: number;
  max: number;
};

const BANDS: ProficiencyBand[] = [
  { letter: 'A', label: 'Highly proficient', min: 85, max: 100 },
  { letter: 'B', label: 'Proficient', min: 70, max: 84 },
  { letter: 'C', label: 'Fairly proficient', min: 60, max: 69 },
  { letter: 'D', label: 'Scarcely proficient', min: 50, max: 59 },
  { letter: 'E', label: 'Not proficient', min: 40, max: 49 },
  { letter: 'F', label: 'Illiterate', min: 0, max: 39 },
];

export function percentScore(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

export function getProficiencyBand(percent: number): ProficiencyBand {
  const band = BANDS.find((b) => percent >= b.min && percent <= b.max);
  return band ?? BANDS[BANDS.length - 1];
}

export function scoreAnswers(
  questions: { id: number; answer: string }[],
  answers: Record<number, string>,
): { correct: number; total: number; percent: number; band: ProficiencyBand } {
  const total = questions.length;
  const correct = questions.reduce((count, q) => {
    const given = answers[q.id];
    if (!given) return count;
    return given.toLowerCase() === q.answer.toLowerCase() ? count + 1 : count;
  }, 0);
  const percent = percentScore(correct, total);
  return { correct, total, percent, band: getProficiencyBand(percent) };
}
