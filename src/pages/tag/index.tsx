import { Link } from "@components/link";
import { Page } from "@components/page";
import { graphql, PageProps } from "gatsby";
import React from "react";

interface TagPageProps extends Omit<PageProps, "data"> {
  data: {
    allMdx: {
      tags: TagItem[];
    };
  };
}
//let cx = classNames.bind(styles);
const TagPage: React.FC<TagPageProps> = (props) => {
  const { data } = props;
  return (
    <Page nav={[{ name: "🏷  태그", path: "/tag" }]}>
      {data?.allMdx?.tags?.map((tag) => (
        <div key={tag.name}>
          <Link to={`/tag/${tag.name}`}>
            {tag.name} {tag.count}
          </Link>
        </div>
      ))}
    </Page>
  );
};

export const tagPageQuery = graphql`
  query TagPage {
    allMdx {
      tags: group(field: frontmatter___tags) {
        name: fieldValue
        count: totalCount
      }
    }
  }
`;

export default TagPage;
