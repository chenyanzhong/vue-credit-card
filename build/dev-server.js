console.log('hello');

import express from 'express';
import webpack from 'webpack';
import Vue from 'vue';

import webpackDevConfig from './webpack.dev.config';
import webpackMiddleware from 'webpack-dev-middleware';


var app = express();

var compiler = webpack(webpackDevConfig);
var devMiddleware = webpackMiddleware(compiler, {

})
app.use(devMiddleware);

const renderer = require('vue-server-renderer').createRenderer()
app.get('/', function (req, res) {
    res.send('hello world');

    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>The visited URL is: {{ url }}</div>`
    })

    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(`
          <!DOCTYPE html>
          <html lang="en">
            <head><title>Hello</title></head>
            <body>${html}</body>
          </html>
        `)
    })

});

app.get('/page', function (req, res) {

});

module.exports = app.listen(8080, function (err) {

});
