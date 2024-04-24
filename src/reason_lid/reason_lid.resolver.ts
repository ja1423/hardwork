import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReasonLidService } from './reason_lid.service';
import { CreateReasonLidDto } from './dto/create-reason_lid.dto';
import { UpdateReasonLidDto } from './dto/update-reason_lid.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReasonLid } from './entities/reason_lid.entity';

@Resolver('reason-lid')
export class ReasonLidResolver {
  constructor(private readonly reasonLidService: ReasonLidService) {}

  @Mutation(() => ReasonLid)
  createReasonLid(@Args('create ReasonLid') createReasonLidDto: CreateReasonLidDto) {
    return this.reasonLidService.create(createReasonLidDto);
  }

  @Query(() => [ReasonLid])
  findAllReasonLid() {
    return this.reasonLidService.findAll();
  }

  @Query(() => [ReasonLid])
  findOneReasonLid(@Param('id') id: string) {
    return this.reasonLidService.findOne(+id);
  }

  @Mutation(() => ReasonLid)
  updateReasonLid(
    @Args('id', {
      type: () => ID,
    })
    id: number,
    @Args('updateReasonLid') updateReasonLidDto: UpdateReasonLidDto,
  ) {
    return this.reasonLidService.update(id,   updateReasonLidDto
);
  }

  @Mutation(() => ID)
  removeReasonLid(
    @Args('id', {
      type: () => ID,
    })
    id: number,
  ) {
    return this.reasonLidService.remove(id);
  }
}

