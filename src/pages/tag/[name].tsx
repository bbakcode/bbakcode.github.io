import { Page } from "@components/page";
import { graphql, Link, PageProps } from "gatsby";
import React from "react";

interface TagPageProps extends Omit<PageProps, "data" | "pageContext"> {
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
const TagPage: React.FC<TagPageProps> = (props) => {
  const { data, pageContext } = props;

  return (
    <Page
      nav={[
        { name: "🏷  태그", path: `/tag` },
        { name: pageContext.name, path: `/tag/${pageContext.name}/` },
      ]}
    >
      {data.allMdx?.posts?.map((post) => (
        <div key={post.id}>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </div>
      ))}
    </Page>
  );
};

export const tagPageQuery = graphql`
  query tagPageQueryForName($name: [String] = "") {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: $name } } }
    ) {
      posts: nodes {
        excerpt(pruneLength: 140)
        frontmatter {
          title
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

export default TagPage;
