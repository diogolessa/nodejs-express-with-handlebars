const express = require('express');
const expressHbs = require('express-handlebars');

const PORT = 3000;

const app = express();
app.engine('.hbs', expressHbs({
    defaultLayout: 'main',
    extname: '.hbs'    
}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        fields: [{
            name: 'Name:',
            id: 'inputName',
            placeholder: 'please, type your name'
        },{
            name: 'Email:',
            id: 'inputEmail',
            placeholder: 'please, type your email'
        }]
    });
});

app.listen(PORT, function() {
    console.log('listening on port ', PORT);
});