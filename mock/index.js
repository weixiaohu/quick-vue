const aboutApi = require('./about.js');
const express = require('express');
const mockPort = require('../config/port').mockPort;

const app = express();

function deploy(apiObj) {
    for (let api in apiObj) {
        let obj = apiObj[api];
        let url = obj.url;
        let handel = (req, res, next) => {
            res.json(obj.res);
        }

        app.use(url, handel);
    }
}

deploy(aboutApi);

app.listen(mockPort, () => {
    console.log(`mock server is listening at port:${mockPort}`);
})