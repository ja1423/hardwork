import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { LidStage } from "../../lid_stage/entities/lid_stage.entity";
import { LidStatus } from "../../lid_status/entities/lid_status.entity";
import { ReasonLid } from "../../reason_lid/entities/reason_lid.entity";
import { Target } from "../../target/entities/target.entity";

@Entity('lid')
export class Lid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: number;

  @Column()
  test_date: Date;

  @Column()
  test_time: Date;

  @ManyToOne(() => LidStage, (lidstage) => lidstage.lidstage)
  lidstage: LidStage[];

  @ManyToOne(() => LidStatus, (lidstatus) => lidstatus.lidstatus)
  lidstatus: LidStatus[];
  lid: any;

  @ManyToOne(() => ReasonLid, (reasonlid) => reasonlid.reason)
  reason: ReasonLid;

  @ManyToOne(() => Target, (target) => target.name)
  target: Target;
}





