const express = require('express');
const expressHbs = require('express-handlebars');

const PORT = 3000;

const app = express();
app.engine('.hbs', expressHbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        list: function(list) {
            const itemList = list.map(item => `<li>${item}</li>`).join('');
            return (`
                <ul>
                    ${itemList}
                </ul>
            `)
        }
    }
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

app.get('/profile', (req, res) => {
    res.render('profile', {
        phoneNumber: [{
            value: '(19) 2222-2222',
        },{
            value: '(19) 3333-3333',
        }]
    });
});

app.get('/users', (req, res) => {
    res.render('users', {
        userList: ['firstuser', 'seconduser']
    });
});

app.listen(PORT, function() {
    console.log('listening on port ', PORT);
});