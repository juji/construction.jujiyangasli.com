import Head from 'next/head'
import '../styles/globals.css'
import '../styles/juji.scss'

function MyApp({ Component, pageProps }) {
  return <div id="juji">
    <Head>
      <title>jujiyangasli.com | under construction</title>
      <meta name="description" content="jujiyangasli.com is feeling lazy, checkout https://wheeleasy.org" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </div>
}

export default MyApp
