const httpStatus = require("http-status");
const ApiError = require("../middlewares/ApiError");
const Company = require("../models/company.model");

const insertCompany = async (companyData) => {
  const createdCompany = await Company.create(companyData);
  return createdCompany;
};

const getCompanyByName = async (name) => {
  const company = await Company.findOne({ name });
  return company;
};

module.exports = {
  insertCompany,
  getCompanyByName,
};
