import React from "react";
import * as styles from "./component.module.scss";
//import classNames from "classnames/bind";

interface H1Props extends Omit<React.HTMLAttributes<HTMLHeadingElement>, ""> {}

//let cx = classNames.bind(styles);
const h1: React.FC<H1Props> = (props) => {
  return <h1 className={styles.root} style={{ color: "red" }} {...props}></h1>;
};

export default {
  h1,
};
