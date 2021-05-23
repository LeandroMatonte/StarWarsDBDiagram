import {
    Entity, PrimaryGeneratedColumn,
    BaseEntity, Column,
    ManyToMany, JoinTable
} from 'typeorm';

import { User } from "./User"

@Entity()
export class Planet extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    Climate: string;

    @Column()
    Diameter: number;

    @Column()
    Gravity: string;

    @Column()
    Population: number;

    @Column()
    Terrain: string;

    @Column()
    Image: string;

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];
}