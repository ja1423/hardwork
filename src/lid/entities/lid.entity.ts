import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { LidStage } from "../../lid_stage/entities/lid_stage.entity";
import { LidStatus } from "../../lid_status/entities/lid_status.entity";

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

 @ManyToOne(()=>LidStage,(lidstage)=>lidstage.lid)
 lidstage: LidStage


 @ManyToOne(()=>LidStatus,(lidstatus)=>lidstatus.lidstatus)
 lidstatus: LidStatus[]
  lid: any;
}





