import * as path from 'path';
import * as webpack from 'webpack';
import * as autoprefixer from 'autoprefixer';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const rootPath = path.resolve(__dirname, "src");
const root = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'static/');

const configProd: webpack.Configuration = {
    context: path.join(__dirname, "src"),
    entry: {
        bundle: path.resolve(root, 'TodoApp.tsx'),
        style: path.resolve(root, 'assets/scss/style.scss'),
    },
    output: {
        path: outputPath,
        filename: "[name].js",
    },
    devtool: "#source-map",

    resolve:{
        extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader!sass-loader' })
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(svg)|(png)|(jpg)|(gif)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            },
            {
                test: /\.(php)$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    watch: true,
    plugins: [
        /*new HtmlWebpackPlugin({
            template: path.resolve(rootPath, './index.html')
        }),*/
        new ExtractTextPlugin({ filename: './[name].css', disable: false, allChunks: true }),
        new CopyWebpackPlugin([
            { from: 'assets/images', to: 'images/' }
        ])
    ]
};

export default configProd;