import { Image } from "@components/image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
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
    <div className={styles.root}>
      <div className={styles.post}>
        <Image image={thumbnail} />
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
      <div className={styles.post_nav}>
        <div className={styles.nav}>
          {tableOfContents.items.map((x, xIndex) => (
            <ul key={`${x.title}_${xIndex}`}>
              <div>{x.title}</div>
              {x.items.map((y, yIndex) => (
                <ul key={`${y.title}_${yIndex}`}>
                  <div>{y.title}</div>
                </ul>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
