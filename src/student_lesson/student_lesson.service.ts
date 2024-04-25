import { Injectable } from '@nestjs/common';
import { CreateStudentLessonInput } from './dto/create-student_lesson.input';
import { UpdateStudentLessonInput } from './dto/update-student_lesson.input';

@Injectable()
export class StudentLessonService {
  create(createStudentLessonInput: CreateStudentLessonInput) {
    return 'This action adds a new studentLesson';
  }

  findAll() {
    return `This action returns all studentLesson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentLesson`;
  }

  update(id: number, updateStudentLessonInput: UpdateStudentLessonInput) {
    return `This action updates a #${id} studentLesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentLesson`;
  }
}
