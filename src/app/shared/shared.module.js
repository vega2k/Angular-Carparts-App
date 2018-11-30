"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vega on 2017-03-29.
 */
var core_1 = require("@angular/core");
var ordinal_pipe_1 = require("./pipe/ordinal.pipe");
var mydate_pipe_1 = require("./pipe/mydate.pipe");
var hidden_directive_1 = require("./directive/hidden.directive");
var underline_directive_1 = require("./directive/text-decoration.directive");
var color_directive_1 = require("./directive/color.directive");
var directive_component_1 = require("./component/directive.component");
var pipe_component_1 = require("./component/pipe.component");
var common_1 = require("@angular/common");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [directive_component_1.DirectiveComponent, pipe_component_1.PipeComponent, ordinal_pipe_1.OrdinalPipe, mydate_pipe_1.MyDatePipe, hidden_directive_1.HiddenDirective, underline_directive_1.TextDecorationDirective, color_directive_1.ColorDirective],
        exports: [directive_component_1.DirectiveComponent, pipe_component_1.PipeComponent, ordinal_pipe_1.OrdinalPipe, mydate_pipe_1.MyDatePipe, hidden_directive_1.HiddenDirective, underline_directive_1.TextDecorationDirective, color_directive_1.ColorDirective]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map
