const mongoose = require('mongoose');
const express = require('express');
const {graphqlHTTP} = require("express-graphql");

const graphqlSchema = require("./schemaGraphQL/userBookComposer")
const logger = require("./logger/log")

const port = process.env.PORT || 4000;

const app = express();


app.use(logger)

app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true
}));

const start = async () => {
    await mongoose.connect('mongodb://vanwilder:1234567@172.18.0.1:27017/graphqlbase');
    app.listen(port, () => {
        console.log(`Running on port ${port}`)
    });


}

start();