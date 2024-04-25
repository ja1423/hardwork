import { Module } from '@nestjs/common';
import { StudentLessonService } from './student_lesson.service';
import { StudentLessonResolver } from './student_lesson.resolver';

@Module({
  providers: [StudentLessonResolver, StudentLessonService],
})
export class StudentLessonModule {}
