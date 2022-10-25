const MatchsController = require('../controllers/MatchsController');
const bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

module.exports = (app) => {
   app.post('/matchs', jsonParser, MatchsController.post);
   app.put('/matchs/:id', jsonParser, MatchsController.put);
   app.delete('/matchs/:id', MatchsController.delete);
   app.get('/matchs', MatchsController.getAll);
   app.get('/matchs/:id', MatchsController.getById);
}