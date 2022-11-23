import { Request, Response } from 'express';

class RefreshController {
    constructor() {}

    async handlerRefresh(req: Request, res: Response) {
        return res.status(200).json({
            'message': 'Refresh token',
        });
    }
}

module.exports = new RefreshController();