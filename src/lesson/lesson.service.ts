import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LessonService {
  findOneandUpdate(arg0: number, updateLessonDto: UpdateLessonDto) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepo: Repository<Lesson>,
  ) {}
  create(createLessondto: CreateLessonDto) {
    return this.lessonRepo.create(createLessondto);
  }

  findAll() {
    return this.lessonRepo.find();
  }

  findOne(id: number) {
    return this.lessonRepo.findOneBy({id});
  }

  update(id: number, updateLessonDto: UpdateLessonDto) {
    return this.lessonRepo.update(+id, updateLessonDto);
  }

  remove(id: number) {
    return this.lessonRepo.delete(id);;
  }
}
