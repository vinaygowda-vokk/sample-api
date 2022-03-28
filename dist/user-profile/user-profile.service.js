"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_profile_entity_1 = require("./user-profile.entity");
let UserProfileService = class UserProfileService {
    constructor(userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }
    async getUsers() {
        return await this.userProfileRepository.find();
    }
    getUser(id) {
        return this.userProfileRepository.findOne(id);
    }
    async createUser(up) {
        try {
            return await this.userProfileRepository.save(up);
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        await this.userProfileRepository.delete(id);
    }
    async edituserProfile(id, up) {
        const editedContact = await this.userProfileRepository.findOne(id);
        if (!editedContact) {
            throw new common_1.NotFoundException('User is not found');
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
};
UserProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_profile_entity_1.user_profile)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserProfileService);
exports.UserProfileService = UserProfileService;
//# sourceMappingURL=user-profile.service.js.map