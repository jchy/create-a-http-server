const http = require('http');
// const sum = require('./sum');

const server = http.createServer((req, res) => {
    try {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const message = "Sum of a and b is ";
        res.end(JSON.stringify({"data":"Hello World"}));
    }
    catch (err) {
        console.error("There is some error in Executing sum method",err);
    }
});

server.listen(3002,()=>{
    console.log('listening on http://localhost/3002 port')
})