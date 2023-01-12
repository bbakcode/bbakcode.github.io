import { Page } from "@components/page";
import Post from "@components/post";
import { Seo } from "@components/seo";
import { graphql, HeadFC, PageProps } from "gatsby";
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

interface HeadProps extends Omit<HeadFC, "data"> {
  data: {
    post: PostItem;
  };
}

export const Head = (props: HeadProps) => {
  const post = props.data.post;
  const title = post.frontmatter?.title;
  const description = post.frontmatter.summary;
  const image =
    post.frontmatter.assets?.[0].childImageSharp?.gatsbyImageData?.images
      ?.fallback?.src;
  const pathname = post.fields.nav[post.fields.nav.length - 1].path;
  return (
    <Seo
      title={title}
      image={image}
      description={description}
      pathname={pathname}
    />
  );
};

export const postPageQuery = graphql`
  query PostPage($postId: String) {
    post: mdx(id: { eq: $postId }) {
      id
      body
      tableOfContents(maxDepth: 2)
      frontmatter {
        title
        summary
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
