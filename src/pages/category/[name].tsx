import { Page } from "@components/page";
import { PageProps } from "gatsby";
import React from "react";

interface CateogryPageProps extends Omit<PageProps, "data"> {
  data: {};
}
//let cx = classNames.bind(styles);
const CateogryPage: React.FC<CateogryPageProps> = (props) => {
  const { data, path, params } = props;
  return (
    <Page
      nav={[
        { name: "🗂  카테고리", path: `/category` },
        { name: params.name, path: `/category/${params.name}/` },
      ]}
    ></Page>
  );
};

export default CateogryPage;
