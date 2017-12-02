
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', table => {
    table.increments('id');
    table.string('cohort');
    table.text('members');
    table.string('picture_path');
    table.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cohorts');
};
