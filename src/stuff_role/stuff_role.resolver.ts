import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StuffRoleService } from './stuff_role.service';
import { CreateStuffRoleDto } from './dto/create-stuff_role.dto';
import { UpdateStuffRoleDto } from './dto/update-stuff_role.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StuffRole } from './entities/stuff_role.entity';

@Resolver('stuff-role')
export class StuffRoleResolver {
  constructor(private readonly stuffRoleService: StuffRoleService) {}

  @Mutation(() => StuffRole)
  create(@Args('create stuff-role') createStuffRoleDto: CreateStuffRoleDto) {
    return this.stuffRoleService.create(createStuffRoleDto);
  }

  @Query(() => StuffRole)
  findAll() {
    return this.stuffRoleService.findAll();
  }

  @Query(() => StuffRole)
  findOne(@Args('id') id: string) {
    return this.stuffRoleService.findOne(+id);
  }

  @Mutation(() => StuffRole)
  update(
    @Args('id', {
      type: () => ID,
    })
    id: number,
    @Args('update stuff-role') updateStuffRoleDto: UpdateStuffRoleDto,
  ) {
    return this.stuffRoleService.update(+id, updateStuffRoleDto);
  }

  @Mutation(() => ID)
  remove(
    @Args('id', {
      type: () => ID,
    })
    id: number,
  ) {
    return this.stuffRoleService.remove(+id);
  }
}
