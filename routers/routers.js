
const express = require('express');
const router = express.Router();
const { postCardController, getAllCardsController } = require('../controllers/controllers');

router.post('/api/cards', postCardController);
router.get('/api/cards', getAllCardsController);

module.exports = router;
