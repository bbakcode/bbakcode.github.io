import * as React from "react";
import type { HeadFC } from "gatsby";
import { Page } from "@components/page";

const HomePage = () => {
  return <Page>테스트</Page>;
};

export default HomePage;

export const Head: HeadFC = () => <title>Home Page</title>;
