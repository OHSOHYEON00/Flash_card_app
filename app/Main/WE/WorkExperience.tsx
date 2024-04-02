'use client';

import React from 'react';
import SubHeader from '../../components/SubHeader';
import Experience from './sExperience';
import { ESubHeader } from '../../scripts/types';

function WorkExperience() {
  return (
    <section className="WORKEXPERIENCE">
      <SubHeader id={ESubHeader.WORK_EXPERIENCE}>WORK EXPERIENCE</SubHeader>
      <Experience />
    </section>
  );
}

export default WorkExperience;
