const path = require('path');
const express = require('express');
const { engine } = require ('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'assets')));
app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//routes init
route(app);

app.listen(port, () =>  console.log(`Example app listening at http://localhost:${port}`))