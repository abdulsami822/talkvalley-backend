const httpStatus = require("http-status");
const ApiError = require("../middlewares/ApiError");
const catchAsync = require("../middlewares/catchAsync");
const { companyService } = require("../services");

const insertCompany = async (req, res, next) => {
  try {
    const company = await companyService.insertCompany(req.body);
    res.status(httpStatus.OK).send(company);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  insertCompany,
};
