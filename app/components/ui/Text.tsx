import React from 'react';

interface TextP extends React.PropsWithChildren {}

function Text({ children }: TextP) {
  return <div className={``}>{children}</div>;
}

export default Text;
