import { Injectable } from '@nestjs/common';
import { CreateLidStatusDto } from './dto/create-lid_status.dto';
import { UpdateLidStatusDto } from './dto/update-lid_status.dto';

@Injectable()
export class LidStatusService {
  create(createLidStatusDto: CreateLidStatusDto) {
    return 'This action adds a new lidStatus';
  }

  findAll() {
    return `This action returns all lidStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lidStatus`;
  }

  update(id: number, updateLidStatusDto: UpdateLidStatusDto) {
    return `This action updates a #${id} lidStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} lidStatus`;
  }
}
