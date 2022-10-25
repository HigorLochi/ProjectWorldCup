const MatchsRoute = require('./MatchsRoute');
const TeamsRoute = require('./TeamsRoute');
const WorldCupsRoute = require('./WorldCupsRoute');

module.exports = (app) => {
   MatchsRoute(app),
   TeamsRoute(app),
   WorldCupsRoute(app)
}