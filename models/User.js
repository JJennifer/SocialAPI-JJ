const { Schema } = require("mongoose")

const usertable = new Schema(
    {
        username: {
        type:stringify,
        unique: true,
        required: true,
        trimmed: true
      },
        email: {type: String, 
        required: true, 
        unique: true,
        
    }
)







const Users = model('Users', usertable)
module.exports = Users