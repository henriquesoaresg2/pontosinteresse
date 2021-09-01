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
router.get('/createPI', apiController.createPI);
router.get('/listAll', apiController.listAllPIs);

module.exports = router;