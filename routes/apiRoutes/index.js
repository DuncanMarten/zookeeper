const router = require('express').Router();
const zookeeperRoutes = require('../apiRoutes/zookeeperRoutes');
const animalRoutes = require('../apiRoutes/animalRoutes');

router.use(animalRoutes);
router.use(zookeeperRoutes);

module.exports = router;