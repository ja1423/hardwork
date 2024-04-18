import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Stuff } from "../../stuff/entities/stuff.entity";
import { Role } from "../../role/entities/role.entity";


@Entity()
export class StuffRole {
    @PrimaryGeneratedColumn()
    id: number;

    


    @ManyToOne(() => Stuff, (stuff) => stuff.stuff)
    stuffs: Stuff[];


    @ManyToOne(() => Role, (role) => role.role)
    stuff_role: Role[];



}



