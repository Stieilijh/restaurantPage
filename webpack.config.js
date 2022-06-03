const path = require("path")

module.exports = {
    mode:'production',
    entry:{
        index:path.resolve(__dirname,"src/index.js")
    },
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist"),
    }
,
devtool: 'inline-source-map',
module: {
    rules: [
    {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    },
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader:"file-loader",
        options:{
            name:"images/[name].[ext]"
        }
    },
    ],
},

}