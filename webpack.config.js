const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = { //Iniciando la configuración
    entry: './src/index.js',// Cual es el punto de entrada de la app
    output: { // Indicar donde estan los archivos que tiene que cargar. En webpack ya esta la carpeta dist
        path: path.resolve(__dirname, 'dist'), //NOs permite saber donde se encuentra el directorio y usarlo. Usamos la carpeta "dist"
        filename: 'main.js', //Resultante de JS, donde se ejecuta y muestra ya todo.
    },
    resolve: { // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.png/,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            inject: true, 
            template: './public/index.html', 
            filename: './index.html' 
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images",
                }
            ]
        })
    ]
}   