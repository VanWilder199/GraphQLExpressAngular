const {UserTC} = require("../schemaMongoose/mongooseModelUsersBook");
const faker = require("faker");
const {UserSchema} = require("../schemaMongoose/mongooseModelUsersBook")

const resolver = function () {};

resolver.fakeData = UserTC.addResolver({
    name: "user",
    type: UserTC,
    args: { record: UserTC.getInputType() },
    resolve: async ( ) => {
        let user = new UserSchema({
            name: faker.name.findName(),
            age: faker.random.number(2, 50),
            email: faker.internet.email(),
            phone: faker.random.number(),
            profileImage: faker.random.image(),
        });
        return await user.save();
    },
});

module.exports = resolver;