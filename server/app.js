// Required
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./api/index.js');
const bodyParser = require('body-parser');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: 'false'
}));
app.use(router);

// Router y listen
app.listen(app.get('port'), (req, res) => {
    console.log(`Servidor en linea en el puerto ${app.get('port')}`);
});