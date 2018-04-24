var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookGenreSchema = new Schema(
    {
        name: { type: String, required: true, min: 3, max: 100 }
    }
);

BookGenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/bookgenre/' + this._id;
    });

module.exports = mongoose.model("Genre", BookGenreSchema);
    