import '@/Styles/globals.css';

import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import DefaultLayout from '@/app/components/layouts/DefaultLayout';
import { theme } from '@/app/components/modules/ThemeProvider/theme';
import { store } from '@/app/store';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <main className={inter.className}>{getLayout(<Component {...pageProps} />)}</main>
      </ThemeProvider>
    </Provider>
  );
}
