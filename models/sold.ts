module.exports = function(sequelize, DataTypes) {
    var Sold = sequelize.define("Sold", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING
    });
    return Sold;
};