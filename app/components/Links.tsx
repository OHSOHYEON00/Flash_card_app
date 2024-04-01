'use client';

import React from 'react';

const aStyle = 'px-2 py-0';

function Links() {
  return (
    <section className="grid auto-cols-auto grid-flow-col divide-x text-1.5xl mx-0 my-4">
      <a className={`${aStyle}`}>About</a>
      <a className={`${aStyle}`}>Work Experience</a>
      <a className={`${aStyle}`}>Projects</a>
      <a className={`${aStyle}`}>Thoughs</a>
    </section>
  );
}

export default Links;
