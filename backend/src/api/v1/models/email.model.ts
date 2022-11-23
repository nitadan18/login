import {
    Table,
    Column,
    Model,
    DataType,
    AutoIncrement,
    PrimaryKey,
} from 'sequelize-typescript';

@Table({
    tableName: 'emails',
    timestamps: false,
    freezeTableName: true,
})
export class Email extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    userid: number;

    @Column
    email: string;
}
