import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Group } from './entities/group.entity';

@Resolver('group')
export class GroupResolver {
  constructor(private readonly groupService: GroupService) {}

  @Mutation(() => Group)
  create(@Args('create group') createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Query(() => [Group])
  findAll() {
    return this.groupService.findAll();
  }

  @Query(() => [Group])
  findOne(@Args('id') id: string) {
    return this.groupService.findOne(+id);
  }

  @Mutation(() => [Group])
  update(
    @Args('id', {
      type: () => ID,
    })
    id: number,
    @Args('update group') updateGroupDto: UpdateGroupDto,
  ) {
    return this.groupService.update(+id, updateGroupDto);
  }

  @Mutation(() => ID)
  remove(
    @Args('id', {
      type: () => ID,
    })
    id: number,
  ) {
    return this.groupService.remove(+id);
  }
}
