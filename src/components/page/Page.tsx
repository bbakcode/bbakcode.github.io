import React from "react";
import Header from "./Header";
import Navigation from "./Navigtaion";
import * as styles from "./Page.module.scss";
//import classNames from "classnames/bind";

interface PageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, ""> {
  nav?: NavItem[];
}

const menu = [
  {
    to: "/",
    name: "🏠  홈",
  },
  {
    to: "/category",
    name: "🗂  카테고리",
  },
  {
    to: "/tag",
    name: "🏷  태그",
  },
  {
    to: "/about",
    name: "👨‍💻  빡코드",
  },
];

//let cx = classNames.bind(styles);
const Page: React.FC<PageProps> = (props) => {
  const { nav, children } = props;

  return (
    <>
      <Header menu={menu} />
      <Navigation nav={nav} />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Page;
