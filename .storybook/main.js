const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  "core": {
    builder: "webpack5"
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions"
  ],
  "framework": "@storybook/react",
  webpackFinal: async function (config) {
    config.resolve = {
      ...config.resolve,
      mainFields: ["browser", "module", "main"]
    };

    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby|gatsby-script)\/)/]
    // Remove core-js to prevent issues with Storybook
    config.module.rules[0].exclude = [/core-js/];
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve("babel-plugin-remove-graphql-queries")
    );

    config.module.rules.push({
      test: /\.m?(j|t)sx?$/,
      // Excluding node_modules means that core-js will not be compiled
      exclude: /node_modules/,
      use: ["babel-loader"]
    });

    return config;
  }
}
