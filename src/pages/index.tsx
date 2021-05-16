import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Todos from "../components/Todos";
import Typography from "@material-ui/core/Typography";
export const Index: FunctionComponent = () => {
  return (
    <Layout>
      <>
        <Helmet>
          <title>Lighthouse Test | Gatsby Material</title>
          <meta name="description" content="Lighthouse Test | Gatsby Material" />
        </Helmet>
        <Typography variant="h4" component="h2">Home</Typography>
        <Todos />
      </>
    </Layout>
  );
};

export default Index;
