const PI = require('../models/PImodel');

exports.test = function (req, res) {
    res.render('Olá! Teste ao Controller');
};


exports.create = function(req, res, next){
    let data = {
        name: req.body.name || undefined,
        details: req.body.details || undefined
    };
    
    console.log('You made a POST request: ', data);
    PI.create(data)
    .then(res.redirect('/api/listAll'))
    .catch(next);
};

// TODO: adicionar novo ponto de interesse
exports.read = function (req, res, next) {
    console.log('You made a GET request: ', req.params.id);
    PI.findById(req.params.id)
    .then((pi)=>res.send(pi))
    .catch(next);
};

// TODO: atualizar ponto de interesse
exports.update = function (req, res, next) {
    console.log('You made a PUT request: ', req.params.id, '\n and your body was: ', req.body);
    PI.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
        PI.findOne({_id: req.params.id}).then((pi)=>res.send(pi));
    })
    .catch(next);    
};

// TODO: apagar ponto de interesse
exports.delete = function (req, res, next) {
    console.log('You made a DELETE request: ', req.params.id);
    PI.findByIdAndRemove({_id: req.params.id})
    .then(
        // (pi)=>res.send(pi)
        res.redirect('/api/listAll')
    )
    .catch(next);
};

exports.listAllPIs = (req, res, next)=>{
    console.log('Redirecionando para a listagem com prazer!');
    PI.find()
    .then((pi)=>res.render('listPIs', {pis:pi}))
    .catch(next);
}

exports.createPI = (req, res, next) => res.render('createPI');