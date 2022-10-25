const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('worldcup', 'root', undefined, {
    host: 'localhost',
    dialect: 'mysql'
});

const WorldCups = sequelize.define('worldcups', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER
  },
  currentPhase: {
    type: DataTypes.STRING
  }
}, {
    createdAt:false,
    updatedAt:false
});

module.exports = WorldCups