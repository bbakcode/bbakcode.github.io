import path from "path";

exports.onCreateWebpackConfig = function ({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@lib": path.resolve(__dirname, "src/lib"),
      },
    },
  });
};
