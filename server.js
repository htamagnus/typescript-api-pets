"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_js_1 = require("./src/app.js");
var PORT = 3000;
app_js_1.default.listen(PORT, function () {
    console.log("Servidor executando em http://localhost:".concat(PORT));
});
