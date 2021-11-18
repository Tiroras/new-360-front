import type { AppProps } from 'next/app'
import React from 'react';
import { GlobalStyle } from '../src/theme/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
