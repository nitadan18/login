import logger from '../services/logger.service';
import { connect } from '../config/db.config';
import { AccessToken } from '../models/accessToken.model';

export class AccessTokenRespository {
    private db: any = {};
    private accessTokenRespository: any;

    constructor() {
        this.db = connect();
        this.accessTokenRespository =
            this.db.sequelize.getRepository(AccessToken);
    }

    async createAccessToken(accessToken) {
        try {
            return await this.accessTokenRespository.create(accessToken);
        } catch (err: unknown) {
            logger.error('ERROR : ' + (err as Error).message);
        }
    }

    async filterAccessToken(filter) {
        try {
            return await this.accessTokenRespository.findAll({ where: filter });
        } catch (err: unknown) {
            logger.error('ERROR : ' + (err as Error).message);
        }
    }

    async deleteAccessToken(filter) {
        try {
            return await this.accessTokenRespository.destroy({ where: filter });
        } catch (err: unknown) {
            logger.error('ERROR : ' + (err as Error).message);
        }
    }
}
