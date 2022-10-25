const { Sequelize, DataTypes } = require('sequelize');
const WorldCups = require('./WorldCups')
const Teams = require('./Teams');
const sequelize = new Sequelize('worldcup', 'root', undefined, {
    host: 'localhost',
    dialect: 'mysql'
});

const Matchs = sequelize.define('matches', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull: false
  },
  idWorlCup: {
    type: DataTypes.INTEGER
  },
  phase: {
    type: DataTypes.STRING
  },
  idTeam1: {
    type: DataTypes.INTEGER
  },
  pointsTeam1: {
    type: DataTypes.INTEGER
  },
  idTeam2: {
    type: DataTypes.INTEGER
  },
  pointsTeam2: {
    type: DataTypes.INTEGER
  }
}, {
    createdAt:false,
    updatedAt:false
});

Matchs.hasOne(WorldCups, {
  foreignKey: 'idWorlCup'
});
Matchs.hasOne(Teams, {
  foreignKey: 'idTeam1'
});
Matchs.hasOne(Teams, {
  foreignKey: 'idTeam2'
});

Teams.belongsTo(Matchs);

module.exports = Matchs