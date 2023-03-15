
const http = require('http');
//request req y response res
http.createServer( (req, res)=>{
    // res.writeHead(200, { 'content-type': 'text/plain'});
    //  res.writeHead(200, { 'content-type': 'application/json'});
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    //  res.writeHead(200, { 'content-type': 'application/csv'});


    // res.write( JSON.stringify( persona ) );
    res.write( 'Hola Mundo' );
    res.end();
})
.listen( 8080 )

console.log('Escuchando el puerto ', 8080);