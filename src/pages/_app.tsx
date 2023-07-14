import '@/Styles/globals.css';

import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/app/components/modules/ThemeProvider/theme';
import { store } from '@/app/store';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </Provider>
  );
}
