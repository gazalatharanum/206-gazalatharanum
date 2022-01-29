const fs = require('fs')
fs.readFile('04-arithmetic.js',(err,contents)=>{
    if(err)
    {
        console.log(err.message);
        return;
    }
    console.log(contents);
});
fs.readFile(path.join(__dirname,'..','reference-nodejs-express.md'),'utf-8',(
    if ( err)
    {
        console.log(err.message);
        return;
    }
    console.log(contents);
});
console.log('last line script');