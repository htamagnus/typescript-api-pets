"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dataSource_1 = require("../config/dataSource");
var AdopterController_1 = __importDefault(require("../controller/AdopterController"));
var AdopterRepository_1 = __importDefault(require("../repositories/AdopterRepository"));
var router = express_1.default.Router();
var adopterRepository = new AdopterRepository_1.default(dataSource_1.AppDataSource.getRepository("AdopterEntity"));
var adopterController = new AdopterController_1.default(adopterRepository);
router.post("/", function (req, res) { return adopterController.createAdopter(req, res); });
router.get("/", function (req, res) { return adopterController.listAdopters(req, res); });
router.put("/:id", function (req, res) { return adopterController.updateAdopter(req, res); });
router.delete("/:id", function (req, res) {
    return adopterController.deleteAdopter(req, res);
});
router.patch("/:id", function (req, res) {
    return adopterController.updateAdopterAddress(req, res);
});
exports.default = router;
