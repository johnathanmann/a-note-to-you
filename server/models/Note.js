const { Schema, model, Types } = require("mongoose");

const noteSchema = new Schema ({
    uniqId:{
        type: String,
        required: true
    },
    recipient:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    sender:{
        type: String,
        required: true
    },
    sticker:{
        type: String,
        required: true
    }
});

const Note = model("Note", noteSchema);

module.exports = Note;
