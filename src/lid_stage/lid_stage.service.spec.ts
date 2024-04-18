import { Test, TestingModule } from '@nestjs/testing';
import { LidStageService } from './lid_stage.service';

describe('LidStageService', () => {
  let service: LidStageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LidStageService],
    }).compile();

    service = module.get<LidStageService>(LidStageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
