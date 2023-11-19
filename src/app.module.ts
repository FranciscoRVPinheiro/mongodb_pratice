import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongoModule } from './users/mongodb/mongo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    process.env.NODE_ENV === 'development'
      ? MongoModule.register('mongodb://localhost:27017/demo')
      : MongoModule.register(process.env.DB),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
