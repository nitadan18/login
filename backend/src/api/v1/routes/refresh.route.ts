import express, { Request, Response, Router } from 'express';

const RefreshController = require('../controllers/refresh.controller');

const router: Router = express.Router();

// @route   POST /api/v1/login
// @desc    Login username and password
// @access  Public
router.post('/', (req, res) =>
RefreshController.handlerRefresh(req, res),
);

module.exports = router;