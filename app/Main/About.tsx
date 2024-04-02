import React from 'react';
import SubHeader from '../components/SubHeader';
import { ESubHeader } from '../scripts/types';

function About() {
  return (
    <section className="ABOUT">
      <SubHeader id={ESubHeader.ABOUT}>ABOUT</SubHeader>
      <div className="h-80">Explanation</div>
    </section>
  );
}

export default About;
