import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user_profile } from './user-profile.entity';

@Injectable()
export class UserProfileService {
  constructor(
    @InjectRepository(user_profile)
    private userProfileRepository: Repository<user_profile>,
  ) {}
  async getUsers(): Promise<user_profile[]> {
    return await this.userProfileRepository.find(); //('select * from vokk.user-profile');
  }

  getUser(id: number): Promise<user_profile> {
    return this.userProfileRepository.findOne(id);
  }

  async createUser(up: user_profile) {
    try {
      return await this.userProfileRepository.save(up);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    await this.userProfileRepository.delete(id);
  }

  async edituserProfile(id: number, up: user_profile): Promise<user_profile> {
    const editedContact = await this.userProfileRepository.findOne(id);
    if (!editedContact) {
      throw new NotFoundException('User is not found');
    }
    editedContact.UserName = up.UserName;
    editedContact.UserAddress1 = up.UserAddress1;
    editedContact.UserAddress2 = up.UserAddress2;
    editedContact.PinCode = up.PinCode;
    editedContact.City = up.City;
    editedContact.District = up.District;
    editedContact.Taluk = up.Taluk;
    editedContact.State = up.State;
    editedContact.Country = up.Country;
    editedContact.Phone = up.Phone;
    editedContact.AltPhone = up.AltPhone;
    editedContact.Aadhar = up.Aadhar;
    editedContact.Gender = up.Gender;
    editedContact.DOB = up.DOB;

    await editedContact.save();
    return editedContact;
  }
}
