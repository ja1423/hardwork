import { Injectable } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { Branch } from './entities/branch.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BranchService {
  findOneandUpdate(arg0: number, updateBranchDto: UpdateBranchDto) {
    throw new Error('Method not implemented.');
  }


  constructor(
    @InjectRepository(Branch)
    private readonly branchRepo: Repository<Branch>,
  ) {}
  create(createBranchDto: CreateBranchDto) {
    return this.branchRepo.create(createBranchDto); 
  }

  findAll() {
    return this.branchRepo.find();
  }

  findOne(id: number) {
    return this.branchRepo.findOneBy({id});
  }

  update(id: number, updateBranchDto: UpdateBranchDto) {
    return this.branchRepo.update({id}, updateBranchDto);
  }

  remove(id: number) {
    return this.branchRepo.delete({id});;
  }
}
