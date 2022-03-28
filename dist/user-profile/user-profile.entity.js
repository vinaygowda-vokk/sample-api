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
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_profile = void 0;
const typeorm_1 = require("typeorm");
let user_profile = class user_profile extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], user_profile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], user_profile.prototype, "UserName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], user_profile.prototype, "UserAddress1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], user_profile.prototype, "UserAddress2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], user_profile.prototype, "PinCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], user_profile.prototype, "City", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], user_profile.prototype, "District", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], user_profile.prototype, "Taluk", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], user_profile.prototype, "State", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], user_profile.prototype, "Country", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], user_profile.prototype, "Phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], user_profile.prototype, "AltPhone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], user_profile.prototype, "Aadhar", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], user_profile.prototype, "Gender", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], user_profile.prototype, "DOB", void 0);
user_profile = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.ViewEntity)({ schema: 'vokk', name: 'user_profile' })
], user_profile);
exports.user_profile = user_profile;
//# sourceMappingURL=user-profile.entity.js.map