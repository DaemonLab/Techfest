import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Script from "next/script";
import Head from "next/head";
import SEO from "@bradgarropy/next-seo";
import localFont from "@next/font/local";

const myFont = localFont({ src: "../public/Valorax-lg25V.woff2" });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO
        title="Ingenium, IIT Indore"
        description="Technical fest of IIT Indore"
        keywords={[
          "Ingenium",
          "Techfest",
          "IIT Indore",
          "Indore",
          "Technical Fest",
        ]}
        icon="/favicon.ico"
      ></SEO>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></Script>
      <main className={myFont.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
