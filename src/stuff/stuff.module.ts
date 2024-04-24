import { Module } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { StuffController } from './stuff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stuff } from './entities/stuff.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { StuffResolver } from './stuff.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Stuff]),
    ClientsModule.register([
      {
        name: 'STUFF_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://mxdlnoqe:GAJ8uOmu00Zx0lgn9-bzBfZwU3krF2n-@rattlesnake.rmq.cloudamqp.com/mxdlnoqe',
          ],
        },
      },
    ]),
  ],

  controllers: [StuffController,StuffResolver],
  providers: [StuffService],
})
export class StuffModule {}
