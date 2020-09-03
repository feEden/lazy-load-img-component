const path = require('path');

module.exports = {
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(js|ts|tsx)?$/,
                loader: "eslint-loader",
                include: [path.resolve('src')],
                options: {
                    fix: true,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.(jpe?g|png|gif)/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "assets/[name][hash:8].[ext]",
                    },
                },
            },
            {
                test: /\.svg/,
                use: {
                    loader: "svg-inline-loader",
                },
            },
        ],
    },
};
