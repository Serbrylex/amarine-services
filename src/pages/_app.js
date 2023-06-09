import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';

import '@styles/globals.css'


export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Generated by create next app" />
        {/*<link rel="manifest" href="/manifest.json" />*/}
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#317EFB"/>
      </Head>
        <CssBaseline />
        <Component 
          {...pageProps}
        />
    </>
  )
}
