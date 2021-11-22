const { SchemaComposer} = require( 'graphql-compose');

const schemaComposer = new SchemaComposer();

const { UserQuery, UserMutation} = require('./schemaUser');
const { BookQuery, BookMutation} = require('./schemaBook');


schemaComposer.Query.addFields({
    ...UserQuery,
    ...BookQuery,
});

schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...BookMutation
});

module.exports = schemaComposer.buildSchema();