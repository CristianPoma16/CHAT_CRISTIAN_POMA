const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chat', {
        useNewUrlParser: true
    })
    .then(db => console.log('CONECTADO A LA BDD'))
    .catch(err => console.log(err));