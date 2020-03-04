module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.associate = function (models) {
        User.hasMany(models.Favorite, {
            onDelete: "cascade"
        });
    };

    return User;
};