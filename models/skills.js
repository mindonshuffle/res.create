module.exports = function(sequelize, DataTypes) {
    var Skills = sequelize.define('Skills', {
        skills:  {
            type: DataTypes.TEXT,
            allowNull: false
        }, 
        Languages: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Skills.associate = function(models) {
        models.user.hasMany(Skills, {
            onDelete: 'cascade'
        });
    };
    return Skills;
}