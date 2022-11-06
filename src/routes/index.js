const MatchsRoute = require('./MatchsRoute');
const TeamsRoute = require('./TeamsRoute');
const WorldCupsRoute = require('./WorldCupsRoute');
const WorldCupTeamsRoute = require('./WorldcupTeamsRoute');

module.exports = (app) => {
   MatchsRoute(app),
   TeamsRoute(app),
   WorldCupsRoute(app),
   WorldCupTeamsRoute(app)
}