import { Image } from "@components/image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { Fragment, useCallback } from "react";
import * as styles from "./Post.module.scss";
import components from "./component";
//import classNames from "classnames/bind";

interface PostProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "id">,
    PostItem {}

//let cx = classNames.bind(styles);
const Post: React.FC<PostProps> = (props) => {
  const { frontmatter, body, tableOfContents } = props;

  const thumbnail = frontmatter.assets?.[0].childImageSharp;

  return (
    <>
      {thumbnail && (
        <div className={styles.cover}>
          <div className={styles.ratio}></div>
          <Image className={styles.thumbnail} image={thumbnail} />
        </div>
      )}
      <div className={styles.content}>
        <article className={styles.article}>
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </article>
        <aside className={styles.aside}>
          <ul className={styles.list}>
            {tableOfContents.items.map((x, xIndex) => (
              <Fragment key={`${x.title}_${xIndex}`}>
                <li>
                  <a href={x.url}>{x.title}</a>
                </li>
                <ul>
                  {x.items?.map((y, yIndex) => (
                    <li key={`${y.title}_${yIndex}`}>
                      <a href={y.url}>{y.title}</a>
                    </li>
                  ))}
                </ul>
              </Fragment>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Post;
