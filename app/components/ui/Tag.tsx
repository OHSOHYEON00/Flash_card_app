import React from 'react';
import { TagT } from 'utils/types';

interface TagP extends React.PropsWithChildren {
  type: TagT;
}

const colorVar = {
  tech: 'bg-[#242D27] hover:border-[#6BFFA1]',
  soft: 'bg-[#3E2F28] hover:border-[#FF7438]',
};

function Tag({ children, type }: TagP) {
  return (
    <div
      className={`${colorVar[type]} m-1 px-4 py-2 rounded-[20px] border-transparent border-2 hover:border-solid`}>
      {children}
    </div>
  );
}

export default Tag;
