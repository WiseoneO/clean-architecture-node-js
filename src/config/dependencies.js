const useCases = require("../usecases");
const repositories = require("../frameworks/repositories/mongo");
module.exports = {

    useCases,
    ...repositories
}