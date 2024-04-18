import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LidModule } from './lid/lid.module';
import { Lid } from './lid/entities/lid.entity';
import { LidStageModule } from './lid_stage/lid_stage.module';
import { LidStatusModule } from './lid_status/lid_status.module';
import { ReasonLidModule } from './reason_lid/reason_lid.module';
import { LidStage } from './lid_stage/entities/lid_stage.entity';
import { LidStatus } from './lid_status/entities/lid_status.entity';
import { ReasonLid } from './reason_lid/entities/reason_lid.entity';
import { TargetModule } from './target/target.module';
import { StuffModule } from './stuff/stuff.module';
import { StuffRoleModule } from './stuff_role/stuff_role.module';
import { RoleModule } from './role/role.module';
import { Stuff } from './stuff/entities/stuff.entity';
import { StuffRole } from './stuff_role/entities/stuff_role.entity';
import { Role } from './role/entities/role.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Lid, LidStage, LidStatus, ReasonLid,Stuff,StuffRole,Role],
      synchronize: true,
    }),
    LidModule,
    LidStageModule,
    LidStatusModule,
    ReasonLidModule,
    TargetModule,
    StuffModule,
    StuffRoleModule,
    RoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
