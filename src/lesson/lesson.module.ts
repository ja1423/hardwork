import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonResolver } from './lesson.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { LessonController } from './lesson.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lesson]),
    ClientsModule.register([
      {
        name: 'LESSON_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://mxdlnoqe:GAJ8uOmu00Zx0lgn9-bzBfZwU3krF2n-@rattlesnake.rmq.cloudamqp.com/mxdlnoqe',
          ],
          queue: 'main_products_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [LessonResolver,LessonController],
  providers: [LessonService],
})
export class LessonModule {}
