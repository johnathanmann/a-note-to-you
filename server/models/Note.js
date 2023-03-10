const { Schema, model, Types } = require("mongoose");

const noteSchema = new Schema ({
    recipient:{
        type: string,
        required: true
    },
    body:{
        type: string,
        required: true
    },
    sender:{
        type: string,
        required: true
    }
});

const Note = model("Note", noteSchema);

module.exports = Note;
