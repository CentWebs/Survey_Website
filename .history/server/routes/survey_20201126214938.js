/*--
Author: CentWebs
Date: 11-11-2020
FileName : app.js

Routing for Contact list
*/



let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//let jwt = require('jsonwebtoken');

let passport = require('passport');

let surveyController = require('../controllers/survey')
let UserController = require('../controllers/index')

//helper function to guard purposes
function requireAuth(req,res,next)
{
    //check if user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Business List page - READ Operation */
router.get('/', surveyController.displaySurveyList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', surveyController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add',requireAuth, surveyController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id',requireAuth, surveyController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id',requireAuth, surveyController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id',requireAuth, surveyController.performDelete);

module.exports = router;