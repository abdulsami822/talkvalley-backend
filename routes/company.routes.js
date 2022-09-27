const router = require("express").Router();
const { companyController } = require("../controllers");

router.post("/", companyController.insertCompany);

module.exports = router;
