export type SectionId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'all';

export type QuizMode = 'exam' | 'instant';

export type Question = {
  id: number;
  section: Exclude<SectionId, 'all'>;
  sectionTitle: string;
  instruction?: string;
  stem?: string;
  choices: { key: string; text: string }[];
  answer: string;
};

export type QuizConfig = {
  mode: QuizMode;
  section: SectionId;
  timerEnabled: boolean;
};

export type AnswerMap = Record<number, string>;

export type View = 'home' | 'quiz' | 'results';
