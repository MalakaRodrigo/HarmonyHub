// Import your service functions
const service = require("../services/services");

// Define controller functions
const logInController = (req, res) => {
  const data = service.getData(req);
  res.json(data);
};

const signUpController = async (req, res) => {
  const data = await service.setCreateUserData(req.body); // Call a service function
  console.log('d', data)
  res.json(data);
};

module.exports = {
  logInController,
  signUpController
};
