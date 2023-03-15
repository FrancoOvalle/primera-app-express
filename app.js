const express = require('express');
const app = express();
const port = 8080;

 //middleware

 //servir contenido estatico
 app.use( express.static( 'public' ));

app.get( '/hola-mundo',  (req, res) =>{
    res.send( 'Hola perra' )
});
app.get( '*',  (req, res) =>{
    res.sendFile( __dirname + '/public/404.html');
});
app.listen( port, () => {
    console.log( `Este ejemplo esta escuchando a http://localhost:${ port }` );
})