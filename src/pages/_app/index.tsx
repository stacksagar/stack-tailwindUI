import './globals.css';
import 'nprogress/nprogress.css';
import Header from 'components/global/Header';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import LeftBar from './LeftBar';
import { useState } from 'react';

(() => {
  NProgress.configure({ showSpinner: false });
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
})();

export default function _app({ Component, pageProps }) {
  const router = useRouter();

  if (router.asPath.includes('designs')) {
    return (

      <main style={{ width: '100%' }} className="flex justify-between">

        {/* Left Header & Component-bar */}
        <LeftBar />

        {/* Right | Full Header & Full Designs */}
        <div className="w-full h-screen overflow-y-scroll">

          {/* Right | Full Header */}
          <Header isDesignsPage={true} />

          {/* Right | Full Designs Page */}
          <div
            style={{ background: '#111111' }}
            className="p-10 bg-gray-700 min-h-screen">

            {/* Preivew Designs */}
            <Component {...pageProps} />

          </div>
        </div>

      </main>
    );

  } else {
    return (
      <>
        <Header />
        <Component {...pageProps} />
      </>
    );
  }
}
