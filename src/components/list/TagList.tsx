import { Link } from "@components/link";
import React from "react";
import * as styles from "./TagList.module.scss";
//import classNames from "classnames/bind";

interface TagListProps extends Omit<React.HTMLAttributes<HTMLDivElement>, ""> {
  tags: TagItem[];
}

//let cx = classNames.bind(styles);
const TagList: React.FC<TagListProps> = (props) => {
  const { tags } = props;

  return (
    <div className={styles.root}>
      <div className={styles.header}>🏷 태그</div>
      <ul className={styles.list}>
        {tags?.map((tag) => (
          <li key={tag.name}>
            <Link to={`/tag/${tag.name}/`} className={styles.tag}>
              <span>{tag.name}</span>
              <span className={styles.count}>{tag.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
