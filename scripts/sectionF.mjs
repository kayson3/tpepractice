const PASSAGE1 = `Writing Today

In my former life, I often taught first-year composition: a course that supposedly taught students the writing…126…. they needed for college. The main focus of the course was the college essay. Now, freshmen usually had no…127… with the form of the essay; they just struggled with the…128…. Grammar issues aside — these would usually work themselves out during the term — the main focus would be…129.... an argument in a logical way. This fact usually separates the high-school essay from the college one: the amount of analysis…130…to an argument.

By Gerald Lucas`;

const PASSAGE2 = `Chemical Substance

Chemical substances (also called pure …..131…..) may well be defined as "any material with a definite chemical composition". According to this definition, a chemical substance can either be a pure chemical element or a pure chemical …..132….. But, there are exceptions to this definition; a pure substance can also be defined as a form of ….133….that has both definite composition and distinct properties. The chemical substance index published by CAS also includes several alloys of uncertain composition. Non-……134…… compounds are a special case (in inorganic chemistry) that …..135…… the law of constant composition, and for them, it is sometimes difficult to draw the line between a mixture and a compound, as in the case of palladium hydride.`;

const INSTR_PASSAGE =
  'Choose from options A–D to fill the gaps in the passages below:';
const INSTR_OPP =
  'In each of the questions below, choose the option that is opposite in meaning to the word(s) or phrase in bold face:';
const INSTR_SIM =
  'In each of questions below, choose the option that is similar in meaning to the word or phrase in bold face.';

export const SECTION_F = [
  {
    id: 126,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    instruction: INSTR_PASSAGE,
    stem: `${PASSAGE1}\n\nGap 126`,
    choices: [
      { key: 'a', text: 'skills' },
      { key: 'b', text: 'prowess' },
      { key: 'c', text: 'power' },
      { key: 'd', text: 'system' },
    ],
  },
  {
    id: 127,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: `${PASSAGE1}\n\nGap 127`,
    choices: [
      { key: 'a', text: 'hasles' },
      { key: 'b', text: 'trouble' },
      { key: 'c', text: 'difficulty' },
      { key: 'd', text: 'palaver' },
    ],
  },
  {
    id: 128,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: `${PASSAGE1}\n\nGap 128`,
    choices: [
      { key: 'a', text: 'style' },
      { key: 'b', text: 'theme' },
      { key: 'c', text: 'content' },
      { key: 'd', text: 'subject matter' },
    ],
  },
  {
    id: 129,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: `${PASSAGE1}\n\nGap 129`,
    choices: [
      { key: 'a', text: 'pushing' },
      { key: 'b', text: 'producing' },
      { key: 'c', text: 'composing' },
      { key: 'd', text: 'creating' },
    ],
  },
  {
    id: 130,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: `${PASSAGE1}\n\nGap 130`,
    choices: [
      { key: 'a', text: 'pushed' },
      { key: 'b', text: 'dictated' },
      { key: 'c', text: 'alloted' },
      { key: 'd', text: 'devoted' },
    ],
  },
  {
    id: 131,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: `${PASSAGE2}\n\nGap 131`,
    choices: [
      { key: 'a', text: 'materials' },
      { key: 'b', text: 'substances' },
      { key: 'c', text: 'elements' },
      { key: 'd', text: 'purifiers' },
    ],
  },
  {
    id: 132,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: `${PASSAGE2}\n\nGap 132`,
    choices: [
      { key: 'a', text: 'compound' },
      { key: 'b', text: 'sulphur' },
      { key: 'c', text: 'material' },
      { key: 'd', text: 'combined compound' },
    ],
  },
  {
    id: 133,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: `${PASSAGE2}\n\nGap 133`,
    choices: [
      { key: 'a', text: 'life' },
      { key: 'b', text: 'matter' },
      { key: 'c', text: 'content' },
      { key: 'd', text: 'chemical' },
    ],
  },
  {
    id: 134,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: `${PASSAGE2}\n\nGap 134`,
    choices: [
      { key: 'a', text: 'Combined' },
      { key: 'b', text: 'stoichiometric' },
      { key: 'c', text: 'physical' },
      { key: 'd', text: 'chemical' },
    ],
  },
  {
    id: 135,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: `${PASSAGE2}\n\nGap 135`,
    choices: [
      { key: 'a', text: 'disobeys' },
      { key: 'b', text: 'violates' },
      { key: 'c', text: 'flouts' },
      { key: 'd', text: 'disregards' },
    ],
  },
  {
    id: 136,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    instruction: INSTR_OPP,
    stem: 'Ossified is nearly opposite in meaning to….',
    choices: [
      { key: 'a', text: 'Durable' },
      { key: 'b', text: 'Dainty' },
      { key: 'c', text: 'Flexible' },
      { key: 'd', text: 'Contumacious' },
      { key: 'e', text: 'Pragmatic' },
    ],
  },
  {
    id: 137,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: 'Mr Akindele is the most disingenuous person I have ever seen.',
    choices: [
      { key: 'a', text: 'Transparent' },
      { key: 'b', text: 'Parched' },
      { key: 'c', text: 'Blank' },
      { key: 'd', text: 'Ingratiating' },
      { key: 'e', text: 'sincere' },
    ],
  },
  {
    id: 138,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: 'I felt enervated by the strain of moving.',
    choices: [
      { key: 'a', text: 'Idyllic' },
      { key: 'b', text: 'Grandiose' },
      { key: 'c', text: 'Decorous' },
      { key: 'd', text: 'Frustrated' },
      { key: 'e', text: 'energised' },
    ],
  },
  {
    id: 139,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: 'Adeola is very brash and unprepossessing.',
    choices: [
      { key: 'a', text: 'Ugly' },
      { key: 'b', text: 'Arrogant' },
      { key: 'c', text: 'Clever' },
      { key: 'd', text: 'Didactic' },
      { key: 'e', text: 'Pleasing' },
    ],
  },
  {
    id: 140,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: 'Joyce can be obstreperous at times.',
    choices: [
      { key: 'a', text: 'Placid' },
      { key: 'b', text: 'Stubborn' },
      { key: 'c', text: 'Raucous' },
      { key: 'd', text: 'Febrile' },
      { key: 'e', text: 'Amicable' },
    ],
  },
  {
    id: 141,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    instruction: INSTR_SIM,
    stem: 'Periphrastic is almost similar in meaning to….',
    choices: [
      { key: 'a', text: 'Concise' },
      { key: 'b', text: 'Circular' },
      { key: 'c', text: 'Comprehensive' },
      { key: 'd', text: 'Ardent' },
      { key: 'e', text: 'Junior' },
    ],
  },
  {
    id: 142,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: 'His walk to the stage was brisk and sprightly.',
    choices: [
      { key: 'a', text: 'Nimble' },
      { key: 'b', text: 'Sluggish' },
      { key: 'c', text: 'Hurried' },
      { key: 'd', text: 'Genuine' },
      { key: 'e', text: 'Energetic' },
    ],
  },
  {
    id: 143,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: 'His essays are long and prolix.',
    choices: [
      { key: 'a', text: 'Antediluvian' },
      { key: 'b', text: 'Terse' },
      { key: 'c', text: 'Belligerent' },
      { key: 'd', text: 'Wordy' },
      { key: 'e', text: 'Awkward' },
    ],
  },
  {
    id: 144,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: 'Bukola Smith won plaudits for her skillful handling of the research.',
    choices: [
      { key: 'a', text: 'Denunciation' },
      { key: 'b', text: 'Pleasure' },
      { key: 'c', text: 'Recognition' },
      { key: 'd', text: 'Disgrace' },
      { key: 'e', text: 'Diffidence' },
    ],
  },
  {
    id: 145,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: 'The soldiers were subjected to desultory fire from the enemy position.',
    choices: [
      { key: 'a', text: 'Salacious' },
      { key: 'b', text: 'Cursory' },
      { key: 'c', text: 'Assiduous' },
      { key: 'd', text: 'Random' },
      { key: 'e', text: 'Asinine' },
    ],
  },
  {
    id: 146,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: 'The drug is used for prophylactic purposes.',
    choices: [
      { key: 'a', text: 'curative' },
      { key: 'b', text: 'preventive' },
      { key: 'c', text: 'recuperative' },
      { key: 'd', text: 'healing' },
    ],
  },
  {
    id: 147,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: "The chairman's remark is germane to the issue under discussion.",
    choices: [
      { key: 'a', text: 'redundant' },
      { key: 'b', text: 'relevant' },
      { key: 'c', text: 'irrelevant' },
      { key: 'd', text: 'crucial' },
    ],
  },
  {
    id: 148,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: 'It is unfortunate that his loss can no longer be redeemed.',
    choices: [
      { key: 'a', text: 'recovered' },
      { key: 'b', text: 'revamped' },
      { key: 'c', text: 'reclaimed' },
      { key: 'd', text: 'reconsidered.' },
    ],
  },
  {
    id: 149,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: "He has been handicapped by the manager's comments.",
    choices: [
      { key: 'a', text: 'prevented' },
      { key: 'b', text: 'incapacitated' },
      { key: 'c', text: 'debarred' },
      { key: 'd', text: 'stopped' },
    ],
  },
  {
    id: 150,
    section: 'F',
    sectionTitle: 'Vocabulary Choices, Collocations, Sense Relations and Tenses',
    stem: 'The range of options provided is not clear.',
    choices: [
      { key: 'a', text: 'limitation' },
      { key: 'b', text: 'scope' },
      { key: 'c', text: 'length' },
      { key: 'd', text: 'breadth' },
    ],
  },
];
