import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Stuff } from './entities/stuff.entity';

@Resolver('stuff')
export class StuffResolver {
  constructor(private readonly stuffService: StuffService) {}

  @Mutation(() => Stuff)
  create(@Args('create stuff') createStuffDto: CreateStuffDto) {
    return this.stuffService.create(createStuffDto);
  }

  @Query(() => Stuff)
  findAll() {
    return this.stuffService.findAll();
  }

  @Query(() => Stuff)
  findOne(@Args('id') id: string) {
    return this.stuffService.findOne(+id);
  }

  @Mutation(() => Stuff)
  update(
    @Args('id', {
      type: () => ID,
    })
    id: number,
    @Args('update stuff') updateStuffDto: UpdateStuffDto,
  ) {
    return this.stuffService.update(+id, updateStuffDto);
  }

  @Mutation(() => ID)
  remove(
    @Args('id', {
      type: () => ID,
    })
    id: number,
  ) {
    return this.stuffService.remove(+id);
  }
}
