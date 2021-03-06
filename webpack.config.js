const path = require('path');

const config = {
    entry : './server.js',
    output : {
        path : path.resolve(__dirname, './dist'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /(node_modules)/,
                use : ['babel-loader']
            }
        ]
    }
}

module.exports = config;
