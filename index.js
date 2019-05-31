
//IMPORTS ⬇︎
require( 'dotenv' ).config();
const server = require( './api/server' );

//PORT SETUP ⬇︎
const PORT = 4242;
server.listen( PORT , () => {
    console.log( `\n● Games are on http://localhost:${PORT} ●\n` )
})