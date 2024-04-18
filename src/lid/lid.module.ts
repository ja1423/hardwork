import { Module } from '@nestjs/common';
import { LidService } from './lid.service';
import { LidController } from './lid.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lid } from './entities/lid.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lid]),
    ClientsModule.register([
      {
        name: 'LID_SERVICE',
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

  controllers: [LidController],
  providers: [LidService],
})
export class LidModule {}
