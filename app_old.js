const http = require('http');

http.createServer( (req, res) => {



        res.write('Hola mundo' );
        res.end();

})
.listen( 8080 );

console.log('Escucha el puerto:', 8080 );