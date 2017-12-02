const express = require('express');
const router = express.Router();
const knex = require('../db');

// PATH: /posts/new VERB: GET Serves form for creating posts
router.get('/new', (request, response) => {
  // response.send('TEST POSTS NEW')
  response.render('cohorts/new');
});

// localhost:3002/posts/:id
router.get('/:id', (request, response) => {
  const id = request.params.id;
  knex
    .first()
    .from('cohorts')
    .where({id})  //{id} === {id: id}
    .then(post => {
      response.render('cohorts/show',{post});
    })
    .catch(error => response.send(error));
});

// PATH: /posts VERB: POST Creating new posts
router.post('/', (request, response) => {
  const cohort = request.body.cohort;
  const members = request.body.members;

  knex
    .insert({cohort, members})
    .into('cohorts')
    .returning('id')
    .then(result => response.redirect('/cohorts'))
    .catch(error => response.send(error));
});

// PATH: /posts VERB: GET List all the posts
router.get('/', (request, response) => {
  knex
    .select()
    .from('cohorts')
    .orderBy('created_at', 'DESC')
    .then(cohorts => {
      response.render('cohorts/index', {cohorts: cohorts});
    });
})

module.exports = router;
