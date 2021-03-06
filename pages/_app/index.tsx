import './globals.css';
import 'nprogress/nprogress.css';
import Header from 'src/components/global/Header';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import LeftBar from './LeftBar';
import { MainProvider } from 'context/mainContext';

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
      <MainProvider>
        <div className="w-full h-14 bgSidebar fixed top-0 left-0 z-30 hidden 2xl:block"></div>
        <main className="flex justify-between  2xl:max-w-screen-xl 2xl:m-auto">
          {/* Left Header & Component-bar */}
          <LeftBar />

          {/* Right | Full Header & Full Designs */}
          <div className="w-full">
            {/* Right | Full Header */}
            <Header isDesignsPage={true} />

            {/* Right | Full Designs Page */}
            <div
              style={{
                background: '#151f33',
                minHeight: 'calc( 100vh - 56px )',
                backgroundImage:
                  'url(https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/dots.svg?alt=media&token=1383b682-3235-4f38-baac-2c7b8bcd1726)',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center center',
                backgroundSize: '100% 220%',
                backgroundRepeat: 'no-repeat',
              }}
              className="relative p-9 max-w-full overflow-hidden"
            >
              {/* Preivew Designs */}
              <Component {...pageProps} />
            </div>
          </div>
        </main>
      </MainProvider>
    );
  } else {
    return (
      <MainProvider>
        <Header />
        <Component {...pageProps} />
      </MainProvider>
    );
  }
}
