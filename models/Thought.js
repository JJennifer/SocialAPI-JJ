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

    }
);