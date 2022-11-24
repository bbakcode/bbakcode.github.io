import {
  GatsbyImage,
  GatsbyImageProps,
  getImage,
  IGatsbyImageData,
} from "gatsby-plugin-image";
import React from "react";

interface ImageProps extends Omit<GatsbyImageProps, "alt"> {
  alt?: string;
}

const Image: React.FC<ImageProps> = (props) => {
  const { image, alt = "이미지", ...defaultProps } = props;
  return (
    <GatsbyImage
      image={getImage(image) as IGatsbyImageData}
      alt={alt}
      {...defaultProps}
    />
  );
};

export default Image;
