import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LidStageService } from './lid_stage.service';
import { CreateLidStageDto } from './dto/create-lid_stage.dto';
import { UpdateLidStageDto } from './dto/update-lid_stage.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LidStage } from './entities/lid_stage.entity';

@Resolver('lid-stage')
export class LidStageResolver {
  constructor(private readonly lidStageService: LidStageService) {}

  @Mutation(() => LidStage)
  create(@Args('create lidstage') createLidStageDto: CreateLidStageDto) {
    return this.lidStageService.create(createLidStageDto);
  }

  @Query(() => LidStage)
  findAll() {
    return this.lidStageService.findAll();
  }

  @Query(() => LidStage)
  findOne(@Args('id') id: string) {
    return this.lidStageService.findOne(+id);
  }

  @Mutation(() => LidStage)
  update(
    @Args('id', {
      type: () => ID,
    })
    id: number,
    @Args('update lidstage') updateLidStageDto: UpdateLidStageDto,
  ) {
    return this.lidStageService.update(+id, updateLidStageDto);
  }

  @Mutation(() => ID)
  remove(
    @Args('id', {
      type: () => ID,
    })
    id: number,
  ) {
    return this.lidStageService.remove(+id);
  }
}
