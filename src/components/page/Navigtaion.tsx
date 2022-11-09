import React from "react";
import * as styles from "./Navigation.module.scss";
import classNames from "classnames/bind";
import { Link } from "@components/link";

interface NavigationProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, ""> {}

let cx = classNames.bind(styles);
const Navigation: React.FC<NavigationProps> = (props) => {
  const { className } = props;
  return (
    <nav className={cx(styles.root, className)}>
      <div className={styles.container}>
        <Link className={styles.link} to="/category">
          카테고리
        </Link>
        <Link className={styles.link} to="/cateogry/web">
          웹
        </Link>
        <Link className={styles.link} to="/cateogry/web/test">
          테스트
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
