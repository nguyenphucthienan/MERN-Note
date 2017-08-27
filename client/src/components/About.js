import React from 'react';

const About = () => (
  <div className="container center-align flow-text white-text">
    <h2>About my App</h2>
    <p>A simple note taking SPA (Single-Page-App).</p>
    <p>Built using a MERN stack.</p>
    <ul className="stack-list">
      <li className="element-stack">MongoDB</li>
      <li className="element-stack">Express</li>
      <li className="element-stack">React</li>
      <li className="element-stack">Node.js</li>
    </ul>
  </div>
);

export default About;
