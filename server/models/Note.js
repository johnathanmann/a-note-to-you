const { Schema, model, Types } = require("mongoose");

const noteSchema = new Schema ({
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
    }
});

const Note = model("Note", noteSchema);

module.exports = Note;
