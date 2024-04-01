import React from 'react';

function SubHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-2xl border-b-2 border-[black] pb-2 mb-3 mt-8">
      {children}
    </div>
  );
}

export default SubHeader;
