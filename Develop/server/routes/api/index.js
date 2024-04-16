const router = require('express').Router();
const userRoutes = require('./user');
const commentRoutes = require('./comment');
const likeRoutes = require('./like');
const favoriteRoutes = require('./favorite');

// Mount sub-routers under specific base paths
router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/like', likeRoutes);
router.use('/favorite', favoriteRoutes);

module.exports = router;
