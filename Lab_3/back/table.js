const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "table",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      item: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "table",
    }
  );
};
