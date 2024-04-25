import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentLessonInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
