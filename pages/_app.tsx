import React from 'react';
import type { AppProps } from 'next/app'

import '../styles/global.css';
import '../styles/reset.css';
import '../styles/home.css'
import Layout from '../components/Layout'

function App({ Component, pageProps }:AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
