const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('worldcup', 'root', undefined, {
    host: 'localhost',
    dialect: 'mysql'
});

const Teams = sequelize.define('teams', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING
  },
  cups: {
    type: DataTypes.INTEGER,
  }
}, {
    createdAt:false,
    updatedAt:false
});

module.exports = Teams