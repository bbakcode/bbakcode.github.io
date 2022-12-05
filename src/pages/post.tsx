import { Page } from "@components/page";
import Post from "@components/post";
import { graphql, PageProps } from "gatsby";
import React from "react";

interface PostPageProps extends Omit<PageProps, "data"> {
  data: {
    post: PostItem;
  };
}
//let cx = classNames.bind(styles);
const PostPage: React.FC<PostPageProps> = (props) => {
  const { data } = props;
  const nav = data.post.fields.nav;

  return (
    <Page nav={nav}>
      <Post {...data.post} />
    </Page>
  );
};

export default PostPage;

export const postPageQuery = graphql`
  query PostPage($postId: String) {
    post: mdx(id: { eq: $postId }) {
      id
      body
      tableOfContents(maxDepth: 2)
      frontmatter {
        title
        tags
        assets {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      fields {
        slug
        nav {
          name
          path
        }
      }
    }
  }
`;
