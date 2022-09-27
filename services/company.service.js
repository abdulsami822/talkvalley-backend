const Company = require("../models/company.model");

const insertCompany = async (companyData) => {
  const company = await Company.create(companyData);
  return company;
};

const getCompanyById = async ({ id }) => {
  const company = await Company.findOne({ _id: id });
  return company;
};

const getAllCompanies = async () => {
  const companies = Company.find();
  return companies;
};

module.exports = {
  insertCompany,
  getCompanyById,
  getAllCompanies,
};
