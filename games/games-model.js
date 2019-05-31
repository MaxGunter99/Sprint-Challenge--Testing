
//IMPORTS ⬇︎
const db = require("../data/dbConfig");

//EXPORT FUNCTIONS ⬇︎
module.exports = {
  add,
  remove,
  getAll,
};

//ADD ⬇︎
async function add( game ) {
  const [id] = await db( "games" ).insert( game , "id" );

  return db( "games" )
    .where({ id })
    .first();
}

//REMOVE ⬇︎
function remove(id) {
  return db( "games" )
  .where( "id" , Number(id) )
  .del()
}

//GET ALL ⬇︎
function getAll() {
  return db( "games" );
}