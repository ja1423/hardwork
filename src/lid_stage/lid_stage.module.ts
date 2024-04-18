import { Module } from '@nestjs/common';
import { LidStageService } from './lid_stage.service';
import { LidStageController } from './lid_stage.controller';

@Module({
  controllers: [LidStageController],
  providers: [LidStageService],
})
export class LidStageModule {}
