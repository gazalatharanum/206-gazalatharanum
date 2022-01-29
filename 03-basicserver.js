const http = require('http');
const server = http.createServer((req,res)=>
{
    res.write(req.url);
    const word =req.url.substring(1);
    res.write(word + 'chrome11');
    
        
    res.end();
});


server.on("listening",(req,res)=>
{
    console.log('server is running on http://localhost:3001/');
});
server.on("error",(err)=>
{
    console.log(err.message);
});
server.listen(3001);