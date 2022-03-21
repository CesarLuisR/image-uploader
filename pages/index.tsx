import React from "react";
import type { NextPage } from "next";
import { Footer, Wrapper } from "../styles";
import Uploader from "../components/Uploader";
import Head from "next/head";
import AppProvider from "../contexts/Global/Provider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Image Uploader</title>
      </Head>
      <AppProvider>
        <Wrapper>
          <Uploader />
          <Footer>
            Created by&nbsp;<b>Cesar Luis Rijo Cedano</b>&nbsp;-
            devChallenges.io
          </Footer>
        </Wrapper>
      </AppProvider>
    </>
  );
};

export default Home;
