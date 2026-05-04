import React from 'react';
import { RepoIcon, StarIcon, ForkIcon } from './Icons';
import { VscGraphLine } from "react-icons/vsc";
import { GoRocket } from "react-icons/go";

const pins = [
  {
    name: 'INDIA-AQI-Analysis-Forecasting',
    url: 'https://public.tableau.com/views/Air_Quality_Final_Workbook11_17774593482750/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
    desc: 'Multi-horizon PM2.5 forecasting and comprehensive EDA pipeline for Indian air quality data. Features a Rich-enhanced CLI and optimized processing for 800k+ hourly records.',
    lang: 'Python', langColor: '#3572A5',
    stars: 0, forks: 0,
    demos: [
      { label: 'Demo', url: 'https://public.tableau.com/views/Air_Quality_Final_Workbook11_17774593482750/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' },
      { label: 'GitHub', url: 'https://github.com/3ncryptor/DVA_Capstone_2' },
    ],
  },

  {
    name: 'Netflix-Analysis',
    url: 'https://docs.google.com/spreadsheets/d/1_4mmSIVYHOUnOOoXdqt4ssnBGEkFJhQJrFddd2eLhjI/edit?gid=1375265332#gid=1375265332',
    desc: 'Interactive dashboard using Google Sheets to analyze Netflix titles, genres, and market performance. Built interactive KPI dashboards using pivot tables and calculated fields.',
    lang: 'Google Sheets', langColor: '#0F9D58',
    stars: 0,
    demos: [
      { label: 'Demo', url: 'https://docs.google.com/spreadsheets/d/1_4mmSIVYHOUnOOoXdqt4ssnBGEkFJhQJrFddd2eLhjI/edit?gid=1375265332#gid=1375265332' },
    ],
  },
];

export default function PinnedProjects() {
  return (
    <div className="section">
      <h2 className="section-title" style={{ display: 'flex', alignItems: 'center' }}>
        <VscGraphLine style={{ marginRight: '8px' }} />
        Data Visualization & Analytics Work
      </h2>
      <div className="pinned-grid">
        {pins.map((p) => (
          <div className="pin-card" key={p.name}>
            <div className="pin-card-header">
              <RepoIcon />
              <a className="pin-card-name" href={p.url} target="_blank" rel="noopener noreferrer">
                {p.name}
              </a>
            </div>
            <p className="pin-card-desc">{p.desc}</p>
            <div className="pin-card-footer">
              <span>
                <span className="lang-dot" style={{ backgroundColor: p.langColor }} />
                {p.lang}
              </span>
              {p.stars > 0 && (
                <span><StarIcon /> {p.stars}</span>
              )}
              {p.forks > 0 && (
                <span><ForkIcon /> {p.forks}</span>
              )}
              {p.demos?.map((d) => (
                <a key={d.label} className="live-badge" href={d.url} target="_blank" rel="noopener noreferrer">
                  <GoRocket style={{ marginRight: '4px' }} /> {d.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
