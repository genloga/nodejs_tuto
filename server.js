var http = require('http');
var fs = require('fs')
var server = http.createServer();

server.on('request', (req, res) => {
     fs.readFile('pages/index.html', (err , data) => {
    if (err){
	res.write('Erreur :'+err)
 	res.end()
    } else {
	res.writeHead(200, (request, response) => {
       response.writeHead({
	'Content-Type': 'text/html; charset=UTF-8'	
	})
     })
    res.end(data)
    }
  })
})
server.listen(8080)
