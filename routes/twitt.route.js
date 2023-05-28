const { Router } = require('express');
const { twittController } = require('../controllers/twitts.controller');

const router = Router();

router.get('/twitts', twittController.getTwitt);
router.post('/twitts', twittController.createTwitt);
router.delete('/twitts/:id', twittController.deleteTwitt);
router.patch('/twitts/:id', twittController.patchTwitt);
router.patch('/twitts/like/:id', twittController.patchLike);

module.exports = router;