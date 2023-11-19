// mongo.module.ts
import { Module, DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({})
export class MongoModule {
  // Useful to  switch local and remote databases. Will be used in Users Module.
  static register(uri: string): DynamicModule {
    return {
      module: MongoModule,
      imports: [MongooseModule.forRoot(uri)],
    };
  }
}
