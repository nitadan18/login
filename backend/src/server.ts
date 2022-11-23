import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import responseTime from 'response-time';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import logger from './api/v1/services/logger.service';

const corsOptions = require('./api/v1/config/cors.config');

const app = express();

const PORT = process.env.APP_PORT || 4001;
const HOST = process.env.APP_URL || 'http://localhost:4001';

app.use(cors(corsOptions));
app.use(express.json());
app.use(responseTime());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(require('sanitize').middleware);

app.use('/api/v1/register', require('./api/v1/routes/register.route'));
app.use('/api/v1/login', require('./api/v1/routes/login.route'));
app.use('/api/v1/logout', require('./api/v1/routes/logout.route'));
app.use('/api/v1/refresh', require('./api/v1/routes/refresh.route'));

// TODO: authorization / logout / refresh

app.listen(PORT, () => {
    logger.info(`listening on port ${HOST}`);
});
