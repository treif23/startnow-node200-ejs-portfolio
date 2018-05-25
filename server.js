const axios = require('axios');
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



// axios({
//     method: 'POST',
//     url: 'https://sheets.googleapis.com/v4/spreadsheets/1DKtsHTzZ9HhakZdn7HG9yg878MAWQ4y8EZoQ2bhph30/values/A1:append?includeValuesInResponse=false&insertDataOption=INSERT_ROWS&responseDateTimeRenderOption=SERIAL_NUMBER&responseValueRenderOption=FORMATTED_VALUE&valueInputOption=USER_ENTERED&key={1013966049047-lm4lh8o2nipm2r4ffm7mvo1p0m22t7ht.apps.googleusercontent.com}',
//     majorDimensions: 'ROWS',
//     values: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       message: '',
//     }
//   });




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

app.listen(process.env.PORT || 8080, () => {
    console.log('listening at http://localhost:8080');
});