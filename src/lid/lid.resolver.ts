import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LidService } from './lid.service';
import { CreateLidDto } from './dto/create-lid.dto';
import { UpdateLidDto } from './dto/update-lid.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Lid } from './entities/lid.entity';

@Resolver('lid')
export class LidController {
  constructor(private readonly lidService: LidService) {}

  @Mutation(() => Lid)
  create(@Args('createLid') createLidDto: CreateLidDto) {
    return this.lidService.create(createLidDto);
  }

  @Query(() => [Lid])
  findAll() {
    return this.lidService.findAll();
  }

  @Query(() => [Lid])
  @Get(':id')
  findOne(@Args('id') id: string) {
    return this.lidService.findOne(+id);
  }

  @Mutation(() => Lid)
  update(
    @Args('id', {
      type: () => ID,
    })
    id: number,
    @Args('update Lid') updateLidDto: UpdateLidDto,
  ) {
    return this.lidService.update(+id, updateLidDto);
  }

  @Mutation(() => ID)
  remove(
    @Args('id', {
      type: () => ID,
    })
    id: number,
  ) {
    return this.lidService.remove(+id);
  }
}
