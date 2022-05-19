import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../common/layout';
import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps: { session, ...pageProps }, }) {


  return (
    <SessionProvider session={session}><Layout>

      <Component {...pageProps} />

    </Layout>
    </SessionProvider>
  )
}

