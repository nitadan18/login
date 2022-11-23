import { AccessTokenRespository } from '../repository/accessToken.repository';

export class AccessTokenService {
    private accessTokenRepository: AccessTokenRespository;

    constructor() {
        this.accessTokenRepository = new AccessTokenRespository();
    }

    async createAccessToken(accessToken) {
        return await this.accessTokenRepository.createAccessToken(accessToken);
    }

    async filterAccessToken(filter) {
        return await this.accessTokenRepository.filterAccessToken(filter);
    }

    async deleteAccessToken(filter) {
        return await this.accessTokenRepository.deleteAccessToken(filter);
    }
}
