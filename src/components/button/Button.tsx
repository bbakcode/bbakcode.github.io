import React from "react";
import * as styles from "./Button.module.scss";
import classNames from "classnames/bind";

interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, ""> {
  center?: boolean;
}

let cx = classNames.bind(styles);
const Button: React.FC<ButtonProps> = (props) => {
  const { center, className, ...defaultProps } = props;
  return (
    <button
      className={cx(styles.root, { [styles.center]: center }, className)}
      {...defaultProps}
    ></button>
  );
};

export default Button;
