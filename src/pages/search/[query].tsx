import { PostList } from "@components/list";
import { Page } from "@components/page";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import React from "react";
// import styles from "./Search.module.scss";
//import classNames from "classnames/bind";

interface SearchPageProps extends PageProps {}

//let cx = classNames.bind(styles);
const SearchPage: React.FC<SearchPageProps> = (props) => {
  const {
    params: { query },
  } = props;

  const data = useStaticQuery(graphql`
    query searchPageQuery {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        posts: nodes {
          id
          frontmatter {
            tags
            title
            summary
            assets {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          fields {
            slug
            category
          }
        }
      }
    }
  `);

  const filteredPost = data.allMdx.posts.filter((post: PostItem) => {
    const { tags, title } = post.frontmatter;
    const summary = post.frontmatter.summary;

    return (
      title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      summary.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      (tags && tags.join("").toLocaleLowerCase().includes(query))
    );
  });

  return (
    <Page
      nav={[
        { name: "🏠  홈", path: "/" },
        { name: `🔍 ${query}`, path: `/search/${query}/` },
      ]}
    >
      <PostList posts={filteredPost} />
    </Page>
  );
};

export default SearchPage;
