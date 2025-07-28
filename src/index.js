"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
/*
 * What do I do now...
 *
 */
function main() {
    (0, jquery_1.default)("body").append("<h1>Hello, world!</h1>");
    console.log("Hello, world!");
}
function test(value) {
    console.log(value);
}
