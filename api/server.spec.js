
//IMPORTS ⬇︎
const request = require( 'supertest' );
const server = require( './server' );
const db = require( '../data/dbConfig' );

//CLEANUP ⬇︎
beforeEach( async () => {

    await db('games').truncate();

});

//HOMEPAGE TEST ⬇︎
describe( 'Server.js' , () => {

    it("should set the testing env", () => {
        expect( process.env.DB_ENV || 'development' ).toBe( 'testing' );
    });

    it( 'Should return status code 200' , async () => {

        const res = await request( server ).get( '/' )
        expect( res.status ).toBe( 200 )

    });

    it("should return JSON", async () => {

        const res = await request( server ).get( '/' );
        expect( res.type ).toBe( 'application/json' );

    });

    it( 'Should return { message: "... Loading Arcade ..." }' , async () => {

        const res = await request( server ).get( '/' );
        expect( res.body ).toEqual({ message: '... Loading Arcade ...' });

    });

    it( 'should return list of games in JSON format', async () => {

        const res = await request( server ).get( '/games' );
        expect( res.type ).toBe( 'application/json' )

    });

});

//DELETE GAME ⬇︎
describe('DELETE game', () => {
    it('should remove a Game', async () => {

        await db( 'games' ).insert({
            name: 'Tron',
            type: 'Sci-Fi'
        });
        const res = await request(server).del( '/games/1' );
        expect( res.status ).toBe( 200 )

    })
});