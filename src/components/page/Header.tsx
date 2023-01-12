import { Button } from "@components/button";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { MdOutlineMenu, MdOutlineSearch } from "react-icons/md";
import * as styles from "./Header.module.scss";
import Menu from "./Menu";
import Search from "./Search";
//import classNames from "classnames/bind";

interface HeaderProps extends Omit<React.HTMLAttributes<HTMLHeadElement>, ""> {}

const menuList = [
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
const Header: React.FC<HeaderProps> = (props) => {
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleToggleSearch = () => {
    setIsOpenSearch((prev) => !prev);
  };

  const onClickMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  /*  */
  const onSearch = (keyword: string) => {
    navigate(`/search/${keyword}/`);
  };

  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <StaticImage
            width={30}
            height={30}
            src={"../../images/icon.png"}
            alt="logo"
          />
          <span className={styles.title}>빡코드</span>
        </div>
        <div className={styles.action}>
          <div className={styles.wrapper}>
            {isOpenSearch ? (
              <Search onBlur={handleToggleSearch} onSearch={onSearch} />
            ) : (
              <Button className={styles.button} onClick={handleToggleSearch}>
                <MdOutlineSearch />
              </Button>
            )}
          </div>
          <div className={styles.wrapper}>
            {isOpenMenu && <Menu className={styles.menu} menuList={menuList} />}
            <Button className={styles.button} onClick={onClickMenu}>
              <MdOutlineMenu />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
