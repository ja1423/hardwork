import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LidStatusService } from './lid_status.service';
import { CreateLidStatusDto } from './dto/create-lid_status.dto';
import { UpdateLidStatusDto } from './dto/update-lid_status.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LidStatus } from './entities/lid_status.entity';

@Resolver('lid-status')
export class LidStatusResolver {
  constructor(private readonly lidStatusService: LidStatusService) {}

  @Mutation(() => LidStatus)
  create(@Args('create lidstatus') createLidStatusDto: CreateLidStatusDto) {
    return this.lidStatusService.create(createLidStatusDto);
  }

  @Query(() => LidStatus)
  findAll() {
    return this.lidStatusService.findAll();
  }

  @Query(() => LidStatus)
  findOne(@Args('id') id: string) {
    return this.lidStatusService.findOne(+id);
  }

  @Mutation(() => LidStatus)
  update(
    @Args('id', {
      type: () => ID,
    })
    id: number,
    @Args('update lidstatus') updateLidStatusDto: UpdateLidStatusDto,
  ) {
    return this.lidStatusService.update(+id, updateLidStatusDto);
  }

  @Mutation(() => ID)
  remove(
    @Args('id', {
      type: () => ID,
    })
    id: number,
  ) {
    return this.lidStatusService.remove(+id);
  }
}
