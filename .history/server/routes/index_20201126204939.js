/*--
Author: CentWebs
Date: 11-11-2020
FileName : app.js
*/
var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Welcome survey' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Welcome survey' });
});

/* GET Route for displaying the LOGIN page*/
router.get('/login ', indexController.displayLoginPage);

/* POST Route for processing the REGISTER page*/
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the REGISTER page*/
router.get('/register ', indexController.displayRegisterPage);

/* POST Route for processing the REGISTER page*/
router.post('/register', indexController.processRegisterPage);

/* GET to perform USER LOGOUT*/
router.get('/logout', indexController.performLogout);

//GET Surevey page. 
router.get('/home', function(req, res, next) {
res.render('survey-list', { title: 'Current Survey List' });
});

//GET Surevey page. 
router.get('/survey', function(req, res, next) {
res.render('survey', { title: 'Survey' });
});

module.exports = router;
