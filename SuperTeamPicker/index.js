const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/home', (request, response) => {
  response.render('home');
});

app.get('/', (request, response) => {
  response.redirect('home');
});

app.get('/contact_us', (request, response) => {
  response.render('contactUs');
});

app.post('/contact_us', (request, response) => {
  const body = request.body;
  const fullName = body.fullName;
  const message = body.message;

  response.render('thankYou', {fullName: fullName, message: message});
});

const teamsRouter = require('./routes/cohorts');
app.use('/cohorts', teamsRouter);

var time = new Date();

const DOMAIN = 'localhost';
const PORT = '7000';
app.listen(PORT, DOMAIN, () => {
console.log(`💻 Updated at: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ---» Server 'Team Picker' listenning on http://${DOMAIN}:${PORT}`);
});






// bump
