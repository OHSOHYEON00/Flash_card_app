'use client';

import React from 'react';
import SubHeader from '../../components/SubHeader';
import Project from './sProject';
import { ESubHeader } from '../../scripts/types';

function Projects() {
  return (
    <section className="PROJECTS">
      <SubHeader id={ESubHeader.PROJECTS}>PROJECTS</SubHeader>
      <Project />
    </section>
  );
}

export default Projects;
