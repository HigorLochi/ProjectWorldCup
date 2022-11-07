const { Sequelize, DataTypes } = require('sequelize');
const WorldCups = require('./WorldCups')
const Teams = require('./Teams');
const sequelize = new Sequelize('worldcup', 'root', undefined, {
    host: 'localhost',
    dialect: 'mysql'
});

const Matchs = sequelize.define('Matchs', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull: false
  },
  idWorldCup: {
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
    updatedAt:false,
    tableName:"matchs"
});

module.exports = Matchs