const path = require("path")

module.exports = {
    mode:'development',
    entry:{
        index:path.resolve(__dirname,"src/index.js")
    },
    output:{
        filename:"man.js",
        path:path.resolve(__dirname,"dist")
    }
}