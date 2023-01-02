import { PostList } from "@components/list";
import { Page } from "@components/page";
import { graphql, Link, PageProps } from "gatsby";
import React from "react";

interface CateogryPageProps extends Omit<PageProps, "data" | "pageContext"> {
  data: {
    allMdx: {
      posts: PostItem[];
    };
  };
  pageContext: {
    name: string;
  };
}
//let cx = classNames.bind(styles);
const CateogryPage: React.FC<CateogryPageProps> = (props) => {
  const { data, pageContext } = props;
  console.log(data);
  return (
    <Page
      nav={[
        { name: "🗂  카테고리", path: `/category` },
        { name: pageContext.name, path: `/category/${pageContext.name}/` },
      ]}
    >
      <PostList posts={data.allMdx?.posts} />
    </Page>
  );
};

export const categoryPageQuery = graphql`
  query categoryPageQuery($name: String = "") {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { category: { eq: $name } } }
    ) {
      posts: nodes {
        frontmatter {
          title
          summary
          tags
          date(formatString: "MMMM DD, YYYY")
          assets {
            childImageSharp {
              gatsbyImageData
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

export default CateogryPage;
