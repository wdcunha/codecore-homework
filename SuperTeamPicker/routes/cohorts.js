const path = require('path');
const multer = require('multer');
const express = require('express');
const router = express.Router();
const knex = require('../db');

const UPLOADS_DIR = 'uploads';
const upload = multer({dest: path.join(__dirname, '..', 'public', UPLOADS_DIR)});

// PATH: /cohorts/new VERB: GET Serves form for creating cohorts
router.get('/new', (request, response) => {
  // response.send('TEST POSTS NEW')
  response.render('cohorts/new');
});

// localhost:7000/cohorts/:id
router.get('/:id', (request, response) => {
  const id = request.params.id;
  knex
    .first()
    .from('cohorts')
    .where({id})  //{id} === {id: id}
    .then(member => {
      response.render('cohorts/show',{member});
    })
    .catch(error => response.send(error));
});

// PATH: /cohorts VERB: POST Creating new cohorts
router.post('/', upload.single('picture'), (request, response) => {
  const name = request.body.name;
  const members = request.body.members;

  const filename = request.file.filename;
  const logo_url = path.join(UPLOADS_DIR, filename);

  knex
    .insert({name, members, logo_url})
    .into('cohorts')
    .returning('id')
    .then(result => response.redirect('/cohorts'))
    .catch(error => response.send(error));
});

// PATH: /cohorts VERB: GET List all the cohorts
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
