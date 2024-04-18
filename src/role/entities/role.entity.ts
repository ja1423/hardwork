import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StuffRole } from "../../stuff_role/entities/stuff_role.entity";
import { Stuff } from "../../stuff/entities/stuff.entity";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => StuffRole, (stuff_role) => stuff_role.stuff_role)
  role: StuffRole[];
}
