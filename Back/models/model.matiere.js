const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const matiereSchema = new Schema (
    {
        matiereTitle: { type: String, required: true },
        matiereDetails: [{
            matDetailsTitle: { type: String, required: true },
            matDetailsContent: { type: String, required: true },
        }]
    }
)

module.exports = mongoose.model('matiere', matiereSchema);

