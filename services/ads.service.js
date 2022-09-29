const Ads = require("../models/ads.model");
const Company = require("../models/company.model");

const insertAd = async (adData) => {
  const ad = await Ads.create(adData);
  return ad;
};

const getAllAds = async () => {
  const ads = await Ads.find().populate("companyId");
  return ads;
};

const getAdById = async ({ id }) => {
  const ad = await Ads.findById(id).populate("companyId");
  return ad;
};

const searchAd = async ({ value }) => {
  //search companies collection
  const companies = await Company.find({ $text: { $search: value } });
  const companyIds = companies.map((company) => company._id);

  //search ads collection
  const ads = await Ads.find({ $text: { $search: value } }).populate(
    "companyId"
  );

  const adsWithCompanies = await Ads.find({
    companyId: { $in: companyIds },
  }).populate("companyId");

  const concatDocs = ads.concat(adsWithCompanies);

  //remove duplicate documents
  const distinctDocs = [
    ...new Map(concatDocs.map((doc) => [doc.id, doc])).values(),
  ];

  //return both concatenated
  return distinctDocs;
};

module.exports = {
  insertAd,
  getAllAds,
  getAdById,
  searchAd,
};
