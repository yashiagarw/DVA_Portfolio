import React from 'react';
import { VscTools } from "react-icons/vsc";

const skills = [
  { name: 'Python', color: '#2ea44f' },
  { name: 'SQL', color: '#2ea44f' },
  { name: 'Tableau', color: '#2ea44f' },
  { name: 'NumPy', color: '#2ea44f' },
  { name: 'Pandas', color: '#2ea44f' },
  { name: 'Matplotlib', color: '#2ea44f' },
];

export default function TechStack() {
  return (
    <div className="section">
      <h2 className="section-title" style={{ display: 'flex', alignItems: 'center' }}>
        <VscTools style={{ marginRight: '8px' }} />
        Tech Stack
      </h2>
      <div className="tech-stack-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {skills.map(s => (
          <span 
            key={s.name} 
            className="tech-badge"
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: `1px solid var(--border)`,
              backgroundColor: 'rgba(46, 164, 79, 0.1)',
              color: 'var(--green)',
              fontSize: '13px',
              fontWeight: '500'
            }}
          >
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}
