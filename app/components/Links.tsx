'use client';

import React from 'react';

const aStyle = 'px-8 py-0';

function Links() {
  return (
    <section className="text-center grid auto-cols-auto grid-flow-col divide-x text-1.5xl mx-0 my-8 text-xl">
      <a className={`${aStyle}`}>About</a>
      <a className={`${aStyle}`}>Work Experience</a>
      <a className={`${aStyle}`}>Projects</a>
      <a className={`${aStyle}`}>Thoughts</a>
    </section>
  );
}

export default Links;
