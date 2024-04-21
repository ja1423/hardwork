import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GroupService {
  findOneandUpdate(arg0: number, updateGroupDto: UpdateGroupDto) {
    throw new Error('Method not implemented.');
  }

  constructor(
    @InjectRepository(Group)
    private readonly groupRepo: Repository<Group>,
  ) {}

  create(createGroupDto: CreateGroupDto) {
    return this.groupRepo.save(createGroupDto)
  }

  findAll() {
    return this.groupRepo.find();
  }

  findOne(id: number) {
    return this.groupRepo.findOneBy({id});
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return this.groupRepo.update({id},updateGroupDto);
  }

  remove(id: number) {
    return this.groupRepo.delete({id});
  }
}
