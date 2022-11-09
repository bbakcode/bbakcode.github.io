import React from "react";
import * as styles from "./Link.module.scss";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";
import classNames from "classnames/bind";

interface LinkProps {}

let cx = classNames.bind(styles);
const Link: React.FC<Omit<GatsbyLinkProps<LinkProps>, "ref">> = (props) => {
  const { className, ...defaultProps } = props;

  return (
    <GatsbyLink
      className={cx(styles.root, className)}
      activeClassName={styles.active}
      {...defaultProps}
    ></GatsbyLink>
  );
};

export default Link;
