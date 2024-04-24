import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Role } from './entities/role.entity';

@Resolver('role')
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Mutation(() => Role)
  create(@Args('create role') createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Query(() => Role)
  findAll() {
    return this.roleService.findAll();
  }

  @Query(() => Role)
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Mutation(() => Role)
  update(
    @Args('id', {
      type: () => ID,
    })
    id: number,
    @Args('update role') updateRoleDto: UpdateRoleDto,
  ) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @Mutation(() => ID)
  remove(
    @Args('id', {
      type: () => ID,
    })
    id: number,
  ) {
    return this.roleService.remove(+id);
  }
}
