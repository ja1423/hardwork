import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lid } from "../../lid/entities/lid.entity";


@Entity('lidstatus')
export class LidStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lidstatus: string;

  @OneToMany(() => Lid, (lid) => lid.lid)
  lids: Lid[];

}
