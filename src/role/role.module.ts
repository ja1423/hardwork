import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RoleResolver } from './role.resolver';

@Module({
  
  imports:[
    TypeOrmModule.forFeature([Role]),
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
  controllers: [RoleController,RoleResolver],
  providers: [RoleService],
})
export class RoleModule {}
