
//IMPORTS ⬇︎
const request = require("supertest");
const db = require( '../data/dbConfig' );
const server = require("../api/server");
const helper = require( './games-model' );

//CLEANUP ⬇︎
beforeEach( async () => {
    await db('games').truncate();
});

//ADD GAME ⬇︎
describe('POST Game', () => {
    it('Should return length of 1', async () => {

        const games = await helper.add({
            name: "Space Invaders",
            type: "Space"
        });
        expect( games.id ).toBe(1);

    });

    it('Should return 201 if successfully created', async () => {
        
        const res = await request( server ).post( '/games' , {
            name: "Space Invaders",
            type: "Space",
        })
        expect( res.status ).toBe(201)

    });

});