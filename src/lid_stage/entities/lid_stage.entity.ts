import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lid } from "../../lid/entities/lid.entity";


@Entity()
export class LidStage {
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  lidstage: string;

  @Column()
  name: string;


  @OneToMany(() => Lid, (lid) => lid.lidstage)
  lids: Lid[];
}
