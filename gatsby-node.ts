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
        }
      }
    `
  );

  if (query.errors) {
    throw query.errors;
  }

  const posts = query.data?.allMdx.posts;
  posts?.forEach((post) => {
    createPage({
      path: post.fields.slug,
      component: PostComponent,
      context: {
        postId: post.id,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }: CreateNodeArgs) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const filePath = createFilePath({ node, getNode });
    const frontmatter: any = node.frontmatter;
    createNodeField({
      name: `slug`,
      node,
      value: `/post${filePath}`,
    });
    createNodeField({
      name: `nav`,
      node,
      value: [
        { path: "/category", name: "카테고리" },
        {
          path: `/category/${frontmatter.category}/`,
          name: frontmatter.category,
        },
        {
          path: `/post${filePath}`,
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
