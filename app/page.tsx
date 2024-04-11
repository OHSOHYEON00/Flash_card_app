import React from 'react';
import Links from './components/Links';
import Main from './Main/page';
import { headerFont } from './layout';
import Rope from './components/Rope';

function Greeting() {
  return (
    <>
      <Rope />
      {/* <Image
        src={RopeImg}
        alt={'rope'}
        width={800}
        height={800}
        id="matter-path"
        priority
      /> */}
      {/* <RopeImg /> */}
      {/* 
      <section className="h-full absolute text-center flex flex-col justify-center items-center top-0">
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
        </section>

        <Links />
      </section>

      <Main /> */}
    </>
  );
}

export default Greeting;
