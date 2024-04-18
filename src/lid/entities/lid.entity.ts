import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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

  

//   @ManyToMany(() => lid_stage, (book) => book.users, {
//     cascade: true,
//   })
//   @JoinTable()
//   book: Books[];
}





