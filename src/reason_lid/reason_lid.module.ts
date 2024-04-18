import { Module } from '@nestjs/common';
import { ReasonLidService } from './reason_lid.service';
import { ReasonLidController } from './reason_lid.controller';

@Module({
  controllers: [ReasonLidController],
  providers: [ReasonLidService],
})
export class ReasonLidModule {}
