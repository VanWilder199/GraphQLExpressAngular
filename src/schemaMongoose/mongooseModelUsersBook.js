const {Schema} = require("mongoose");
const mongoose = require("mongoose");
const {composeWithMongoose} = require("graphql-compose-mongoose");


const User = new Schema(
    {
        id: String,
        name: String,
        age: Number,
        email: String,
        phone: Number,
        profileImage: String,
    },
    {timestamps: {
        createdAt: "created_at", updatedAt: "updated_at"
        }}
)

module.exports = {
    UserSchema: mongoose.model("users", User),
    UserTC: composeWithMongoose(mongoose.model("users", User))
}