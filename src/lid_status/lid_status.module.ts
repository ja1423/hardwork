import { Module } from '@nestjs/common';
import { LidStatusService } from './lid_status.service';
import { LidStatusController } from './lid_status.controller';

@Module({
  controllers: [LidStatusController],
  providers: [LidStatusService],
})
export class LidStatusModule {}
