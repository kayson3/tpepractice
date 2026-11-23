import type { SectionId } from '../types';

export const SECTION_OPTIONS: { id: SectionId; label: string }[] = [
  { id: 'all', label: 'All sections (150)' },
  { id: 'A', label: 'A — Parallelism' },
  { id: 'B', label: 'B — Discourse Reference' },
  { id: 'C', label: 'C — Stylistic Variation' },
  { id: 'D', label: 'D — Concord' },
  { id: 'E', label: 'E — Mechanics' },
  { id: 'F', label: 'F — Vocabulary & Tenses' },
];
