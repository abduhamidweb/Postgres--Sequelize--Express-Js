import express from 'express';
import sequelize from '../utils/sequelize.js';
import DataType, {
    Sequelize,
    Model,

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
});
(async () => {
    await carModel.sync();
})();
// test success WITH car model and full CRUD
// ADD DATA
// carModel.create({
//     model: "BMB",
//     color: '#fff',
//     yera: 2020
// })
// GET data
// const result = await carModel.findAll({
//     raw: true
// });
// console.log(result);
// DELETE data
//  await carModel.destroy({
//      where: {
//          // Shartlar bilan ma'lumotlarni filtratsiya qiling
//          // Masalan, model nomi "BMW" bo'lgan barcha ma'lumotlarni o'chirish:
//          model: 'BMB'
//      }
//  });
// Update data
// const updatedData = {
//     model: 'New Model',
//     color: '#ffffff',
//     year: 2023
// };
//     await carModel.update(updatedData, {
//         where: {
//             // Shartlar bilan ma'lumotlarni filtratsiya qiling
//             // Masalan, model nomi "BMW" bo'lgan ma'lumotlarni yangilash:
//             model: 'BMB'
//         }
//     });
// console.log(await carModel.findAll({
//     raw: true
// }));
// DROP TABLE 
// carModel.drop({
//     // force: true, 
//     // alter: true, 
// })
app.listen(PORT, function () {
    console.log("server listening on port" + PORT);
});