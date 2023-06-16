const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    rollno: {
        type: Number,
        required: true
    }
    }, 
    { timestamps: true }, 
    {collection: 'students'}
    )

module.exports = mongoose.model('student', studentSchema);
