module.exports = (sequelize, type) => {
  return sequelize.define(process.env.DB_TABLE, {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: type.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [5, 50],
      },
    },
    code: {
      type: type.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    continent: {
      type: type.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [5, 20],
      },
    },
  });
};
