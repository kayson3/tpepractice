import { useMemo, useState } from 'react';
import questionsData from './data/questions.json';
import { Home } from './components/Home';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import type {
  AnswerMap,
  Question,
  QuizConfig,
  View,
} from './types';

const allQuestions = questionsData as Question[];

export default function App() {
  const [view, setView] = useState<View>('home');
  const [config, setConfig] = useState<QuizConfig | null>(null);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [sessionKey, setSessionKey] = useState(0);

  const questions = useMemo(() => {
    if (!config) return [];
    if (config.section === 'all') return allQuestions;
    return allQuestions.filter((q) => q.section === config.section);
  }, [config]);

  function handleStart(next: QuizConfig) {
    setConfig(next);
    setAnswers({});
    setSessionKey((k) => k + 1);
    setView('quiz');
  }

  function handleFinish(finalAnswers: AnswerMap) {
    setAnswers(finalAnswers);
    setView('results');
  }

  function handleRetry() {
    if (!config) {
      setView('home');
      return;
    }
    setAnswers({});
    setSessionKey((k) => k + 1);
    setView('quiz');
  }

  function handleHome() {
    setView('home');
    setConfig(null);
    setAnswers({});
  }

  return (
    <div className="app-shell">
      {view === 'home' && <Home onStart={handleStart} />}
      {view === 'quiz' && config && (
        <Quiz
          key={sessionKey}
          questions={questions}
          mode={config.mode}
          timerEnabled={config.timerEnabled}
          onFinish={handleFinish}
          onQuit={handleHome}
        />
      )}
      {view === 'results' && config && (
        <Results
          questions={questions}
          answers={answers}
          onRetry={handleRetry}
          onHome={handleHome}
        />
      )}
    </div>
  );
}
