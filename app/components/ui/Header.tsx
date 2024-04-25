import React from 'react';
import { latinFont } from 'utils/utils';

function Header({
  content = '',
  align = 'left',
}: {
  content?: string;
  align?: 'right' | 'left' | 'center';
}) {
  return (
    <div className={`text-4xl ${latinFont.className} text-${align}`}>
      {content}
    </div>
  );
}

export default Header;
