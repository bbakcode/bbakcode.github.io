import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import * as styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Button } from "@components/button";
import { Link } from "@components/link";

interface HeaderProps extends Omit<React.HTMLAttributes<HTMLHeadElement>, ""> {
  menu: { to: string; name: string }[];
}

let cx = classNames.bind(styles);
const Header: React.FC<HeaderProps> = (props) => {
  const { menu, className } = props;
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const onClickMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  const menuItemList = menu.map((item) => (
    <li key={item.to}>
      <Link to={item.to} className={styles.menu_item}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <header className={cx(styles.root, className)}>
      <div className={styles.container}>
        <div className={styles.logo}>빡코드</div>
        <Button className={styles.menu_button} onClick={onClickMenu}>
          <MdOutlineMenu />
        </Button>
      </div>
      {isOpenMenu && <ul className={styles.menu}>{menuItemList}</ul>}
    </header>
  );
};

export default Header;
