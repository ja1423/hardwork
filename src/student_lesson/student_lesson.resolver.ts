import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentLessonService } from './student_lesson.service';
import { StudentLesson } from './entities/student_lesson.entity';
import { CreateStudentLessonInput } from './dto/create-student_lesson.input';
import { UpdateStudentLessonInput } from './dto/update-student_lesson.input';

@Resolver(() => StudentLesson)
export class StudentLessonResolver {
  constructor(private readonly studentLessonService: StudentLessonService) {}

  @Mutation(() => StudentLesson)
  createStudentLesson(@Args('createStudentLessonInput') createStudentLessonInput: CreateStudentLessonInput) {
    return this.studentLessonService.create(createStudentLessonInput);
  }

  @Query(() => [StudentLesson], { name: 'studentLesson' })
  findAll() {
    return this.studentLessonService.findAll();
  }

  @Query(() => StudentLesson, { name: 'studentLesson' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.studentLessonService.findOne(id);
  }

  @Mutation(() => StudentLesson)
  updateStudentLesson(@Args('updateStudentLessonInput') updateStudentLessonInput: UpdateStudentLessonInput) {
    return this.studentLessonService.update(updateStudentLessonInput.id, updateStudentLessonInput);
  }

  @Mutation(() => StudentLesson)
  removeStudentLesson(@Args('id', { type: () => Int }) id: number) {
    return this.studentLessonService.remove(id);
  }
}
