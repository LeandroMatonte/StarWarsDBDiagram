import {
    Entity, PrimaryGeneratedColumn,
    BaseEntity, Column
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    LastName: string;

    @Column()
    Email: string;

    @Column()
    Password: string;
}