import { Sequelize } from "sequelize";


export default function (sequelize: Sequelize, DataTypes) {
    var Inventory = sequelize.define("Inventory", {
        item: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, Infinity]
            }
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, Infinity]
            }
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
            validate: {
                len: [1, Infinity]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, Infinity]
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, Infinity]
            }
        }
    });
    return Inventory;

};
