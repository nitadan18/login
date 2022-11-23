import { Request, Response, NextFunction } from 'express';

const checkPassword = (req: Request, res: Response, next: NextFunction) => {
    const { passWord } = req.body;

    if (!passWord) {
        return res.status(400).json({
            message: `Missing mandatory parameter [password].`,
        });
    }

    next();
};

export default checkPassword;
