"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MyDatePipe = (function () {
    function MyDatePipe() {
    }
    MyDatePipe.prototype.transform = function (value, exponent) {
        console.log("날짜 " + value);
        //20170329
        if (value.length == 8) {
            return value.substring(0, 4) + exponent +
                value.substring(4, 6) + exponent +
                value.substring(6, 8);
        }
        //2017329
        if (value.length == 7) {
            return value.substring(0, 4) + exponent +
                '0' + value.substring(4, 5) + exponent +
                value.substring(5, 7);
        }
        else {
            return value;
        }
    };
    return MyDatePipe;
}());
MyDatePipe = __decorate([
    core_1.Pipe({ name: 'mydate' })
], MyDatePipe);
exports.MyDatePipe = MyDatePipe;
//# sourceMappingURL=mydate.pipe.js.map