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
        validate: [validateEmail, "Valid email address"],
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{3,8})$/, "Valid email address"]
        },
        thoughts: [
          { type: Schema.Types.ObjectId,
      ref:'Thought'}
      ],
      
      friends: [
          {type: Schema.Types.ObjectId,
      ref:'User'}
      ],
  },
  {
      toJSON: {
          getters: true 
      },
  }
    
);

const User = model('User', usertable)
module.exports = User







