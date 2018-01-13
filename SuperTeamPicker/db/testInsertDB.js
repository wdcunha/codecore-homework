const knex = require('./index')
const log = console.log

const insertQuery = knex
  .insert({cohort: 'Third Cohort Test', members: 'Member1,Member2,Member3,Member4,Member5'})
  .into('cohorts')
  .returning('*');
log('Running Team Peacker...');

log(insertQuery.toString());

// to send to postgres
insertQuery
  .then(result => log(result))
  .then(() => log(allRegistersQuery.toString()))
  .then(() => allRegistersQuery.then(result => log(result)));


  // List all registers
  const allRegistersQuery = knex
    .select()
    .from('cohorts');
