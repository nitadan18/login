import express, { Request, Response, Router } from 'express';
import checkUsername from '../middleware/checkUsername';
import checkPassword from '../middleware/checkPassword';

const RegisterController = require('../controllers/register.controller');

const router: Router = express.Router();

// @route   POST /api/v1/register
// @desc    Register new user
// @access  Public
router.post('/', [checkUsername, checkPassword], (req, res) =>
    RegisterController.handlerRegisterUser(req, res),
);

module.exports = router;
