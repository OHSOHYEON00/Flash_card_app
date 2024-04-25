'use client';

import { ProgressT } from 'utils/types';
import { ProgressSteps } from 'utils/utils';
import React, { useState } from 'react';

interface StepP {
  stage: ProgressT;
  index: number;
  handleSeleted: (index: number) => void;
  isSelected?: boolean;
}

function Step({ stage, handleSeleted, index, isSelected }: StepP) {
  const { optional = false, step } = stage;

  const handleEnter = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleSeleted(index);
  };

  return (
    <div
      className={`w-[10vw] h-[10vw] flex justify-center items-center text-center text-[0.7em] rounded-[50%] ${
        isSelected && 'shadow-progress'
      } border border-[white] ${optional ? 'border-dotted' : 'border-solid '}`}
      onClick={handleEnter}
      onMouseEnter={handleEnter}>
      {step}
    </div>
  );
}

function Process() {
  const [selected, setSelected] = useState<number>(0);

  const handleSeleted = (index: number) => {
    !isNaN(index) && setSelected(index);
  };

  return (
    <>
      <section className="desktop-progress">
        <div className="flex flex-row justify-between">
          {ProgressSteps.map((progress, index) => {
            return (
              <Step
                stage={progress}
                index={index}
                key={index}
                handleSeleted={handleSeleted}
                isSelected={selected === index}
              />
            );
          })}
        </div>
        <div className="text-xs mt-4 h-16">{ProgressSteps[selected].info}</div>
      </section>
      <section className="mobile-progress">
        Requirements Analysis, {<br />} Tech Stack Selection, and Project Setup
      </section>
    </>
  );
}

export default Process;
