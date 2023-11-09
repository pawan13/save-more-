const User = require("../model/userModel");

const {
  API_STATUS: { FAILURE, SUCCESS },
} = require("../utils/const");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      status: SUCCESS,
      data: users,
    });
  } catch (e) {
    res.status(500).json({
      status: FAILURE,
      message: `something went wrong -${e.message}`,
    });
  }
};

const createUsers = async (req, res) => {
  try {
    const { body } = req;
    const users = await User.create(body);
    res.status(201).json({
      status: SUCCESS,
      data: users,
    });
  } catch (e) {
    res.status(500).json({
      status: FAILURE,
      message: `something went wrong -${e.message}`,
    });
  }
};
module.exports = {
  getAllUsers,
  createUsers,
};
