'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.post.hasMany(models.userinfo, {foreignKey: "writerId"})
      // models.post.belongsTo(models.comment, {foreignKey: 'postId'})
    }
  };
  post.init({
    category: DataTypes.STRING,
    writerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};