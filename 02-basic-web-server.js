const http = require('http');
const server = http.createServer((req,res)=>
{
    res.write("hello node11");
    res.write("hello world");
    res.write("hello");
    res.write("hello t");
    res.end();
});


server.on("request",(req,res)=>
{
    console.log("received a request");
});
server.on("error",(err)=>
{
    console.log(err.message);
});
server.listen(3001);