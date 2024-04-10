import React from 'react';
import { headerFont } from './layout';

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
        </section>
      </section>
    </div>
  );
}

export default Greeting;
