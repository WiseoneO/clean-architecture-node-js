const mongoose = require("mongoose");
const schemas = require("./schemas")
module.exports = {
    connect: ()=>{
        const db_conn_str = process.env.DB_CONNECTION_STRING;
        mongoose.connect(db_conn_str);

        const db = mongoose.connection;

        db.on("error", console.error.bind(console, "connection to mongo has failed..."));
        db.once("open", ()=>{
            console.log("successfully connected to mongodb cluster.")
        });

    },
    schemas

}