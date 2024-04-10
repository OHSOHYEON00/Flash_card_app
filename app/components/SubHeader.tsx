import React from 'react';
import { headerFont } from '../layout';

interface TSubHeader {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode;
  id?: string;
}

function SubHeader({ children, id = '' }: TSubHeader) {
  return (
    <div
      className={`text-2xl border-b-2 border-[black] pb-2 mb-3 mt-8 ${headerFont.className}`}
      id={id}>
      {children}
    </div>
  );
}

export default SubHeader;
