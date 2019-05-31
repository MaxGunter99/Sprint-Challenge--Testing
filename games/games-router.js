
//IMPORTS ⬇︎
const express = require( 'express' );
const router = express();
const games = require( './games-model' );


//GET ALL GAMES ⬇︎
router.get( '/' , async ( req , res ) => {
    const rows = await games.getAll();
    res.status( 200 ).json( rows );
});

//ADD ROUTE ⬇︎
router.post( '/' , ( req , res ) => {
    games.add( req.body )
    res.status( 201 ).json({ game: req.body })
});

//DELETE ROUTE ⬇︎
router.delete('/:id', async ( req, res )  => {
    const { id } = req.params;
    const individual = await games.remove( id ).then( individual => {
        res.status( 200 ).json({ gameId: individual })
    });
    {
        res.status( 404 ).end({ message: 'Game Not Found'})
    } res.json( individual );
});

//EXPORTS ⬇︎
module.exports = router;