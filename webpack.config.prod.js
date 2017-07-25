require('ts-node').register({
    project: './tsconfig.tsnode.json'
});

module.exports = require('./webpack.config.prod.ts').default;