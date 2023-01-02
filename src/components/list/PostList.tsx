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
        <div key={post.id}>
          <div className={styles.post}>
            <Link to={post.fields.slug} className={styles.link}>
              <div className={styles.cover}>
                <div className={styles.ratio}></div>
                {post.frontmatter.assets && (
                  <Image
                    className={styles.thumbnail}
                    image={post.frontmatter.assets[0].childImageSharp}
                  />
                )}
              </div>
              <div className={styles.title}>{post.frontmatter.title}</div>
              <div className={styles.summary}>{post.frontmatter.summary}</div>
            </Link>
            <div className={styles.tag_list}>
              {post.frontmatter.tags?.map((tag) => {
                return (
                  <Link key={tag} to={`/tag/${tag}`} className={styles.tag}>
                    {tag}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
