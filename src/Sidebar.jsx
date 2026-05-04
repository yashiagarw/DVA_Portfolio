import React from 'react';
import { LocationIcon, GHIcon, LinkedInIcon, StarIcon, ForkIcon, RepoIcon } from './Icons';
import pfp from './assets/yashi_profile.jpg';

const skills = ['Python', 'SQL', 'Tableau', 'NumPy', 'Pandas', 'Matplotlib'];

const links = [
  { icon: <span style={{ fontSize: '14px' }}>📞</span>, label: '+91 8077418065', href: 'tel:+918077418065' },
  { icon: <span style={{ fontSize: '14px' }}>✉</span>, label: 'yashi.agarwal2024@nst.rishihood.edu.in', href: 'mailto:yashi.agarwal2024@nst.rishihood.edu.in' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/yashi-agarwal-710a9a315' },
  { icon: <GHIcon />, label: 'yashiagarw', href: 'https://github.com/yashiagarw' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="avatar-container">
        <img
          className="avatar"
          src={pfp}
          alt="Yashi Agarwal"
        />
      </div>
      <div className="name">Yashi Agarwal</div>
      <div className="username">@yashiagarw</div>
      <p className="bio">
        Data Visualization & Analytics enthusiast with hands-on experience in building interactive dashboards using Tableau and Google Sheets. Skilled in data cleaning, EDA, and transforming raw data into actionable insights.
      </p>

      <ul className="sidebar-links">
        <li><LocationIcon /> Bareilly, India</li>
        {links.map((l, i) => (
          <li key={i}>
            {l.icon}
            <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
          </li>
        ))}
      </ul>

      <div className="stats-row">
        <StarIcon /> <strong>1</strong> star &nbsp;·&nbsp;
        <RepoIcon /> <strong>10</strong> repos &nbsp;·&nbsp;
        <ForkIcon /> <strong>1</strong> forks
      </div>

      <div className="skills-section">
        <h3>Skills</h3>
        <div className="skill-tags">
          {skills.map(sk => <span className="skill-tag" key={sk}>{sk}</span>)}
        </div>
      </div>
    </aside>
  );
}
