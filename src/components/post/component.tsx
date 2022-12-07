import { MDXProviderComponentsProp } from "@mdx-js/react";
import React from "react";
import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import { vscDarkPlus as style } from "react-syntax-highlighter/dist/cjs/styles/prism";
import * as styles from "./component.module.scss";
interface HeaderProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, ""> {}

const Header = (as: string) => (props: HeaderProps) => {
  const { children } = props;

  const id = (children as string)
    .toLocaleLowerCase()
    .replace(/\s/gi, "-")
    .replaceAll(/…|\.|\?/gi, "");

  return React.createElement(as, {
    id,
    children,
    className: styles[as],
  });
};

interface CodeProps
  extends Omit<HTMLDivElement, "children" | "style">,
    SyntaxHighlighterProps {}

const Code: React.FC<CodeProps> = (props) => {
  const { className, ...defaultProps } = props;

  const language = className.replace(/language-(\w+)/, "$1");

  return (
    <div className={styles.code}>
      <div className={styles.language} data-format={language}>
        {language}
      </div>
      <Prism style={style} language={language} {...defaultProps} />
    </div>
  );
};

interface BlockquoteProps
  extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {}

const Blockquote: React.FC<BlockquoteProps> = (props) => {
  return <blockquote className={styles.blockquote} {...props} />;
};

interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {}

const Anchor: React.FC<AnchorProps> = (props) => {
  return <a className={styles.anchor} {...props} target="__blank" />;
};

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const Paragraph: React.FC<ParagraphProps> = (props) => {
  return <p className={styles.paragraph} {...props} />;
};

interface InlineCodeProps extends React.HTMLAttributes<any> {}

const InlineCode: React.FC<InlineCodeProps> = (props) => {
  return <code className={styles.inline_code} {...props} />;
};

interface HrProps extends React.HTMLAttributes<any> {}

const Hr: React.FC<HrProps> = (props) => {
  return <hr className={styles.hr} {...props} />;
};
interface OrderListProps extends React.HTMLAttributes<HTMLOListElement> {}

const OrderList: React.FC<OrderListProps> = (props) => {
  return <ol className={styles.ol} {...props} />;
};
interface UnOrderList extends React.HTMLAttributes<HTMLUListElement> {}

const UnOrderList: React.FC<UnOrderList> = (props) => {
  return <ul className={styles.ul} {...props} />;
};

export default {
  h1: Header("h1"),
  h2: Header("h2"),
  h3: Header("h3"),
  h4: Header("h4"),
  h5: Header("h5"),
  h6: Header("h6"),
  blockquote: Blockquote,
  code: Code,
  a: Anchor,
  p: Paragraph,
  inlineCode: InlineCode,
  hr: Hr,
  ol: OrderList,
  ul: UnOrderList,
} as MDXProviderComponentsProp;
