const { Sequelize, DataTypes } = require('sequelize');
const WorldCups = require('./WorldCups')
const Teams = require('./Teams');
const sequelize = new Sequelize('worldcup', 'root', undefined, {
    host: 'localhost',
    dialect: 'mysql'
});

const Matchs = sequelize.define('matchs', {
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

//Matchs.belongsTo(WorldCups, {foreignKey: 'idWorlCup'})
//Matchs.belongsTo(Teams, {foreignKey: 'idTeam1'})
//Matchs.belongsTo(Teams, {foreignKey: 'idTeam2'})

module.exports = Matchs