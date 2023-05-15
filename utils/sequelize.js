import {
    Sequelize
} from "sequelize";
const sequelize =
    new Sequelize('postgres://postgres:admin@localhost:5432/sequelizetest', {
        logging: false,
    });
(async () => {
    try {
        await sequelize.authenticate();
        console.log("connection");
    } catch (error) {
        console.log('error :', error);

    }
})();
export default sequelize; 