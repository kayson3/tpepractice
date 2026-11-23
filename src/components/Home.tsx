import { useState } from 'react';
import { SECTION_OPTIONS } from '../data/sections';
import type { QuizConfig, QuizMode, SectionId } from '../types';

type Props = {
  onStart: (config: QuizConfig) => void;
};

export function Home({ onStart }: Props) {
  const [mode, setMode] = useState<QuizMode>('exam');
  const [section, setSection] = useState<SectionId>('all');
  const [timerEnabled, setTimerEnabled] = useState(true);

  return (
    <div className="page home">
      <header className="home-header">
        <p className="eyebrow">University of Ibadan · Postgraduate School</p>
        <h1>UI TPE Sample Practice</h1>
        <p className="lede">
          Practise the 150 Test of English sample questions. Choose a mode,
          optionally focus on one section, then start.
        </p>
      </header>

      <section className="panel" aria-labelledby="mode-heading">
        <h2 id="mode-heading">Play mode</h2>
        <div className="mode-grid">
          <button
            type="button"
            className={`mode-card ${mode === 'exam' ? 'active' : ''}`}
            onClick={() => setMode('exam')}
          >
            <strong>Exam</strong>
            <span>
              Answer the full set, then see your score and a review of the
              correct answers.
            </span>
          </button>
          <button
            type="button"
            className={`mode-card ${mode === 'instant' ? 'active' : ''}`}
            onClick={() => setMode('instant')}
          >
            <strong>Instant feedback</strong>
            <span>
              After you pick an answer, the correct option is revealed after 3
              seconds.
            </span>
          </button>
        </div>
      </section>

      <section className="panel" aria-labelledby="section-heading">
        <h2 id="section-heading">Questions</h2>
        <label className="field">
          <span>Section</span>
          <select
            value={section}
            onChange={(e) => setSection(e.target.value as SectionId)}
          >
            {SECTION_OPTIONS.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>

        {mode === 'exam' && (
          <label className="toggle">
            <input
              type="checkbox"
              checked={timerEnabled}
              onChange={(e) => setTimerEnabled(e.target.checked)}
            />
            <span>60-minute countdown (recommended)</span>
          </label>
        )}
      </section>

      <button
        type="button"
        className="primary-btn"
        onClick={() =>
          onStart({
            mode,
            section,
            timerEnabled: mode === 'exam' ? timerEnabled : false,
          })
        }
      >
        Start practice
      </button>
    </div>
  );
}
