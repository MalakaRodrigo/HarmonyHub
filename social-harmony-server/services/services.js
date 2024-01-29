const User = require('../models/userSchema')
const { getDB } = require('../database/dbConnection');

// Define service functions
const getData = () => {
    // Perform data retrieval or processing here
    return { message: 'Hello from the service!' };
  };

const setCreateUserData = async (payload) => {
  try {
    const newUser = {
      credentials: payload.credential
    }
    const result = await User
    .create(newUser)
    return ({
      data: result,
      message: "Data successfully added!",
      status: 200,
    });
  } catch (error) {
    return ({
      data: {},
      message: "Something went wrong!",
      status: 400,
    });
  }
  };
  
  
  module.exports = {
    getData,
    setCreateUserData
  };
  