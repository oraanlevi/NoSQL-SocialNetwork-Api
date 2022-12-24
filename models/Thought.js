const { Schema, model } = require('mongoose');
const formatDate = require('../utils/formatDate');
const reactionSchema = require('./Reaction');



const thoughtSchema = new Schema(
    {
        thoguhtTest: {
            type: String,
            required: true,
            minlengths: 1,
            maxlengths: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => formatDate(timestamp),

        },
        username: {
            type: String,
            required: true,
        },

        reactions: [reactionSchema],
    },

    {
        toJSON: {
            getters: true
        },

    }

);

userSchema.virtual('reactionCount').get(function() {
    return this.reaction.length;

});


const User = model('thought', thoughtSchema);

module.exports = Thought;