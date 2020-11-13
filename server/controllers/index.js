/*--
Author: CentWebs
Date: 11-11-2020
FileName : app.js
*/


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');


// enable jwt
//let jwt = require('jsonwebtoken');
//let DB = require('../config/db');


// create the User Model instance
let surveyModel = require('../models/survey');
let Survey = surveyModel.Survey; // alias



