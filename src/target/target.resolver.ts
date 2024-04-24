import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TargetService } from './target.service';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Target } from './entities/target.entity';

@Resolver('target')
export class TargetResolver {
  constructor(private readonly targetService: TargetService) {}

  @Mutation(() => Target)
  create(@Args('create target') createTargetDto: CreateTargetDto) {
    return this.targetService.create(createTargetDto);
  }

  @Query(() => Target)
  findAll() {
    return this.targetService.findAll();
  }

  @Query(() => Target)
  findOne(@Args('id') id: string) {
    return this.targetService.findOne(+id);
  }

  @Mutation(() => Target)
  update(
    @Args('id', {
      type: () => ID,
    })
    id: number,
    @Args('update target') updateTargetDto: UpdateTargetDto,
  ) {
    return this.targetService.update(+id, updateTargetDto);
  }

  @Mutation(() => ID)
  remove(
    @Args('id', {
      type: () => ID,
    })
    id: number,
  ) {
    return this.targetService.remove(+id);
  }
}
