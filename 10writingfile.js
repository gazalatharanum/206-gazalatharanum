const fs =require('fs');
const path =require('path');
const content =`
<!doctype html>
<html>
<head>
<title>hello fs module</title>
</head>
<body>
<h1>hello fs module</h1>
</body>
</html>
;`
fs.writeFile(path.join(__dirname,'..','hello,html'),content,{encoding:'utf-8'
},(err) =>{
    console.log('filehs been created')
}
);
console.log('last');