const httpStatus = require("http-status");
const ApiError = require("../middlewares/ApiError");
const { companyService } = require("../services");

const insertCompany = async (req, res, next) => {
  try {
    const { body } = req;
    const company = await companyService.insertCompany(body);
    res.status(httpStatus.OK).send(company);
  } catch (error) {
    next(error);
  }
};

const getCompany = async (req, res, next) => {
  try {
    const { params } = req;
    const company = await companyService.getCompanyById(params);
    if (!company) {
      throw new ApiError(httpStatus.NOT_FOUND, "company not found");
    }
    res.status(httpStatus.OK).send(company);
  } catch (error) {
    next(error);
  }
};

const getAllCompanies = async (req, res, next) => {
  try {
    const companies = await companyService.getAllCompanies();
    res.status(httpStatus.OK).send(companies);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  insertCompany,
  getCompany,
  getAllCompanies,
};
