import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Stuff } from "../../stuff/entities/stuff.entity";
import { Group } from "../../group/entities/group.entity";

@Entity()
export class GroupStuff {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Stuff, (stuff) => stuff.group_stuff)
  group_stuff: Stuff[];


  @ManyToOne(() => Group, (group) => group.group)
  group: Group[];



}
