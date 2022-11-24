declare module "*.scss";

interface PageQuery {
  allMdx: AllMdx;
}

interface AllMdx {
  posts: PostItem[];
  categories: CategoryItem[];
  tags: TagItem[];
}

interface CategoryItem {
  name: string;
  count?: string;
}

interface TagItem {
  name: string;
  count?: string;
}

interface PostItem {
  id: string;
  excerpt: string;
  frontmatter: Frontmatter;
  tableOfContents: TableOfContents;
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
  assets: AssetItem[] | null;
}

interface AssetItem {
  childImageSharp: ChildImageSharp;
}
interface TableOfContents {
  items: TableOfContentsItem[];
}

interface TableOfContentsItem {
  url: string;
  title: string;
  items: {
    url: string;
    title: string;
  }[];
}
