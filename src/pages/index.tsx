import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { Page } from "@components/page";
import { PostList } from "@components/list";

interface HomePageProps extends Omit<PageProps, "data" | "pageContext"> {
  data: {
    allMdx: {
      posts: PostItem[];
    };
  };
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const { data } = props;

  return (
    <Page nav={[{ name: "🏠  홈", path: "/" }]}>
      <PostList posts={data.allMdx?.posts} />
    </Page>
  );
};

export default HomePage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const homePageQuery = graphql`
  query homePageQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      posts: nodes {
        excerpt(pruneLength: 140)
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          assets {
            childImageSharp {
              gatsbyImageData #16/5
            }
          }
        }
        fields {
          slug
        }
        id
      }
    }
  }
`;
