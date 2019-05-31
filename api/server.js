
//IMPORTS ⬇︎
const express = require( 'express' );
const server = express();
const morgan = require( 'morgan' );
const gamesRouter = require( '../games/games-router' );

//MIDDLEWARE ⬇︎
server.use( express.json());
server.use( morgan( 'dev' ));

//ROUTES ⬇︎
server.use( '/games' , gamesRouter );

//SANITY CHECK ⬇︎
server.get( '/' , ( req , res ) => {
    res.status( 200 ).json({ message: '... Loading Arcade ...' });
});

//EXPORTS ⬇︎
module.exports = server;
