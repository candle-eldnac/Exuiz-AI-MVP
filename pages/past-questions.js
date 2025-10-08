import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PastQuestions() {
  const [fileName, setFileName] = useState('');
  const [subject, setSubject] = useState('Biology');
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem('exuiz_uploads') || '[]');
    setUploads(existing);
  }, []);

  function handleFile(e) {
    const f = e.target.files[0];
    if (!f) return;
    setFileName(f.name);
    const data = JSON.parse(localStorage.getItem('exuiz_uploads') || '[]');
    data.push({ name: f.name, subject, date: new Date().toLocaleString() });
    localStorage.setItem('exuiz_uploads', JSON.stringify(data));
    setUploads(data);
    setFileName('');
    alert('Upload saved locally (demo).');
  }

  return (
    <div className="container">
      <nav className="nav">
        <h2>Past Questions</h2>
        <div><Link href="/dashboard"><a className="link">Back</a></Link></div>
      </nav>

      <section className="card">
        <label>
          Subject
          <select value={subject} onChange={e => setSubject(e.target.value)} className="select">
            <option>Biology</option><option>Mathematics</option><option>Physics</option><option>Chemistry</option>
          </select>
        </label>

        <label>
          Upload file (PDF or image) — demo stores metadata locally
          <input type="file" onChange={handleFile} />
        </label>
      </section>

      <section className="card">
        <h3>Uploaded Past Questions</h3>
        {uploads.length === 0 ? <p>No past questions yet.</p> :
          <ul>
            {uploads.slice().reverse().map((u, i) => <li key={i}>{u.subject} • {u.name} • {u.date}</li>)}
          </ul>
        }
      </section>
    </div>
  );
}
