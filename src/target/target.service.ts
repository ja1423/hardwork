import { Injectable } from '@nestjs/common';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
import { Repository } from 'typeorm';
import { Target } from './entities/target.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TargetService {
  findOneandUpdate(arg0: number, updatetargetDto: UpdateTargetDto) {
    throw new Error('Method not implemented.');
  }

  constructor(
    @InjectRepository(Target)
    private readonly targetRepo: Repository<Target>,
  ) {}

  create(createTargetDto: CreateTargetDto) {
    return this.targetRepo.save(createTargetDto);
  }

  findAll() {
    return this.targetRepo.find();
  }

  findOne(id: number) {
    return this.targetRepo.findOneBy({id});
  }

  update(id: number, updateTargetDto: UpdateTargetDto) {
    return this.targetRepo.update({id}, updateTargetDto);
  }

  remove(id: number) {
    return this.targetRepo.delete({id});
  }
}
