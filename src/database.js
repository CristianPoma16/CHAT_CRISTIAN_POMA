const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Black16:alexanderpoma16@cluster0-rwdl8.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })
    .then(db => console.log('CONECTADO A LA BDD'))
    .catch(err => console.log(err));