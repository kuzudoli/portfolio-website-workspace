const express = require("express")
const adminController = require("../controllers/adminController")

const router = express.Router()

router.route("/").get(adminController.getAdminPage)
router.route("/educations").get(adminController.getEducationsPage)
router.route("/educations/:id").get(adminController.getEducationPage)
router.route("/skills").get(adminController.getSkillsPage)

module.exports = router;