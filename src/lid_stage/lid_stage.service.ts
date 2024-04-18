import { Injectable } from '@nestjs/common';
import { CreateLidStageDto } from './dto/create-lid_stage.dto';
import { UpdateLidStageDto } from './dto/update-lid_stage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LidStage } from './entities/lid_stage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LidStageService {
  findOneandUpdate(arg0: number, updateLidStageDto: UpdateLidStageDto) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectRepository(LidStage) private readonly lidstageRepo:Repository<LidStage>){}
  create(createLidStageDto: CreateLidStageDto) {
    return this.lidstageRepo.save(createLidStageDto);
  }

  findAll() {
    return this.lidstageRepo.find();
  }

  findOne(id: number) {
    return this.lidstageRepo.findOne({where:{id}});
  }

  update(id: number, updateLidStageDto: UpdateLidStageDto) {
    return this.lidstageRepo.update({id},updateLidStageDto);
  }

  remove(id: number) {
    return this.lidstageRepo.delete({id});
  }
}
