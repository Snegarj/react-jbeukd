import './style.css';
import * as React from 'react';

import BasicTabs from './tabs';
import Header from './Header';
import Group from './Group';

export default function App() {
  return (
    <div id="container">
      <Header />
      <div id="bg"></div>
      <div id="bg-content">
        <p>Computer Engineering</p>
        <span>142,765 Computer Engineers follow this</span>
      </div>

      <div id="main">
        <section id="section1">
          <BasicTabs />
          <div id="groups">
            <Group />
          </div>
        </section>
      </div>
    </div>
  );
}
