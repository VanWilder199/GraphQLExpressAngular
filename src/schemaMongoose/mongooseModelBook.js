const {Schema} = require("mongoose");
const mongoose = require("mongoose");
const {composeWithMongoose} = require("graphql-compose-mongoose");


const BookSchema = new Schema(
    {
       title: String,
        author: [String],
        cover: String,
        tags: [String],
    },
    {timestamps: {
            createdAt: "created_at", updatedAt: "updated_at"
        }}
)

module.exports = {
    BookSchema: mongoose.model("books", BookSchema),
    BookTC: composeWithMongoose(mongoose.model("books", BookSchema))
}