import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem('exuiz_uploads') || '[]');
    setUploads(existing);
  }, []);

  return (
    <div className="container">
      <nav className="nav">
        <h2>Exuiz Dashboard</h2>
        <div>
          <Link href="/practice-demo"><a className="link">Practice</a></Link>
          <Link href="/past-questions"><a className="link">Past Questions</a></Link>
          <Link href="/profile"><a className="link">Profile</a></Link>
        </div>
      </nav>

      <main>
        <section className="card">
          <h3>Welcome back!</h3>
          <p>Start a practice session or upload past questions to build your question bank.</p>
          <div className="ctaRow">
            <Link href="/practice-demo"><a className="btn">Start Practice</a></Link>
            <Link href="/past-questions"><a className="btn ghost">Upload Questions</a></Link>
          </div>
        </section>

        <section className="card">
          <h3>Recent Uploads</h3>
          {uploads.length === 0 ? (
            <p>No uploads yet — try adding one in Past Questions.</p>
          ) : (
            <ul>
              {uploads.slice(-5).reverse().map((u, i) => (
                <li key={i}>{u.name} • {u.date}</li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
