const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const noteController = require('../controllers/noteController');
const requireLogin = require('../middlewares/requireLogin');
const catchErrors = require('../middlewares/catchErrors');

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
  catchErrors(noteController.getNote)
);

router.get('/notes',
  requireLogin,
  catchErrors(noteController.getNotes)
);

router.post('/notes',
  requireLogin,
  catchErrors(noteController.createNote)
);

router.put('/notes/:id',
  requireLogin,
  catchErrors(noteController.updateNote)
);

router.delete('/notes/:id',
  requireLogin,
  catchErrors(noteController.deleteNote)
);

module.exports = router;
