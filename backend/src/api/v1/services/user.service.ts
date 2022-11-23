import { UserRepository } from '../repository/user.repository';

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUsers() {
        return await this.userRepository.getUsers();
    }

    async createUser(user) {
        return await this.userRepository.createUser(user);
    }

    async filterUser(user) {
        return await this.userRepository.filterUser(user);
    }
}
