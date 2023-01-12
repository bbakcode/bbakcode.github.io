import { graphql, useStaticQuery } from "gatsby";
import React from "react";
// import styles from "./Seo.module.scss";
//import classNames from "classnames/bind";

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  children?: React.ReactNode;
}

//let cx = classNames.bind(styles);
const Seo: React.FC<SeoProps> = ({
  title,
  description,
  image,
  pathname,
  children,
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `);

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = data.site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {image && <meta name="image" content={seo.image} />}

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {image && <meta property="og:image" content={seo.image} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="bbakcode 블로그" />

      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {image && <meta name="twitter:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />

      {children}
    </>
  );
};

export default Seo;
