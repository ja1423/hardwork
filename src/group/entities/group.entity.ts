import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GroupStuff } from "../../group_stuff/entities/group_stuff.entity";
import { LidStage } from "../../lid_stage/entities/lid_stage.entity";
import { Branch } from "../../branch/entities/branch.entity";


@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  start_time: number;

  @Column()
  constinuos: string;

  @Column()
  week_day: string;

  @Column()
  room_number: number;

  @Column()
  room_flour:number;

  @Column()
  lesson_quantity: number;

  @Column()
  is_active:boolean;


  @OneToMany(() => GroupStuff, (groupStuff) => groupStuff.group)
  group: GroupStuff[];

  @ManyToOne(() => LidStage, (lid_stage) => lid_stage.stage)
  stage: LidStage[];

  @ManyToOne(() => Branch, (branch) => branch.branch)
  branch: Branch[];
}
