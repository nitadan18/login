import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import logger from '../services/logger.service';
const hashPassword = require('../helper/hashPassword');

class RegisterController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async handlerRegisterUser(req: Request, res: Response) {
        const { userName, passWord } = req.body;

        const checkDuplicateByUsername =
            this.checkDuplicateByUsername(userName);

        if (!checkDuplicateByUsername) {
            return res.status(400).json({
                message: `Duplicate username ${userName}`,
            });
        }

        const hashedPasswword = await hashPassword(passWord);
        const users = await this.userService.createUser({
            username: userName,
            password: hashedPasswword,
        });

        logger.info(`New account has been created : ${JSON.stringify(users)}`);

        res.status(201).json({
            message: 'New account has been created',
        });
    }

    private async checkDuplicateByUsername(userName: String) {
        const filterUsername = await this.userService.filterUser({
            username: userName,
        });

        return filterUsername ? true : false;
    }
}

module.exports = new RegisterController();
