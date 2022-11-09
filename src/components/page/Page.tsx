import React from "react";
import Header from "./Header";
import Navigation from "./Navigtaion";
import * as styles from "./Page.module.scss";
//import classNames from "classnames/bind";

interface PageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, ""> {}

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
  const { children } = props;

  return (
    <>
      <Header className={styles.header} menu={menu} />
      <Navigation className={styles.navigation} />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Page;
