const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const PISchema = new Schema({
    name:{
        type: String,
        required: [true, 'Campo obrigatório!']
    },
    details:{
        type: String
    },
    status:{
        type: Boolean,
        default: true
    }
});

//Aqui estou gravando o meu schema no banco de dados...
const PI = mongoose.model('pontosinteresses', PISchema);

module.exports = PI;