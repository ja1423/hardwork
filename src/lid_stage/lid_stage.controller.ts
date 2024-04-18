import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LidStageService } from './lid_stage.service';
import { CreateLidStageDto } from './dto/create-lid_stage.dto';
import { UpdateLidStageDto } from './dto/update-lid_stage.dto';

@Controller('lid-stage')
export class LidStageController {
  constructor(private readonly lidStageService: LidStageService) {}

  @Post()
  create(@Body() createLidStageDto: CreateLidStageDto) {
    return this.lidStageService.create(createLidStageDto);
  }

  @Get()
  findAll() {
    return this.lidStageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lidStageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLidStageDto: UpdateLidStageDto) {
    return this.lidStageService.update(+id, updateLidStageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lidStageService.remove(+id);
  }
}
