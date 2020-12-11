/*--
Author: CentWebs
Date: 11-11-2020
FileName : app.js
*/
let mongoose = require ('mongoose');

//create a model class for surveys
let surveyModel = mongoose.Schema({
title: String,
subtitle: String,
description: String,
enterQuestion1: String,
enterQuestion2: String,
enterQuestion3: String
},
{
    collection: "survey"
}) ;

module.exports = mongoose.model('Survey',surveyModel);
module.exports = mongoose.model('Survey',surveyModel);