db.createUser(
    {
        user : "vanwilder",
        pwd: "1234567",
        roles : [
            {
                role: "readWrite",
                db : "graphqlbase"
            }
        ]
    }
)