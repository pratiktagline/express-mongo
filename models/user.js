const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

username : {
    type : String,
    required : true
}, 
email : {
    type : String,
    required : true
},
isActive : {
    type : Boolean,
    default : true
},
createdOn : {
    type : Date,
    default : Date.now()
}
})

mongoose.model('users', userSchema)

module.exports = mongoose.model('users')