const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const noteController = require('../controllers/noteController');
const requireLogin = require('../middlewares/requireLogin');

router.get('/login/google', authController.googleLogin);

router.get('/login/google/callback',
  authController.googleLoginCallback,
  authController.googleCallback
);

router.get('/logout', authController.logout);

router.get('/me', authController.currentUser
);

router.get('/notes/:id',
  requireLogin,
  noteController.getNote
);

router.get('/notes',
  requireLogin,
  noteController.getNotes
);

router.post('/notes',
  requireLogin,
  noteController.createNote
);

router.put('/notes/:id',
  requireLogin,
  noteController.updateNote
);

router.delete('/notes/:id',
  requireLogin,
  noteController.deleteNote
);

module.exports = router;
