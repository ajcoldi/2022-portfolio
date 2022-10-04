import "../styles/globals.css";
import Layout from "../components/Layout";
import { Html, Head, Main, NextScript } from 'next/document'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
