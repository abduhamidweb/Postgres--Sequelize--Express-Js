import express from 'express';
import sequelize from '../utils/sequelize.js';
import DataType, {
    Model
} from 'sequelize';
const PORT = process.env.PORT || 3000;
const app = express();

// const CarModel = sequelize.define('car', {
//     model: {
//         type: DataType.STRING(30),
//         unique: true,
//     },
//     color: {
//         type: DataType.STRING(12),
//         defaultValue: '#000000'
//     },
//     yera: {
//         type: DataType.INTEGER,
//         allowNull: true,
//     },
// }, {
//     // tableName: 'car',
//     // freezeTableName: true,
//     // timestamps: false
// });
// CarModel.sync({
//     // force: true,
//     // alter: true,
// })

class carModel extends Model {}
carModel.init({
    model: {
        type: DataType.STRING(30),
        unique: true,
    },
    color: {
        type: DataType.STRING(12),
        defaultValue: '#000000'
    },
    yera: {
        type: DataType.INTEGER,
        allowNull: true,
    },
}, {
    sequelize,
    // tableName: 'car',
    // freezeTableName: true,
    // timestamps: false
})
carModel.sync({
    // force: true,
    // alter: true,
})
// DROP TABLE 
// carModel.drop({
//     // force: true,
//     // alter: true,
// })
app.listen(PORT, function () {
    console.log("server listening on port" + PORT);
});