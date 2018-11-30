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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vega on 2017-03-29.
 */
var core_1 = require("@angular/core");
var ColorDirective = (function () {
    function ColorDirective(el) {
        this.el = el;
        this.defaultColor = 'blue';
        this.el = el;
        this.setColor(this.defaultColor);
    }
    ColorDirective.prototype.setColor = function (color) {
        this.el.nativeElement.style.color = color;
    };
    ColorDirective.prototype.onMouseEnter = function () {
        this.hover('green');
    };
    ColorDirective.prototype.onMouseLeave = function () {
        this.hover(this.defaultColor);
    };
    // Event method to be called on mouse enter and on mouse leave
    ColorDirective.prototype.hover = function (color) {
        this.setColor(color);
    };
    return ColorDirective;
}());
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ColorDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ColorDirective.prototype, "onMouseLeave", null);
ColorDirective = __decorate([
    core_1.Directive({
        selector: '[mycolor]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ColorDirective);
exports.ColorDirective = ColorDirective;
//# sourceMappingURL=color.directive.js.map