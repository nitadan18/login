import express, { Request, Response, Router } from 'express';
import checkJwt from '../middleware/checkJwt';

const LogoutController = require('../controllers/logout.controller');

const router: Router = express.Router();

// @route   POST /api/v1/logout
// @desc    Logout
// @access  Private
router.post('/', checkJwt, (req, res) =>
    LogoutController.handlerLogout(req, res),
);

module.exports = router;
