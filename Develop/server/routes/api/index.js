const router = require('express').Router();
const userRoutes = require('./user');
const commentRoutes = require('./comment');
const favoriteRoutes = require('./favorites');

// Mount sub-routers under specific base paths
router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/favorites', favoriteRoutes);

module.exports = router;
