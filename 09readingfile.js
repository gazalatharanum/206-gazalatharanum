const fs = require('fs')
fs.readFile('04-arithmetic.js',(err,contents)=>{
    if(err)
    {
        console.log(err.message);
        return;
    }
    console.log(contents);
});
fs.readFile('04-arthmetic-demo.js','utf-8',err,contents =>{
    if(err)
    {
        console.log(err.message);
        return;
    }
    console.log(contents);
});
console.log('last line script');