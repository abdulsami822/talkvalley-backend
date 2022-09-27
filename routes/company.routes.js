const router = require("express").Router();
const { companyController } = require("../controllers");

router.post("/", companyController.insertCompany);
router.get("/:id", companyController.getCompany);
router.get("/", companyController.getAllCompanies);

module.exports = router;
