import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { Page } from "@components/page";
import { PostList } from "@components/list";
import { Seo } from "@components/seo";

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
    <>
      <Page nav={[{ name: "🏠  홈", path: "/" }]}>
        <PostList posts={data.allMdx?.posts} />
      </Page>
    </>
  );
};

export default HomePage;

export const Head: HeadFC = () => <Seo />;

export const homePageQuery = graphql`
  query homePageQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      posts: nodes {
        frontmatter {
          tags
          title
          summary
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
