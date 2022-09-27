const router = require("express").Router();
const companyRoutes = require("./company.routes");
const adsRoutes = require("./ads.routes");

router.use("/company", companyRoutes);
router.use("/ads", adsRoutes);

module.exports = router;
