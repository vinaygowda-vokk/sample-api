import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ViewEntity,
} from 'typeorm';
import { IsString, MaxLength, MinLength } from 'class-validator';

@Entity()
@ViewEntity({ schema: 'vokk', name: 'user_profile' })
export class user_profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  UserName: string;
  @Column()
  UserAddress1: string;
  @Column()
  UserAddress2: string;
  @Column()
  PinCode: string;
  @Column()
  City: string;
  @Column()
  District: string;
  @Column()
  Taluk: string;
  @Column()
  State: string;
  @Column()
  Country: string;
  @Column()
  Phone: string;
  @Column()
  AltPhone: string;
  @Column()
  Aadhar: string;
  @Column()
  Gender: string;
  @Column()
  DOB: Date;
}
