import { Module } from '@nestjs/common';
import { ReasonLidService } from './reason_lid.service';
import { ReasonLidController } from './reason_lid.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReasonLid } from './entities/reason_lid.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [TypeOrmModule.forFeature([ReasonLid]), ClientsModule.register([{
    name: 'REASON_LID_SERVICE',
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://mxdlnoqe:GAJ8uOmu00Zx0lgn9-bzBfZwU3krF2n-@rattlesnake.rmq.cloudamqp.com/mxdlnoqe',
      ],
      queue:'reason_lid_queue',
    },
  }])],
  controllers: [ReasonLidController],
  providers: [ReasonLidService],
})
export class ReasonLidModule {}
