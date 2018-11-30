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
// Directive decorator
var HiddenDirective = (function () {
    function HiddenDirective(el, renderer) {
        // Use renderer to render the element with styles
        renderer.setElementStyle(el.nativeElement, 'display', 'none');
    }
    return HiddenDirective;
}());
HiddenDirective = __decorate([
    core_1.Directive({ selector: '[myHidden]' })
    // Directive class
    ,
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], HiddenDirective);
exports.HiddenDirective = HiddenDirective;
//# sourceMappingURL=hidden.directive.js.map