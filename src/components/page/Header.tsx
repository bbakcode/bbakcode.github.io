import React, { useState } from "react";
import { MdOutlineMenu, MdOutlineSearch } from "react-icons/md";
import * as styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Button } from "@components/button";
import { Link } from "@components/link";
import { navigate } from "gatsby";

interface HeaderProps extends Omit<React.HTMLAttributes<HTMLHeadElement>, ""> {
  menu: { to: string; name: string }[];
}

let cx = classNames.bind(styles);
const Header: React.FC<HeaderProps> = (props) => {
  const { menu, className } = props;
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);

  const onClickMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenMenu((prev) => !prev);
  };

  const onClickSearch = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenSearch((prev) => !prev);
  };

  const onBlur = () => {
    setIsOpenSearch(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLInputElement;
    if (e.key === "Enter" && target.value !== "") {
      navigate(`/search/${target.value}/`);
    }
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
        {isOpenSearch && (
          <input
            autoFocus
            onBlur={onBlur}
            className={styles.search_input}
            onKeyDown={onKeyDown}
            autoComplete="false"
            autoCorrect="false"
            spellCheck="false"
          />
        )}
        <Button className={styles.search_button} onClick={onClickSearch}>
          <MdOutlineSearch />
        </Button>
        <Button className={styles.menu_button} onClick={onClickMenu}>
          <MdOutlineMenu />
        </Button>
      </div>
      {isOpenMenu && (
        <div className={styles.menu_wrapper}>
          <ul className={styles.menu}>{menuItemList}</ul>
        </div>
      )}
    </header>
  );
};

export default Header;
