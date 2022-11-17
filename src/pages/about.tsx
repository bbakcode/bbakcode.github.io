import { Page } from "@components/page";
import { PageProps } from "gatsby";
import React from "react";

interface AboutPageProps extends Omit<PageProps, "data"> {
  data: {
    post: PostItem;
  };
}
//let cx = classNames.bind(styles);
const AboutPage: React.FC<AboutPageProps> = (props) => {
  const { data } = props;
  return <Page nav={[{ name: "🧑‍💻 빡코드", path: "/about" }]}></Page>;
};

export default AboutPage;
