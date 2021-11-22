
const {BookTC} = require("../schemaMongoose/mongooseModelBook");


const BookQuery = {
    bookById: BookTC.getResolver("findById"),
    bookByIds: BookTC.getResolver("findByIds"),
    bookOne: BookTC.getResolver("findOne"),
    bookMany: BookTC.getResolver("findMany"),
    bookCount: BookTC.getResolver("count"),
    bookConnection: BookTC.getResolver("connection"),
    bookPagination: BookTC.getResolver("pagination"),
};

const BookMutation = {
    bookCreateOne: BookTC.getResolver("createOne"),
    bookCreateMany: BookTC.getResolver("createMany"),
    bookUpdateById: BookTC.getResolver("updateById"),
    bookUpdateMany: BookTC.getResolver("updateMany"),
    bookRemoveById: BookTC.getResolver("removeById"),
    bookRemoveMany: BookTC.getResolver("removeMany"),
}

module.exports = {BookQuery,  BookMutation};