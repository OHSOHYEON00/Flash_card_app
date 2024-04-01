/** Used to define html and body tag */
import React from 'react';
import './globals.css';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sohyeon Oh, portfolio</title>
      </head>
      <body className="bg-[#ffffff] text-black h-screen w-screen p-8 min-w-[325px] md:p-20">
        {children}
      </body>
    </html>
  );
}

export default layout;
