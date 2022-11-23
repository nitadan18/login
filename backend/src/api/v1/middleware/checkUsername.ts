import { Request, Response, NextFunction } from 'express';
const isEmailValid = require('../helper/isEmailValid');

const checkUsername = (req: Request, res: Response, next: NextFunction) => {
    const { userName } = req.body;

    if (!userName) {
        return res.status(400).json({
            message: `Missing mandatory parameter [username].`,
        });
    }

    const checkEmailValid = isEmailValid(userName);

    if (!checkEmailValid) {
        return res.status(400).json({
            message: `Username is not a valid email format message.`,
        });
    }

    next();
};

export default checkUsername;
