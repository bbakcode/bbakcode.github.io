import { Image } from "@components/image";
import { Link } from "@components/link";
import React from "react";
import * as styles from "./PostList.module.scss";
//import classNames from "classnames/bind";

interface PostListProps extends Omit<React.HTMLAttributes<HTMLDivElement>, ""> {
  posts: PostItem[];
}

//let cx = classNames.bind(styles);
const PostList: React.FC<PostListProps> = (props) => {
  const { posts } = props;

  return (
    <div className={styles.root}>
      {posts.map((post) => (
        <Link key={post.id} to={post.fields.slug} className={styles.post}>
          <div className={styles.left}>
            <div className={styles.image_wrapper}>
              {post.frontmatter.assets && (
                <Image
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                  }}
                  image={post.frontmatter.assets[0].childImageSharp}
                />
              )}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>{post.frontmatter.title}</div>
            <div className={styles.excerpt}>{post.excerpt}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
