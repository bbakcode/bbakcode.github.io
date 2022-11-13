declare module "*.scss";

interface PageQuery {
  allMdx: AllMdx;
}

interface AllMdx {
  posts: PostItem[];
}

interface PostItem {
  id: string;
  tableOfContents: TableOfContents;
  frontmatter: Frontmatter;
  fields: Fields;
}

interface NavItem {
  name: string;
  path: string;
}
interface Fields {
  slug: string;
  nav: NavItem[];
}

interface Frontmatter {
  title: string;
  tags: null;
  assets: Array<Asset | null>;
}

interface Asset {
  childImageSharp: ChildImageSharp;
}
interface TableOfContents {
  items: TableOfContentsItem[];
}

interface TableOfContentsItem {
  url: string;
  title: string;
  items: ItemItem[];
}

interface ItemItem {
  url: string;
  title: string;
}
