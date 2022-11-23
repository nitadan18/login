import {
    Table,
    Column,
    Model,
    DataType,
    AutoIncrement,
    PrimaryKey,
} from 'sequelize-typescript';

@Table({
    tableName: 'access_tokens',
    timestamps: false,
    freezeTableName: true,
})
export class AccessToken extends Model<AccessToken> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    userid: number;

    @Column
    access_token: string;

    @Column
    refresh_token: string;
}
