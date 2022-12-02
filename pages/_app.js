import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
