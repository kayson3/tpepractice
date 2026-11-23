import { scoreAnswers } from '../lib/scoring';
import type { AnswerMap, Question } from '../types';

type Props = {
  questions: Question[];
  answers: AnswerMap;
  onRetry: () => void;
  onHome: () => void;
};

export function Results({ questions, answers, onRetry, onHome }: Props) {
  const { correct, total, percent, band } = scoreAnswers(questions, answers);

  return (
    <div className="page results">
      <header className="results-header">
        <p className="eyebrow">Results</p>
        <h1>
          {correct} / {total}
        </h1>
        <p className="score-percent">{percent}%</p>
        <p className="band">
          Band {band.letter}: {band.label}
        </p>
      </header>

      <div className="results-actions">
        <button type="button" className="primary-btn" onClick={onRetry}>
          Try again
        </button>
        <button type="button" className="secondary-btn" onClick={onHome}>
          Back home
        </button>
      </div>

      <section className="review" aria-labelledby="review-heading">
        <h2 id="review-heading">Answer review</h2>
        <ul className="review-list">
          {questions.map((q) => {
            const given = answers[q.id];
            const isCorrect =
              !!given && given.toLowerCase() === q.answer.toLowerCase();
            const givenText =
              q.choices.find((c) => c.key === given)?.text ?? '— not answered —';
            const correctText =
              q.choices.find((c) => c.key === q.answer)?.text ?? q.answer;

            return (
              <li
                key={q.id}
                className={`review-item ${isCorrect ? 'ok' : 'miss'}`}
              >
                <div className="review-top">
                  <strong>
                    Q{q.id}
                    {!isCorrect && <span className="miss-tag"> Incorrect</span>}
                  </strong>
                  <span className="review-section">
                    Section {q.section}
                  </span>
                </div>
                {q.stem && <p className="review-stem">{q.stem}</p>}
                <p>
                  <span className="muted">Your answer:</span>{' '}
                  {given ? (
                    <>
                      <strong>{given.toUpperCase()}.</strong> {givenText}
                    </>
                  ) : (
                    givenText
                  )}
                </p>
                {!isCorrect && (
                  <p>
                    <span className="muted">Correct:</span>{' '}
                    <strong>{q.answer.toUpperCase()}.</strong> {correctText}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
