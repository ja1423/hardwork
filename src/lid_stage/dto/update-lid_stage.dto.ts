import { PartialType } from '@nestjs/mapped-types';
import { CreateLidStageDto } from './create-lid_stage.dto';

export class UpdateLidStageDto extends PartialType(CreateLidStageDto) {}
