import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lid } from "../../lid/entities/lid.entity";

export class ReasonLid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reason: string;

  @OneToMany(() => Lid, (lid) => lid.lid)
  lids: Lid[];
}
