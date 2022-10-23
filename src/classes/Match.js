const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('worldcup', 'root', undefined, {
    host: 'localhost',
    dialect: 'mysql'
});

const Match = sequelize.define('match', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING
  }
}, {
    createdAt:false,
    updatedAt:false
});

module.exports = Match