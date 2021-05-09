import "../styles/globals.css";
import App from "next/app";
import { DefaultSeo } from "next-seo";

// import your default seo configurationn
import SEO from "../seo";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </>
    );
  }
}
