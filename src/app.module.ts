import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

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
import { GroupModule } from './group/group.module';
import { GroupStuffModule } from './group_stuff/group_stuff.module';
import { BranchModule } from './branch/branch.module';
import { Branch } from './branch/entities/branch.entity';
import { Group } from './group/entities/group.entity';
import { GroupStuff } from './group_stuff/entities/group_stuff.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { PaymentModule } from './payment/payment.module';
import { StudentModule } from './student/student.module';
import { StudentLessonModule } from './student_lesson/student_lesson.module';
import { LessonModule } from './lesson/lesson.module';
import { LessonControllerModule } from './lesson.controller/lesson.controller.module';
import { LessonModule } from './co/lesson/lesson.module';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile:'schema.gql',
      playground:true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],

      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: config.get<'postgres'>('TYPEORM_CONNECTION'),
        host: config.get<string>('TYPEORM_HOST'),
        port: config.get<number>('TYPEORM_PORT'),
        username: config.get<string>('TYPEORM_USERNAME'),
        password: config.get<string>('TYPEORM_PASSWORD'),
        database: config.get<string>('TYPEORM_DATABASE'),
        entities: [__dirname + 'dist/**/*.entity{.ts,.js'],
        synchronize: true,
        autoLoadEntities: true,
        logging:true

      }),
    }),
   
    LidModule,
    LidStageModule,
    LidStatusModule,
    ReasonLidModule,
    TargetModule,
    StuffModule,
    StuffRoleModule,
    RoleModule,
    GroupModule,
    GroupStuffModule,
    BranchModule,
    PaymentModule,
    StudentModule,
    StudentLessonModule,
    LessonModule,
    LessonControllerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
