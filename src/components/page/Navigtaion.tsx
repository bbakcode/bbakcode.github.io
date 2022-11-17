import React from "react";
import * as styles from "./Navigation.module.scss";
import classNames from "classnames/bind";
import { Link } from "@components/link";

interface NavigationProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, ""> {
  nav?: NavItem[];
}

let cx = classNames.bind(styles);
const Navigation: React.FC<NavigationProps> = (props) => {
  const { nav, className } = props;
  return (
    <nav className={cx(styles.root, className)}>
      <div className={styles.container}>
        {nav?.map(({ name, path }) => (
          <Link key={path} className={styles.link} to={path}>
            {name.replace("_", " ")}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
