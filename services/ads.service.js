const Ads = require("../models/ads.model");

const insertAd = async (adData) => {
  const ad = await Ads.create(adData);
  return ad;
};

const getAllAds = async () => {
  const ads = await Ads.find().populate("companyId");
  return ads;
};

const getAdById = async ({ id }) => {
  const ad = await Ads.find({ _id: id }).populate("companyId");
  return ad;
};

module.exports = {
  insertAd,
  getAllAds,
  getAdById,
};
