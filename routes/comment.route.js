const { Router } = require('express');
const { commentController } = require('../controllers/comments.controller');

const router = Router();

router.get('/comments', commentController.getComment);
router.post('/comments/:id', commentController.createComment);
router.delete('/comments/:id', commentController.deleteComment);

module.exports = router;