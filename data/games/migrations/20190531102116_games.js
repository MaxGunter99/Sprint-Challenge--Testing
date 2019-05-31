
//TABLE SETUPS ⬇︎
exports.up = function(knex, Promise) {
    return knex.schema.createTable( 'games' , arcade => {
        arcade.increments();
        arcade
            .string( 'name' , 128 )
            .notNullable();
        arcade.string( 'type' , 128 );
        arcade.timestamps( true , true );
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists( 'games' );
};
