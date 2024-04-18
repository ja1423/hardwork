import { Injectable } from '@nestjs/common';
import { CreateStuffRoleDto } from './dto/create-stuff_role.dto';
import { UpdateStuffRoleDto } from './dto/update-stuff_role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StuffRole } from './entities/stuff_role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StuffRoleService {
  findOneandUpdate(arg0: number, updatestuffroleDto: UpdateStuffRoleDto) {
    throw new Error('Method not implemented.');
  }


  constructor(
    @InjectRepository(StuffRole)
    private readonly stuffRoleRepo: Repository<StuffRole>,
  ) {}
  create(createStuffRoleDto: CreateStuffRoleDto) {
    return this.stuffRoleRepo.save(createStuffRoleDto);
  }

  findAll() {
    return this.stuffRoleRepo.find();
  }

  findOne(id: number) {
    return this.stuffRoleRepo.findOneBy({id});
  }

  update(id: number, updateStuffRoleDto: UpdateStuffRoleDto) {
    return this.stuffRoleRepo.update({id}, updateStuffRoleDto);
  }

  remove(id: number) {
    return this.stuffRoleRepo.delete({id});
  }
}
