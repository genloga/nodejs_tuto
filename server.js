/* Pour mettre en place un ecouteur */
var eventEmitter = require('events')
var monEcouteur = new eventEmitter()

// monEcouteur.once comme methode permet 
// de lancer la fonction une seule fois
// malgré le nombre de fois qu'il emet un 
// evenement
monEcouteur.on('saute', (a, b) => {
  console.log('Corde a saute he he', a, b)
})

monEcouteur.emit('saute', 10, 20)


/* var http = require('http');
var fs = require('fs')
var url = require('url')

var server = http.createServer();
server.on('request', (req, res) => {
     fs.readFile('pages/index.html','UTF-8', (err , data) => {
    if (err){
	res.write('Erreur :'+err)
 	res.end()
    } else {
	res.writeHead(200, (request, response) => {
       response.writeHead({
	'Content-Type': 'text/html'	
	})
     })
    var query = url.parse(req.url, true).query
    var nom = query.name === undefined ? 'anonyme' : query.name
    var data = data.replace('{{ name }}' , nom)
    res.end(data)
    }
  })
})
server.listen(8080) */
