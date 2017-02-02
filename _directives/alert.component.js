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
const core_1 = require("@angular/core");
const index_1 = require("../_services/index");
let AlertComponent = class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
};
AlertComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'alert',
        templateUrl: 'alert.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof index_1.AlertService !== "undefined" && index_1.AlertService) === "function" && _a || Object])
], AlertComponent);
exports.AlertComponent = AlertComponent;
var _a;
//# sourceMappingURL=alert.component.js.map