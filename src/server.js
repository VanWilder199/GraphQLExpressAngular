const mongoose = require('mongoose');
const express = require('express');
const {graphqlHTTP} = require("express-graphql");
const {schemaComposer} = require("graphql-compose");
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
    await mongoose.connect('mongodb://localhost:27888/graphql');
    app.listen(port, () => {
        console.log(`Running on port ${port}`)
    });


}

start();