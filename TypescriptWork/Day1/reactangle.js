"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Reactangle = void 0;
var shape_1 = require("./shape");
var Reactangle = /** @class */ (function (_super) {
    __extends(Reactangle, _super);
    function Reactangle(l, b) {
        var _this = _super.call(this) || this;
        _this.length = l;
        _this.breadth = b;
        _this.area = 0;
        return _this;
    }
    Reactangle.prototype.Myarea = function () {
        this.area = this.length * this.breadth;
    };
    Reactangle.prototype.display = function () {
        console.log("\n    ---------Reactangle Araea-------\n        Length :: " + this.length + "\n        breadth:: " + this.breadth + "\n        Area:: " + this.area + "\n    ");
    };
    return Reactangle;
}(shape_1.Shape));
exports.Reactangle = Reactangle;
