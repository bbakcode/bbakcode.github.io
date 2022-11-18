import { Link } from "@components/link";
import React from "react";
import * as styles from "./CategoryList.module.scss";
//import classNames from "classnames/bind";

interface CategoryListProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, ""> {
  categories: CategoryItem[];
}

//let cx = classNames.bind(styles);
const CategoryList: React.FC<CategoryListProps> = (props) => {
  const { categories } = props;

  return (
    <div className={styles.root}>
      <div className={styles.header}>🗂 카테고리</div>
      <ul className={styles.list}>
        {categories?.map((category) => (
          <li key={category.name}>
            <Link
              to={`/category/${category.name}/`}
              className={styles.category}
            >
              <span>{category.name}</span>
              <span className={styles.count}>{category.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
