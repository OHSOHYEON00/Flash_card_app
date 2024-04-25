import { TagT } from 'app/utils/types';
import React from 'react';

interface TagP extends React.PropsWithChildren {
  type: TagT;
}

const tagBgColor = {
  tech: '#242D27',
  soft: '#3E2F28',
};

const tagBorderColor = {
  tech: '#6BFFA1',
  soft: '#FF7438',
};

function Tag({ children, type }: TagP) {
  return (
    <div
      className={`bg-[${tagBgColor[type]}] m-1 px-4 py-2 rounded-[20px] border-transparent border-2 hover:border-solid hover:border-[${tagBorderColor[type]}]`}>
      {children}
    </div>
  );
}

export default Tag;
