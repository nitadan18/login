import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({
            message: `Unauthorized access`,
        });
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({
                message: `Unauthorized access. Invalid token.`,
            });
        }

        res.locals.token = token;
        next();
    });
};

export default checkJwt;
