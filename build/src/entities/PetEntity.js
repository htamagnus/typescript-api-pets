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
var EnumSpecies_1 = __importDefault(require("../enum/EnumSpecies"));
var AdopterEntity_1 = __importDefault(require("./AdopterEntity"));
var EnumSize_1 = __importDefault(require("../enum/EnumSize"));
var PetEntity = /** @class */ (function () {
    function PetEntity(name, species, dateBirth, adopted, size) {
        this.name = name;
        this.species = species;
        this.size = size;
        this.dateBirth = dateBirth;
        this.adopted = adopted;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], PetEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PetEntity.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PetEntity.prototype, "species", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], PetEntity.prototype, "size", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], PetEntity.prototype, "dateBirth", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], PetEntity.prototype, "adopted", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return AdopterEntity_1.default; }, function (adopter) { return adopter.pets; }),
        __metadata("design:type", AdopterEntity_1.default)
    ], PetEntity.prototype, "adopter", void 0);
    PetEntity = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [String, String, Date, Boolean, String])
    ], PetEntity);
    return PetEntity;
}());
exports.default = PetEntity;
