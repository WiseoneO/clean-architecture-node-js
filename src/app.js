const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const routes = require("./frameworks/expressSpecific/routes");
const API_PREFIX = process.env.API_PREFIX || "/api/v1";
const dependencies = require("./config/dependencies")
const dotenv = require("dotenv");
const {connect: connectToMongo} = require("./frameworks/database/mongo")

dotenv.config()

module.exports ={
    // start the server
    start: ()=>{
        // middlewares
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));

        // Routes
        app.use(API_PREFIX, routes(dependencies))

        // common Error Handlers

        app.listen(PORT, ()=>{
            console.log(`Our serveris ruuning under port ${PORT}`);
            connectToMongo();
        })
    }
}