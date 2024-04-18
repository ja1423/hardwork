import { Injectable } from '@nestjs/common';
import { CreateReasonLidDto } from './dto/create-reason_lid.dto';
import { UpdateReasonLidDto } from './dto/update-reason_lid.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReasonLid } from './entities/reason_lid.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReasonLidService {
  findOneandUpdate(arg0: number, updatereasonLidDto: UpdateReasonLidDto) {
    throw new Error('Method not implemented.');
  }


constructor(@InjectRepository(ReasonLid)private readonly reasonLidRepo:Repository<ReasonLid>){

}
  create(createReasonLidDto: CreateReasonLidDto) {
    return this.reasonLidRepo.save(createReasonLidDto);
  }

  findAll() {
    return this.reasonLidRepo.find();
  }

  findOne(id: number) {
    return this.reasonLidRepo.findOneBy({id});
  }

  update(id: number, updateReasonLidDto: UpdateReasonLidDto) {
    return this.reasonLidRepo.update({id}, updateReasonLidDto);
  }

  remove(id: number) {
    return this.reasonLidRepo.delete({id});
  }
}
