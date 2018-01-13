
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', table => {
    table.increments('id');
    table.string('name');
    table.text('members');
    table.string('logo_url');
    table.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cohorts');
};
