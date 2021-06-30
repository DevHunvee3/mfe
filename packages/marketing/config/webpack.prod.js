const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const common = require("./webpack.common");
const package = require("../package.json");

const prod = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: {
                "./App": "./src/bootstrap.js",
            },
            shared: package.dependencies,
        }),
    ],
};
module.exports = merge(common, prod);
