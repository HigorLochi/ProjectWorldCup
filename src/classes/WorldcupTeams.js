const { Sequelize, DataTypes } = require('sequelize');
const WorldCups = require('./WorldCups')
const Teams = require('./Teams');
const sequelize = new Sequelize('worldcup', 'root', undefined, {
    host: 'localhost',
    dialect: 'mysql'
});

const WorldcupTeams = sequelize.define('worldcupteams', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull: false
  },
  idWorldcup: {
    type: DataTypes.INTEGER
  },
  idTeam: {
    type: DataTypes.INTEGER
  }
}, {
    createdAt:false,
    updatedAt:false
});

WorldcupTeams.belongsTo(WorldCups, {foreignKey: 'idWorlCup'})
WorldcupTeams.belongsTo(Teams, {foreignKey: 'idTeam'})

module.exports = WorldcupTeams