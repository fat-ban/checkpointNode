var fs = require('fs')
var path = require('path')
var folder = process.argv[2]
var ext = '.'+ process.argv[3]
console.log(folder,ext)
fs.readdir(folder, function(err,files){
    if(err) return console.error(err)
    
    files.forEach(function(file){
        if (path.extname(file)=== ext){
            console.log(file)
        }
    })
})