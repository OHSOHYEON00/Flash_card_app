import React from 'react';
import Links from '../components/Links';
import About from './About';
import WorkExperience from './WE/WorkExperience';
import Projects from './Projects/Projects';

function Main() {
  return (
    <section className="flex flex-col h-full">
      <section className="header flex flex-row flex-[2]">
        <div>
          <div>Sohyeon Oh</div>
          <div>Shorter explanation</div>
        </div>
        <div>
          <img src="#" alt="profile" />
        </div>
      </section>

      <section className="links flex-1">
        <Links />
      </section>

      <section className="flex-[4]">
        <About />

        <WorkExperience />

        <Projects />
      </section>
    </section>
  );
}

export default Main;
