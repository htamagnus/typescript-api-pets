"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_js_1 = __importDefault(require("./src/app.js"));
var PORT = 3000;
app_js_1.default.listen(PORT, function () {
    console.log("Servidor executando em http://localhost:".concat(PORT));
});
