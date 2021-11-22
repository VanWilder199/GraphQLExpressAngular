const {UserTC} = require("../schemaMongoose/mongooseModelUsersBook");
require("../seeds/userFaker");

const UserQuery = {
    userById: UserTC.getResolver("findById"),
    userByIds: UserTC.getResolver("findByIds"),
    userOne: UserTC.getResolver("findOne"),
    userMany: UserTC.getResolver("findMany"),
    userCount: UserTC.getResolver("count"),
    userConnection: UserTC.getResolver("connection"),
    userPagination: UserTC.getResolver("pagination"),
};

const UserMutation = {
    userCreateOne: UserTC.getResolver("createOne"),
    userCreateMany: UserTC.getResolver("createMany"),
    userUpdateById: UserTC.getResolver("updateById"),
    userUpdateMany: UserTC.getResolver("updateMany"),
    userRemoveById: UserTC.getResolver("removeById"),
    userRemoveMany: UserTC.getResolver("removeMany"),
    fakeData: UserTC.getResolver("user"),
}

module.exports = {UserQuery, UserMutation};