import { Request, Response } from 'express';
import { AccessTokenService } from '../services/accessToken.service';
const decodeJwt = require('../helper/decodeJwt');

class LogoutController {
    private accessTokenService: AccessTokenService;

    constructor() {
        this.accessTokenService = new AccessTokenService();
    }

    async handlerLogout(req: Request, res: Response) {
        const token = res.locals.token;
        const payloadJwt = decodeJwt(token);

        const username = payloadJwt['username'];

        const checkAccessToken = await this.findAccessToken(token);
        if (!checkAccessToken.length) {
            return res.status(401).json({
                message: `AccesToken not found`,
            });
        }

        const confirmDeleteToken = await this.deleteAccessToken(token);
        if (confirmDeleteToken) {
            return res.status(204);
        }
    }

    private async findAccessToken(token: String) {
        const accessToken = await this.accessTokenService.filterAccessToken({
            access_token: token,
        });

        return JSON.parse(JSON.stringify(accessToken));
    }

    private async deleteAccessToken(token) {
        return await this.accessTokenService.deleteAccessToken({
            access_token: token,
        });
    }
}

module.exports = new LogoutController();
