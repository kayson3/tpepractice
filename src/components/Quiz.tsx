import { useEffect, useRef, useState } from 'react';
import type { AnswerMap, Question, QuizMode } from '../types';
import { StemText } from './StemText';

type Props = {
  questions: Question[];
  mode: QuizMode;
  timerEnabled: boolean;
  onFinish: (answers: AnswerMap) => void;
  onQuit: () => void;
};

const EXAM_SECONDS = 60 * 60;
const REVEAL_MS = 3000;

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function Quiz({
  questions,
  mode,
  timerEnabled,
  onFinish,
  onQuit,
}: Props) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [secondsLeft, setSecondsLeft] = useState(EXAM_SECONDS);
  const [revealed, setRevealed] = useState(false);
  const [waitingReveal, setWaitingReveal] = useState(false);
  const answersRef = useRef(answers);
  const finishRef = useRef(onFinish);

  answersRef.current = answers;
  finishRef.current = onFinish;

  const question = questions[index];
  const selected = answers[question.id];
  const progress = ((index + 1) / questions.length) * 100;
  const isExam = mode === 'exam';
  const locked = !isExam && (waitingReveal || revealed || !!selected);
  const canGoNext = isExam ? !!selected : revealed;

  useEffect(() => {
    if (!isExam || !timerEnabled) return;
    if (secondsLeft <= 0) {
      finishRef.current(answersRef.current);
      return;
    }
    const id = window.setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => window.clearTimeout(id);
  }, [isExam, timerEnabled, secondsLeft]);

  useEffect(() => {
    if (isExam || !waitingReveal || !selected) return;

    const revealTimer = window.setTimeout(() => {
      setWaitingReveal(false);
      setRevealed(true);
    }, REVEAL_MS);

    return () => window.clearTimeout(revealTimer);
  }, [isExam, waitingReveal, selected, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (locked) return;
      const key = e.key.toLowerCase();
      const choice = question.choices.find((c) => c.key === key);
      if (choice) {
        e.preventDefault();
        selectAnswer(choice.key);
        return;
      }
      const num = Number(e.key);
      if (num >= 1 && num <= question.choices.length) {
        e.preventDefault();
        selectAnswer(question.choices[num - 1].key);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question, locked, isExam]);

  function selectAnswer(key: string) {
    if (locked) return;
    setAnswers((prev) => ({ ...prev, [question.id]: key }));
    if (!isExam) {
      setWaitingReveal(true);
      setRevealed(false);
    }
  }

  function syncInstantStateForIndex(nextIndex: number) {
    const nextQ = questions[nextIndex];
    const alreadyAnswered = !!answers[nextQ.id];
    setWaitingReveal(false);
    setRevealed(alreadyAnswered);
  }

  function goNext() {
    if (!canGoNext) return;
    if (index >= questions.length - 1) {
      onFinish(answers);
      return;
    }
    const nextIndex = index + 1;
    setIndex(nextIndex);
    if (!isExam) syncInstantStateForIndex(nextIndex);
  }

  function goPrev() {
    if (index === 0 || waitingReveal) return;
    const prevIndex = index - 1;
    setIndex(prevIndex);
    if (!isExam) syncInstantStateForIndex(prevIndex);
  }

  function choiceClass(key: string): string {
    const classes = ['choice'];
    if (selected === key) classes.push('selected');
    if (!isExam && revealed) {
      if (key === question.answer) classes.push('correct');
      else if (selected === key) classes.push('wrong');
    }
    return classes.join(' ');
  }

  return (
    <div className="page quiz">
      <div className="quiz-top">
        <button type="button" className="text-btn" onClick={onQuit}>
          Exit
        </button>
        <div className="quiz-meta">
          <span>
            Question {index + 1} / {questions.length}
          </span>
          {isExam && timerEnabled && (
            <span
              className={`timer ${secondsLeft <= 60 ? 'urgent' : ''}`}
              aria-live="polite"
            >
              {formatTime(secondsLeft)}
            </span>
          )}
        </div>
      </div>

      <div className="progress-track" aria-hidden="true">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <article className="question-card">
        <p className="section-tag">
          Section {question.section}: {question.sectionTitle}
        </p>
        {question.instruction && (
          <p className="instruction">{question.instruction}</p>
        )}
        {question.stem && <StemText className="stem" text={question.stem} />}

        <div className="choices" role="listbox" aria-label="Answer choices">
          {question.choices.map((choice) => (
            <button
              key={choice.key}
              type="button"
              role="option"
              aria-selected={selected === choice.key}
              className={choiceClass(choice.key)}
              disabled={locked}
              onClick={() => selectAnswer(choice.key)}
            >
              <span className="choice-key">{choice.key.toUpperCase()}</span>
              <span className="choice-text">{choice.text}</span>
            </button>
          ))}
        </div>

        {!isExam && waitingReveal && (
          <p className="feedback-hint" aria-live="polite">
            Checking in a moment…
          </p>
        )}
        {!isExam && revealed && (
          <p className="feedback-hint" aria-live="polite">
            {selected === question.answer
              ? 'Correct.'
              : `Correct answer: ${question.answer.toUpperCase()}`}
          </p>
        )}
      </article>

      <div className="quiz-nav">
        <button
          type="button"
          className="secondary-btn"
          onClick={goPrev}
          disabled={index === 0 || waitingReveal}
        >
          Previous
        </button>
        {index < questions.length - 1 ? (
          <button
            type="button"
            className="primary-btn"
            onClick={goNext}
            disabled={!canGoNext}
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            className="primary-btn"
            onClick={() => onFinish(answers)}
            disabled={!canGoNext}
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
}
