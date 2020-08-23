// next.config.js
//const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const withSass = require("@zeit/next-sass");

module.exports = withSass({
  target: "serverless",
  env: {
    STAGE: process.env.stage || "local",
    AWS_COGNITO_IDENTITY_POOL_ID: process.env.aws_cognito_identity_pool_id || "",
    AWS_COGNITO_REGION: process.env.aws_cognito_region || "ap-northeast-2",
    AWS_USER_POOLS_ID: process.env.aws_user_pools_id || "",
    AWS_USER_POOLS_WEB_CLIENT_ID: process.env.aws_user_pools_web_client_id || "",
    // OAUTH: JSON.parse(process.env.oauth),
    FEDERATION_TARGET: process.env.federationTarget,
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
