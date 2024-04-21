import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StuffRole } from "../../stuff_role/entities/stuff_role.entity";
import { GroupStuff } from "../../group_stuff/entities/group_stuff.entity";


@Entity()
export class Stuff {
    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    phone_number: string;


    @Column()
    login: string;

    @Column()
    password: string;

    @Column()
    is_active: boolean;



    
    @OneToMany(() => StuffRole, (stuff_role) => stuff_role.stuff_role)
    stuff: StuffRole[];


    @OneToMany(() => GroupStuff, (group_stuff) => group_stuff.group_stuff)
    group_stuff: GroupStuff[];
}
