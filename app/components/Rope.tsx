'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import RopeImg from '../../public/rope.svg';

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
    <div className="absolute top-[-200px]  right-[-100px]">
      <Image
        src={RopeImg}
        alt="pull it down"
        className="h-[500px] relative right-[-30%]"
        draggable={false}
        onMouseDown={onClick}
        onMouseUp={onClickEnd}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      />
      {!isHandling && (
        <span className="relative right-[-20%] -top-20">Pull it!</span>
      )}
    </div>
  );
}

export default Rope;
