const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const common = require("./webpack.common");
const package = require("../package.json");
const domain = process.env.PRODUCTION_DOMAIN;

const prod = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        publicPath: "/container/latest/",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
            },
            shared: package.dependencies,
        }),
    ],
};
module.exports = merge(common, prod);
