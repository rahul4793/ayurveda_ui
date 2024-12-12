import React from 'react';
import './App.css';
function App() {
  return (
    <div className="container">
      <div className="section strength">
        <div className="content">
          <h2>STRENGTH</h2>
          <a href="/strength" className="arrow-link">
            &rarr;
          </a>
        </div>
      </div>
      <div className="section mobility">
        <div className="content">
          <h2>MOBILITY</h2>
          <a href="/mobility" className="arrow-link">
            &rarr;
          </a>
        </div>
      </div>
      <div className="section drills">
        <div className="content">
          <h2>DRILLS</h2>
          <a href="/drills" className="arrow-link">
            &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
export default App;
