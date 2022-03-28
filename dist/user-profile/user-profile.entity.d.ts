import { BaseEntity } from 'typeorm';
export declare class user_profile extends BaseEntity {
    id: number;
    UserName: string;
    UserAddress1: string;
    UserAddress2: string;
    PinCode: string;
    City: string;
    District: string;
    Taluk: string;
    State: string;
    Country: string;
    Phone: string;
    AltPhone: string;
    Aadhar: string;
    Gender: string;
    DOB: Date;
}
