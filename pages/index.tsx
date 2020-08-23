import React from "react";
import Layout from "../components/Layout";
import "styles/base.scss";
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports.js";
import { NextPage } from "next";

Amplify.configure(awsconfig);
const IndexPage: NextPage = () => {
  return (
    <Layout title={`!Squaaat (${process.env.STAGE})`}>
      <h1>I do not know </h1>
    </Layout>
  );
};

export default IndexPage;
