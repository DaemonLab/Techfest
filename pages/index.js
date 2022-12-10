import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

import HomePage from "../components/HomePage";
import MainPage from "../components/Mainpage";
import Sponsors from "../components/Sponsors";
import Events from "../components/Events";
import About from "../components/About";
import Footer from "../components/Footer";
export default function Home() {
  // const [open, setOpen] = useState(false);

  return (
    <>
      {/* <HomePage></HomePage> */}
      <MainPage></MainPage>
      <Events></Events>
      <About></About>
      <Sponsors></Sponsors>
      <Footer></Footer>
    </>
  );
}
