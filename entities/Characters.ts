import {
    Entity, PrimaryGeneratedColumn,
    BaseEntity, Column,
    ManyToMany, JoinTable
} from 'typeorm';

import { User } from "./User"

@Entity()
export class Character extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    BirthYear: number;

    @Column()
    Gender: string;

    @Column()
    Height: number;

    @Column()
    SkinColor: string;

    @Column()
    EyeColor: string;

    @Column()
    Image: string;

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];
}