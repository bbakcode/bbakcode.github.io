import path from "path";
import {
  CreateWebpackConfigArgs,
  CreatePagesArgs,
  CreateSchemaCustomizationArgs,
  CreateNodeArgs,
} from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";

exports.onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@lib": path.resolve(__dirname, "src/lib"),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;

  const PostComponent = path.resolve("./src/pages/post.tsx");
  const TagComponent = path.resolve("./src/pages/tag/[name].tsx");
  const CategoryComponent = path.resolve("./src/pages/category/[name].tsx");

  const query = await graphql<PageQuery>(
    `
      {
        allMdx(sort: { fields: frontmatter___date, order: ASC }) {
          posts: nodes {
            id
            fields {
              slug
            }
          }
          categories: group(field: fields___category) {
            name: fieldValue
          }
          tags: group(field: frontmatter___tags) {
            name: fieldValue
          }
        }
      }
    `
  );

  if (query.errors) {
    throw query.errors;
  }

  const posts = query.data?.allMdx.posts;
  const tags = query.data?.allMdx.tags;
  const categories = query.data?.allMdx.categories;

  posts?.forEach((post) => {
    createPage({
      path: post.fields.slug,
      component: PostComponent,
      context: {
        postId: post.id,
      },
    });
  });

  categories?.forEach((category) => {
    createPage({
      path: `/category/${category.name}/`,
      component: CategoryComponent,
      context: {
        name: category.name,
      },
    });
  });

  tags?.forEach((tag) => {
    createPage({
      path: `/tag/${tag.name}/`,
      component: TagComponent,
      context: {
        name: tag.name,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }: CreateNodeArgs) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const filePath = createFilePath({ node, getNode });
    const [category, post_name] = filePath.split("/").filter((val) => val);
    console.log(category, post_name);
    const frontmatter: any = node.frontmatter;
    createNodeField({
      name: `category`,
      node,
      value: category,
    });
    createNodeField({
      name: `slug`,
      node,
      value: `/post/${post_name}/`,
    });
    createNodeField({
      name: `nav`,
      node,
      value: [
        { path: "/category", name: "🗂  카테고리" },
        {
          path: `/category/${category}/`,
          name: category,
        },
        {
          path: `/post/${post_name}/`,
          name: frontmatter.title,
        },
      ],
    });
  }
};

exports.createSchemaCustomization = ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions;

  const typeDefs = `
    type Frontmatter {
      assets: [File] @fileByRelativePath
      tags:[String!]
    }

    type Nav {
      path: String
      name: String
    }

    type Fields {
      category: String
      slug: String
      nav: [Nav]
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
  `;

  createTypes(typeDefs);
};
