Example userCreateOne:
mutation {
userCreateOne(record:
{ name :"vova",
email: "test@test.by",
age: 35,
phone: 357534234234,
profileImage: "http://localhost@test"
}) {
record {
name,
email,
age,
phone,
profileImage
}
}
}
Example query 

query {
userOne {
name,
email
}
}

UpdateUserById mutation
mutation {
userUpdateById (_id: "619b439cdef3c5b74af7bf11", record: {name: "updateVova"}) {
record {
name
}
}
}

seeds DB faker

mutation {
fakeData {
name,
age,
email,
profileImage,
phone
}
}
