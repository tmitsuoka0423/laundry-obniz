"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('./.env');
var obniz_1 = __importDefault(require("obniz"));
var obniz = new obniz_1.default(process.env.OBNIZ_ID);
obniz.connect();
obniz.connectWait().then(function () {
    console.log('connected');
});
