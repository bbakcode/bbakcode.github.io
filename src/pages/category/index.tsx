import { Page } from "@components/page";
import { PageProps } from "gatsby";
import React from "react";

interface CateogryPageProps extends Omit<PageProps, "data"> {
  data: {
    post: PostItem;
  };
}
//let cx = classNames.bind(styles);
const CateogryPage: React.FC<CateogryPageProps> = (props) => {
  const { data } = props;
  return <Page nav={[{ name: "🗂  카테고리", path: "/category" }]}></Page>;
};

export default CateogryPage;
