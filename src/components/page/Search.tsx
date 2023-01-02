import React from "react";
import * as styles from "./Search.module.scss";
import { MdOutlineSearch } from "react-icons/md";

interface SearchProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onKeyDown"> {
  onSearch?: (keyword: string) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const { onSearch, ...inputProps } = props;

  const onKeyDown = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLInputElement;
    if (e.key === "Enter" && target.value !== "") {
      onSearch?.(target.value);
    }
  };

  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        type="text"
        autoFocus
        autoComplete="false"
        autoCorrect="false"
        spellCheck="false"
        onKeyDown={onKeyDown}
        {...inputProps}
      />
      <MdOutlineSearch className={styles.icon} />
    </div>
  );
};

export default Search;
