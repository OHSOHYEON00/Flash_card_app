import React from 'react';
import Links from './components/Links';
import Main from './Main/page';
import { headerFont } from './layout';
import Rope from './components/Rope';

function Greeting() {
  return (
    <div className="h-full">
      <section className="h-full text-center flex flex-col justify-center items-center">
        <section className="">
          <div className={`text-5xl ${headerFont.className}`}>
            Hey, I'm Sohyeon Oh
          </div>
          <div className={`text-4xl mt-2 mb-2 ${headerFont.className}`}>
            Front-end Developer
          </div>
          <div className="mt-4">
            As a dedicated learner and team player, I’m committed to pushing
            technological boundaries and fostering an environment of continuous
            improvement and collective achievement.
          </div>
          <Rope />
        </section>

        <Links />
      </section>

      <Main />
    </div>
  );
}

export default Greeting;
