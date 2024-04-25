import { CreateStudentLessonInput } from './create-student_lesson.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStudentLessonInput extends PartialType(CreateStudentLessonInput) {
  @Field(() => Int)
  id: number;
}
