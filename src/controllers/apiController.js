const PI = require('../models/PImodel');

exports.test = function (req, res) {
    res.render('Olá! Teste ao Controller');
};


exports.create = function(req, res, next){
    let data = {
        name: req.body.name || undefined,
        details: req.body.details || undefined
    };
    
    PI.create(data)
    .then(res.redirect('/api/listAll'))
    .catch(next);
};

// TODO: adicionar novo ponto de interesse
exports.read = function (req, res, next) {
    PI.findById(req.params.id)
    .then((pi)=>res.send(pi))
    .catch(next);
};

// TODO: atualizar ponto de interesse
exports.update = function (req, res, next) {
    PI.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
        PI.findOne({_id: req.params.id}).then((pi)=>res.send(pi));
    })
    .catch(next);    
};

// TODO: apagar ponto de interesse
exports.delete = function (req, res, next) {
    PI.findByIdAndRemove({_id: req.params.id})
    .then(
        // (pi)=>res.send(pi)
        res.redirect('/api/listAll')
    )
    .catch(next);
};

exports.listAllPIs = (req, res, next)=>{
    PI.find()
    .then((pi)=>res.render('pages/menuPage', {page:'../partials/listPIs', pis:pi}))
    .catch(next);
}

exports.createPI = (req, res, next) => res.render('pages/menuPage', {page:'../partials/createPI'});