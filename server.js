const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) =>  response.sendFile(`${__dirname}/log-in.html`));
app.get('/', (request, response) =>  response.sendFile(`${__dirname}/sign-up.html`));

app.post('https://api.netalem.tn/users', (request, response) => {
  const postBody = request.body;
  response.send();
  console.log(postBody);
});



app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
  });
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(3000, () => console.info('Application running on port 3000'));
