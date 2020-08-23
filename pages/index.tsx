import React from "react";
import Layout from "../components/Layout";
import "styles/base.scss";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Layout title={`!Squaaat (${process.env.STAGE})`}>
      <h1>I do not know </h1>
    </Layout>
  );
};

export default IndexPage;
