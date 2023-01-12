import { TagList } from "@components/list";
import { Page } from "@components/page";
import { Seo } from "@components/seo";
import { graphql, HeadFC, PageProps } from "gatsby";
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
      <TagList tags={data.allMdx.tags} />
    </Page>
  );
};

export const Head: HeadFC = () => <Seo />;

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
