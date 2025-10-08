import { useState } from 'react';
import Link from 'next/link';

const sample = [
  {
    question: 'What is the main product of photosynthesis?',
    options: ['Oxygen', 'Carbon dioxide', 'Glucose', 'Water'],
    answer: 2,
    explanation: 'Photosynthesis produces glucose which plants use as food.'
  },
  {
    question: 'Which organelle carries out photosynthesis?',
    options: ['Mitochondria', 'Chloroplast', 'Nucleus', 'Ribosome'],
    answer: 1,
    explanation: 'Chloroplasts contain chlorophyll that captures sunlight.'
  },
  {
    question: 'What gas is released during photosynthesis?',
    options: ['Nitrogen', 'Oxygen', 'Carbon monoxide', 'Methane'],
    answer: 1,
    explanation: 'Oxygen is released as a byproduct of photosynthesis.'
  }
];

export default function PracticeDemo() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  function submit() {
    if (selected === null) return alert('Pick an answer first');
    if (selected === sample[index].answer) setScore(s => s + 1);
    setSelected(null);
    if (index + 1 < sample.length) setIndex(i => i + 1);
    else {
      setDone(true);
      const history = JSON.parse(localStorage.getItem('exuiz_history') || '[]');
      history.push({ date: new Date().toISOString(), score, total: sample.length });
      localStorage.setItem('exuiz_history', JSON.stringify(history));
    }
  }

  function restart() {
    setIndex(0); setScore(0); setDone(false); setSelected(null);
  }

  if (done) {
    return (
      <div className="container">
        <h2>Quiz Completed 🎉</h2>
        <p>Your score: {score} / {sample.length}</p>
        <div className="ctaRow">
          <button className="btn" onClick={restart}>Retry</button>
          <Link href="/dashboard"><a className="btn ghost">Back to Dashboard</a></Link>
        </div>
      </div>
    );
  }

  const q = sample[index];
  return (
    <div className="container">
      <h2>Practice Demo</h2>
      <div className="card">
        <p className="progress">Question {index + 1} of {sample.length}</p>
        <h3>{q.question}</h3>
        <div className="options">
          {q.options.map((o, i) => {
            const isSelected = selected === i;
            return (
              <button key={i} className={`option ${isSelected ? 'selected': ''}`} onClick={() => setSelected(i)}>
                {o}
              </button>
            );
          })}
        </div>
        <div className="ctaRow">
          <button className="btn" onClick={submit}>Submit</button>
          <Link href="/dashboard"><a className="btn ghost">Exit</a></Link>
        </div>
      </div>
    </div>
  );
}
