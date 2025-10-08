import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Profile() {
  const [name, setName] = useState('Student');
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem('exuiz_profile') || '{}');
    if (profile.name) setName(profile.name);
    setXp(profile.total_xp || 0);
    setStreak(profile.streak || 0);
  }, []);

  function save() {
    const profile = { name, total_xp: xp, streak };
    localStorage.setItem('exuiz_profile', JSON.stringify(profile));
    alert('Profile saved (demo).');
  }

  return (
    <div className="container">
      <nav className="nav">
        <h2>Profile</h2>
        <div><Link href="/dashboard"><a className="link">Back</a></Link></div>
      </nav>

      <section className="card">
        <label>Name<input value={name} onChange={e => setName(e.target.value)} /></label>
        <label>XP<input type="number" value={xp} onChange={e => setXp(Number(e.target.value))} /></label>
        <label>Streak (days)<input type="number" value={streak} onChange={e => setStreak(Number(e.target.value))} /></label>
        <div className="ctaRow">
          <button className="btn" onClick={save}>Save Profile</button>
        </div>
      </section>

      <section className="card">
        <h3>Your Summary</h3>
        <p>Total XP: <strong>{xp}</strong></p>
        <p>Current streak: <strong>{streak} day(s)</strong></p>
      </section>
    </div>
  );
}
