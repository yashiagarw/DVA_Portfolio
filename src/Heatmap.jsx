import React from 'react';
import { VscProject } from "react-icons/vsc";
import { heatmapData } from './heatmapData';

export default function Heatmap() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return (
    <div className="section">
      <h2 className="section-title" style={{ display: 'flex', alignItems: 'center' }}>
        <VscProject style={{ marginRight: '8px' }} />
        Contributions
      </h2>
      <div className="heatmap-container">
        <div className="heatmap-header">
          <div className="heatmap-months">
            {months.map(m => <span key={m}>{m}</span>)}
          </div>
        </div>
        <div className="heatmap-grid">
          {heatmapData.map((week, i) => (
            <div key={i} className="heatmap-week">
              {week.map((day, j) => (
                <div 
                  key={`${i}-${j}`} 
                  className={`heatmap-cell level-${day}`}
                  title={`${day === 0 ? 'No' : day * 2} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="heatmap-footer">
          <span>Less</span>
          <div className="heatmap-legend">
            <div className="heatmap-cell level-0" />
            <div className="heatmap-cell level-1" />
            <div className="heatmap-cell level-2" />
            <div className="heatmap-cell level-3" />
            <div className="heatmap-cell level-4" />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
