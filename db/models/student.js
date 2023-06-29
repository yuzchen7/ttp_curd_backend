const { DataTypes } = require('sequelize');
const db = require('../db');

const Students = db.define('students', {
    firstName : {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },

    lastName : {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },

    email : {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            notEmpty : true,
            isEmail : true
        }
    },

    imageUrl : {
        type : DataTypes.STRING,
        defaultValue : './'
    },

    gpa : {
        type : DataTypes.DECIMAL,
        validate : {
            notEmpty : true,
            max : 4.0,
            min : 0.0
        }
    }

});

module.exports = Students;