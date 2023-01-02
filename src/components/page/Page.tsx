import React from "react";
import Header from "./Header";
import Navigation, { NavigationProps } from "./Navigation";
//import classNames from "classnames/bind";

interface PageProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "">,
    NavigationProps {}

//let cx = classNames.bind(styles);
const Page: React.FC<PageProps> = (props) => {
  const { children, nav } = props;

  return (
    <>
      <Header />
      <Navigation nav={nav} />
      <main>{children}</main>
    </>
  );
};

export default Page;
