'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import RopeImg from '../../public/rope.svg';
import Comp from './Sample';

function Rope() {
  const [isHandling, setIsHandling] = useState<boolean>(false);

  /** Functions */
  const startHandling = () => {
    setIsHandling(true);
  };

  const endHandling = () => {
    setIsHandling(false);
  };

  /** Event Listener */
  const onTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    startHandling();
  };
  const onClick = (e: React.MouseEvent<HTMLImageElement>) => {
    startHandling();
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLImageElement>) => {
    endHandling();
  };
  const onClickEnd = (e: React.MouseEvent<HTMLImageElement>) => {
    endHandling();
  };

  return (
    <div className="sticky top-[-200px] right-[-100px] pl-[40rem]">
      {/* <Image
        src={RopeImg}
        alt="pull it down"
        className="max-h-[500px] relative w-full"
        draggable={false}
        onMouseDown={onClick}
        onMouseUp={onClickEnd}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      />

      <span
        className={`relative top-[-5rem] text-center pl-16 block ${
          isHandling ? 'opacity-0' : 'opacity-100'
        }`}>
        Pull it!
      </span> */}
      <Comp />
    </div>
  );
}

export default Rope;
