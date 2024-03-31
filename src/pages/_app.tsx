import React from 'react';
import './globals.css';
import Head from 'next/head';

import type { AppProps } from 'next/app';
import { NextPage } from 'next/types';

type NextPageWithLayout = NextPage;
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component }: AppPropsWithLayout) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React App</title>
      </Head>
      <div className="bg-[#23262C] text-basic-white h-screen w-screen p-8 min-w-[325px] md:p-20 text-right">
        <Component />
      </div>
    </>
  );
}
