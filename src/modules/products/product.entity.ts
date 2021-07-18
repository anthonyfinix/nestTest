import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({ default: true })
    isActive: boolean
}