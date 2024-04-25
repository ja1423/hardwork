import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from '../../group/entities/group.entity';

@Entity('lesson')
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lesson_name: string;

  @Column()
  lesson_number: number;

  @Column()
  lesson_date: Date;

  @ManyToOne(() => Group, (group) => group.group)
  group: Group;
}
