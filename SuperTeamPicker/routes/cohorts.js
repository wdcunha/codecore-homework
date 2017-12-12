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
  const members = request.query.members;
  // const namesArr = members.replace(/\s+/gi, '').split(',');
  const method = request.query.method;
  const quantity = request.query.quantity;

  function shuffleArray(array) {

      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * i);
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
  }

  function distributePlayers(names, numberOfTeams) {
      var ret = {};
      var teamCounter = 0;
      for (var i = 0; i < names.length; ++i) {
          if (!ret["Team" + (teamCounter + 1)]) {
              ret["Team" + (teamCounter + 1)] = [];
          }
          ret["Team" + (teamCounter + 1)].push(names[i]);
          if (++teamCounter == numberOfTeams) {
              teamCounter = 0;
          }
      }
      return ret;
  }
  let arrays = null;
if (method === 'teamCount') {
  let newarray =(shuffleArray(members.replace(/\s+/gi, '').split(',')));
  arrays = distributePlayers(newarray, quantity);
} else if (method === 'numberPerTeam') {
  let newarray =(shuffleArray(members.replace(/\s+/gi, '').split(',')));
  arrays = distributePlayers(newarray, quantity);
}

  // console.log(arrays);

  knex
    .first()
    .from('cohorts')
    .where({id})  //{id} === {id: id}
    .then(member => {
      response.render('cohorts/show',{arrays,member,method,members,quantity});
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
