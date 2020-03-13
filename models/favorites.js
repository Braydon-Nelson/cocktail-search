module.exports = function (sequelize, DataTypes) {
    const Favorite = sequelize.define("Favorite", {
        drinkName: {
            type: DataTypes.STRING
        },
        imgURL: {
            type: DataTypes.STRING
        },
        ingredients: {
            type: DataTypes.STRING
        },
        ingredientMeasurements: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    });

    Favorite.associate = function (models) {
        Favorite.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Favorite;
};