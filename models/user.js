module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User', {
        // Giving the User model its datatypes
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:  {min: -90, max: 90}
        },
        Address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            is: [/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/]
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true
        },
        Website: {
            type: DataTypes.STRING
        }, 
    } ({timestamps: false}) )

    return User;
};