import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfileService } from './user-profile.service';
import { UserProfileController } from './user-profile.controller';
import { user_profile } from './user-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([user_profile])],
  providers: [UserProfileService],
  controllers: [UserProfileController],
})
export class UserProfileModule {}
