const http = require('http');
const url =require('url')
const server = http.createServer((req,res)=>
{
    const urlParts = url.parse(req.url,true);
    console.log(urlParts);
    const word =urlParts.pathname.substring(1);
    
    let formattedWord;
    if (urlParts.query.format ==='upper')
    {
        formattedWord = word.toUpperCase();
    }
    else if(urlParts.query.format ==='lower')
    {
        formattedWord = word.toLowerCase();
    }else
    {
        formattedWord =word;
    }
    let date =new Date().toDateString();
    res.write(date);
    res.write(formattedWord +'chrome');


        
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