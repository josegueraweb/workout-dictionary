const sequelize = require('../config/connection');
const User = require('../models/User');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

 if (User){
  await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  } else {
    console.error("User model is undefined.");
  }

  process.exit(0);
};

seedDatabase();
