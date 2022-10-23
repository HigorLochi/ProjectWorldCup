const MatchController = require('../Controllers/MatchController');
const bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

const authMiddleware = (req,res,next) => {
    next();
}

module.exports = (app) => {
   app.post('/matches', jsonParser, MatchController.post);
   app.put('/matches/:id', jsonParser, MatchController.put);
   app.delete('/matches/:id', MatchController.delete);
   app.get('/matches', MatchController.getAll);
   app.get('/matches/:id', MatchController.getById);
}