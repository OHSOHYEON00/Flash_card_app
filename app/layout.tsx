/** Used to define html and body tag */
import React from 'react';
import './globals.css';
import localFont from 'next/font/local';
import { Raleway } from 'next/font/google';

export const headerFont = localFont({
  src: '../public/SieraLeone.woff',
  display: 'swap',
});

const basicFont = Raleway({
  subsets: ['latin'],
  display: 'swap',
});

function layout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${basicFont.className}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sohyeon Oh, portfolio</title>
      </head>
      <body className="bg-[#ffffff] text-black h-screen w-screen pt-8 pr-24 pl-24 pb-0 min-w-[325px]">
        {children}
      </body>
    </html>
  );
}

export default layout;
