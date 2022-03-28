import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserProfileModule } from './user-profile/user-profile.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
