const sequelize = require('../config/connection');
const { Products, Catagories, Employee} = require('../models');

const productData = require('./products-seeds');
const catagoryData = require('./category-seeds');
const employeeData = require('./employee.json');




const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await Employee.bulkCreate(employeeData, {
      individualHooks: true,
      returning: true,
    });

    await Catagories.bulkCreate(catagoryData);

    await Products.bulkCreate(productData);

};

seedDatabase();