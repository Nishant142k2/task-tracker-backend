import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nishant:123@cluster0.mongodb.net/database?retryWrites=true&w=majority'),
  ],
})
export class DatabaseModule {}
