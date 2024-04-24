import { Module } from '@nestjs/common';
import { GroupStuffService } from './group_stuff.service';
import { GroupStuffController } from './group_stuff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GroupStuff } from './entities/group_stuff.entity';
import { GroupStuffResolver } from './group_stuff.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([GroupStuff]),
    ClientsModule.register([
      {
        name: 'GROUPSTUFF_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://mxdlnoqe:GAJ8uOmu00Zx0lgn9-bzBfZwU3krF2n-@rattlesnake.rmq.cloudamqp.com/mxdlnoqe',
          ],
        },
      },
    ]),
  ],

  controllers: [GroupStuffController,GroupStuffResolver],
  providers: [GroupStuffService],
})
export class GroupStuffModule {}
