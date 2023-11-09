const Transaction = require("../model/transactionModel");

const {
  API_STATUS: { FAILURE, SUCCESS },
} = require("../utils/const");

const getAlltransactions = async (req, res) => {
  try {
    const trans = await Transaction.find();
    res.json({
      status: SUCCESS,
      data: trans,
    });
  } catch (e) {
    res.status(500).json({
      status: FAILURE,
      message: `something went wrong -${e.message}`,
    });
  }
};

const createTransaction = async (req, res) => {
  try {
    const { body } = req;
    const trans = await Transaction.create(body);
    res.status(201).json({
      status: SUCCESS,
      data: trans,
    });
  } catch (e) {
    res.status(500).json({
      status: FAILURE,
      message: `something went wrong -${e.message}`,
    });
  }
};
const deleteTransaction = async (req, res) => {
  try {
    const {id} = req.params;
    const trans = await Transaction.findByIdAndDelete(id);
    res.status(201).json({
      status: SUCCESS,
      data: trans,
    });
  } catch (e) {
    res.status(500).json({
      status: FAILURE,
      message: `something went wrong -${e.message}`,
    });
  }
};


module.exports = {
  getAlltransactions,
  createTransaction,
  deleteTransaction,
};
