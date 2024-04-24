import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BranchService } from './branch.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Branch } from './entities/branch.entity';

@Resolver('branch')
export class BranchResolver {
  constructor(private readonly branchService: BranchService) {}

  @Mutation(() => [Branch])
  create(@Args('createBranch') createBranchDto: CreateBranchDto) {
    return this.branchService.create(createBranchDto);
  }

  @Query(() => Branch)
  findAll() {
    return this.branchService.findAll();
  }

  @Query(() => Branch)
  findOne(@Args('id') id: string) {
    return this.branchService.findOne(+id);
  }

  @Mutation(() => Branch)
  update(
    @Args('id', {
      type: () => ID,
    })
    id: number,
    @Args('updatebranch') updateBranchDto: UpdateBranchDto,
  ) {
    return this.branchService.update(+id, updateBranchDto);
  }

  @Mutation(() => ID)
  remove(
    @Args('id', {
      type: () => ID,
    })
    id: number,
  ) {
    return this.branchService.remove(+id);
  }
}
