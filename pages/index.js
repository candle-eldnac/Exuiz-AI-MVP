import Link from 'next/link';

export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <h1 className="brand">Exuiz</h1>
        <p className="tag">Smarter Practice, Better Results.</p>
        <div className="ctaRow">
          <Link href="/dashboard"><a className="btn">Get Started</a></Link>
          <Link href="/practice-demo"><a className="btn ghost">Try Demo</a></Link>
        </div>
      </header>

      <main className="features">
        <div className="card">
          <h3>Upload Materials</h3>
          <p>Add PDFs, images, and past questions (demo).</p>
        </div>
        <div className="card">
          <h3>Smart Practice</h3>
          <p>Practice MCQs and track progress (demo).</p>
        </div>
        <div className="card">
          <h3>Track Progress</h3>
          <p>See your scores and XP in your profile (demo).</p>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Exuiz — Demo</p>
      </footer>
    </div>
  );
}
