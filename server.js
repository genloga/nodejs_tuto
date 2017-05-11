var http = require('http');
var server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('Je s\'appelle #Groot :-) ')
    res.end()
})
server.listen(8080)
