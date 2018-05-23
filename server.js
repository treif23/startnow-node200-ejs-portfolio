const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var profile = require('./profile');

const app = express();
app.use('/profile', profile)
app.use(morgan('decv'))
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.set('views', './views');



app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    const data = {
        person: {
            firstName: 'Tommy',
            lastName: 'Reif',
        }
    }
    app.get('/contact', (req, res) => {
        res.render('contact');
    });

    app.post('/thanks', (req, res) => {
        res.render('thanks', { contact: req.body })
    });

    res.render('index', data);
});

app.listen(8080, () => {
    console.log('listening at http://localhost:8080');
});