import { Module } from '@nestjs/common';
import { StuffRoleService } from './stuff_role.service';
import { StuffRoleController } from './stuff_role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StuffRole } from './entities/stuff_role.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[
   TypeOrmModule.forFeature([StuffRole]),
    ClientsModule.register([
      {
        name: 'ROLE_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://mxdlnoqe:GAJ8uOmu00Zx0lgn9-bzBfZwU3krF2n-@rattlesnake.rmq.cloudamqp.com/mxdlnoqe',
          ],
        },
      },
    ]),
  ],

  
  controllers: [StuffRoleController],
  providers: [StuffRoleService],

})
export class StuffRoleModule {}
