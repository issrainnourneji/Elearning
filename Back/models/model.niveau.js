const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const niveauSchema = new Schema (
    {
        niveauTitle: { type: String, required: true },
        niveauParagraphs: { type: String, required: true }
    }
)

module.exports = mongoose.model('niveau', niveauSchema);

