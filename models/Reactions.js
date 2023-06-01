const { Types, Schema } = require("mongoose")

const reactionTable = new Schema(
    {
        reactionId: {
          type: Schema.Types.ObjectId,
          default: () => new Types.ObjectId(),
        },
        reactionBody: {
          type: String,
          required: true,
          minLength: 1,
          maxLength: 280,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (createdAtVal) => (createdAtVal),
        },
        username: {
          type: String,
          required: true,
        },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
);

module.exports =reactionTable