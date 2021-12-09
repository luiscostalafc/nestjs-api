import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dbUser:XlsGJ944zfeZcAwd@cluster0.jhvjq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),

    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
