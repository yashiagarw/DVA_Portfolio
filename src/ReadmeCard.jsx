import React from 'react';
import { HiDocumentText, HiHand } from "react-icons/hi";

export default function ReadmeCard() {
  return (
    <div className="section">
      <h2 className="section-title" style={{ display: 'flex', alignItems: 'center' }}>
        <HiDocumentText style={{ marginRight: '8px' }} />
        README.md
      </h2>
      <div className="readme-card">
        <h3 style={{ display: 'flex', alignItems: 'center' }}>
          Hi there <HiHand style={{ marginLeft: '8px', marginRight: '8px', color: '#ffcc33' }} /> I'm Yashi Agarwal
        </h3>
        <p><strong>Data Visualization & Analytics Enthusiast</strong></p>
        <ul>
          <li>Hands-on experience in building interactive dashboards using <strong>Tableau</strong> and <strong>Google Sheets</strong>.</li>
          <li>Skilled in <strong>data cleaning</strong>, <strong>exploratory data analysis (EDA)</strong>, and transforming raw data into actionable insights.</li>
          <li>Passionate about solving business problems through <strong>data-driven storytelling</strong> and visualization.</li>
          <li>Student at <strong>Newton School of Technology</strong>.</li>
        </ul>
        <blockquote>
          "Turning data into insights, and insights into action."
        </blockquote>
      </div>
    </div>
  );
}
