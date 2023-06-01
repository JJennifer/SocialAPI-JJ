const reactionTable = require("./Reactions");
const { Schema, model } = require("mongoose");


const thoughtTable = new Schema (
    {
      thoughtText: {
        type: String,
        require: true,
        minLength: 1,
        maxLength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      username: {
        type: String,
        require: true,
        unique: true,
      },
      reactions: [reactionTable],
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }

);

const Thought = model("Thought", thoughtTable);
module.exports = Thought;