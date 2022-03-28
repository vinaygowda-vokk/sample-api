import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { user_profile } from './user-profile.entity';
import { UserProfileService } from './user-profile.service';
import { UserProfileSwaggerExample } from './user-profile.swagger';

@Controller('user')
export class UserProfileController {
  constructor(private userService: UserProfileService) {}

  @ApiTags('User Profile')
  @Get()
  findAll() {
    return this.userService.getUsers();
  }

  @ApiTags('User Profile')
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.getUser(id);
  }

  @ApiTags('User Profile')
  @Post()
  @ApiBody({
    schema: {
      example: UserProfileSwaggerExample,
    },
  })
  async create(@Body() userContact: user_profile) {
    try {
      const resp = await this.userService.createUser(userContact);
      return resp;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @ApiTags('User Profile')
  @Patch(':id')
  @ApiBody({
    schema: {
      example: UserProfileSwaggerExample,
    },
  })
  async editUserProfile(
    @Body() up: user_profile,
    @Param('id') id: number,
  ): Promise<user_profile> {
    const upEdited = await this.userService.edituserProfile(id, up);
    return upEdited;
  }

  @ApiTags('User Profile')
  @Delete(':id')
  remove(@Param('id') id: number) {
    this.userService.remove(id);
  }
}
