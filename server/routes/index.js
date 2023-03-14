const router = require('express').Router();
const apiRoutes = require('./api/apiRoutes');
const homeRoutes = require('./home/homeRoutes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
