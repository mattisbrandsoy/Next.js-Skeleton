import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

import "./Layout.scss";
import "./index.scss";

import navButtons from "../config/buttons";

const appTitle = `<---> NinjaFace`;

export default (props) => (
  <div className="Layout">
    <Head>
      <title>Next please</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header appTitle={appTitle} />
    <main>{props.content}</main>
    <Footer navButtons={navButtons} />
  </div>
);
