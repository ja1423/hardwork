import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupStuffService } from './group_stuff.service';
import { CreateGroupStuffDto } from './dto/create-group_stuff.dto';
import { UpdateGroupStuffDto } from './dto/update-group_stuff.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GroupStuff } from './entities/group_stuff.entity';

@Resolver('group-stuff')
export class GroupStuffResolver {
  constructor(private readonly groupStuffService: GroupStuffService) {}

  @Mutation(() => GroupStuff)
  create(@Args('create group stuff') createGroupStuffDto: CreateGroupStuffDto) {
    return this.groupStuffService.create(createGroupStuffDto);
  }

  @Query(() => [GroupStuff])
  findAll() {
    return this.groupStuffService.findAll();
  }

  @Query(() => [GroupStuff])
  findOne(@Args('id') id: string) {
    return this.groupStuffService.findOne(+id);
  }

  @Mutation(() => [GroupStuff])
  update(
    @Args('id', {
      type: () => ID,
    })
    id: number,
    @Args('update GroupStuff') updateGroupStuffDto: UpdateGroupStuffDto,
  ) {
    return this.groupStuffService.update(+id, updateGroupStuffDto);
  }

  @Mutation(() => ID)
  remove(@Args('id', {
      type: () => ID,
    }) id: number) {
    return this.groupStuffService.remove(+id);
  }
}
