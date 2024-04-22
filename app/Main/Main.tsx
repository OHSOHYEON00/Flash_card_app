import React from 'react';
import Links from '../components/Links';
import About from './About';
import WorkExperience from './WE/WorkExperience';
import Projects from './Projects/Projects';

function Main() {
  return (
    <section>
      <section className="header">
        <div>
          <h2>Sohyeon Oh</h2>
          <div>Shorter explanation</div>
        </div>
        <div>
          <img src="#" alt="profile" />
        </div>
      </section>

      <section className="links">
        <Links />
      </section>

      <About />

      <WorkExperience />

      <Projects />
    </section>
  );
}

export default Main;
