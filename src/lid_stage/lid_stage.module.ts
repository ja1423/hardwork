import { Module } from '@nestjs/common';
import { LidStageService } from './lid_stage.service';
import { LidStageController } from './lid_stage.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LidStage } from './entities/lid_stage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LidStageResolver } from './lid_stage.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([LidStage]),
    ClientsModule.register([
      {
        name: 'LID_STAGE_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://mxdlnoqe:GAJ8uOmu00Zx0lgn9-bzBfZwU3krF2n-@rattlesnake.rmq.cloudamqp.com/mxdlnoqe',
          ],
          queue: 'lid_stage_queue',
        },
      },
    ]),
  ],
  controllers: [LidStageController,LidStageResolver],
  providers: [LidStageService],
})
export class LidStageModule {}
