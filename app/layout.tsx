/** Used to define html and body tag */
import React from 'react';
import './globals.css';
import { latinFont } from './utils/utils';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${latinFont.className}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sohyeon Oh, portfolio</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

export default layout;
