// next.config.js
//const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const withSass = require('@zeit/next-sass');

module.exports = withSass({
  target: "serverless",
  env: {
    STAGE: process.env.stage || 'local'
  },
  // webpack: (config, options) => {
  //   if (config.resolve.plugins) {
  //     config.resolve.plugins.push(new TsconfigPathsPlugin());
  //   } else {
  //     config.resolve.plugins = [new TsconfigPathsPlugin()];
  //   }
  //   return config;
  // }
});
