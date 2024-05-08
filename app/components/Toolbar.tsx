import React from 'react';
import Logo from '../../public/logo.svg';
import Image from 'next/image';

interface ToolbarP {}

function TdComponent({
  text,
  border = true,
}: {
  text: string;
  border?: boolean;
}) {
  return (
    <td
      className={`${
        border ? 'border-r-[white] border-r border-solid' : ''
      } px-4`}>
      {text}
    </td>
  );
}

function Toolbar({}: ToolbarP) {
  return (
    <div className="bg-[#0F1511] w-full h-10 flex text-[white] justify-between items-center">
      <div className="flex items-center">
        <Image src={Logo} alt="logo" className="h-6" />
        <div>Sohyeon Oh</div>
      </div>
      <table>
        <thead>
          <tr>
            <TdComponent text="About me" />
            <TdComponent text="Work Experience" />
            <TdComponent text="How I work" />
            <TdComponent text="Projects" border={false} />
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Toolbar;
