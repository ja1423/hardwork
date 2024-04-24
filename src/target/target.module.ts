import { Module } from '@nestjs/common';
import { TargetService } from './target.service';
import { TargetController } from './target.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Target } from './entities/target.entity';
import { TargetResolver } from './target.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Target]),
    ClientsModule.register([
      {
        name: 'TARGET_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://mxdlnoqe:GAJ8uOmu00Zx0lgn9-bzBfZwU3krF2n-@rattlesnake.rmq.cloudamqp.com/mxdlnoqe',
          ],
        },
      },
    ]),
  ],
  controllers: [TargetController,TargetResolver],
  providers: [TargetService],
})
export class TargetModule {}
