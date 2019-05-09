import React from "react";
import App, { Container } from "next/app";
import Navigation from "../components/navbar";

import "bootstrap/dist/css/bootstrap.css";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Navigation />
        <div className="container">
          <Component {...pageProps} />
        </div>
      </Container>
    );
  }
}

export default MyApp;
