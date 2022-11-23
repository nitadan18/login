import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { AccessTokenService } from '../services/accessToken.service';
const verifyPassword = require('../helper/verifyPassword');
import generateHash from '../helper/generateHash';
import jwt from 'jsonwebtoken';

class LoginController {
    private userService: UserService;
    private accessTokenService: AccessTokenService;

    constructor() {
        this.userService = new UserService();
        this.accessTokenService = new AccessTokenService();
    }

    async handlerLogin(req: Request, res: Response) {
        const { userName, passWord } = req.body;

        const foundUser = await this.findUsername(userName);
        const user = JSON.parse(JSON.stringify(foundUser));
        if (!user) {
            return res.status(401).json({
                message: `Username not found`,
            });
        }

        const isAccount = await this.checkPassword(user[0], passWord);
        if (!isAccount) {
            return res.status(401).json({
                message: `Account not found`,
            });
        }

        const userId = user[0].id;
        const accessToken = this.createAccessToken(userName);
        const refreshToken = this.createRefreshToken(accessToken);

        const accessTokens = await this.accessTokenService.createAccessToken({
            userid: userId,
            access_token: accessToken,
            refresh_token: refreshToken,
        });

        return res.status(200).json({
            'access_token': accessToken,
            'token_type': 'bearer',
            'refresh_token': refreshToken,
            'scope': '',
        });
    }

    private async findUsername(userName: String) {
        return await this.userService.filterUser({
            username: userName,
        });
    }

    private async checkPassword(users, password: string) {
        const ecryptedPassword = users.password;
        return await verifyPassword(password, ecryptedPassword);
    }

    private createAccessToken(username: string): string {
        return jwt.sign(
            { username: username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRY },
        );
    }

    private createRefreshToken(string: string): string {
        return generateHash(string);
    }
}

module.exports = new LoginController();
