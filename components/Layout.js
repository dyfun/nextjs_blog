import React from "react";
import Head from "next/head";
import { Header, Footer } from ".";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header /> {children} <Footer />
    </>
  );
};

export default Layout;
