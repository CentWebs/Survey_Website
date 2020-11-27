//require mopdules for user model
let mongoose = require('mongoose');
const { transformAuthInfo } = require('passport');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
{
    username:
    {
        type: String,
        default:'',
        trim:true,
        required:"username is required"
    },
    /*
    password:
    {
        type:String,
        default:'',
        trim:true,
        required:"password is required"
    },
    */
   email:
   {
    type: String,
    default:'',
    trim:true,
    required:"email address is requried"
    },
    displayName:
   {
    type: String,
    default:'',
    trim:true,
    required:"display name is requried"
    },
    created:
   {
    type: Date,
    default:Date.now,
    },
    update:
    {
     type: Date,
     default:Date.now,
     }
},
{
    collection: "users"
}
);

//configure options for user model

let options=({missingPasswordError:'Wrong / Missing Password'});

User.plugin(passportLocalMongoose,options);

module.exports.User=mongoose.model('User',User);