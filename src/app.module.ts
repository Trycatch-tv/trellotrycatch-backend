import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';
import { StatusesModule } from './statuses/statuses.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'trellotrycatch',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProjectsModule,
    StatusesModule,
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
