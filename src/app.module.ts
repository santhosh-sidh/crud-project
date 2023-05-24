import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { TodoService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Santhosh@12345',
      database: 'crud',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TodoModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [TodoService],
})
export class AppModule {}

