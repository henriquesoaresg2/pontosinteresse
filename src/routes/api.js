const express = require ('express');
const router = express.Router();

const apiController = require('../controllers/apiController');
const usersController = require('../controllers/usersController');


// url do teste será: http://localhost:5000/api/teste
router.get('/teste', apiController.test);

// PI
router.post('/interest',apiController.create);
router.get('/interest/:id',apiController.read);
router.post('/interest/update/:id',apiController.update);
router.get('/interest/delete/:id',apiController.delete);


//USERS 
router.post('/user',usersController.create);
router.get('/user/:name',usersController.read);
router.get('/users',usersController.readAll);
router.post('/user/update/:id',usersController.update);
router.get('/user/delete/:id',usersController.delete);


//VIEWS
router.get('/home', (req, res)=>res.render('pages/menuPage', {page: '../partials/home'}));
router.get('/createPI', apiController.createPI);
router.get('/listAll', apiController.listAllPIs);
router.get('/usersList', usersController.usersList);
router.get('/userCreate', usersController.userCreate);
router.get('/userEdit/:id', usersController.userEdit);

module.exports = router;