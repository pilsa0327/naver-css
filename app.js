
const express = require('express');
const path = require('path');
const app = express();


var indexRouter = require('./routes/index');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);


app.listen(3000, function () {
    console.log('3000port start..')
});