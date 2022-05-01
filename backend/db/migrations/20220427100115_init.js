/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users',(table)=>{
      table.increments();
      table.string('twitterId').notNullable().unique();
      table.string('firstName').notNullable();
      table.string('lastName').notNullable();
      table.string('email').notNullable().unique();
      table.string('description').notNullable();
      table.string('handle').notNullable().unique();
      table.string('password').notNullable();
  })
  .createTable('tweets', (table)=>{
    table.increments();
    table.string('tweetId').notNullable().unique()
    table.string('text').notNullable()
    table.string('twitterId').references('twitterId').inTable('users')
    table.timestamps(true,true)
  })
  .createTable('followers', (table)=>{
    table.increments();
    table.string('user').references('handle').inTable('users')
    table.string('following').notNullable()
    table.timestamps(true,true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropSchemaIfExists('users').dropSchemaIfExists('tweets').dropSchemaIfExists('followers')
};
