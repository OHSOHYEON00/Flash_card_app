import React from 'react';
import Links from './components/Links';

function Greeting() {
  return (
    <div className="h-full">
      <section className="h-full text-center flex flex-col justify-center items-center">
        <section className="">
          <div className="text-5xl">Hey, I'm Sohyeon Oh</div>
          <div className="text-4xl mt-2 mb-2">Front-end Developer</div>
          <div className="mt-4">
            As a dedicated learner and team player, I’m committed to pushing
            technological boundaries and fostering an environment of continuous
            improvement and collective achievement.
          </div>
        </section>

        <Links />
      </section>
  );
}

export default Greeting;
