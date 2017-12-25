var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')
var baseDirectory = __dirname
http.createServer((request, response)=>{
    var requestUrl = url.parse(request.url)
    var fsPath = baseDirectory+path.normalize(requestUrl.pathname)
    var fileStream = fs.createReadStream(fsPath)
    fileStream.pipe(response)
    fileStream.on('open', function() {
            response.writeHead(200)
    })
    fileStream.on('error',function(e) {
        response.writeHead(404)
        response.end()
   })
}).listen(8080)