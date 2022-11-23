import express, { Request, Response, Router } from 'express';
import checkUsername from '../middleware/checkUsername';
import checkPassword from '../middleware/checkPassword';

const LoginController = require('../controllers/login.controller');

const router: Router = express.Router();

// @route   POST /api/v1/login
// @desc    Login username and password
// @access  Public
router.post('/', [checkUsername, checkPassword], (req, res) =>
    LoginController.handlerLogin(req, res),
);

module.exports = router;
