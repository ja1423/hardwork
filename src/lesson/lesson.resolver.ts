import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { LessonService } from './lesson.service';
import { Lesson } from './entities/lesson.entity';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto} from './dto/update-lesson.dto';

@Resolver(() => Lesson)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Mutation(() => Lesson)
  createLesson(@Args('createLessonInput') createLessonInput: CreateLessonDto) {
    return this.lessonService.create(createLessonInput);
  }

  @Query(() => [Lesson], { name: 'lesson' })
  findAll() {
    return this.lessonService.findAll();
  }

  @Query(() => Lesson, { name: 'lesson' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.lessonService.findOne(id);
  }

  @Mutation(() => Lesson)
  updateLesson(
    @Args('id', {
      type: () => ID,
    })
    id: number,
    @Args('updateLessonInput') updateLessonDto: UpdateLessonDto,
  ) {
    return this.lessonService.update(+id, updateLessonDto);
  }

  @Mutation(() => ID)
  remove(
    @Args('id', {
      type: () => ID,
    })
    id: number,
  ) {
    return this.lessonService.remove(id);
  }
}
