import { Injectable } from '@nestjs/common';
import { CreateLidDto } from './dto/create-lid.dto';
import { UpdateLidDto } from './dto/update-lid.dto';

@Injectable()
export class LidService {
  
  create(createLidDto: CreateLidDto) {
    return 'This action adds a new lid';
  }

  findAll() {
    return `This action returns all lid`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lid`;
  }

  update(id: number, updateLidDto: UpdateLidDto) {
    return `This action updates a #${id} lid`;
  }

  remove(id: number) {
    return `This action removes a #${id} lid`;
  }
}
