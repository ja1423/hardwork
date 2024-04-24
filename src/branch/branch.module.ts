import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Branch } from './entities/branch.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BranchResolver } from './branch.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Branch]),
    ClientsModule.register([
      {
        name: 'BRANCH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://mxdlnoqe:GAJ8uOmu00Zx0lgn9-bzBfZwU3krF2n-@rattlesnake.rmq.cloudamqp.com/mxdlnoqe',
          ],
        },
      },
    ]),
  ],
  controllers: [BranchController,BranchResolver],
  providers: [BranchService],
})
export class BranchModule {}
