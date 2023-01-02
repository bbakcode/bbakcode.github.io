import { Link } from "@components/link";
import React from "react";
import * as styles from "./Menu.module.scss";
import classNames from "classnames/bind";

interface MenuProps extends Omit<React.HTMLAttributes<HTMLUListElement>, ""> {
  menuList: {
    to: string;
    name: string;
  }[];
}

let cx = classNames.bind(styles);

const Menu: React.FC<MenuProps> = (props) => {
  const { menuList } = props;

  return (
    <ul className={cx(styles.root, props.className)}>
      {menuList.map((menu) => {
        return (
          <li key={menu.name}>
            <Link to={menu.to} className={styles.item}>
              {menu.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
