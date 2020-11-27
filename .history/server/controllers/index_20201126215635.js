/*--
Author: CentWebs
Date: 11-11-2020
FileName : app.js
*/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//create user model isntance
let userModel = require('../models/user');
let User = userModel.User; //alias

// create the survey Model instance
let surveyModel = require('../models/survey');
let Survey = surveyModel.Survey; // alias

module.exports.displayLoginPage = (req,res,next)=> {
    //check if user is logged in
    if(!req.user)
    {
        res.render('auth/login',
        {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName : req.user ? req.user.displayName : ''
        })
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req,res,next)=> {
    passport.authenticate('local',
    (err,user,info)=> {
        //server error
        if(err)
        {
            return next(err);
        }
        //is there a user login error?
        if(!user)
        {
            req.flash('loginMessage','Authentication Error');
            return res.redirect('/login')
        }
        req.login(user,(err)=>{
            //server error?
            if(err)
            {
                return next(err);
            }
            return res.redirect('/survey-list');
        });
    })(req,res,next);
}

module.exports.displayRegisterPage = (req,res,next) => {
    //if user is not logged in
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: 'Register',
            messages:req.flash('registerMessage'),
            displayName:req.user ? req.user.displayName:''
        });
    }
    else
        {
            return res.redirect('/');
        }
}

module.exports.processRegisterPage = (req,res,next)=> {
    //instantiate a user object
    let newUser = new User({
        username: req.body.username,
        //password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser,req.body.password,(user)=> {
        if(err)
        {
            console.log("Error: Inserting new user");
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error : User already exists'
                );
                console.log('Error: User already exists')
            }
            return res.render('auth/register',
            {
                title: 'Register',
                messages:req.flash('registerMessage'),
                displayName:req.user ? req.user.displayName:''
            });
        }
        else{
            //if no error exists, then register user

            //redirect user and authenticate

            return passport.authenticate('local')(req,res, () => {
                res.redirect('/survey-list')
            });
        }
    });
}

module.exports.performLogout = (req,res,next)=>{
    req.logout();
    res.redirect('/');
}







// enable jwt
//let jwt = require('jsonwebtoken');
//let DB = require('../config/db');






