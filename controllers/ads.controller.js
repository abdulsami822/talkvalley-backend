const httpStatus = require("http-status");
const { adsService } = require("../services");

const insertAd = async (req, res, next) => {
  try {
    const { body } = req;
    const ad = await adsService.insertAd(body);
    res.status(httpStatus.OK).send(ad);
  } catch (error) {
    next(error);
  }
};

const getAllAds = async (req, res, next) => {
  try {
    const ads = await adsService.getAllAds();
    res.status(httpStatus.OK).send(ads);
  } catch (error) {
    next(error);
  }
};
const getAd = async (req, res, next) => {
  try {
    const { params } = req;
    const ad = await adsService.getAdById(params);
    res.status(httpStatus.OK).send(ad);
  } catch (error) {
    next(error);
  }
};

const searchAds = async (req, res, next) => {
  try {
    const { query } = req;
    const ads = await adsService.searchAd(query);
    res.status(httpStatus.OK).send(ads);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  insertAd,
  getAllAds,
  getAd,
  searchAds,
};
