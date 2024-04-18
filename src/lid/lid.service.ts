import { Injectable } from '@nestjs/common';
import { CreateLidDto } from './dto/create-lid.dto';
import { UpdateLidDto } from './dto/update-lid.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lid } from './entities/lid.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LidService {
  findOneandUpdate(arg0: number, updateLidDto: UpdateLidDto) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Lid)
    private readonly lidRepo: Repository<Lid>,
  ) {}

  create(createLidDto: CreateLidDto) {
    const { first_name,last_name,test_date,test_time } = createLidDto;
    return this.lidRepo.save({
      first_name,
      last_name,
      test_date,
      test_time,
    });
  }

  findAll() {
    return this.lidRepo.find();
  }

  findOne(id: number) {
    return this.lidRepo.findOneBy({id});
  }

  update(id: number, updateLidDto: UpdateLidDto) {
    return this.lidRepo.update({id}, updateLidDto);
  }

  remove(id: number) {
    return this.lidRepo.delete({id});
  }
}
