import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user.model';
import { AccessToken } from '../models/accessToken.model';
import { Email } from '../models/email.model';

export const connect = () => {
    const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_DIALECT } =
        process.env;

    const hostName = process.env.DB_HOST;
    const userName = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const database = process.env.DB_DATABASE;
    const dialect: any = process.env.DB_DIALECT;

    const operatorsAliases: any = 0;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect,
        operatorsAliases,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000,
        },
    });

    sequelize.addModels([User]);
    sequelize.addModels([AccessToken]);
    sequelize.addModels([Email]);

    const db: any = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    return db;
};
