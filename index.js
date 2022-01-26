const http = require('http');
const sum = require('./sum');

const server = http.createServer((req, res) => {
    try {
        const a = 2;
        const b = 3;
        res.writeHead(200, {'Content-Type': 'application/json'});
        const message = "Sum of a and b is ";
        console.log(message, sum(a, b));
        res.end(JSON.stringify(sum(a, b),message));
    }
    catch (err) {
        console.error("There is some error in Executing sum method",err);
    }
});

server.listen(3002,()=>{
    console.log('listening on http://localhost/3002 port')
})