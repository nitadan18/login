import logger from '../services/logger.service';
import { connect } from '../config/db.config';
import { User } from '../models/user.model';

export class UserRepository {
    private db: any = {};
    private userRespository: any;

    constructor() {
        this.db = connect();
        this.userRespository = this.db.sequelize.getRepository(User);
    }

    async getUsers() {
        try {
            return await this.userRespository.findAll();
        } catch (err: unknown) {
            logger.error('ERROR : ' + (err as Error).message);
            return [];
        }
    }

    async createUser(user) {
        try {
            return await this.userRespository.create(user);
        } catch (err: unknown) {
            logger.error('ERROR : ' + (err as Error).message);
        }
    }

    async filterUser(filter) {
        try {
            return await this.userRespository.findAll({ where: filter });
        } catch (err: unknown) {
            logger.error('ERROR : ' + (err as Error).message);
        }
    }
}
