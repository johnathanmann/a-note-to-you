const router = require('express').Router();
const { getNoteByUniqId } = require('../../controllers/noteController')

router.route('/note').get(getNoteByUniqId)

module.exports = router;
