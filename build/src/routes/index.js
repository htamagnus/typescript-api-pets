"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var petRouter_1 = __importDefault(require("../routes/petRouter"));
var adopterRouter_1 = __importDefault(require("./adopterRouter"));
var router = function (app) {
    app.use("/pets", petRouter_1.default);
    app.use("/adopters", adopterRouter_1.default);
};
exports.default = router;
