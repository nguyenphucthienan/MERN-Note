const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const requireLogin = require('../middlewares/requireLogin');

router.get('/api/login/google', authController.googleLogin);

router.get('/api/login/google/callback',
  authController.googleLoginCallback,
  authController.googleCallback
);

router.get('/api/logout', authController.logout);

router.get('/api/me', authController.currentUser
);

module.exports = router;
