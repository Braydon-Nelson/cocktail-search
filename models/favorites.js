module.exports = function (sequelize, DataTypes) {
    const Favorites = sequelize.define("Favorite", {
        name: {
            type: DataTypes.STRING
        },
        picURL: {
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

    Favorites.associate = function (models) {
        Favorites.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Favorites;
};