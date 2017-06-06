const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req,res) => {
    if(path.parse(req.url).name !== 'favicon') {
        res.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": "http://localhost:63342"});
        fs.createReadStream('./nn.json').pipe(res);
    }

});
server.listen(3001,() => {
    console.log('正在监听');
});
server.on('error',(e) => {
    console.log(e.message);
});
