import { Repository } from 'typeorm';
import { user_profile } from './user-profile.entity';
export declare class UserProfileService {
    private userProfileRepository;
    constructor(userProfileRepository: Repository<user_profile>);
    getUsers(): Promise<user_profile[]>;
    getUser(id: number): Promise<user_profile>;
    createUser(up: user_profile): Promise<user_profile>;
    remove(id: number): Promise<void>;
    edituserProfile(id: number, up: user_profile): Promise<user_profile>;
}
