import { Injectable } from '@nestjs/common';
import { CreateGroupStuffDto } from './dto/create-group_stuff.dto';
import { UpdateGroupStuffDto } from './dto/update-group_stuff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupStuff } from './entities/group_stuff.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupStuffService {
  findOneandUpdate(arg0: number, updateGroupStuffDto: UpdateGroupStuffDto) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectRepository(GroupStuff) private readonly groupStuffRepo:Repository <GroupStuff>)
  {}

  create(createGroupStuffDto: CreateGroupStuffDto) {
    return this.groupStuffRepo.save(createGroupStuffDto);
  }

  findAll() {
    return this.groupStuffRepo.find();
  }

  findOne(id: number) {
    return this.groupStuffRepo.findBy({id});
  }

  update(id: number, updateGroupStuffDto: UpdateGroupStuffDto) {
    return this.groupStuffRepo.update({id}, updateGroupStuffDto);
  }

  remove(id: number) {
    return this.groupStuffRepo.delete({id});
  }
}
