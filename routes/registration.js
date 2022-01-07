const express = require('express');

const router = express.Router();

const controller = require('../controllers/registrationController');

const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.guest, controller.registration);

module.exports = router;

