'use client';

import React from 'react';
import { ESubHeader } from '../scripts/types';

const aStyle = 'px-8 py-0';

function Links() {
  const createLink = (id: string) => `#${id}`;

  return (
    <section className="text-center grid auto-cols-auto grid-flow-col divide-x text-1.5xl mx-0 my-8 text-xl">
      <a className={`${aStyle}`} href={createLink(ESubHeader.ABOUT)}>
        About
      </a>
      <a className={`${aStyle}`} href={createLink(ESubHeader.WORK_EXPERIENCE)}>
        Work Experience
      </a>
      <a className={`${aStyle}`} href={createLink(ESubHeader.PROJECTS)}>
        Projects
      </a>
      <a className={`${aStyle}`}>Thoughts</a>
    </section>
  );
}

export default Links;
