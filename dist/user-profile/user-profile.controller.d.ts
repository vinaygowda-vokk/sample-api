import { user_profile } from './user-profile.entity';
import { UserProfileService } from './user-profile.service';
export declare class UserProfileController {
    private userService;
    constructor(userService: UserProfileService);
    findAll(): Promise<user_profile[]>;
    findOne(id: number): Promise<user_profile>;
    create(userContact: user_profile): Promise<user_profile>;
    editUserProfile(up: user_profile, id: number): Promise<user_profile>;
    remove(id: number): void;
}
