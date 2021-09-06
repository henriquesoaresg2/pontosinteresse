const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const UserSchema = new Schema({
    login:{
        type:String,
        unique:[true, 'Usuário já existe!'],
        required:[true, 'Usuário obrigatório!']
    },
    password:{
        type:String,
        required:[true, 'Senha obrigatória!']
    },
    name:{
        type:String,
        default:null
    },
    permissions:{
        type:Array,
        default:[null, 'read', null, null]
    },
    status:{
        type:Boolean,
        default:true
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;