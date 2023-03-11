const router = require("express").Router();
const {
  getNoteByUniqId
} = require("../../controllers/noteController");

router.route("/dear/:uniqId").get(getNoteByUniqId);

module.exports = router;
