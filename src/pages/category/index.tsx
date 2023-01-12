import { Page } from "@components/page";
import { graphql, HeadFC, PageProps } from "gatsby";
import React from "react";
import { CategoryList } from "@components/list";
import { Seo } from "@components/seo";

interface CategoryPageProps extends Omit<PageProps, "data"> {
  data: {
    allMdx: {
      categories: CategoryItem[];
    };
  };
}
//let cx = classNames.bind(styles);
const CategoryPage: React.FC<CategoryPageProps> = (props) => {
  const { data } = props;
  return (
    <Page nav={[{ name: "🗂  카테고리", path: "/category" }]}>
      <CategoryList categories={data.allMdx.categories} />
    </Page>
  );
};

export const categoryPageQuery = graphql`
  query CategoryPage {
    allMdx {
      categories: group(field: fields___category) {
        name: fieldValue
        count: totalCount
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo />;

export default CategoryPage;
