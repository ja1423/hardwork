import { Injectable } from '@nestjs/common';
import { CreateLidStageDto } from './dto/create-lid_stage.dto';
import { UpdateLidStageDto } from './dto/update-lid_stage.dto';

@Injectable()
export class LidStageService {
  create(createLidStageDto: CreateLidStageDto) {
    return 'This action adds a new lidStage';
  }

  findAll() {
    return `This action returns all lidStage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lidStage`;
  }

  update(id: number, updateLidStageDto: UpdateLidStageDto) {
    return `This action updates a #${id} lidStage`;
  }

  remove(id: number) {
    return `This action removes a #${id} lidStage`;
  }
}
