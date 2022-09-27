const { adsController } = require("../controllers");

const router = require("express").Router();

router.post("/", adsController.insertAd);
router.get("/", adsController.getAllAds);
router.get("/:id", adsController.getAd);

module.exports = router;
