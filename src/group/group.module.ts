import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GroupResolver } from './group.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Group]),
    ClientsModule.register([
      {
        name: 'GROUP_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://mxdlnoqe:GAJ8uOmu00Zx0lgn9-bzBfZwU3krF2n-@rattlesnake.rmq.cloudamqp.com/mxdlnoqe',
          ],
        },
      },
    ]),
  ],

  controllers: [GroupController,GroupResolver],
  providers: [GroupService],
})
export class GroupModule {}
