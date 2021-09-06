const User = require('../models/UserModel');

exports.create = (req, res, next) => {
    let data = {
        login: req.body.login,
        password: req.body.password,
        name: req.body.name
    }
    User.create(data).then((user)=>res.send(user)).catch(next);
};

exports.read = (req, res, next) => {
    User.find({login: req.params.name}).then((user)=>res.send(user)).catch(next);
};

exports.readAll = (req, res, next) => {
    User.find().then((user)=>res.send(user)).catch(next);
};

exports.update = (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>User.findOne({_id: req.params.id}).then((user)=>res.send(user)))
    .catch(next);
};

exports.delete = (req, res, next) => {
    User.findByIdAndDelete({_id: req.params.id}).then((user)=>res.send(user)).catch(next);
};

//CHAMADA DE PAGINAS
exports.userCreate = (req, res, next) => {
    res.render('pages/menuPage', {page:"../partials/userCreate"});
};

exports.usersList = (req, res, next) => {
    User.find()
    .then((user)=>{
        res.render('pages/menuPage', {page:"../partials/usersList", users: user});
    })
    .catch(next);
};

exports.userEdit = (req, res, next) => {
    User.findById({_id: req.params.id})
    .then((user)=>{
        res.render('pages/menuPage', {page:"../partials/userEdit", user: user});
    })
    .catch(next);
};