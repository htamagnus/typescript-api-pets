"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var PetController_1 = __importDefault(require("../controller/PetController"));
var PetRepository_1 = __importDefault(require("../repositories/PetRepository"));
var dataSource_1 = require("../config/dataSource");
var router = express_1.default.Router();
var petRepository = new PetRepository_1.default(dataSource_1.AppDataSource.getRepository("PetEntity"), dataSource_1.AppDataSource.getRepository("AdopterEntity"));
var petController = new PetController_1.default(petRepository);
router.post("/", function (req, res) { return petController.createPet(req, res); });
router.get("/", function (req, res) { return petController.listPet(req, res); });
router.put("/:id", function (req, res) { return petController.updatePet(req, res); });
router.delete("/:id", function (req, res) { return petController.deletPet(req, res); });
router.put("/:pet_id/:adotante_id", function (req, res) {
    return petController.adoptPet(req, res);
});
router.get("filter", function (req, res) {
    return petController.searchPetByGenericFIeld(req, res);
});
exports.default = router;
