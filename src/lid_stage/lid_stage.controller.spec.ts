import { Test, TestingModule } from '@nestjs/testing';
import { LidStageController } from './lid_stage.controller';
import { LidStageService } from './lid_stage.service';

describe('LidStageController', () => {
  let controller: LidStageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LidStageController],
      providers: [LidStageService],
    }).compile();

    controller = module.get<LidStageController>(LidStageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
