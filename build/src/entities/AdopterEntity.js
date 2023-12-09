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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var AddressEntity_1 = __importDefault(require("./AddressEntity"));
var PetEntity_1 = __importDefault(require("./PetEntity"));
var AdopterEntity = /** @class */ (function () {
    function AdopterEntity(name, password, phone, photo, address) {
        this.name = name;
        this.password = password;
        this.photo = photo;
        this.phone = phone;
        this.address = address;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], AdopterEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], AdopterEntity.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], AdopterEntity.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], AdopterEntity.prototype, "phone", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], AdopterEntity.prototype, "photo", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return AddressEntity_1.default; }, {
            nullable: true,
            cascade: true,
            eager: true,
        }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", AddressEntity_1.default)
    ], AdopterEntity.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return PetEntity_1.default; }, function (pet) { return pet.adopter; }),
        __metadata("design:type", Array)
    ], AdopterEntity.prototype, "pets", void 0);
    AdopterEntity = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [String, String, String, String, AddressEntity_1.default])
    ], AdopterEntity);
    return AdopterEntity;
}());
exports.default = AdopterEntity;
