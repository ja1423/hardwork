import { Module } from '@nestjs/common';
import { LidStatusService } from './lid_status.service';
import { LidStatusController } from './lid_status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LidStatus } from './entities/lid_status.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forFeature([LidStatus]),
    ClientsModule.register([
      {
        name: 'LIDSTATUS_SERVICE',
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
  controllers: [LidStatusController],
  providers: [LidStatusService],
})
export class LidStatusModule {}
