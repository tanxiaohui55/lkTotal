(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-main-module"],{

/***/ "./node_modules/angular2-counto/index.js":
/*!***********************************************!*\
  !*** ./node_modules/angular2-counto/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var counto_directive_1 = __webpack_require__(/*! ./src/counto.directive */ "./node_modules/angular2-counto/src/counto.directive.js");
exports.CountoDirective = counto_directive_1.CountoDirective;
var counto_module_1 = __webpack_require__(/*! ./src/counto.module */ "./node_modules/angular2-counto/src/counto.module.js");
exports.CountoModule = counto_module_1.CountoModule;
exports.default = counto_module_1.CountoModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular2-counto/src/counto.directive.js":
/*!**************************************************************!*\
  !*** ./node_modules/angular2-counto/src/counto.directive.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var CountoDirective = /** @class */ (function () {
    function CountoDirective() {
        this.countoChange = new core_1.EventEmitter();
        this.countoEnd = new core_1.EventEmitter();
    }
    Object.defineProperty(CountoDirective.prototype, "duration", {
        set: function (duration) {
            this._duration = parseFloat(duration);
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountoDirective.prototype, "countTo", {
        set: function (countTo) {
            this._countTo = parseFloat(countTo);
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountoDirective.prototype, "countFrom", {
        set: function (countFrom) {
            this._countFrom = parseFloat(countFrom);
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountoDirective.prototype, "step", {
        set: function (step) {
            this._step = parseFloat(step);
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    CountoDirective.prototype.run = function () {
        var _this = this;
        clearInterval(_this._timer);
        if (isNaN(_this._duration)) {
            return false;
        }
        if (isNaN(_this._step)) {
            return false;
        }
        if (isNaN(_this._countFrom)) {
            return false;
        }
        if (isNaN(_this._countTo)) {
            return false;
        }
        if (_this._step <= 0) {
            console.info('Step must be greater than 0.');
            return false;
        }
        if (_this._duration <= 0) {
            console.info('Duration must be greater than 0.');
            return false;
        }
        if (_this._step > _this._duration * 1000) {
            console.info('Step must be equal or smaller than duration.');
            return false;
        }
        var intermediate = _this._countFrom;
        var increment = Math.abs(_this._countTo - _this._countFrom) / ((_this._duration * 1000) / _this._step);
        _this.countoChange.emit(intermediate);
        _this._timer = setInterval(function () {
            if (_this._countTo < _this._countFrom) {
                if (intermediate <= _this._countTo) {
                    clearInterval(_this._timer);
                    _this.countoChange.emit(_this._countTo);
                    _this.countoEnd.emit();
                }
                else {
                    _this.countoChange.emit(intermediate);
                    intermediate -= increment;
                }
            }
            else {
                if (intermediate >= _this._countTo) {
                    clearInterval(_this._timer);
                    _this.countoChange.emit(_this._countTo);
                    _this.countoEnd.emit();
                }
                else {
                    _this.countoChange.emit(intermediate);
                    intermediate += increment;
                }
            }
        }, _this._step);
    };
    CountoDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[counto]'
                },] },
    ];
    /** @nocollapse */
    CountoDirective.ctorParameters = function () { return []; };
    CountoDirective.propDecorators = {
        "countoChange": [{ type: core_1.Output },],
        "countoEnd": [{ type: core_1.Output },],
        "duration": [{ type: core_1.Input },],
        "countTo": [{ type: core_1.Input },],
        "countFrom": [{ type: core_1.Input },],
        "step": [{ type: core_1.Input },],
    };
    return CountoDirective;
}());
exports.CountoDirective = CountoDirective;
//# sourceMappingURL=counto.directive.js.map

/***/ }),

/***/ "./node_modules/angular2-counto/src/counto.module.js":
/*!***********************************************************!*\
  !*** ./node_modules/angular2-counto/src/counto.module.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var counto_directive_1 = __webpack_require__(/*! ./counto.directive */ "./node_modules/angular2-counto/src/counto.directive.js");
var CountoModule = /** @class */ (function () {
    function CountoModule() {
    }
    CountoModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [counto_directive_1.CountoDirective],
                    exports: [counto_directive_1.CountoDirective]
                },] },
    ];
    /** @nocollapse */
    CountoModule.ctorParameters = function () { return []; };
    return CountoModule;
}());
exports.CountoModule = CountoModule;
//# sourceMappingURL=counto.module.js.map

/***/ }),

/***/ "./node_modules/ng2modules-easypiechart/easypiechart.component.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2modules-easypiechart/easypiechart.component.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var EasyPieChartComponent = (function () {
    function EasyPieChartComponent(el) {
        this.element = el.nativeElement;
        var options = {
            barColor: '#ef1e25',
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1000,
                enabled: true
            }
        };
        this.options = Object.assign(options, this.options);
    }
    EasyPieChartComponent.prototype.ngOnInit = function () {
        this.element.innerHTML = "";
        this.pieChart = new EasyPieChart(this.element, this.options);
        this.pieChart.update(this.percent);
    };
    EasyPieChartComponent.prototype.ngOnChanges = function (changes) {
        if (!changes['percent'].isFirstChange()) {
            this.pieChart.update(this.percent);
        }
    };
    return EasyPieChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EasyPieChartComponent.prototype, "percent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EasyPieChartComponent.prototype, "options", void 0);
EasyPieChartComponent = __decorate([
    core_1.Component({
        selector: 'easy-pie-chart',
        template: "<div>Loading...</div>"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], EasyPieChartComponent);
exports.EasyPieChartComponent = EasyPieChartComponent;
//# sourceMappingURL=easypiechart.component.js.map

/***/ }),

/***/ "./node_modules/ng2modules-easypiechart/easypiechart.module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2modules-easypiechart/easypiechart.module.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var easypiechart_component_1 = __webpack_require__(/*! ./easypiechart.component */ "./node_modules/ng2modules-easypiechart/easypiechart.component.js");
var EasyPieChartModule = (function () {
    function EasyPieChartModule() {
    }
    return EasyPieChartModule;
}());
EasyPieChartModule = __decorate([
    core_1.NgModule({
        imports: [],
        exports: [easypiechart_component_1.EasyPieChartComponent],
        declarations: [easypiechart_component_1.EasyPieChartComponent]
    }),
    __metadata("design:paramtypes", [])
], EasyPieChartModule);
exports.EasyPieChartModule = EasyPieChartModule;
//# sourceMappingURL=easypiechart.module.js.map

/***/ }),

/***/ "./node_modules/ng2modules-easypiechart/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2modules-easypiechart/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./easypiechart.module */ "./node_modules/ng2modules-easypiechart/easypiechart.module.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/nouislider/distribute/nouislider.js":
/*!**********************************************************!*\
  !*** ./node_modules/nouislider/distribute/nouislider.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 12.1.0 - 10/25/2018 */
(function(factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(function() {
    "use strict";

    var VERSION = "12.1.0";

    function isValidFormatter(entry) {
        return typeof entry === "object" && typeof entry.to === "function" && typeof entry.from === "function";
    }

    function removeElement(el) {
        el.parentElement.removeChild(el);
    }

    function isSet(value) {
        return value !== null && value !== undefined;
    }

    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }

    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function(a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }

    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }

    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);

        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }

        return orientation
            ? rect.top + pageOffset.y - docElem.clientTop
            : rect.left + pageOffset.x - docElem.clientLeft;
    }

    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }

    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function() {
                removeClass(element, className);
            }, duration);
        }
    }

    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }

    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }

    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }

    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += " " + className;
        }
    }

    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(
                new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
                " "
            );
        }
    }

    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList
            ? el.classList.contains(className)
            : new RegExp("\\b" + className + "\\b").test(el.className);
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;

        return {
            x: x,
            y: y
        };
    }

    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                  start: "pointerdown",
                  move: "pointermove",
                  end: "pointerup"
              }
            : window.navigator.msPointerEnabled
                ? {
                      start: "MSPointerDown",
                      move: "MSPointerMove",
                      end: "MSPointerUp"
                  }
                : {
                      start: "mousedown touchstart",
                      move: "mousemove touchmove",
                      end: "mouseup touchend"
                  };
    }

    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;

        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function() {
                    supportsPassive = true;
                }
            });

            window.addEventListener("test", null, opts);
        } catch (e) {}
        /* eslint-enable */

        return supportsPassive;
    }

    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }

    // Value calculation

    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }

    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value) {
        return (value * 100) / (range[1] - range[0]);
    }

    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0]);
    }

    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }

    // Range conversion

    function getJ(value, arr) {
        var j = 1;

        while (value >= arr[j]) {
            j += 1;
        }

        return j;
    }

    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }

        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];

        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }

    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }

        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];

        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }

    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }

        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];

        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }

            return a;
        }

        if (!xSteps[j - 1]) {
            return value;
        }

        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }

    // Entry parsing

    function handleEntryPoint(index, value, that) {
        var percentage;

        // Wrap numerical input in an array.
        if (typeof value === "number") {
            value = [value];
        }

        // Reject any invalid input, by testing whether value is an array.
        if (!Array.isArray(value)) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
        }

        // Covert min/max syntax to 0 and 100.
        if (index === "min") {
            percentage = 0;
        } else if (index === "max") {
            percentage = 100;
        } else {
            percentage = parseFloat(index);
        }

        // Check for correct input.
        if (!isNumeric(percentage) || !isNumeric(value[0])) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
        }

        // Store values.
        that.xPct.push(percentage);
        that.xVal.push(value[0]);

        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if (!percentage) {
            if (!isNaN(value[1])) {
                that.xSteps[0] = value[1];
            }
        } else {
            that.xSteps.push(isNaN(value[1]) ? false : value[1]);
        }

        that.xHighestCompleteStep.push(0);
    }

    function handleStepPoint(i, n, that) {
        // Ignore 'false' stepping.
        if (!n) {
            return true;
        }

        // Factor to range ratio
        that.xSteps[i] =
            fromPercentage([that.xVal[i], that.xVal[i + 1]], n) / subRangeRatio(that.xPct[i], that.xPct[i + 1]);

        var totalSteps = (that.xVal[i + 1] - that.xVal[i]) / that.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = that.xVal[i] + that.xNumSteps[i] * highestStep;

        that.xHighestCompleteStep[i] = step;
    }

    // Interface

    function Spectrum(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [singleStep || false];
        this.xNumSteps = [false];
        this.xHighestCompleteStep = [];

        this.snap = snap;

        var index;
        var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']

        // Map the object keys to an array.
        for (index in entry) {
            if (entry.hasOwnProperty(index)) {
                ordered.push([entry[index], index]);
            }
        }

        // Sort all entries by value (numeric sort).
        if (ordered.length && typeof ordered[0][0] === "object") {
            ordered.sort(function(a, b) {
                return a[0][0] - b[0][0];
            });
        } else {
            ordered.sort(function(a, b) {
                return a[0] - b[0];
            });
        }

        // Convert all entries to subranges.
        for (index = 0; index < ordered.length; index++) {
            handleEntryPoint(ordered[index][1], ordered[index][0], this);
        }

        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);

        // Convert all numeric steps to the percentage of the subrange they represent.
        for (index = 0; index < this.xNumSteps.length; index++) {
            handleStepPoint(index, this.xNumSteps[index], this);
        }
    }

    Spectrum.prototype.getMargin = function(value) {
        var step = this.xNumSteps[0];

        if (step && (value / step) % 1 !== 0) {
            throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
        }

        return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
    };

    Spectrum.prototype.toStepping = function(value) {
        value = toStepping(this.xVal, this.xPct, value);

        return value;
    };

    Spectrum.prototype.fromStepping = function(value) {
        return fromStepping(this.xVal, this.xPct, value);
    };

    Spectrum.prototype.getStep = function(value) {
        value = getStep(this.xPct, this.xSteps, this.snap, value);

        return value;
    };

    Spectrum.prototype.getNearbySteps = function(value) {
        var j = getJ(value, this.xPct);

        return {
            stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2]
            },
            thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1]
            },
            stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j]
            }
        };
    };

    Spectrum.prototype.countStepDecimals = function() {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
    };

    // Outside testing
    Spectrum.prototype.convert = function(value) {
        return this.getStep(this.toStepping(value));
    };

    /*	Every input option is tested and parsed. This'll prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */

    var defaultFormatter = {
        to: function(value) {
            return value !== undefined && value.toFixed(2);
        },
        from: Number
    };

    function validateFormat(entry) {
        // Any object with a to and from method is supported.
        if (isValidFormatter(entry)) {
            return true;
        }

        throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
    }

    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
        }

        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }

    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
        }

        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
        }

        // Catch equal start or end.
        if (entry.min === entry.max) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
        }

        parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
    }

    function testStart(parsed, entry) {
        entry = asArray(entry);

        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
        }

        // Store the number of handles.
        parsed.handles = entry.length;

        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }

    function testSnap(parsed, entry) {
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
        }
    }

    function testAnimate(parsed, entry) {
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
        }
    }

    function testAnimationDuration(parsed, entry) {
        parsed.animationDuration = entry;

        if (typeof entry !== "number") {
            throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
        }
    }

    function testConnect(parsed, entry) {
        var connect = [false];
        var i;

        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        } else if (entry === "upper") {
            entry = [false, true];
        }

        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }

            connect.push(false);
        }

        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
        } else {
            connect = entry;
        }

        parsed.connect = connect;
    }

    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
        }
    }

    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
        }

        // Issue #582
        if (entry === 0) {
            return;
        }

        parsed.margin = parsed.spectrum.getMargin(entry);

        if (!parsed.margin) {
            throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
        }
    }

    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
        }

        parsed.limit = parsed.spectrum.getMargin(entry);

        if (!parsed.limit || parsed.handles < 2) {
            throw new Error(
                "noUiSlider (" +
                    VERSION +
                    "): 'limit' option is only supported on linear sliders with 2 or more handles."
            );
        }
    }

    function testPadding(parsed, entry) {
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers."
            );
        }

        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers."
            );
        }

        if (entry === 0) {
            return;
        }

        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }

        // 'getMargin' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getMargin(entry[0]), parsed.spectrum.getMargin(entry[1])];

        if (parsed.padding[0] === false || parsed.padding[1] === false) {
            throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
        }

        if (parsed.padding[0] < 0 || parsed.padding[1] < 0) {
            throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
        }

        if (parsed.padding[0] + parsed.padding[1] >= 100) {
            throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
        }
    }

    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
        }
    }

    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
        }

        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;

        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
            }

            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }

        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'unconstrained' behaviour cannot be used with margin or limit"
            );
        }

        parsed.events = {
            tap: tap || snap,
            drag: drag,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained
        };
    }

    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }

        if (entry === true) {
            parsed.tooltips = [];

            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(true);
            }
        } else {
            parsed.tooltips = asArray(entry);

            if (parsed.tooltips.length !== parsed.handles) {
                throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
            }

            parsed.tooltips.forEach(function(formatter) {
                if (
                    typeof formatter !== "boolean" &&
                    (typeof formatter !== "object" || typeof formatter.to !== "function")
                ) {
                    throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
                }
            });
        }
    }

    function testAriaFormat(parsed, entry) {
        parsed.ariaFormat = entry;
        validateFormat(entry);
    }

    function testFormat(parsed, entry) {
        parsed.format = entry;
        validateFormat(entry);
    }

    function testKeyboardSupport(parsed, entry) {
        parsed.keyboardSupport = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'keyboardSupport' option must be a boolean.");
        }
    }

    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }

    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
        }

        parsed.cssPrefix = entry;
    }

    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
        }

        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};

            for (var key in entry) {
                if (!entry.hasOwnProperty(key)) {
                    continue;
                }

                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            }
        } else {
            parsed.cssClasses = entry;
        }
    }

    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);

        var parsed = {
            margin: 0,
            limit: 0,
            padding: 0,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter
        };

        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses }
        };

        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: {
                target: "target",
                base: "base",
                origin: "origin",
                handle: "handle",
                handleLower: "handle-lower",
                handleUpper: "handle-upper",
                horizontal: "horizontal",
                vertical: "vertical",
                background: "background",
                connect: "connect",
                connects: "connects",
                ltr: "ltr",
                rtl: "rtl",
                draggable: "draggable",
                drag: "state-drag",
                tap: "state-tap",
                active: "active",
                tooltip: "tooltip",
                pips: "pips",
                pipsHorizontal: "pips-horizontal",
                pipsVertical: "pips-vertical",
                marker: "marker",
                markerHorizontal: "marker-horizontal",
                markerVertical: "marker-vertical",
                markerNormal: "marker-normal",
                markerLarge: "marker-large",
                markerSub: "marker-sub",
                value: "value",
                valueHorizontal: "value-horizontal",
                valueVertical: "value-vertical",
                valueNormal: "value-normal",
                valueLarge: "value-large",
                valueSub: "value-sub"
            }
        };

        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }

        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function(name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
                }

                return true;
            }

            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });

        // Forward pips options
        parsed.pips = options.pips;

        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;

        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";

        // Pips don't move, so we can place them using left/top.
        var styles = [["left", "top"], ["right", "bottom"]];

        parsed.style = styles[parsed.dir][parsed.ort];

        return parsed;
    }

    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();

        // All variables local to 'scope' are prefixed with 'scope_'
        var scope_Target = target;
        var scope_Locations = [];
        var scope_Base;
        var scope_Handles;
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Connects;
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Events = {};
        var scope_Self;
        var scope_Pips;
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;

        // Pips constants
        var PIPS_NONE = -1;
        var PIPS_NO_VALUE = 0;
        var PIPS_LARGE_VALUE = 1;
        var PIPS_SMALL_VALUE = 2;

        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;

        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");

            if (className) {
                addClass(div, className);
            }

            addTarget.appendChild(div);

            return div;
        }

        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);

            handle.setAttribute("data-handle", handleNumber);

            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
            }

            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");

            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            } else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }

            return origin;
        }

        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }

            return addNodeTo(base, options.cssClasses.connect);
        }

        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);

            scope_Handles = [];
            scope_Connects = [];

            scope_Connects.push(addConnect(connectBase, connectOptions[0]));

            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]

            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }

        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);

            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            } else {
                addClass(addTarget, options.cssClasses.rtl);
            }

            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            } else {
                addClass(addTarget, options.cssClasses.vertical);
            }

            return addNodeTo(addTarget, options.cssClasses.base);
        }

        function addTooltip(handle, handleNumber) {
            if (!options.tooltips[handleNumber]) {
                return false;
            }

            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }

        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            // Tooltips are added with options.tooltips in original order.
            var tips = scope_Handles.map(addTooltip);

            bindEvent("update", function(values, handleNumber, unencoded) {
                if (!tips[handleNumber]) {
                    return;
                }

                var formattedValue = values[handleNumber];

                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }

                tips[handleNumber].innerHTML = formattedValue;
            });
        }

        function aria() {
            bindEvent("update", function(values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function(index) {
                    var handle = scope_Handles[index];

                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);

                    var now = positions[index];

                    // Formatted value for display
                    var text = options.ariaFormat.to(unencoded[index]);

                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);

                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }

        function getGroup(mode, values, stepped) {
            // Use the range.
            if (mode === "range" || mode === "steps") {
                return scope_Spectrum.xVal;
            }

            if (mode === "count") {
                if (values < 2) {
                    throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
                }

                // Divide 0 - 100 in 'count' parts.
                var interval = values - 1;
                var spread = 100 / interval;

                values = [];

                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }

                values.push(100);

                mode = "positions";
            }

            if (mode === "positions") {
                // Map all percentages to on-range values.
                return values.map(function(value) {
                    return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                });
            }

            if (mode === "values") {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (stepped) {
                    return values.map(function(value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }

                // Otherwise, we can simply use the values.
                return values;
            }
        }

        function generateSpread(density, mode, group) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return (value + increment).toFixed(7) / 1;
            }

            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;

            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(
                group.slice().sort(function(a, b) {
                    return a - b;
                })
            );

            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }

            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }

            group.forEach(function(current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = mode === "steps";

                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }

                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }

                // Low can be 0, so test for false. If high is undefined,
                // we are at the last subrange. Index 0 is already handled.
                if (low === false || high === undefined) {
                    return;
                }

                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);

                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;

                    steps = pctDifference / density;
                    realSteps = Math.round(steps);

                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;

                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }

                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? PIPS_LARGE_VALUE : isSteps ? PIPS_SMALL_VALUE : PIPS_NO_VALUE;

                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst) {
                        type = 0;
                    }

                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }

                    // Update the percentage count.
                    prevPct = newPct;
                }
            });

            return indexes;
        }

        function addMarking(spread, filterFunc, formatter) {
            var element = scope_Document.createElement("div");

            var valueSizeClasses = [];
            valueSizeClasses[PIPS_NO_VALUE] = options.cssClasses.valueNormal;
            valueSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.valueLarge;
            valueSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.valueSub;

            var markerSizeClasses = [];
            markerSizeClasses[PIPS_NO_VALUE] = options.cssClasses.markerNormal;
            markerSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.markerLarge;
            markerSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.markerSub;

            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];

            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }

            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;

                if (type === PIPS_NONE) {
                    return;
                }

                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";

                // Values are only appended for points marked '1' or '2'.
                if (type > PIPS_NO_VALUE) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", value);
                    node.style[options.style] = offset + "%";
                    node.innerHTML = formatter.to(value);
                }
            }

            // Append all points.
            Object.keys(spread).forEach(function(offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });

            return element;
        }

        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }

        function pips(grid) {
            // Fix #669
            removePips();

            var mode = grid.mode;
            var density = grid.density || 1;
            var filter = grid.filter || false;
            var values = grid.values || false;
            var stepped = grid.stepped || false;
            var group = getGroup(mode, values, stepped);
            var spread = generateSpread(density, mode, group);
            var format = grid.format || {
                to: Math.round
            };

            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));

            return scope_Pips;
        }

        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = "offset" + ["Width", "Height"][options.ort];
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }

        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList

            var method = function(e) {
                e = fixEvent(e, data.pageOffset, data.target || element);

                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }

                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (scope_Target.hasAttribute("disabled") && !data.doNotReject) {
                    return false;
                }

                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }

                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }

                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }

                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }

                e.calcPoint = e.points[options.ort];

                // Call the event handler with the event [ and additional data ].
                callback(e, data);
            };

            var methods = [];

            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function(eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });

            return methods;
        }

        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;

            var x;
            var y;

            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }

            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function(checkTouch) {
                    return checkTouch.target === eventTarget || eventTarget.contains(checkTouch.target);
                };

                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);

                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }

                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                } else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);

                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }

                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }

            pageOffset = pageOffset || getPageOffset(scope_Document);

            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }

            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435

            return e;
        }

        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();

            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);

            return options.dir ? 100 - proposal : proposal;
        }

        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(proposal) {
            var closest = 100;
            var handleNumber = false;

            scope_Handles.forEach(function(handle, index) {
                // Disabled handles are ignored
                if (handle.hasAttribute("disabled")) {
                    return;
                }

                var pos = Math.abs(scope_Locations[index] - proposal);

                if (pos < closest || (pos === 100 && closest === 100)) {
                    handleNumber = index;
                    closest = pos;
                }
            });

            return handleNumber;
        }

        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }

        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }

            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;

            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
        }

        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }

            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function(c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });

            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();

                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }

            data.handleNumbers.forEach(function(handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }

        // Bind move events on document.
        function eventStart(event, data) {
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];

                // Ignore 'disabled' handles
                if (handleOrigin.hasAttribute("disabled")) {
                    return false;
                }

                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;

                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }

            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();

            // Record the event listeners.
            var listeners = [];

            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice()
            });

            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });

            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });

            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));

            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;

                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }

                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }

            data.handleNumbers.forEach(function(handleNumber) {
                fireEvent("start", handleNumber);
            });
        }

        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();

            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);

            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return false;
            }

            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }

            setHandle(handleNumber, proposal, true, true);

            setZindex();

            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            fireEvent("change", handleNumber, true);
            fireEvent("set", handleNumber, true);

            if (options.events.snap) {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }

        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);

            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);

            Object.keys(scope_Events).forEach(function(targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function(callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }

        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function(handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index]
                    });
                });
            }

            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }

            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
            }

            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function(connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }

                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];

                    addClass(connect, options.cssClasses.draggable);

                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }

                    eventHolders.forEach(function(eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: [handleBefore, handleAfter],
                            handleNumbers: [index - 1, index]
                        });
                    });
                });
            }
        }

        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);

            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function(a, index) {
                    fireEvent("update", index);
                });
            }
        }

        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event && namespacedEvent.substring(event.length);

            Object.keys(scope_Events).forEach(function(bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);

                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    delete scope_Events[bind];
                }
            });
        }

        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function(targetEvent) {
                var eventType = targetEvent.split(".")[0];

                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function(callback) {
                        callback.call(
                            // Use the slider public API as the scope ('this')
                            scope_Self,
                            // Return values as array, so arg_1[arg_2] is always valid.
                            scope_Values.map(options.format.to),
                            // Handle index, 0 or 1
                            handleNumber,
                            // Un-formatted slider values
                            scope_Values.slice(),
                            // Event is fired by tap, true or false
                            tap || false,
                            // Left offset of the handle, in relation to the slider
                            scope_Locations.slice()
                        );
                    });
                }
            });
        }

        function toPct(pct) {
            return pct + "%";
        }

        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    to = Math.max(to, reference[handleNumber - 1] + options.margin);
                }

                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    to = Math.min(to, reference[handleNumber + 1] - options.margin);
                }
            }

            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    to = Math.min(to, reference[handleNumber - 1] + options.limit);
                }

                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    to = Math.max(to, reference[handleNumber + 1] - options.limit);
                }
            }

            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    to = Math.max(to, options.padding[0]);
                }

                if (handleNumber === scope_Handles.length - 1) {
                    to = Math.min(to, 100 - options.padding[1]);
                }
            }

            to = scope_Spectrum.getStep(to);

            // Limit percentage to the 0 - 100 range
            to = limit(to);

            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }

            return to;
        }

        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }

        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers) {
            var proposals = locations.slice();

            var b = [!upward, upward];
            var f = [upward, !upward];

            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();

            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }

            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function(handleNumber, o) {
                    var to = checkHandlePosition(
                        proposals,
                        handleNumber,
                        proposals[handleNumber] + proposal,
                        b[o],
                        f[o],
                        false
                    );

                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    } else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }

            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }

            var state = false;

            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function(handleNumber, o) {
                state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
            });

            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function(handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
            }
        }

        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }

        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;

            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

            var rule = "translate(" + inRuleOrder(toPct(transformDirection(to, 0) - scope_DirOffset), "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = rule;

            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }

        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function(handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = zIndex;
            });
        }

        // Test suggested values and apply margin, step.
        function setHandle(handleNumber, to, lookBackward, lookForward) {
            to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);

            if (to === false) {
                return false;
            }

            updateHandlePosition(handleNumber, to);

            return true;
        }

        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }

            var l = 0;
            var h = 100;

            if (index !== 0) {
                l = scope_Locations[index - 1];
            }

            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }

            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(toPct(transformDirection(l, connectWidth)), "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";

            scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
        }

        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }

            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }

            to = options.format.from(to);
            to = scope_Spectrum.toStepping(to);

            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }

            return to;
        }

        // Set the slider value.
        function valueSet(input, fireSetEvent) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;

            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : !!fireSetEvent;

            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }

            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function(handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false);
            });

            // Second pass. Now that all base values are set, apply constraints
            scope_HandleNumbers.forEach(function(handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true);
            });

            setZindex();

            scope_HandleNumbers.forEach(function(handleNumber) {
                fireEvent("update", handleNumber);

                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }

        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }

        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent) {
            var values = [];

            // Ensure numeric input
            handleNumber = Number(handleNumber);

            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider (" + VERSION + "): invalid handle number, got: " + handleNumber);
            }

            for (var i = 0; i < scope_HandleNumbers.length; i++) {
                values[i] = null;
            }

            values[handleNumber] = value;

            valueSet(values, fireSetEvent);
        }

        // Get the slider value.
        function valueGet() {
            var values = scope_Values.map(options.format.to);

            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }

            return values;
        }

        // Removes classes from the root and empties it.
        function destroy() {
            for (var key in options.cssClasses) {
                if (!options.cssClasses.hasOwnProperty(key)) {
                    continue;
                }
                removeClass(scope_Target, options.cssClasses[key]);
            }

            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }

            delete scope_Target.noUiSlider;
        }

        // Get the current step size for the slider.
        function getCurrentStep() {
            // Check all locations, map them to their stepping point.
            // Get the step point, then find it in the input list.
            return scope_Locations.map(function(location, index) {
                var nearbySteps = scope_Spectrum.getNearbySteps(location);
                var value = scope_Values[index];
                var increment = nearbySteps.thisStep.step;
                var decrement = null;

                // If the next value in this step moves into the next step,
                // the increment is the start of the next step - the current value
                if (increment !== false) {
                    if (value + increment > nearbySteps.stepAfter.startValue) {
                        increment = nearbySteps.stepAfter.startValue - value;
                    }
                }

                // If the value is beyond the starting point
                if (value > nearbySteps.thisStep.startValue) {
                    decrement = nearbySteps.thisStep.step;
                } else if (nearbySteps.stepBefore.step === false) {
                    decrement = false;
                }

                // If a handle is at the start of a step, it always steps back into the previous step first
                else {
                    decrement = value - nearbySteps.stepBefore.highestStep;
                }

                // Now, if at the slider edges, there is not in/decrement
                if (location === 100) {
                    increment = null;
                } else if (location === 0) {
                    decrement = null;
                }

                // As per #391, the comparison for the decrement step can have some rounding issues.
                var stepDecimals = scope_Spectrum.countStepDecimals();

                // Round per #391
                if (increment !== null && increment !== false) {
                    increment = Number(increment.toFixed(stepDecimals));
                }

                if (decrement !== null && decrement !== false) {
                    decrement = Number(decrement.toFixed(stepDecimals));
                }

                return [decrement, increment];
            });
        }

        // Updateable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();

            var updateAble = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];

            // Only change options that we're actually passed to update.
            updateAble.forEach(function(name) {
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });

            var newOptions = testOptions(originalOptions);

            // Load new options into the slider state
            updateAble.forEach(function(name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });

            scope_Spectrum = newOptions.spectrum;

            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;

            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            }

            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(optionsToUpdate.start || v, fireSetEvent);
        }

        // Create the base element, initialize HTML and set classes.
        // Add handles and connect elements.
        scope_Base = addSlider(scope_Target);
        addElements(options.connect, scope_Base);

        // Attach user events.
        bindSliderEvents(options.events);

        // Use the public value method to set the start values.
        valueSet(options.start);

        // noinspection JSUnusedGlobalSymbols
        scope_Self = {
            destroy: destroy,
            steps: getCurrentStep,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function(a, b, c) {
                moveHandles(a, b, scope_Locations, c);
            },
            options: originalOptions, // Issue #600, #678
            updateOptions: updateOptions,
            target: scope_Target, // Issue #597
            removePips: removePips,
            pips: pips // Issue #594
        };

        if (options.pips) {
            pips(options.pips);
        }

        if (options.tooltips) {
            tooltips();
        }

        aria();

        return scope_Self;
    }

    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
        }

        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
        }

        // Test the options and create the slider environment;
        var options = testOptions(originalOptions, target);
        var api = scope(target, options, originalOptions);

        target.noUiSlider = api;

        return api;
    }

    // Use an object instead of a function for future expandability;
    return {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        version: VERSION,
        create: initialize
    };
});


/***/ }),

/***/ "./src/app/main/auto-carrier/auto-carrier-rule-clone/auto-carrier-rule-clone.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/auto-carrier/auto-carrier-rule-clone/auto-carrier-rule-clone.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-subheader \">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto col-sm-6\">\n                <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                    <span>{{l(\"RuleClone\")}}</span>\n                </h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"m-content\">\n        <div class=\"m-portlet m-portlet--mobile\">\n            <div class=\"m-portlet__body\">\n                <div class=\"col-lg-12 alert alert-success\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\"></button>\n                    {{l(\"Tips\")}}:<br />\n                    {{l(\"RuleCloneComponents_Info\")}}<br />\n                </div>\n                <div class=\"m-form m-form--label-align-right\">\n                    <div class=\"row m--margin-bottom-10\">\n                        <div class=\"col-xl-4\">\n                            <div class=\"form-group\">\n                                <company-combo [(selectedCompany)]=\"cloneInput.sourceCode\"></company-combo>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-1\">\n                            <div class=\"form-group\">\n                                <i class=\"fa fa-arrow-right\" style=\"font-size: 2.5rem;\"></i> </div>\n                        </div>\n                        <div class=\"col-xl-4\">\n                            <div class=\"form-group\">\n                                <company-combo [(selectedCompany)]=\"cloneInput.destinationCode\"></company-combo>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-3 text-right\">\n                            <button name=\"RefreshButton\" class=\"btn btn-metal\" (click)=\"cloneRule()\"><i class=\"la la-copyright\"></i>\n                                {{l('Clone')}}</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main/auto-carrier/auto-carrier-rule-clone/auto-carrier-rule-clone.component.less":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/auto-carrier/auto-carrier-rule-clone/auto-carrier-rule-clone.component.less ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/auto-carrier/auto-carrier-rule-clone/auto-carrier-rule-clone.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/main/auto-carrier/auto-carrier-rule-clone/auto-carrier-rule-clone.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AutoCarrierRuleCloneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCarrierRuleCloneComponent", function() { return AutoCarrierRuleCloneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutoCarrierRuleCloneComponent = /** @class */ (function (_super) {
    __extends(AutoCarrierRuleCloneComponent, _super);
    function AutoCarrierRuleCloneComponent(_autoCarrierService, injector) {
        var _this = _super.call(this, injector) || this;
        _this._autoCarrierService = _autoCarrierService;
        _this.cloneInput = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["PutRuleCloneInput"]();
        return _this;
    }
    AutoCarrierRuleCloneComponent.prototype.ngOnChanges = function (changes) {
    };
    AutoCarrierRuleCloneComponent.prototype.ngOnInit = function () {
    };
    AutoCarrierRuleCloneComponent.prototype.cloneRule = function () {
        var _this = this;
        console.log("" + JSON.stringify(this.cloneInput));
        abp.ui.setBusy();
        this._autoCarrierService
            .putRuleClone(this.cloneInput)
            .finally(function () {
            abp.ui.clearBusy();
        }).subscribe(function (result) {
            _this.notify.info(_this.l('SavedSuccessfully'));
        });
    };
    AutoCarrierRuleCloneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./auto-carrier-rule-clone.component.html */ "./src/app/main/auto-carrier/auto-carrier-rule-clone/auto-carrier-rule-clone.component.html"),
            styles: [__webpack_require__(/*! ./auto-carrier-rule-clone.component.less */ "./src/app/main/auto-carrier/auto-carrier-rule-clone/auto-carrier-rule-clone.component.less")],
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["AutoCarrierServiceProxy"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AutoCarrierRuleCloneComponent);
    return AutoCarrierRuleCloneComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/main/auto-carrier/auto-carrier.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/auto-carrier/auto-carrier.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-subheader \">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto col-sm-6\">\n                <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                    <span>{{l(\"RuleSetting\")}}</span>\n                </h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"m-content\">\n        <div class=\"m-portlet m-portlet--mobile\">\n            <div class=\"m-portlet__body\">\n                <div class=\"m-form m-form--label-align-right\">\n                    <div class=\"row m--margin-bottom-10\">\n                        <div class=\"col-xl-6\">\n                            <div class=\"form-group\">\n                                <company-combo (selectedCompanyChange)=\"selectedCompanyHandler($event)\"></company-combo>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-6 text-right\">\n                            <button name=\"RefreshButton\" class=\"btn btn-metal\" (click)=\"selectedCompanyHandler(null)\"><i class=\"la la-refresh\"></i>\n                                {{l('Refresh')}}</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--begin::Portlet-->\n        <div class=\"m-portlet m-portlet--mobile\" m-portlet=\"true\" *ngFor=\"let rule of selectedCarrierRules\">\n            <!--begin::Form-->\n            <form class=\"m-form m-form--fit m-form--label-align-right\">\n                <div class=\"m-portlet__body\">\n                    <div class=\"form-group  m-form__group row\">\n                        <div class=\"ribbon ribbon-color-primary\"><span>{{rule.companyCode}} -{{rule.province}} ：</span>\n                            <i *ngIf=\"rule.isPriority\" class=\"la la-check\"></i>\n                            <i *ngIf=\"!rule.isPriority\" class=\"la la-balance-scale\"></i>\n                        </div>\n                        <div class=\"col-md-5\">\n                            <carrier-combo [(selectedCarrier)]=\"rule.carrierCode\"></carrier-combo>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"m-radio-inline\">\n                                <label class=\"m-checkbox m-checkbox--state-info\">\n                                    <input type=\"checkbox\" [(ngModel)]=\"rule.isPriority\" name='priorityCheck'> 省份匹配优先\n                                    <span></span>\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4  clearfix text-right\">\n                            <button class=\"btn btn-sm btn-primary\" (click)=\"addLine(rule)\" [hidden]=\"rule.isPriority\">\n                                <i class=\"la la-plus\"></i>\n                                {{l('Add')}}\n                            </button>\n                            <button class=\"btn btn-sm btn-info\" (click)=\"save(rule)\">\n                                <i class=\"la la-save\"></i>\n                                {{l('Save')}}</button>\n                        </div>\n                    </div>\n                    <div class=\"form-group  m-form__group row\" [hidden]=\"rule.isPriority\" *ngFor=\"let weightRule of rule.weightRules;let i=index\">\n                        <div class=\"col-md-5\">\n                            <no-ui-slider [(selectedWeight)]=\"rule.weightRules[i]\"></no-ui-slider>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <carrier-combo [(selectedCarrier)]=\"weightRule.carrierCode\"></carrier-combo>\n                        </div>\n                        <div class=\"col-md-4 clearfix text-right\">\n                            <!-- <button class=\"btn btn-sm btn-info m--margin-top-5\">\n                                <i class=\"la la-save\"></i>\n                                {{l('Save')}}\n                            </button> -->\n                            <button class=\"btn btn-sm btn-primary\" (click)=\"deleteLine(rule,weightRule)\">\n                                <i class=\"la la-trash-o\"></i>\n                                {{l('Delete')}}\n                            </button>\n                            <!-- <button class=\"btn btn-sm btn-primary m--margin-top-5\">\n                                <i class=\"la la-plus\"></i>\n                            </button> -->\n                        </div>\n                    </div>\n                    <div class=\"row margin-bottom-10\" style=\"margin-left:15px\">\n                        <div class=\"col-sm-12\">\n                            <span class=\"clickable-item text-muted\" *ngIf=\"rule.isPriority\" (click)=\"rule.isPriority=!rule.isPriority\"><i\n                                    class=\"fa fa-angle-down\"></i> {{l(\"ShowWeightRuleList\")}}</span>\n                            <span class=\"clickable-item text-muted\" *ngIf=\"!rule.isPriority\" (click)=\"rule.isPriority=!rule.isPriority\"><i\n                                    class=\"fa fa-angle-up\"></i> {{l(\"HideWeightRuleList\")}}</span>\n                        </div>\n                    </div>\n                    <!-- <div class=\"col-lg-4\">\n                        <div class=\"btn btn btn-sm btn-brand m-btn m-btn--icon m-btn--pill m-btn--wide\">\n                            <span>\n                                <i class=\"la la-plus\"></i>\n                                <span>{{l('Add')}}</span>\n                            </span>\n                        </div>\n                    </div> -->\n                </div>\n            </form>\n            <!--end::Form-->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main/auto-carrier/auto-carrier.component.less":
/*!***************************************************************!*\
  !*** ./src/app/main/auto-carrier/auto-carrier.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ribbon {\n  padding: 0.5em 1em;\n  margin: -42px 0px 0px -20px;\n  position: absolute;\n}\n.ribbon.ribbon-color-primary {\n  background-color: #337ab7;\n  color: #fff;\n}\n.btn.blue {\n  color: #FFF;\n  background-color: #3598dc;\n  border-color: #3598dc;\n}\n"

/***/ }),

/***/ "./src/app/main/auto-carrier/auto-carrier.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/auto-carrier/auto-carrier.component.ts ***!
  \*************************************************************/
/*! exports provided: AutoCarrierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCarrierComponent", function() { return AutoCarrierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutoCarrierComponent = /** @class */ (function (_super) {
    __extends(AutoCarrierComponent, _super);
    function AutoCarrierComponent(_autoCarrierService, injector) {
        var _this = _super.call(this, injector) || this;
        _this._autoCarrierService = _autoCarrierService;
        //Filters
        _this.selectedCompany = undefined;
        return _this;
        // this.testCarrierWeightRuleDto.minWeight = 10;
        // this.testCarrierWeightRuleDto.maxWeight = 50;
        // this.testCarrierWeightRuleDto.carrierCode = 'ZTO';
        // this.testCarrierWeightRuleDto.id = 1;
        // this.selectedCarrier = 'SF';
    }
    AutoCarrierComponent.prototype.ngOnChanges = function (changes) {
    };
    AutoCarrierComponent.prototype.ngOnInit = function () {
        // noUiSlider.create(this.slider.nativeElement, {
        //     range: {
        //         'min': 0,
        //         'max': 100
        //     },
        //     start: [20, 80],
        //     connect: true,
        // });
        // $(this.repeater1.nativeElement).repeater(
        // );
    };
    AutoCarrierComponent.prototype.selectedCompanyHandler = function (event) {
        if (event != undefined || event != null) {
            this.selectedCompany = event;
        }
        if (this.selectedCompany == undefined || this.selectedCompany == null) {
            return;
        }
        this.getCarrierRulesByCompanyCode(this.selectedCompany);
    };
    AutoCarrierComponent.prototype.getCarrierRulesByCompanyCode = function (companyCode) {
        var _this = this;
        abp.ui.setBusy();
        this._autoCarrierService
            .getCarrierRulesByCompanyCodeAsync(companyCode)
            .finally(function () {
            abp.ui.clearBusy();
        })
            .subscribe(function (result) {
            _this.selectedCarrierRules = result.items;
            // this.selectedCarrierRules[0].carrierWeightRuleDtos.unshift(
            //     this.testCarrierWeightRuleDto
            // );
            // console.log(`json data: ${JSON.stringify(this.selectedCarrierRules)}`);
        });
    };
    AutoCarrierComponent.prototype.addLine = function (rule) {
        if (rule.weightRules == undefined) {
            rule.weightRules = new Array();
        }
        // console.log(`${JSON.stringify(rule)}`);
        var newRule = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["CarrierWeightRuleDto"]();
        newRule.init({
            minWeight: 0,
            maxWeight: 0,
            autoCarrierRuleId: rule.id
        });
        rule.weightRules.push(newRule);
    };
    AutoCarrierComponent.prototype.deleteLine = function (rule, weightRule) {
        var deleteIndex;
        $.each(rule.weightRules, function (index, item) {
            if (item.minWeight == weightRule.minWeight
                && item.maxWeight == weightRule.maxWeight
                && item.id == weightRule.id
                && item.carrierCode == weightRule.carrierCode) {
                deleteIndex = index;
                return false;
            }
        });
        rule.weightRules.splice(deleteIndex, 1);
    };
    AutoCarrierComponent.prototype.save = function (rule) {
        var _this = this;
        abp.ui.setBusy();
        this._autoCarrierService
            .updateOrInsertAutoCarrierRule(rule)
            .finally(function () {
            abp.ui.clearBusy();
        }).subscribe(function (result) {
            _this.getCarrierRulesByCompanyCode(rule.companyCode);
            _this.notify.info(_this.l('SavedSuccessfully'));
        });
    };
    AutoCarrierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./auto-carrier.component.html */ "./src/app/main/auto-carrier/auto-carrier.component.html"),
            styles: [__webpack_require__(/*! ./auto-carrier.component.less */ "./src/app/main/auto-carrier/auto-carrier.component.less")],
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["AutoCarrierServiceProxy"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AutoCarrierComponent);
    return AutoCarrierComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition] id=\"TenantDashboard\">\n    <div class=\"m-subheader\">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto\">\n                <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                    <span>{{l(\"Dashboard\")}}</span>\n                </h3>\n                <span class=\"m-section__sub\">\n                    {{l(\"DashboardHeaderInfo\")}}\n                </span>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"m-content\">\n\n        <div class=\"m-portlet\">\n            <div class=\"m-portlet__body  m-portlet__body--no-padding\">\n                <div class=\"row m-row--no-padding m-row--col-separator-xl\">\n                    <div class=\"col-md-12 col-lg-6 col-xl-3\">\n                        <div class=\"m-widget24\">\n                            <div class=\"m-widget24__item\">\n                                <h4 class=\"m-widget24__title\">\n                                    Total Frofit\n                                </h4>\n                                <br>\n                                <span class=\"m-widget24__desc\">\n                                    All Customs Value\n                                </span>\n                                <span class=\"m-widget24__stats m--font-brand\">\n                                    $ <span counto [step]=\"30\"\n                                            [duration]=\"1\"\n                                            [countFrom]=\"0\"\n                                            [countTo]=\"dashboardHeaderStats.totalProfit\"\n                                            (countoChange)=\"dashboardHeaderStats.totalProfitCounter = $event\">\n                                        {{dashboardHeaderStats.totalProfitCounter.toFixed(0)}}\n                                    </span>\n                                </span>\n                                <div class=\"m--space-10\"></div>\n                                <div class=\"progress m-progress--sm\">\n                                    <div class=\"progress-bar m--bg-brand\" role=\"progressbar\" style=\"width: 76%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                </div>\n                                <span class=\"m-widget24__change\">\n                                    Change\n                                </span>\n                                <span class=\"m-widget24__number\">\n                                    <span class=\"counterup\">{{dashboardHeaderStats.totalProfitChange}}</span>%\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 col-lg-6 col-xl-3\">\n                        <div class=\"m-widget24\">\n                            <div class=\"m-widget24__item\">\n                                <h4 class=\"m-widget24__title\">\n                                    New Feedbacks\n                                </h4>\n                                <br>\n                                <span class=\"m-widget24__desc\">\n                                    Customer Review\n                                </span>\n                                <span class=\"m-widget24__stats m--font-info\"\n                                      counto\n                                      [step]=\"30\"\n                                      [duration]=\"1\"\n                                      [countFrom]=\"0\"\n                                      [countTo]=\"dashboardHeaderStats.newFeedbacks\"\n                                      (countoChange)=\"dashboardHeaderStats.newFeedbacksCounter = $event\">\n                                    {{dashboardHeaderStats.newFeedbacksCounter.toFixed(0)}}\n                                </span>\n                                <div class=\"m--space-10\"></div>\n                                <div class=\"progress m-progress--sm\">\n                                    <div class=\"progress-bar m--bg-info\" role=\"progressbar\" style=\"width: 85%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                </div>\n                                <span class=\"m-widget24__change\">\n                                    Change\n                                </span>\n                                <span class=\"m-widget24__number\">\n                                    <span class=\"counterup\">{{dashboardHeaderStats.newFeedbacksChange}}</span>%\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 col-lg-6 col-xl-3\">\n                        <div class=\"m-widget24\">\n                            <div class=\"m-widget24__item\">\n                                <h4 class=\"m-widget24__title\">\n                                    New Orders\n                                </h4>\n                                <br>\n                                <span class=\"m-widget24__desc\">\n                                    Fresh Order Amount\n                                </span>\n                                <span class=\"m-widget24__stats m--font-info\"\n                                      counto\n                                      [step]=\"30\"\n                                      [duration]=\"1\"\n                                      [countFrom]=\"0\"\n                                      [countTo]=\"dashboardHeaderStats.newOrders\"\n                                      (countoChange)=\"dashboardHeaderStats.newOrdersCounter = $event\">\n                                    {{dashboardHeaderStats.newOrdersCounter.toFixed(0)}}\n                                </span>\n                                <div class=\"m--space-10\"></div>\n                                <div class=\"progress m-progress--sm\">\n                                    <div class=\"progress-bar m--bg-danger\" role=\"progressbar\" style=\"width: 45%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                </div>\n                                <span class=\"m-widget24__change\">\n                                    Change\n                                </span>\n                                <span class=\"m-widget24__number\">\n                                    <span class=\"counterup\">{{dashboardHeaderStats.newOrdersChange}}</span>%\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 col-lg-6 col-xl-3\">\n                        <div class=\"m-widget24\">\n                            <div class=\"m-widget24__item\">\n                                <h4 class=\"m-widget24__title\">\n                                    New Users\n                                </h4>\n                                <br>\n                                <span class=\"m-widget24__desc\">\n                                    Joined New User\n                                </span>\n                                <span class=\"m-widget24__stats m--font-info\"\n                                      counto\n                                      [step]=\"30\"\n                                      [duration]=\"1\"\n                                      [countFrom]=\"0\"\n                                      [countTo]=\"dashboardHeaderStats.newUsers\"\n                                      (countoChange)=\"dashboardHeaderStats.newUsersCounter = $event\">\n                                    {{dashboardHeaderStats.newUsersCounter.toFixed(0)}}\n                                </span>\n                                <div class=\"m--space-10\"></div>\n                                <div class=\"progress m-progress--sm\">\n                                    <div class=\"progress-bar m--bg-success\" role=\"progressbar\" style=\"width: 57%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                </div>\n                                <span class=\"m-widget24__change\">\n                                    Change\n                                </span>\n                                <span class=\"m-widget24__number\">\n                                    <span class=\"counterup\">{{dashboardHeaderStats.newUsersChange}}</span>%\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-6 col-sm-12\">\n                <div class=\"m-portlet m-portlet--full-height\">\n                    <div class=\"m-portlet__head\">\n                        <div class=\"m-portlet__head-caption\">\n                            <div class=\"m-portlet__head-title\">\n                                <h3 class=\"m-portlet__head-text\">\n                                    Sales Summary\n                                </h3>\n                            </div>\n                        </div>\n                        <div class=\"m-portlet__head-tools\">\n                            <div class=\"btn-group btn-group-devided\" data-toggle=\"buttons\">\n                                <label class=\"btn m-btn--pill btn-secondary active\" (click)=\"salesSummaryChart.reload(appSalesSummaryDateInterval.Daily)\">\n                                    <input type=\"radio\"\n                                           name=\"SalesSummaryDateInterval\"\n                                           class=\"toggle\"\n                                           [value]=\"appSalesSummaryDateInterval.Daily\">\n                                    {{l(\"Daily\")}}\n                                </label>\n                                <label class=\"btn m-btn--pill btn-secondary\" (click)=\"salesSummaryChart.reload(appSalesSummaryDateInterval.Weekly)\">\n                                    <input type=\"radio\"\n                                           name=\"SalesSummaryDateInterval\"\n                                           class=\"toggle\"\n                                           [value]=\"appSalesSummaryDateInterval.Weekly\">\n                                    {{l(\"Weekly\")}}\n                                </label>\n                                <label class=\"btn m-btn--pill btn-secondary\" (click)=\"salesSummaryChart.reload(appSalesSummaryDateInterval.Monthly)\">\n                                    <input type=\"radio\"\n                                           name=\"SalesSummaryDateInterval\"\n                                           class=\"toggle\"\n                                           [value]=\"appSalesSummaryDateInterval.Monthly\">\n                                    {{l(\"Monthly\")}}\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"m-portlet__body\" [busyIf]=\"salesSummaryChart.loading\">\n                        <div class=\"row list-separated\">\n                            <div class=\"col-md-3 col-sm-3 col-xs-6\">\n                                <h6>\n                                    Total Sales\n                                </h6>\n                                <div>\n                                    <span counto\n                                          class=\"m--font-danger m--font-bolder\"\n                                          [step]=\"30\"\n                                          [duration]=\"1\"\n                                          [countFrom]=\"0\"\n                                          [countTo]=\"salesSummaryChart.totalSales\"\n                                          (countoChange)=\"salesSummaryChart.totalSalesCounter = $event\">\n                                        {{salesSummaryChart.totalSalesCounter.toFixed(0)}}\n                                    </span>\n                                    <span class=\"m--font-danger m--font-bolder\">$</span>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3 col-sm-3 col-xs-6\">\n                                <h6>\n                                    Revenue\n                                </h6>\n                                <div class=\"uppercase font-hg font-green-haze\">\n                                    <span counto\n                                          class=\"m--font-warning m--font-bolder\"\n                                          [step]=\"30\"\n                                          [duration]=\"1\"\n                                          [countFrom]=\"0\"\n                                          [countTo]=\"salesSummaryChart.revenue\"\n                                          (countoChange)=\"salesSummaryChart.revenuesCounter = $event\">\n                                        {{salesSummaryChart.revenuesCounter.toFixed(0)}}\n                                    </span>\n                                    <span class=\"m--font-warning m--font-bolder\">$</span>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3 col-sm-3 col-xs-6\">\n                                <h6>\n                                    Expenses\n                                </h6>\n                                <div class=\"uppercase font-hg font-purple\">\n                                    <span counto\n                                          class=\"m--font-info m--font-bolder\"\n                                          [step]=\"30\"\n                                          [duration]=\"1\"\n                                          [countFrom]=\"0\"\n                                          [countTo]=\"salesSummaryChart.expenses\"\n                                          (countoChange)=\"salesSummaryChart.expensesCounter = $event\">\n                                        {{salesSummaryChart.expensesCounter.toFixed(0)}}\n                                    </span>\n                                    <span class=\"m--font-success m--font-bolder\">$</span>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3 col-sm-3 col-xs-6\">\n                                <h6>\n                                    Growth\n                                </h6>\n                                <div class=\"uppercase font-hg font-blue-sharp\">\n                                    <span counto\n                                          class=\"m--font-info m--font-bolder\"\n                                          [step]=\"30\"\n                                          [duration]=\"1\"\n                                          [countFrom]=\"0\"\n                                          [countTo]=\"salesSummaryChart.growth\"\n                                          (countoChange)=\"salesSummaryChart.growthCounter = $event\">\n                                        {{salesSummaryChart.growthCounter.toFixed(0)}}\n                                    </span>\n                                    <span class=\"m--font-info m--font-bolder\">$</span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div id=\"salesStatistics\"\n                             class=\"portlet-body-morris-fit morris-chart\"\n                             style=\"height: 260px;\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-sm-12\">\n                <div class=\"m-portlet m-portlet--full-height\">\n                    <div class=\"m-portlet__head\">\n                        <div class=\"m-portlet__head-caption\">\n                            <div class=\"m-portlet__head-title\">\n                                <h3 class=\"m-portlet__head-text\">\n                                    Regional Stats\n                                </h3>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"m-portlet__body\">\n                        <div id=\"region_statistics_content\">\n                            <div class=\"table-responsive\">\n                                <!--begin::Table-->\n                                <table class=\"table\">\n                                    <!--begin::Thead-->\n                                    <thead>\n                                        <tr>\n                                            <td class=\"m-widget11__label\">#</td>\n                                            <td class=\"m-widget11__app\">Country</td>\n                                            <td class=\"m-widget11__sales\">Sales</td>\n                                            <td class=\"m-widget11__change\">Change</td>\n                                            <td class=\"m-widget11__price\">Avg Price</td>\n                                            <td class=\"m-widget11__total\">Total</td>\n                                        </tr>\n                                    </thead>\n                                    <!--end::Thead-->\n                                    <!--begin::Tbody-->\n                                    <tbody>\n                                        <tr *ngFor=\"let stat of regionalStatsTable.stats; let index = index\">\n                                            <td>\n                                                <label class=\"m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand\">\n                                                    <input type=\"checkbox\"><span></span>\n                                                </label>\n                                            </td>\n                                            <td>{{stat.countryName}}</td>\n                                            <td>{{stat.sales | currency}}</td>\n                                            <td >\n                                                <div class=\"m-widget11__chart\" style=\"height:50px; width: 100px\">\n                                                    <iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n                                                    <canvas class=\"m_chart_sales_by_region\" style=\"display: block; width: 100px; height: 50px;\" width=\"100\" height=\"50\"></canvas>\n                                                </div>\n                                            </td>\n                                            <td>{{stat.averagePrice | currency}}</td>\n                                            <td>{{stat.totalPrice | currency}}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-6 col-sm-12\">\n                <div class=\"m-portlet m-portlet--full-height \">\n                    <div class=\"m-portlet__head\">\n                        <div class=\"m-portlet__head-caption\">\n                            <div class=\"m-portlet__head-title\">\n                                <h3 class=\"m-portlet__head-text\">\n                                    General Stats\n                                </h3>\n                            </div>\n                        </div>\n                        <div class=\"m-portlet__head-tools\">\n                            <a href=\"javascript:;\" class=\"btn btn-primary\" (click)=\"generalStatsPieChart.reload()\">\n                                <i class=\"fa fa-repeat\"></i> Reload\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"m-portlet__body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <div class=\"easy-pie-chart\">\n                                    <div class=\"number\">\n                                        <span>+{{generalStatsPieChart.transactionPercent.value}}%</span>\n                                        <easy-pie-chart [percent]=\"generalStatsPieChart.transactionPercent.value\"\n                                                        [options]=\"generalStatsPieChart.transactionPercent.options\">\n                                        </easy-pie-chart>\n                                    </div>\n                                    <a class=\"title\" href=\"javascript:;\">\n                                        Transactions\n                                        <i class=\"icon-arrow-right\"></i>\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"margin-bottom-10 visible-sm\"> </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"easy-pie-chart\">\n                                    <div class=\"number\">\n                                        <span>+{{generalStatsPieChart.newVisitPercent.value}}%</span>\n                                        <easy-pie-chart [percent]=\"generalStatsPieChart.newVisitPercent.value\"\n                                                        [options]=\"generalStatsPieChart.newVisitPercent.options\">\n                                        </easy-pie-chart>\n                                    </div>\n                                    <a class=\"title\" href=\"javascript:;\">\n                                        New Visits\n                                        <i class=\"icon-arrow-right\"></i>\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"margin-bottom-10 visible-sm\"> </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"easy-pie-chart\">\n                                    <div class=\"number\">\n                                        <span>+{{generalStatsPieChart.bouncePercent.value}}%</span>\n                                        <easy-pie-chart [percent]=\"generalStatsPieChart.bouncePercent.value\"\n                                                        [options]=\"generalStatsPieChart.bouncePercent.options\">\n                                        </easy-pie-chart>\n                                    </div>\n                                    <a class=\"title\" href=\"javascript:;\">\n                                        Bounce\n                                        <i class=\"icon-arrow-right\"></i>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-sm-12\">\n                <div class=\"m-portlet m-portlet--full-height \">\n                    <div class=\"m-portlet__head\">\n                        <div class=\"m-portlet__head-caption\">\n                            <div class=\"m-portlet__head-title\">\n                                <h3 class=\"m-portlet__head-text\">\n                                    Daily Sales\n                                </h3>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"m-portlet__body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <canvas #m_chart_daily_sales id=\"m_chart_daily_sales\"></canvas>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-xs-12 col-sm-12\">\n                <div class=\"m-portlet m-portlet--full-height \">\n                    <div class=\"m-portlet__head\">\n                        <div class=\"m-portlet__head-caption\">\n                            <div class=\"m-portlet__head-title\">\n                                <h3 class=\"m-portlet__head-text\">\n                                    Profit Share\n                                    <small>\n                                        Profit Share between customers\n                                    </small>\n                                </h3>\n                            </div>\n                        </div>\n                        <div class=\"m-portlet__head-tools\">\n                            <ul class=\"m-portlet__nav\">\n                                <li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n                                    <a href=\"javascript:;\" class=\"m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand\">\n                                        Actions\n                                    </a>\n                                    <div class=\"m-dropdown__wrapper\">\n                                        <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\" style=\"left: auto; right: 40.5px;\"></span>\n                                        <div class=\"m-dropdown__inner\">\n                                            <div class=\"m-dropdown__body\">\n                                                <div class=\"m-dropdown__content\">\n                                                    <ul class=\"m-nav\">\n                                                        <li class=\"m-nav__item\">\n                                                            <a href=\"javascript:;\" class=\"m-nav__link\">\n                                                                <i class=\"m-nav__link-icon flaticon-share\"></i>\n                                                                <span class=\"m-nav__link-text\">\n                                                                    Action 1\n                                                                </span>\n                                                            </a>\n                                                        </li>\n                                                        <li class=\"m-nav__item\">\n                                                            <a href=\"javascript:;\" class=\"m-nav__link\">\n                                                                <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n                                                                <span class=\"m-nav__link-text\">\n                                                                    Action 2\n                                                                </span>\n                                                            </a>\n                                                        </li>\n                                                        <li class=\"m-nav__item\">\n                                                            <a href=\"javascript:;\" class=\"m-nav__link\">\n                                                                <i class=\"m-nav__link-icon flaticon-info\"></i>\n                                                                <span class=\"m-nav__link-text\">\n                                                                    Action 3\n                                                                </span>\n                                                            </a>\n                                                        </li>\n                                                        <li class=\"m-nav__item\">\n                                                            <a href=\"javascript:;\" class=\"m-nav__link\">\n                                                                <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n                                                                <span class=\"m-nav__link-text\">\n                                                                    Action 4\n                                                                </span>\n                                                            </a>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"m-portlet__body\">\n                        <!--begin:: Widgets/Profit Share-->\n                        <div class=\"m-widget14\">\n                            <div class=\"row  align-items-center\">\n                                <div class=\"col\">\n                                    <div id=\"m_chart_profit_share\" class=\"m-widget14__chart\" style=\"height: 160px\">\n                                        <div class=\"m-widget14__stat\">\n                                            45\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col\">\n                                    <div class=\"m-widget14__legends\" *ngIf=\"profitSharePieChart.data\">\n                                        <div class=\"m-widget14__legend\">\n                                            <span class=\"m-widget14__legend-bullet m--bg-accent\"></span>\n                                            <span class=\"m-widget14__legend-text\">\n                                                {{profitSharePieChart.data[0]}}% Product Sales\n                                            </span>\n                                        </div>\n                                        <div class=\"m-widget14__legend\">\n                                            <span class=\"m-widget14__legend-bullet m--bg-warning\"></span>\n                                            <span class=\"m-widget14__legend-text\">\n                                                {{profitSharePieChart.data[1]}}% Online Courses\n                                            </span>\n                                        </div>\n                                        <div class=\"m-widget14__legend\">\n                                            <span class=\"m-widget14__legend-bullet m--bg-brand\"></span>\n                                            <span class=\"m-widget14__legend-text\">\n                                                {{profitSharePieChart.data[2]}}% Custom Development\n\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!--end:: Widgets/Profit Share-->\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6 col-xs-12 col-sm-12\">\n                <div class=\"m-portlet m-portlet--full-height \">\n                    <div class=\"m-portlet__head\">\n                        <div class=\"m-portlet__head-caption\">\n                            <div class=\"m-portlet__head-title\">\n                                <h3 class=\"m-portlet__head-text\">\n                                    Member Activity\n                                </h3>\n                            </div>\n                        </div>\n                        <div class=\"m-portlet__head-tools\">\n                            <button (click)=\"memberActivityTable.reload()\" class=\"btn btn-primary\"><i class=\"fa fa-refresh\"></i> Refresh</button>\n                        </div>\n                    </div>\n                    <div class=\"m-portlet__body\">\n                        <div class=\"table-scrollable table-scrollable-borderless\">\n                            <table class=\"table table-hover table-light\">\n                                <thead>\n                                    <tr class=\"uppercase\">\n                                        <th colspan=\"2\">\n                                            MEMBER\n                                        </th>\n                                        <th>\n                                            Earnings\n                                        </th>\n                                        <th>\n                                            CASES\n                                        </th>\n                                        <th>\n                                            CLOSED\n                                        </th>\n                                        <th>\n                                            RATE\n                                        </th>\n                                    </tr>\n                                </thead>\n                                <tr *ngFor=\"let m of memberActivityTable.memberActivities; let index = index\">\n                                    <td class=\"fit\">\n                                        <img class=\"m--img-rounded m--marginless m--img-centered small-profile-pic\" src=\"/assets/metronic/src/media/app/img/users/100_{{index + 1}}.jpg\">\n                                    </td>\n                                    <td>\n                                        <a href=\"javascript:;\" class=\"primary-link\">{{m.name}}</a>\n                                    </td>\n                                    <td>\n                                        {{m.earnings}}\n                                    </td>\n                                    <td>\n                                        {{m.cases}}\n                                    </td>\n                                    <td>\n                                        {{m.closed}}\n                                    </td>\n                                    <td>\n                                        <span class=\"bold font-green-haze\">{{m.rate}}</span>\n                                    </td>\n                                </tr>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.less":
/*!*********************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#TenantDashboard input[type=\"radio\"] {\n  display: none;\n}\n"

/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/AppEnums */ "./src/shared/AppEnums.ts");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function (_super) {
    __extends(DashboardComponent, _super);
    function DashboardComponent(injector, _dashboardService) {
        var _this = _super.call(this, injector) || this;
        _this._dashboardService = _dashboardService;
        _this.appSalesSummaryDateInterval = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__["AppSalesSummaryDatePeriod"];
        _this.selectedSalesSummaryDatePeriod = _shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__["AppSalesSummaryDatePeriod"].Daily;
        _this.dashboardHeaderStats = new DashboardHeaderStats();
        _this.salesSummaryChart = new SalesSummaryChart(_this._dashboardService, 'salesStatistics');
        _this.regionalStatsTable = new RegionalStatsTable(_this._dashboardService);
        _this.generalStatsPieChart = new GeneralStatsPieChart(_this._dashboardService);
        _this.dailySalesLineChart = new DailySalesLineChart(_this._dashboardService, '#m_chart_daily_sales');
        _this.profitSharePieChart = new ProfitSharePieChart(_this._dashboardService, '#m_chart_profit_share');
        _this.memberActivityTable = new MemberActivityTable(_this._dashboardService);
        return _this;
    }
    DashboardComponent.prototype.getDashboardStatisticsData = function (datePeriod) {
        var _this = this;
        this.salesSummaryChart.showLoading();
        this.generalStatsPieChart.showLoading();
        this._dashboardService
            .getDashboardData(datePeriod)
            .subscribe(function (result) {
            _this.dashboardHeaderStats.init(result.totalProfit, result.newFeedbacks, result.newOrders, result.newUsers);
            _this.generalStatsPieChart.init(result.transactionPercent, result.newVisitPercent, result.bouncePercent);
            _this.dailySalesLineChart.init(result.dailySales);
            _this.profitSharePieChart.init(result.profitShares);
            _this.salesSummaryChart.init(result.salesSummary, result.totalSales, result.revenue, result.expenses, result.growth);
        });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.getDashboardStatisticsData(_shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__["AppSalesSummaryDatePeriod"].Daily);
        this.regionalStatsTable.init();
        this.memberActivityTable.init();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/main/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.less */ "./src/app/main/dashboard/dashboard.component.less")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_2__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["TenantDashboardServiceProxy"]])
    ], DashboardComponent);
    return DashboardComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));

var DashboardChartBase = /** @class */ (function () {
    function DashboardChartBase() {
        this.loading = true;
    }
    DashboardChartBase.prototype.showLoading = function () {
        var _this = this;
        setTimeout(function () { _this.loading = true; });
    };
    DashboardChartBase.prototype.hideLoading = function () {
        var _this = this;
        setTimeout(function () { _this.loading = false; });
    };
    return DashboardChartBase;
}());
var SalesSummaryChart = /** @class */ (function (_super) {
    __extends(SalesSummaryChart, _super);
    function SalesSummaryChart(_dashboardService, _containerElement) {
        var _this = _super.call(this) || this;
        _this._dashboardService = _dashboardService;
        _this._containerElement = _containerElement;
        _this.totalSales = 0;
        _this.totalSalesCounter = 0;
        _this.revenue = 0;
        _this.revenuesCounter = 0;
        _this.expenses = 0;
        _this.expensesCounter = 0;
        _this.growth = 0;
        _this.growthCounter = 0;
        return _this;
    }
    SalesSummaryChart.prototype.init = function (salesSummaryData, totalSales, revenue, expenses, growth) {
        this.instance = Morris.Area({
            element: this._containerElement,
            padding: 0,
            behaveLikeLine: false,
            gridEnabled: false,
            gridLineColor: 'transparent',
            axes: false,
            fillOpacity: 1,
            data: salesSummaryData,
            lineColors: ['#399a8c', '#92e9dc'],
            xkey: 'period',
            ykeys: ['sales', 'profit'],
            labels: ['Sales', 'Profit'],
            pointSize: 0,
            lineWidth: 0,
            hideHover: 'auto',
            resize: true
        });
        this.totalSales = totalSales;
        this.totalSalesCounter = totalSales;
        this.revenue = revenue;
        this.expenses = expenses;
        this.growth = growth;
        this.hideLoading();
    };
    SalesSummaryChart.prototype.reload = function (datePeriod) {
        var _this = this;
        this.showLoading();
        this._dashboardService
            .getSalesSummary(datePeriod)
            .subscribe(function (result) {
            _this.instance.setData(result.salesSummary, true);
            _this.hideLoading();
        });
    };
    return SalesSummaryChart;
}(DashboardChartBase));
var RegionalStatsTable = /** @class */ (function (_super) {
    __extends(RegionalStatsTable, _super);
    function RegionalStatsTable(_dashboardService) {
        var _this = _super.call(this) || this;
        _this._dashboardService = _dashboardService;
        return _this;
    }
    RegionalStatsTable.prototype.init = function () {
        this.reload();
    };
    RegionalStatsTable.prototype._initSparklineChart = function (src, data, color, border) {
        if (src.length === 0) {
            return;
        }
        var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
                datasets: [{
                        label: "",
                        borderColor: color,
                        borderWidth: border,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 12,
                        pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                        pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                        pointHoverBackgroundColor: mUtil.getColor('danger'),
                        pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),
                        fill: false,
                        data: data,
                    }]
            },
            options: {
                title: {
                    display: false,
                },
                tooltips: {
                    enabled: false,
                    intersect: false,
                    mode: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                responsive: true,
                maintainAspectRatio: true,
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                            display: false,
                            gridLines: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month'
                            }
                        }],
                    yAxes: [{
                            display: false,
                            gridLines: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Value'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                },
                elements: {
                    point: {
                        radius: 4,
                        borderWidth: 12
                    },
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 10,
                        top: 5,
                        bottom: 0
                    }
                }
            }
        };
        return new Chart(src, config);
    };
    RegionalStatsTable.prototype.reload = function () {
        var _this = this;
        var self = this;
        this.showLoading();
        this._dashboardService
            .getRegionalStats({})
            .subscribe(function (result) {
            _this.stats = result.stats;
            _this.hideLoading();
            var colors = ['accent', 'danger', 'success', 'warning'];
            setTimeout(function () {
                var $canvasItems = $('canvas.m_chart_sales_by_region');
                for (var i = 0; i < $canvasItems.length; i++) {
                    var $canvas = $canvasItems[i];
                    self._initSparklineChart($canvas, _this.stats[i].change, mUtil.getColor(colors[i % 4]), 2);
                }
            });
        });
    };
    return RegionalStatsTable;
}(DashboardChartBase));
var GeneralStatsPieChart = /** @class */ (function (_super) {
    __extends(GeneralStatsPieChart, _super);
    function GeneralStatsPieChart(_dashboardService) {
        var _this = _super.call(this) || this;
        _this._dashboardService = _dashboardService;
        //General stats =>  EasyPieChart: https://rendro.github.io/easy-pie-chart/
        _this.transactionPercent = {
            value: 0,
            options: {
                barColor: '#F8CB00',
                trackColor: '#f9f9f9',
                scaleColor: '#dfe0e0',
                scaleLength: 5,
                lineCap: 'round',
                lineWidth: 3,
                size: 75,
                rotate: 0,
                animate: {
                    duration: 1000,
                    enabled: true
                }
            }
        };
        _this.newVisitPercent = {
            value: 0,
            options: {
                barColor: '#1bbc9b',
                trackColor: '#f9f9f9',
                scaleColor: '#dfe0e0',
                scaleLength: 5,
                lineCap: 'round',
                lineWidth: 3,
                size: 75,
                rotate: 0,
                animate: {
                    duration: 1000,
                    enabled: true
                }
            }
        };
        _this.bouncePercent = {
            value: 0,
            options: {
                barColor: '#F3565D',
                trackColor: '#f9f9f9',
                scaleColor: '#dfe0e0',
                scaleLength: 5,
                lineCap: 'round',
                lineWidth: 3,
                size: 75,
                rotate: 0,
                animate: {
                    duration: 1000,
                    enabled: true
                }
            }
        };
        return _this;
    }
    GeneralStatsPieChart.prototype.init = function (transactionPercent, newVisitPercent, bouncePercent) {
        this.transactionPercent.value = transactionPercent;
        this.newVisitPercent.value = newVisitPercent;
        this.bouncePercent.value = bouncePercent;
        this.hideLoading();
    };
    GeneralStatsPieChart.prototype.reload = function () {
        var _this = this;
        this.showLoading();
        this._dashboardService
            .getGeneralStats({})
            .subscribe(function (result) {
            _this.init(result.transactionPercent, result.newVisitPercent, result.bouncePercent);
        });
    };
    return GeneralStatsPieChart;
}(DashboardChartBase));
var DailySalesLineChart = /** @class */ (function (_super) {
    __extends(DailySalesLineChart, _super);
    function DailySalesLineChart(_dashboardService, canvasId) {
        var _this = _super.call(this) || this;
        _this._dashboardService = _dashboardService;
        _this._canvasId = canvasId;
        return _this;
    }
    DailySalesLineChart.prototype.init = function (data) {
        var dayLabels = [];
        for (var day = 1; day <= data.length; day++) {
            dayLabels.push('Day ' + day);
        }
        var chartData = {
            labels: dayLabels,
            datasets: [{
                    //label: 'Dataset 1',
                    backgroundColor: mUtil.getColor('success'),
                    data: data
                }, {
                    //label: 'Dataset 2',
                    backgroundColor: '#f3f3fb',
                    data: data
                }]
        };
        var chartContainer = $(this._canvasId);
        if (chartContainer.length === 0) {
            return;
        }
        var chart = new Chart(chartContainer, {
            type: 'bar',
            data: chartData,
            options: {
                title: {
                    display: false,
                },
                tooltips: {
                    intersect: false,
                    mode: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                barRadius: 4,
                scales: {
                    xAxes: [{
                            display: false,
                            gridLines: false,
                            stacked: true
                        }],
                    yAxes: [{
                            display: false,
                            stacked: true,
                            gridLines: false
                        }]
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        });
        this.hideLoading();
    };
    DailySalesLineChart.prototype.reload = function () {
        var _this = this;
        this.showLoading();
        this._dashboardService
            .getSalesSummary(_shared_AppEnums__WEBPACK_IMPORTED_MODULE_1__["AppSalesSummaryDatePeriod"].Monthly)
            .subscribe(function (result) {
            _this.init(result.salesSummary);
            _this.hideLoading();
        });
    };
    return DailySalesLineChart;
}(DashboardChartBase));
var ProfitSharePieChart = /** @class */ (function (_super) {
    __extends(ProfitSharePieChart, _super);
    function ProfitSharePieChart(_dashboardService, canvasId) {
        var _this = _super.call(this) || this;
        _this._dashboardService = _dashboardService;
        _this._canvasId = canvasId;
        return _this;
    }
    ProfitSharePieChart.prototype.init = function (data) {
        this.data = data;
        if ($(this._canvasId).length === 0) {
            return;
        }
        var chart = new Chartist.Pie(this._canvasId, {
            series: [{
                    value: data[0],
                    className: 'custom',
                    meta: {
                        color: mUtil.getColor('brand')
                    }
                },
                {
                    value: data[1],
                    className: 'custom',
                    meta: {
                        color: mUtil.getColor('accent')
                    }
                },
                {
                    value: data[2],
                    className: 'custom',
                    meta: {
                        color: mUtil.getColor('warning')
                    }
                }
            ],
            labels: [1, 2, 3]
        }, {
            donut: true,
            donutWidth: 17,
            showLabel: false
        });
        chart.on('draw', function (data) {
            if (data.type === 'slice') {
                // Get the total path length in order to use for dash array animation
                var pathLength = data.element._node.getTotalLength();
                // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                });
                // Create animation definition while also assigning an ID to the animation for later sync usage
                var animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 1000,
                        from: -pathLength + 'px',
                        to: '0px',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                        fill: 'freeze',
                        'stroke': data.meta.color
                    }
                };
                // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
                if (data.index !== 0) {
                    animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
                }
                // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px',
                    'stroke': data.meta.color
                });
                // We can't use guided mode as the animations need to rely on setting begin manually
                // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
                data.element.animate(animationDefinition, false);
            }
        });
        this.hideLoading();
    };
    return ProfitSharePieChart;
}(DashboardChartBase));
var DashboardHeaderStats = /** @class */ (function (_super) {
    __extends(DashboardHeaderStats, _super);
    function DashboardHeaderStats() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.totalProfit = 0;
        _this.totalProfitCounter = 0;
        _this.newFeedbacks = 0;
        _this.newFeedbacksCounter = 0;
        _this.newOrders = 0;
        _this.newOrdersCounter = 0;
        _this.newUsers = 0;
        _this.newUsersCounter = 0;
        _this.totalProfitChange = 76;
        _this.totalProfitChangeCounter = 0;
        _this.newFeedbacksChange = 85;
        _this.newFeedbacksChangeCounter = 0;
        _this.newOrdersChange = 45;
        _this.newOrdersChangeCounter = 0;
        _this.newUsersChange = 57;
        _this.newUsersChangeCounter = 0;
        return _this;
    }
    DashboardHeaderStats.prototype.init = function (totalProfit, newFeedbacks, newOrders, newUsers) {
        this.totalProfit = totalProfit;
        this.newFeedbacks = newFeedbacks;
        this.newOrders = newOrders;
        this.newUsers = newUsers;
        this.hideLoading();
    };
    return DashboardHeaderStats;
}(DashboardChartBase));
var MemberActivityTable = /** @class */ (function (_super) {
    __extends(MemberActivityTable, _super);
    function MemberActivityTable(_dashboardService) {
        var _this = _super.call(this) || this;
        _this._dashboardService = _dashboardService;
        return _this;
    }
    MemberActivityTable.prototype.init = function () {
        this.reload();
    };
    MemberActivityTable.prototype.reload = function () {
        var _this = this;
        this.showLoading();
        this._dashboardService
            .getMemberActivity()
            .subscribe(function (result) {
            _this.memberActivities = result.memberActivities;
            _this.hideLoading();
        });
    };
    return MemberActivityTable;
}(DashboardChartBase));


/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/main/dashboard/dashboard.component.ts");
/* harmony import */ var _auto_carrier_auto_carrier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auto-carrier/auto-carrier.component */ "./src/app/main/auto-carrier/auto-carrier.component.ts");
/* harmony import */ var _auto_carrier_auto_carrier_rule_clone_auto_carrier_rule_clone_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auto-carrier/auto-carrier-rule-clone/auto-carrier-rule-clone.component */ "./src/app/main/auto-carrier/auto-carrier-rule-clone/auto-carrier-rule-clone.component.ts");
/* harmony import */ var _schedule_find_production_schedule_find_production_schedule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule/find-production-schedule/find-production-schedule.component */ "./src/app/main/schedule/find-production-schedule/find-production-schedule.component.ts");
/* harmony import */ var _schedule_create_owner_gorup_create_owner_gorup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule/create-owner-gorup/create-owner-gorup.component */ "./src/app/main/schedule/create-owner-gorup/create-owner-gorup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        children: [
                            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], data: { permission: 'Pages.Tenant.Dashboard' } }
                        ]
                    },
                    {
                        path: 'autoCarrier',
                        children: [
                            { path: 'ruleSetting', component: _auto_carrier_auto_carrier_component__WEBPACK_IMPORTED_MODULE_3__["AutoCarrierComponent"], data: { permission: 'Pages.AutoCarrier.Rule.Settings' } },
                            { path: 'ruleClone', component: _auto_carrier_auto_carrier_rule_clone_auto_carrier_rule_clone_component__WEBPACK_IMPORTED_MODULE_4__["AutoCarrierRuleCloneComponent"], data: { permission: 'Pages.AutoCarrier.Rule.Clone' } },
                        ]
                    },
                    {
                        path: 'schedule',
                        children: [
                            { path: 'productSchedule', component: _schedule_find_production_schedule_find_production_schedule_component__WEBPACK_IMPORTED_MODULE_5__["FindProductionScheduleComponent"], data: { permission: 'Pages.Reports' } },
                            { path: 'ownerGroup', component: _schedule_create_owner_gorup_create_owner_gorup_component__WEBPACK_IMPORTED_MODULE_6__["CreateOwnerGorupComponent"], data: { permission: 'Pages.Reports' } }
                        ]
                    },
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_shared_common_app_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/common/app-common.module */ "./src/app/shared/common/app-common.module.ts");
/* harmony import */ var _shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/utils/utils.module */ "./src/shared/utils/utils.module.ts");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-counto */ "./node_modules/angular2-counto/index.js");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2modules-easypiechart */ "./node_modules/ng2modules-easypiechart/index.js");
/* harmony import */ var ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/main/dashboard/dashboard.component.ts");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _auto_carrier_auto_carrier_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auto-carrier/auto-carrier.component */ "./src/app/main/auto-carrier/auto-carrier.component.ts");
/* harmony import */ var _shared_company_combo_company_combo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/company-combo/company-combo.component */ "./src/app/main/shared/company-combo/company-combo.component.ts");
/* harmony import */ var _shared_no_ui_slider_no_ui_slider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/no-ui-slider/no-ui-slider.component */ "./src/app/main/shared/no-ui-slider/no-ui-slider.component.ts");
/* harmony import */ var _shared_carrier_combo_carrier_combo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/carrier-combo/carrier-combo.component */ "./src/app/main/shared/carrier-combo/carrier-combo.component.ts");
/* harmony import */ var _auto_carrier_auto_carrier_rule_clone_auto_carrier_rule_clone_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auto-carrier/auto-carrier-rule-clone/auto-carrier-rule-clone.component */ "./src/app/main/auto-carrier/auto-carrier-rule-clone/auto-carrier-rule-clone.component.ts");
/* harmony import */ var _schedule_find_production_schedule_find_production_schedule_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./schedule/find-production-schedule/find-production-schedule.component */ "./src/app/main/schedule/find-production-schedule/find-production-schedule.component.ts");
/* harmony import */ var _schedule_create_owner_gorup_create_owner_gorup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./schedule/create-owner-gorup/create-owner-gorup.component */ "./src/app/main/schedule/create-owner-gorup/create-owner-gorup.component.ts");
/* harmony import */ var _schedule_create_owner_gorup_memenber_add_memenber_add_memenber_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./schedule/create-owner-gorup/memenber/add-memenber/add-memenber.component */ "./src/app/main/schedule/create-owner-gorup/memenber/add-memenber/add-memenber.component.ts");
/* harmony import */ var _schedule_create_owner_gorup_memenber_remove_memenber_remove_memenber_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./schedule/create-owner-gorup/memenber/remove-memenber/remove-memenber.component */ "./src/app/main/schedule/create-owner-gorup/memenber/remove-memenber/remove-memenber.component.ts");
/* harmony import */ var _schedule_company_select_company_select_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./schedule/company-select/company-select.component */ "./src/app/main/schedule/company-select/company-select.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
                _app_shared_common_app_common_module__WEBPACK_IMPORTED_MODULE_3__["AppCommonModule"],
                _shared_utils_utils_module__WEBPACK_IMPORTED_MODULE_4__["UtilsModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_9__["MainRoutingModule"],
                angular2_counto__WEBPACK_IMPORTED_MODULE_5__["CountoModule"],
                ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_6__["EasyPieChartModule"]
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _shared_company_combo_company_combo_component__WEBPACK_IMPORTED_MODULE_11__["CompanyComboComponent"],
                _auto_carrier_auto_carrier_component__WEBPACK_IMPORTED_MODULE_10__["AutoCarrierComponent"],
                _shared_no_ui_slider_no_ui_slider_component__WEBPACK_IMPORTED_MODULE_12__["NoUiSliderComponent"],
                _shared_carrier_combo_carrier_combo_component__WEBPACK_IMPORTED_MODULE_13__["CarrierComboComponent"],
                _auto_carrier_auto_carrier_rule_clone_auto_carrier_rule_clone_component__WEBPACK_IMPORTED_MODULE_14__["AutoCarrierRuleCloneComponent"],
                _schedule_find_production_schedule_find_production_schedule_component__WEBPACK_IMPORTED_MODULE_15__["FindProductionScheduleComponent"],
                _schedule_create_owner_gorup_create_owner_gorup_component__WEBPACK_IMPORTED_MODULE_16__["CreateOwnerGorupComponent"],
                _schedule_create_owner_gorup_memenber_add_memenber_add_memenber_component__WEBPACK_IMPORTED_MODULE_17__["AddMemenberComponent"],
                _schedule_create_owner_gorup_memenber_remove_memenber_remove_memenber_component__WEBPACK_IMPORTED_MODULE_18__["RemoveMemenberComponent"],
                _schedule_company_select_company_select_component__WEBPACK_IMPORTED_MODULE_19__["CompanySelectComponent"]
            ]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/main/schedule/company-select/company-select.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/main/schedule/company-select/company-select.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/schedule/company-select/company-select.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/schedule/company-select/company-select.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select #CompanyCombobox class=\"form-control\" [(ngModel)]=\"selectedCompany\" (ngModelChange)=\"selectedCompanyChange.emit($event)\" [attr.data-live-search]=\"true\">\n            <!-- <option value=\"\">{{l('FilterByCompany')}}</option> -->\n            <option *ngFor=\"let company of companies\" [value]=\"company.name\">{{company.name}}</option>\n</select>"

/***/ }),

/***/ "./src/app/main/schedule/company-select/company-select.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/schedule/company-select/company-select.component.ts ***!
  \**************************************************************************/
/*! exports provided: CompanySelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanySelectComponent", function() { return CompanySelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanySelectComponent = /** @class */ (function (_super) {
    __extends(CompanySelectComponent, _super);
    function CompanySelectComponent(_autoCarrierService, injector) {
        var _this = _super.call(this, injector) || this;
        _this._autoCarrierService = _autoCarrierService;
        _this.companies = [];
        _this.selectedCompany = undefined;
        _this.selectedCompanyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    CompanySelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        abp.ui.setBusy();
        this._autoCarrierService.getCompanyCodeListAsync()
            .finally(function () {
            abp.ui.clearBusy();
        })
            .subscribe(function (result) {
            $.each(result.items, function (index, item) {
                item.name = item.code + '---' + item.name;
            });
            _this.companies = result.items;
            setTimeout(function () {
                $(self.companyComboboxElement.nativeElement).selectpicker('refresh');
            }, 0);
        });
    };
    CompanySelectComponent.prototype.ngAfterViewInit = function () {
        $(this.companyComboboxElement.nativeElement).selectpicker({
            iconBase: 'famfamfam-flag',
            tickIcon: 'fa fa-check'
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('CompanyCombobox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CompanySelectComponent.prototype, "companyComboboxElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CompanySelectComponent.prototype, "selectedCompany", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('selectedCompanyChange'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CompanySelectComponent.prototype, "selectedCompanyChange", void 0);
    CompanySelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-select',
            template: __webpack_require__(/*! ./company-select.component.html */ "./src/app/main/schedule/company-select/company-select.component.html"),
            styles: [__webpack_require__(/*! ./company-select.component.css */ "./src/app/main/schedule/company-select/company-select.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_1__["AutoCarrierServiceProxy"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], CompanySelectComponent);
    return CompanySelectComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/main/schedule/create-owner-gorup/create-owner-gorup.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/main/schedule/create-owner-gorup/create-owner-gorup.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/schedule/create-owner-gorup/create-owner-gorup.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/schedule/create-owner-gorup/create-owner-gorup.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-subheader \">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto col-sm-6\">\n                <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                    <span>{{l(\"创建货主分组\")}}</span>\n                </h3>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"m-content\">\n        <div class=\"m-portlet m-portlet--mobile\">\n            <div class=\"m-portlet__body\">\n                <form class=\"formGroup\">\n                    <div class=\"row\">\n                        <div class=\"form-group col-sm-5\">\n                            <!-- <label for=\"groupCode\">新增组别编码</label> -->\n                            <input id=\"groupCode\" name=\"groupCode\" type=\"text\" class=\"form-control\" [(ngModel)]=\"ownerGroup.groupCode\" placeholder=\"新增组别编码\">\n                        </div>\n                        <div class=\"form-group col-sm-5\">\n                            <!-- <label for=\"groupName\">新增组别名称</label> -->\n                            <input id=\"groupName\" name=\"groupName\" type=\"text\" class=\"form-control\" [(ngModel)]=\"ownerGroup.groupName\" placeholder=\"新增组别名称\">\n                        </div>\n                        <div class=\"form-group col-sm-2 right\">\n                            <button id=\"add\" class=\"btn btn-info\" (click)=\"addOwnerGroup()\"> 添加</button>\n                            <button id=\"add\" class=\"btn btn-primary\" (click)=\"refresh()\"> 刷新</button>\n                        </div>\n                    </div>\n                </form>\n\n                <!--  -->\n\n\n                <div class=\"m-portlet__body\">\n                    <!--begin: Datatable -->\n                    <div id=\"m_table_1_wrapper\" class=\"dataTables_wrapper dt-bootstrap4 no-footer\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <table (onLazyLoad)=\"getOwnerGroup($event)\" class=\"table table-striped- table-bordered table-hover table-checkable dataTable no-footer dtr-inline\" id=\"m_table_1\" role=\"grid\" aria-describedby=\"m_table_1_info\">\n                                    <thead>\n                                        <tr role=\"row\">\n                                            <th class=\"sorting_disabled\" rowspan=\"1\" colspan=\"1\" aria-label=\"Actions\">{{l('Actions')}}</th>\n                                            <th class=\"sorting_asc\" aria-controls=\"m_table_1\" rowspan=\"1\" colspan=\"1\" aria-sort=\"ascending\">组别编码\n                                            </th>\n                                            <th class=\"sorting\" aria-controls=\"m_table_1\" rowspan=\"1\" colspan=\"1\">组别名称\n                                            </th>\n                                            <th aria-controls=\"m_table_1\" rowspan=\"1\" colspan=\"1\">组别项目\n                                            </th>\n                                            <th class=\"sorting_disabled\" rowspan=\"1\" colspan=\"1\" aria-label=\"Actions\">{{l('Actions')}}</th>\n                                        </tr>\n                                    </thead>\n\n                                    <tbody>\n                                        <tr role=\"row\" class=\"odd\" *ngFor=\"let o of tableData\">\n                                            <td style=\"width: 70px\">\n                                                <div class=\"btn-group dropdown\" normalizePosition>\n                                                    <button class=\"dropdown-toggle btn btn-sm btn-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                        <i class=\"fa fa-cog\"></i><span class=\"caret\"></span>\n                                                        {{l(\"Actions\")}}\n                                                    </button>\n                                                    <ul class=\"dropdown-menu\">\n                                                        <li>\n                                                            <a (click)=\"openAddDialog(o.ownerGroup)\">{{l('添加商家')}}</a>\n                                                        </li>\n                                                        <li>\n                                                            <a (click)=\"openRemoveDialog(o.ownerGroup)\">{{l('移除商家')}}</a>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </td>\n                                            <td style=\"width:80px\" class=\"sorting_1\">\n                                                <div>\n                                                    {{o.ownerGroup.groupCode}}\n                                                </div>\n                                            </td>\n                                            <td style=\"width:120px\">\n                                                <div>\n                                                    {{o.ownerGroup.groupName}}\n                                                </div>\n                                            </td>\n                                            <td>\n                                                <div>\n                                                    <span *ngFor=\" let i of o.ownerGroup.ownerGroupMembers\">\n                                                        {{ i.ownerCode}}，\n                                                    </span>\n                                                </div>\n                                            </td>\n                                            <td style=\"width: 130px\">\n                                                <a (click)=\"editGroup(o.ownerGroup)\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill\" title=\"View\">\n                                                    <i class=\"la la-edit\"></i>\n                                                </a>\n                                                <a (click)=\"deleteGroup(o.ownerGroup)\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill\" title=\"View\">\n                                                    <i class=\"la la-trash-o\"></i>\n                                                </a>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <!-- <div class=\"row\">\n                            <div class=\"col-sm-12 col-md-5\">\n                                <div class=\"dataTables_info\" id=\"m_table_1_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 10 of 50 entries</div>\n                            </div>\n                            <div class=\"col-sm-12 col-md-7\">\n                                <div class=\"dataTables_paginate paging_simple_numbers\" id=\"m_table_1_paginate\">\n                                    <ul class=\"pagination\">\n                                        <li class=\"paginate_button page-item previous disabled\" id=\"m_table_1_previous\"><a href=\"#\" aria-controls=\"m_table_1\" data-dt-idx=\"0\" tabindex=\"0\" class=\"page-link\"><i\n                                                    class=\"la la-angle-left\"></i></a></li>\n                                        <li class=\"paginate_button page-item active\"><a href=\"#\" aria-controls=\"m_table_1\" data-dt-idx=\"1\" tabindex=\"0\" class=\"page-link\">1</a></li>\n                                        <li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"m_table_1\" data-dt-idx=\"2\" tabindex=\"0\" class=\"page-link\">2</a></li>\n                                        <li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"m_table_1\" data-dt-idx=\"3\" tabindex=\"0\" class=\"page-link\">3</a></li>\n                                        <li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"m_table_1\" data-dt-idx=\"4\" tabindex=\"0\" class=\"page-link\">4</a></li>\n                                        <li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"m_table_1\" data-dt-idx=\"5\" tabindex=\"0\" class=\"page-link\">5</a></li>\n                                        <li class=\"paginate_button page-item next\" id=\"m_table_1_next\"><a href=\"#\" aria-controls=\"m_table_1\" data-dt-idx=\"6\" tabindex=\"0\" class=\"page-link\"><i\n                                                    class=\"la la-angle-right\"></i></a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div> -->\n                    </div>\n                </div>\n                <!--  -->\n            </div>\n        </div>\n    </div>\n\n    <app-add-memenber #addMember (saveResult)=\"sucess($event)\"></app-add-memenber>\n    <app-remove-memenber #removeMember (saveResult)=\"sucess($event)\"></app-remove-memenber>\n\n</div>"

/***/ }),

/***/ "./src/app/main/schedule/create-owner-gorup/create-owner-gorup.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/schedule/create-owner-gorup/create-owner-gorup.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CreateOwnerGorupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOwnerGorupComponent", function() { return CreateOwnerGorupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _memenber_add_memenber_add_memenber_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./memenber/add-memenber/add-memenber.component */ "./src/app/main/schedule/create-owner-gorup/memenber/add-memenber/add-memenber.component.ts");
/* harmony import */ var _memenber_remove_memenber_remove_memenber_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./memenber/remove-memenber/remove-memenber.component */ "./src/app/main/schedule/create-owner-gorup/memenber/remove-memenber/remove-memenber.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateOwnerGorupComponent = /** @class */ (function (_super) {
    __extends(CreateOwnerGorupComponent, _super);
    function CreateOwnerGorupComponent(Injector, _OwnerGroupsServiceProxy) {
        var _this = _super.call(this, Injector) || this;
        _this._OwnerGroupsServiceProxy = _OwnerGroupsServiceProxy;
        _this.ownerGroup = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["OwnerGroupDto"]();
        _this.saving = false;
        _this.refresh();
        return _this;
    }
    CreateOwnerGorupComponent.prototype.ngOnInit = function () {
    };
    //添加组别
    CreateOwnerGorupComponent.prototype.addOwnerGroup = function () {
        var _this = this;
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["CreateOrEditOwnerGroupDto"]();
        input.groupName = this.ownerGroup.groupName;
        input.groupCode = this.ownerGroup.groupCode;
        this.saving = true;
        this._OwnerGroupsServiceProxy.createOrEdit(input)
            .finally(function () { _this.saving = false; })
            .subscribe(function () {
            _this.notify.info(_this.l('SavedSuccessfully'));
            _this.refresh();
        });
    };
    CreateOwnerGorupComponent.prototype.getOwnerGroup = function (event) {
        var _this = this;
        this._OwnerGroupsServiceProxy
            .getAll(undefined, undefined, undefined, undefined, undefined, undefined)
            .subscribe(function (result) {
            _this.primengTableHelper.totalRecordsCount = result.totalCount;
            _this.primengTableHelper.records = result.items;
            _this.primengTableHelper.hideLoadingIndicator();
        });
    };
    //打开添加成员对话框
    CreateOwnerGorupComponent.prototype.openAddDialog = function (ownerGroup) {
        this.addMember.show(ownerGroup);
    };
    //打开删除成员对话框
    CreateOwnerGorupComponent.prototype.openRemoveDialog = function (ownerGroup) {
        this.removeMember.show(ownerGroup);
    };
    CreateOwnerGorupComponent.prototype.refresh = function () {
        var _this = this;
        this._OwnerGroupsServiceProxy
            .getAll(undefined, undefined, undefined, undefined, undefined, undefined)
            .subscribe(function (r) {
            _this.tableData = r.items;
            // console.log(this.tableData);
        });
    };
    //修改组别信息
    CreateOwnerGorupComponent.prototype.editGroup = function (ownerGroup) {
    };
    //删除组别信息
    CreateOwnerGorupComponent.prototype.deleteGroup = function (ownerGroup) {
        var _this = this;
        if (window.confirm('您确定要删除"' + ownerGroup.groupName + '"吗？')) {
            abp.ui.setBusy();
            this._OwnerGroupsServiceProxy
                .delete(ownerGroup.id)
                .finally(function () { abp.ui.clearBusy(); })
                .subscribe(function (r) {
                _this.notify.info(_this.l('SavedSuccessfully'));
                _this.refresh();
            });
        }
    };
    CreateOwnerGorupComponent.prototype.sucess = function (event) {
        if (event == true) {
            this.refresh();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addMember'),
        __metadata("design:type", _memenber_add_memenber_add_memenber_component__WEBPACK_IMPORTED_MODULE_4__["AddMemenberComponent"])
    ], CreateOwnerGorupComponent.prototype, "addMember", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('removeMember'),
        __metadata("design:type", _memenber_remove_memenber_remove_memenber_component__WEBPACK_IMPORTED_MODULE_5__["RemoveMemenberComponent"])
    ], CreateOwnerGorupComponent.prototype, "removeMember", void 0);
    CreateOwnerGorupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-owner-gorup',
            template: __webpack_require__(/*! ./create-owner-gorup.component.html */ "./src/app/main/schedule/create-owner-gorup/create-owner-gorup.component.html"),
            styles: [__webpack_require__(/*! ./create-owner-gorup.component.css */ "./src/app/main/schedule/create-owner-gorup/create-owner-gorup.component.css")],
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_1__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["OwnerGroupsServiceProxy"]])
    ], CreateOwnerGorupComponent);
    return CreateOwnerGorupComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/main/schedule/create-owner-gorup/memenber/add-memenber/add-memenber.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/schedule/create-owner-gorup/memenber/add-memenber/add-memenber.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #addModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addModal\" aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">\n                    <span>{{l(\"增加成员\")}}: </span>\n                    <span>{{groupName}}</span>\n                </h4>\n                <button type=\"button\" class=\"close\" (click)=\"close()\" [attr.aria-label]=\"l('Close')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <app-company-select (selectedCompanyChange)=\"selectedCompanyHandler($event)\"></app-company-select>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button [disabled]=\"saving\" type=\"button\" class=\"btn btn-default\" (click)=\"close()\">{{l(\"Cancel\")}}</button>\n                <button type=\"submit\" class=\"btn btn-primary blue\" (click)=\" save()\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\"><i class=\"fa fa-save\"></i> <span>{{l(\"Save\")}}</span></button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main/schedule/create-owner-gorup/memenber/add-memenber/add-memenber.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/schedule/create-owner-gorup/memenber/add-memenber/add-memenber.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddMemenberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemenberComponent", function() { return AddMemenberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddMemenberComponent = /** @class */ (function (_super) {
    __extends(AddMemenberComponent, _super);
    function AddMemenberComponent(Injector, _autoCarrierService, _MembersServiceProxy) {
        var _this = _super.call(this, Injector) || this;
        _this._autoCarrierService = _autoCarrierService;
        _this._MembersServiceProxy = _MembersServiceProxy;
        _this.saveResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.selectedCompanyCode = undefined;
        _this.selectedCompanyName = undefined;
        _this.saving = false;
        return _this;
    }
    AddMemenberComponent.prototype.ngOnInit = function () {
    };
    AddMemenberComponent.prototype.show = function (ownerGroup) {
        this.groupName = ownerGroup.groupName;
        this.groupId = ownerGroup.id;
        this.modal.show();
        // this._userService.getUserPermissionsForEdit(userId).subscribe(result => {
        //     this.permissionTree.editData = result;
        // });
    };
    AddMemenberComponent.prototype.selectedCompanyHandler = function (event) {
        if (event != undefined || event != null) {
            this.selectedCompanyCode = event.slice(0, event.indexOf('---'));
            this.selectedCompanyName = event.slice(event.indexOf('---') + 3);
        }
        if (this.selectedCompanyCode == undefined || this.selectedCompanyCode == null) {
            return;
        }
    };
    AddMemenberComponent.prototype.save = function () {
        var _this = this;
        var input = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["CreateOrEditOwnerGroupMemberDto"]();
        input.ownerCode = this.selectedCompanyCode;
        input.ownerName = this.selectedCompanyName;
        input.ownerGroupId = this.groupId;
        this.saving = true;
        this._MembersServiceProxy
            .createOrEdit(input)
            .finally(function () { _this.saving = false; })
            .subscribe(function () {
            _this.notify.info(_this.l('SavedSuccessfully'));
            _this.saveResult.emit(true);
            _this.close();
        });
    };
    AddMemenberComponent.prototype.close = function () {
        this.modal.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], AddMemenberComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddMemenberComponent.prototype, "saveResult", void 0);
    AddMemenberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-memenber',
            template: __webpack_require__(/*! ./add-memenber.component.html */ "./src/app/main/schedule/create-owner-gorup/memenber/add-memenber/add-memenber.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["AutoCarrierServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_3__["OwnerGroupMembersServiceProxy"]])
    ], AddMemenberComponent);
    return AddMemenberComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/main/schedule/create-owner-gorup/memenber/remove-memenber/remove-memenber.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/schedule/create-owner-gorup/memenber/remove-memenber/remove-memenber.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/schedule/create-owner-gorup/memenber/remove-memenber/remove-memenber.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/schedule/create-owner-gorup/memenber/remove-memenber/remove-memenber.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div bsModal #removeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"removeModal\" aria-hidden=\"true\" [config]=\"{backdrop: 'static'}\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">\n                    <span>{{l(\"删除成员\")}}: </span>\n                    <span>{{groupName}}</span>\n                </h4>\n                <button type=\"button\" class=\"close\" (click)=\"close()\" [attr.aria-label]=\"l('Close')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <!--  -->\n                    <select #CompanyCombobox class=\"form-control\" [(ngModel)]=\"selectedCompanyId\" [attr.data-live-search]=\"true\">\n                        <option *ngFor=\"let company of companies\" [value]=\"company.id\">{{company.ownerName}}</option>\n                    </select>\n                    <!--  -->\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button [disabled]=\"saving\" type=\"button\" class=\"btn btn-default\" (click)=\"close()\">{{l(\"Cancel\")}}</button>\n                <button type=\"submit\" class=\"btn btn-primary blue\" (click)=\" save()\" [buttonBusy]=\"saving\" [busyText]=\"l('SavingWithThreeDot')\"><i\n                        class=\"fa fa-save\"></i> <span>{{l(\"Delete\")}}</span></button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-- \nownerGroupGroupName: \"服装百货组\"\nownerGroupMember: OwnerGroupMemberDto\nid: 5\nownerCode: \"LK01HPH---lk01华品行\"\nownerGroupId: 2\nownerName: \"lk01华品行\n -->"

/***/ }),

/***/ "./src/app/main/schedule/create-owner-gorup/memenber/remove-memenber/remove-memenber.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/schedule/create-owner-gorup/memenber/remove-memenber/remove-memenber.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: RemoveMemenberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveMemenberComponent", function() { return RemoveMemenberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RemoveMemenberComponent = /** @class */ (function (_super) {
    __extends(RemoveMemenberComponent, _super);
    function RemoveMemenberComponent(Injector, _autoCarrierService, _MembersServiceProxy) {
        var _this = _super.call(this, Injector) || this;
        _this._autoCarrierService = _autoCarrierService;
        _this._MembersServiceProxy = _MembersServiceProxy;
        _this.saveResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.companies = [];
        _this.selectedCompanyCode = undefined;
        _this.selectedCompanyName = undefined;
        _this.selectedCompanyId = undefined;
        _this.saving = false;
        return _this;
    }
    RemoveMemenberComponent.prototype.ngOnInit = function () {
    };
    RemoveMemenberComponent.prototype.show = function (ownerGroup) {
        this.groupName = ownerGroup.groupName;
        this.groupId = ownerGroup.id;
        this.modal.show();
        this.getCompany();
        // this._userService.getUserPermissionsForEdit(userId).subscribe(result => {
        //     this.permissionTree.editData = result;
        // });
    };
    RemoveMemenberComponent.prototype.selectedCompanyHandler = function (event) {
        console.log(event);
        if (event != undefined || event != null) {
            this.selectedCompanyCode = event.slice(0, event.indexOf('---'));
            this.selectedCompanyName = event.slice(event.indexOf('---') + 3);
        }
        if (this.selectedCompanyCode == undefined || this.selectedCompanyCode == null) {
            return;
        }
    };
    RemoveMemenberComponent.prototype.save = function () {
        var _this = this;
        // let input = new ();
        if (this.selectedCompanyId > 0) {
            abp.ui.setBusy();
            this._MembersServiceProxy
                .delete(this.selectedCompanyId)
                .finally(function () { abp.ui.clearBusy(); })
                .subscribe(function () {
                _this.notify.info(_this.l('SavedSuccessfully'));
                _this.saveResult.emit(true);
                _this.close();
            });
        }
    };
    RemoveMemenberComponent.prototype.close = function () {
        this.modal.hide();
    };
    RemoveMemenberComponent.prototype.getCompany = function () {
        var _this = this;
        var self = this;
        this.companies = [];
        abp.ui.setBusy();
        this._MembersServiceProxy
            .getAll(undefined, undefined, undefined, this.groupName, undefined, undefined, 1000)
            .finally(function () {
            abp.ui.clearBusy();
        })
            .subscribe(function (result) {
            $.each(result.items, function (index, item) {
                // item.name = item.code + '---' + item.name;
                _this.companies.push(item.ownerGroupMember);
            });
            console.log(_this.companies);
            // this.companies = result.items;
            // setTimeout(() => {
            //   $(self.companyComboboxElement.nativeElement).selectpicker('refresh');
            // }, 0);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('CompanyCombobox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RemoveMemenberComponent.prototype, "companyComboboxElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RemoveMemenberComponent.prototype, "saveResult", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('removeModal'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], RemoveMemenberComponent.prototype, "modal", void 0);
    RemoveMemenberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remove-memenber',
            template: __webpack_require__(/*! ./remove-memenber.component.html */ "./src/app/main/schedule/create-owner-gorup/memenber/remove-memenber/remove-memenber.component.html"),
            styles: [__webpack_require__(/*! ./remove-memenber.component.css */ "./src/app/main/schedule/create-owner-gorup/memenber/remove-memenber/remove-memenber.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["AutoCarrierServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["OwnerGroupMembersServiceProxy"]])
    ], RemoveMemenberComponent);
    return RemoveMemenberComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/main/schedule/find-production-schedule/find-production-schedule.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/schedule/find-production-schedule/find-production-schedule.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".total {\r\n    font-weight: 500;\r\n}\r\n\r\n.m-badge {\r\n    margin-bottom: 20px;\r\n    padding: 10px;\r\n}"

/***/ }),

/***/ "./src/app/main/schedule/find-production-schedule/find-production-schedule.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/main/schedule/find-production-schedule/find-production-schedule.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"m-subheader \">\n        <div class=\"d-flex align-items-center\">\n            <div class=\"mr-auto col-sm-6\">\n                <h3 class=\"m-subheader__title m-subheader__title--separator\">\n                    <span>{{l(\"生产进度查询\")}}</span>\n                </h3>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"m-content\">\n        <div class=\"m-portlet m-portlet--mobile\">\n            <div class=\"m-portlet__body \">\n                <form class=\"m-form m-form--fit m-form--label-align-right row\">\n                    <div class=\"form-group col-sm-6\">\n                        <label for=\"createStartTime\">{{l(\"创建时间(开始)\")}} *</label>\n                        <input id=\"createStartTime\" class=\"form-control\" type=\"datetime-local\" name=\"createStartTime\" [(ngModel)]=\"startDate\" required>\n                    </div>\n                    <div class=\" form-group col-sm-6\">\n                        <label for=\"createEndTime\">{{l(\"创建时间(结束)\")}} *</label>\n                        <input id=\"createEndTime\" class=\"form-control\" type=\"datetime-local\" name=\"createEndTime\" [(ngModel)]=\"endDate\" required>\n                        <span class=\"input-group-addon glyphicon glyphicon-search\"></span>\n                    </div>\n                    <div class=\"form-group col-sm-6\">\n                        <label for=\"groupName\">{{l(\"组别名称\")}} *</label>\n                        <!--  -->\n                        <select #groupName name=\"groupName\" class=\"form-control\" [(ngModel)]=\"selectedGroupCode\" [attr.data-live-search]=\"true\" required>\n                            <option [value]=\"\"></option>\n                            <option *ngFor=\"let company of companies\" [value]=\"company.groupCode\">{{company.groupName}}</option>\n                        </select>\n                        <!--  -->\n                    </div>\n                    <div class=\"form-group col-sm-6\">\n                        <label for=\"submit\">{{l(\"不选组别默认查询快递\")}} </label><br>\n                        <button id=\"submit\" type=\"submit\" class=\"btn btn-info input-lg\" (click)=\"searchLk()\">{{l(\"Submit\")}}</button>\n                    </div>\n                </form>\n                <!-- <p>{{startDate }} {{endDate }}</p> -->\n            </div>\n\n            <hr>\n            <!-- for example -->\n            <div class=\"table-responsive  text-center\">\n                <!-- company -->\n                <h5 class=\"m-link m--font-boldest\" *ngIf=\"datas.length>0\">{{dataCaption[0]}}</h5>\n                <table class=\"table table-bordered m-table m-table--border-brand m-table--head-bg-brand table-hover\" *ngIf=\"datas.length>0\">\n                    <thead>\n                        <tr>\n                            <th>名称</th>\n                            <th>订单池</th>\n                            <th>拣货中</th>\n                            <th>拣货完成</th>\n                            <th>已完成(Total)</th>\n                            <th>未完成(Total)</th>\n                            <th>合计(Total)</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let c of datas\">\n                            <td>{{c.name}}</td>\n                            <td>{{c.pool}}</td>\n                            <td>{{c.picking}}</td>\n                            <td>{{c.PickComplete}}</td>\n                            <td>{{c.productComplete}}</td>\n                            <td>{{c.unfinished}}</td>\n                            <td>{{c.total}}</td>\n                        </tr>\n                        <tr class=\"total\">\n                            <td>{{totalDatas.name}}</td>\n                            <td>{{totalDatas.pool}}</td>\n                            <td>{{totalDatas.picking}}</td>\n                            <td>{{totalDatas.PickComplete}}</td>\n                            <td>{{totalDatas.productComplete}}</td>\n                            <td>{{totalDatas.unfinished}}</td>\n                            <td>{{totalDatas.total}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <!-- caiier01 LK01 -->\n                <h5 class=\"m-link m--font-boldest\" *ngIf=\"carriLK01Datas.length>0\">{{dataCaption[1]}}</h5>\n                <table class=\"table table-bordered m-table m-table--border-brand m-table--head-bg-brand table-hover\" *ngIf=\"carriLK01Datas.length>0\">\n                    <thead>\n                        <tr>\n                            <th>名称</th>\n                            <th>订单池</th>\n                            <th>拣货中</th>\n                            <th>拣货完成</th>\n                            <th>已完成(Total)</th>\n                            <th>未完成(Total)</th>\n                            <th>合计(Total)</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let c of carriLK01Datas\">\n                            <td>{{c.name}}</td>\n                            <td>{{c.pool}}</td>\n                            <td>{{c.picking}}</td>\n                            <td>{{c.PickComplete}}</td>\n                            <td>{{c.productComplete}}</td>\n                            <td>{{c.unfinished}}</td>\n                            <td>{{c.total}}</td>\n                        </tr>\n                        <tr class=\"total\">\n                            <td>{{carriTotalLK01Datas.name}}</td>\n                            <td>{{carriTotalLK01Datas.pool}}</td>\n                            <td>{{carriTotalLK01Datas.picking}}</td>\n                            <td>{{carriTotalLK01Datas.PickComplete}}</td>\n                            <td>{{carriTotalLK01Datas.productComplete}}</td>\n                            <td>{{carriTotalLK01Datas.unfinished}}</td>\n                            <td>{{carriTotalLK01Datas.total}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <!-- caiier02 LK02 -->\n                <h5 class=\"m-link m--font-boldest\" *ngIf=\"carriLK02Datas.length>0\">{{dataCaption[2]}}</h5>\n                <table class=\"table table-bordered m-table m-table--border-brand m-table--head-bg-brand table-hover\" *ngIf=\"carriLK02Datas.length>0\">\n                    <thead>\n                        <tr>\n                            <th>名称</th>\n                            <th>订单池</th>\n                            <th>拣货中</th>\n                            <th>拣货完成</th>\n                            <th>已完成(Total)</th>\n                            <th>未完成(Total)</th>\n                            <th>合计(Total)</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let c of carriLK02Datas\">\n                            <td>{{c.name}}</td>\n                            <td>{{c.pool}}</td>\n                            <td>{{c.picking}}</td>\n                            <td>{{c.PickComplete}}</td>\n                            <td>{{c.productComplete}}</td>\n                            <td>{{c.unfinished}}</td>\n                            <td>{{c.total}}</td>\n                        </tr>\n                        <tr class=\"total\">\n                            <td>{{carriTotalLK02Datas.name}}</td>\n                            <td>{{carriTotalLK02Datas.pool}}</td>\n                            <td>{{carriTotalLK02Datas.picking}}</td>\n                            <td>{{carriTotalLK02Datas.PickComplete}}</td>\n                            <td>{{carriTotalLK02Datas.productComplete}}</td>\n                            <td>{{carriTotalLK02Datas.unfinished}}</td>\n                            <td>{{carriTotalLK02Datas.total}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <!-- caiier02 CS01 -->\n                <h5 class=\"m-link m--font-boldest\" *ngIf=\"carriCS01Datas.length>0\">{{dataCaption[3]}}</h5>\n                <table class=\"table table-bordered m-table m-table--border-brand m-table--head-bg-brand table-hover\" *ngIf=\"carriCS01Datas.length>0\">\n                    <thead>\n                        <tr>\n                            <th>名称</th>\n                            <th>订单池</th>\n                            <th>拣货中</th>\n                            <th>拣货完成</th>\n                            <th>已完成(Total)</th>\n                            <th>未完成(Total)</th>\n                            <th>合计(Total)</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let c of carriCS01Datas\">\n                            <td>{{c.name}}</td>\n                            <td>{{c.pool}}</td>\n                            <td>{{c.picking}}</td>\n                            <td>{{c.PickComplete}}</td>\n                            <td>{{c.productComplete}}</td>\n                            <td>{{c.unfinished}}</td>\n                            <td>{{c.total}}</td>\n                        </tr>\n                        <tr class=\"total\">\n                            <td>{{carriTotalCS01Datas.name}}</td>\n                            <td>{{carriTotalCS01Datas.pool}}</td>\n                            <td>{{carriTotalCS01Datas.picking}}</td>\n                            <td>{{carriTotalCS01Datas.PickComplete}}</td>\n                            <td>{{carriTotalCS01Datas.productComplete}}</td>\n                            <td>{{carriTotalCS01Datas.unfinished}}</td>\n                            <td>{{carriTotalCS01Datas.total}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/schedule/find-production-schedule/find-production-schedule.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/schedule/find-production-schedule/find-production-schedule.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: FindProductionScheduleComponent, tableData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindProductionScheduleComponent", function() { return FindProductionScheduleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableData", function() { return tableData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/animations/routerTransition */ "./src/shared/animations/routerTransition.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FindProductionScheduleComponent = /** @class */ (function (_super) {
    __extends(FindProductionScheduleComponent, _super);
    function FindProductionScheduleComponent(injector, _service, _GroupMembers, _Group) {
        var _this = _super.call(this, injector) || this;
        _this._service = _service;
        _this._GroupMembers = _GroupMembers;
        _this._Group = _Group;
        // private order: Order;
        _this.companies = [];
        _this.datas = [];
        _this.carriLK01Datas = [];
        _this.carriLK02Datas = [];
        _this.carriCS01Datas = [];
        _this.totalDatas = new tableData;
        _this.carriTotalLK01Datas = new tableData;
        _this.carriTotalLK02Datas = new tableData;
        _this.carriTotalCS01Datas = new tableData;
        _this.state = [100, 200, 300, 400, 600];
        _this.dataCaption = ["", "1号仓快递进度", "2号仓快递进度", "长沙仓快递进度"];
        _this.defaltTime();
        _this.getGroupName();
        return _this;
    }
    FindProductionScheduleComponent.prototype.ngOnInit = function () {
    };
    FindProductionScheduleComponent.prototype.defaltTime = function () {
        var myDate = new Date();
        var y = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
        var m = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
        var d = myDate.getDate();
        this.startDate = moment__WEBPACK_IMPORTED_MODULE_3__(y + '-' + m + '-' + (d - 1) + " 16:00").format("YYYY-MM-DDTHH:mm");
        this.endDate = moment__WEBPACK_IMPORTED_MODULE_3__(y + '-' + m + '-' + (d) + " 09:00").format("YYYY-MM-DDTHH:mm");
    };
    FindProductionScheduleComponent.prototype.getGroupName = function () {
        var _this = this;
        abp.ui.setBusy();
        this._Group
            .getAll(undefined, undefined, undefined, undefined, undefined, undefined)
            .subscribe(function (result) {
            $.each(result.items, function (index, item) {
                _this.companies.push(item.ownerGroup);
            });
            abp.ui.clearBusy();
        });
    };
    //linkong
    FindProductionScheduleComponent.prototype.searchLk = function () {
        this.datas = [];
        this.carriLK01Datas = [];
        this.carriLK02Datas = [];
        this.carriCS01Datas = [];
        // console.log(this.selectedGroupCode);
        abp.ui.setBusy();
        if (this.selectedGroupCode !== "" && this.selectedGroupCode !== undefined) {
            var companiesArrayCode = [];
            var companiesArrayName = [];
            for (var i = 0; i < this.companies.length; i++) {
                if (this.selectedGroupCode == this.companies[i]['groupCode']) {
                    this.dataCaption[0] = this.companies[i]['groupName'];
                    for (var j = 0; j < this.companies[i]['ownerGroupMembers'].length; j++) {
                        companiesArrayCode.push(this.companies[i]['ownerGroupMembers'][j]['ownerCode']);
                        companiesArrayName.push(this.companies[i]['ownerGroupMembers'][j]['ownerName']);
                    }
                    break;
                }
            }
            //按组别进行查找
            for (var z = 0; z < companiesArrayCode.length; z++) {
                if (companiesArrayCode[z] == 'BLH' ||
                    companiesArrayCode[z] == 'RB' ||
                    companiesArrayCode[z] == 'YRWB' ||
                    companiesArrayCode[z] == 'XGQQG' ||
                    companiesArrayCode[z] == 'XGQQGTHC' ||
                    companiesArrayCode[z] == 'ZK' ||
                    companiesArrayCode[z] == 'FM') {
                    this.oldFindOrder(companiesArrayCode[z]);
                }
                else {
                    this.newFindOrder(companiesArrayCode[z], companiesArrayName[z]);
                }
            }
            // 
        }
        else {
            this.newFindCarrier();
        }
    };
    ////旧系统商家
    FindProductionScheduleComponent.prototype.oldFindOrder = function (comopanyCode) {
        //   this._service
        //     .getOrdersLk01(
        //       oldLKcompany[i],
        //       undefined,
        //       undefined,
        //       undefined,
        //       undefined,
        //       undefined,
        //       undefined,
        //       undefined,
        //       'normal',
        //       undefined,
        //       this.startDate,
        //       undefined,
        //       this.endDate,
        //       undefined,
        //       undefined
        //     )
        //     .subscribe(r => {
        //       // console.log(typeof r.json());
        //       if (r.json() !== undefined) {
        //         this.oldDataDeal(r.json(), oldLKcompany[i]);
        //       }
        //     })
        // }
        // console.log(this.startDate, this.endDate);
    };
    ////新系统商家
    FindProductionScheduleComponent.prototype.newFindOrder = function (comopanyCode, comopanyName) {
        var _this = this;
        this._service
            .getAssignOwnerAndStatusOrderAmount(comopanyCode, moment__WEBPACK_IMPORTED_MODULE_3__(this.startDate), moment__WEBPACK_IMPORTED_MODULE_3__(this.endDate), this.state)
            .subscribe(function (res) {
            console.log(res[0]);
            if (res[0]['amount'] > 0) {
                _this.newDataDeal(res[0], comopanyName, 'eeee');
            }
        });
    };
    //旧系统数据处理
    FindProductionScheduleComponent.prototype.oldDataDeal = function (orders, name) {
        // let a = 0, b = 0, c = 0, d = 0, e = 0;
        // if (orders != null) {
        //   for (let i in orders) {
        //     //订单池
        //     if (orders[i]['leadingSts'] <= 100) {
        //       a++; continue;
        //     }
        //     //波次中-拣货中
        //     if (orders[i]['leadingSts'] > 100 &&
        //       orders[i]['leadingSts'] <= 300) {
        //       b++; continue;
        //     }
        //     //拣货完成
        //     if (orders[i]['leadingSts'] > 300 &&
        //       orders[i]['leadingSts'] <= 750) {
        //       c++; continue;
        //     }
        //     //称重完成
        //     if (orders[i]['leadingSts'] > 750 &&
        //       orders[i]['leadingSts'] <= 800) {
        //       d++; continue;
        //     }
        //     //已发运
        //     if (orders[i]['leadingSts'] > 800) {
        //       e++; continue;
        //     }
        //   }
        //   let newArray = {
        //     'name': name, 'a': a, 'b': b,
        //     'c': c, 'd': d, 'e': e, 'f': a + b + c, 'g': a + b + c + d + e
        //   };
        //   this.datas.push(newArray)
        // }
    };
    //新系统数据处理
    FindProductionScheduleComponent.prototype.newDataDeal = function (orders, name, type) {
        var a = 0, b = 0, c = 0, d = 0, e = 0;
        var newArray = new tableData;
        if (type == 'lk01' || type == 'lk02' || type == 'cs01') {
            a = orders['carrierStatusList'][0]['count'];
            b = orders['carrierStatusList'][1]['count'];
            c = orders['carrierStatusList'][2]['count'];
            d = orders['carrierStatusList'][3]['count'];
            e = orders['carrierStatusList'][4]['count'];
            newArray.name = orders.carrierCode;
            newArray.pool = a + b;
            newArray.picking = c;
            newArray.PickComplete = d + e;
            newArray.productComplete = orders['amount'] - a - b - c - d - e;
            newArray.unfinished = a + b + c + d + e;
            newArray.total = orders['amount'];
            if (type == 'lk02') {
                this.carriLK02Datas.push(newArray);
                this.OnPropChanged('lk02');
            }
            if (type == 'lk01') {
                this.carriLK01Datas.push(newArray);
                this.OnPropChanged('lk01');
            }
            if (type == 'cs01') {
                this.carriCS01Datas.push(newArray);
                this.OnPropChanged('cs01');
            }
        }
        else {
            a = orders['orderStatusList'][0]['count'];
            b = orders['orderStatusList'][1]['count'];
            c = orders['orderStatusList'][2]['count'];
            d = orders['orderStatusList'][3]['count'];
            e = orders['orderStatusList'][4]['count'];
            newArray.name = name;
            newArray.pool = a + b;
            newArray.picking = c;
            newArray.PickComplete = d + e;
            newArray.productComplete = orders['amount'] - a - b - c - d - e;
            newArray.unfinished = a + b + c + d + e;
            newArray.total = orders['amount'];
            this.datas.push(newArray);
            this.OnPropChanged('data');
        }
        abp.ui.clearBusy();
    };
    FindProductionScheduleComponent.prototype.newFindCarrier = function () {
        var _this = this;
        this._service
            .getEachCarrierAssignStatusOrderAmount(moment__WEBPACK_IMPORTED_MODULE_3__(this.startDate), moment__WEBPACK_IMPORTED_MODULE_3__(this.endDate), 'lk01', this.state)
            .subscribe(function (r) {
            $.each(r, function (index, item) {
                item = item.toJSON();
                if (item['amount'] > 0) {
                    _this.newDataDeal(item, "", 'lk01');
                }
            });
        });
        this._service
            .getEachCarrierAssignStatusOrderAmount(moment__WEBPACK_IMPORTED_MODULE_3__(this.startDate), moment__WEBPACK_IMPORTED_MODULE_3__(this.endDate), 'lk02', this.state)
            .subscribe(function (r) {
            $.each(r, function (index, item) {
                item = item.toJSON();
                if (item['amount'] > 0) {
                    _this.newDataDeal(item, "", 'lk02');
                }
            });
        });
        this._service
            .getEachCarrierAssignStatusOrderAmount(moment__WEBPACK_IMPORTED_MODULE_3__(this.startDate), moment__WEBPACK_IMPORTED_MODULE_3__(this.endDate), 'cs01', this.state)
            .subscribe(function (r) {
            $.each(r, function (index, item) {
                item = item.toJSON();
                if (item['amount'] > 0) {
                    _this.newDataDeal(item, "", 'cs01');
                }
            });
        });
    };
    //计算总和
    FindProductionScheduleComponent.prototype.OnPropChanged = function (name) {
        var at = 0, bt = 0, ct = 0, dt = 0, ft = 0, gt = 0;
        if (name == 'data') {
            for (var i = 0; i < this.datas.length; i++) {
                at += this.datas[i].pool;
                bt += this.datas[i].picking;
                ct += this.datas[i].PickComplete;
                dt += this.datas[i].productComplete;
                ft += this.datas[i].unfinished;
                gt += this.datas[i].total;
            }
            this.totalDatas.pool = at;
            this.totalDatas.picking = bt;
            this.totalDatas.PickComplete = ct;
            this.totalDatas.productComplete = dt;
            this.totalDatas.unfinished = ft;
            this.totalDatas.total = gt;
        }
        //carri1
        if (name == 'lk01') {
            for (var i = 0; i < this.carriLK01Datas.length; i++) {
                at += this.carriLK01Datas[i].pool;
                bt += this.carriLK01Datas[i].picking;
                ct += this.carriLK01Datas[i].PickComplete;
                dt += this.carriLK01Datas[i].productComplete;
                ft += this.carriLK01Datas[i].unfinished;
                gt += this.carriLK01Datas[i].total;
            }
            this.carriTotalLK01Datas.pool = at;
            this.carriTotalLK01Datas.picking = bt;
            this.carriTotalLK01Datas.PickComplete = ct;
            this.carriTotalLK01Datas.productComplete = dt;
            this.carriTotalLK01Datas.unfinished = ft;
            this.carriTotalLK01Datas.total = gt;
        }
        if (name == 'lk02') {
            for (var i = 0; i < this.carriLK02Datas.length; i++) {
                at += this.carriLK02Datas[i].pool;
                bt += this.carriLK02Datas[i].picking;
                ct += this.carriLK02Datas[i].PickComplete;
                dt += this.carriLK02Datas[i].productComplete;
                ft += this.carriLK02Datas[i].unfinished;
                gt += this.carriLK02Datas[i].total;
            }
            this.carriTotalLK02Datas.pool = at;
            this.carriTotalLK02Datas.picking = bt;
            this.carriTotalLK02Datas.PickComplete = ct;
            this.carriTotalLK02Datas.productComplete = dt;
            this.carriTotalLK02Datas.unfinished = ft;
            this.carriTotalLK02Datas.total = gt;
        }
        if (name == 'cs01') {
            for (var i = 0; i < this.carriCS01Datas.length; i++) {
                at += this.carriCS01Datas[i].pool;
                bt += this.carriCS01Datas[i].picking;
                ct += this.carriCS01Datas[i].PickComplete;
                dt += this.carriCS01Datas[i].productComplete;
                ft += this.carriCS01Datas[i].unfinished;
                gt += this.carriCS01Datas[i].total;
            }
            this.carriTotalCS01Datas.pool = at;
            this.carriTotalCS01Datas.picking = bt;
            this.carriTotalCS01Datas.PickComplete = ct;
            this.carriTotalCS01Datas.productComplete = dt;
            this.carriTotalCS01Datas.unfinished = ft;
            this.carriTotalCS01Datas.total = gt;
        }
    };
    FindProductionScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-find-production-schedule',
            template: __webpack_require__(/*! ./find-production-schedule.component.html */ "./src/app/main/schedule/find-production-schedule/find-production-schedule.component.html"),
            styles: [__webpack_require__(/*! ./find-production-schedule.component.css */ "./src/app/main/schedule/find-production-schedule/find-production-schedule.component.css")],
            animations: [Object(_shared_animations_routerTransition__WEBPACK_IMPORTED_MODULE_4__["appModuleAnimation"])()]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["Lk02OutboundOrderReportDatasServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["OwnerGroupMembersServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["OwnerGroupsServiceProxy"]])
    ], FindProductionScheduleComponent);
    return FindProductionScheduleComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));

var tableData = /** @class */ (function () {
    function tableData() {
        this.name = '总计';
    }
    return tableData;
}());



/***/ }),

/***/ "./src/app/main/shared/carrier-combo/carrier-combo.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/shared/carrier-combo/carrier-combo.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select #CarrierCombobox\n        class=\"form-control\"\n        [(ngModel)]=\"selectedCarrier\"\n        (ngModelChange)=\"selectedCarrierChange.emit($event)\"\n        [attr.data-live-search]=\"true\">\n            <option *ngFor=\"let carrierItem of carriers\" [value]=\"carrierItem.code\">{{carrierItem.name}}</option>\n</select>"

/***/ }),

/***/ "./src/app/main/shared/carrier-combo/carrier-combo.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/shared/carrier-combo/carrier-combo.component.ts ***!
  \**********************************************************************/
/*! exports provided: CarrierComboComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierComboComponent", function() { return CarrierComboComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarrierComboComponent = /** @class */ (function (_super) {
    __extends(CarrierComboComponent, _super);
    function CarrierComboComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.selectedCarrier = undefined;
        _this.selectedCarrierChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.carriers = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__["AppConsts"].carrierList;
        return _this;
    }
    CarrierComboComponent.prototype.ngOnInit = function () {
        var self = this;
        setTimeout(function () {
            $(self.carrierComboboxElement.nativeElement).selectpicker('refresh');
        }, 0);
    };
    ;
    CarrierComboComponent.prototype.ngAfterViewInit = function () {
        $(this.carrierComboboxElement.nativeElement).selectpicker({
            iconBase: 'famfamfam-flag',
            tickIcon: 'fa fa-check'
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('CarrierCombobox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CarrierComboComponent.prototype, "carrierComboboxElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CarrierComboComponent.prototype, "selectedCarrier", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('selectedCarrierChange'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CarrierComboComponent.prototype, "selectedCarrierChange", void 0);
    CarrierComboComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carrier-combo',
            template: __webpack_require__(/*! ./carrier-combo.component.html */ "./src/app/main/shared/carrier-combo/carrier-combo.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], CarrierComboComponent);
    return CarrierComboComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/main/shared/company-combo/company-combo.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/shared/company-combo/company-combo.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select #CompanyCombobox\n        class=\"form-control\"\n        [(ngModel)]=\"selectedCompany\"\n        (ngModelChange)=\"selectedCompanyChange.emit($event)\"\n        [attr.data-live-search]=\"true\">\n            <!-- <option value=\"\">{{l('FilterByCompany')}}</option> -->\n            <option *ngFor=\"let company of companies\" [value]=\"company.code\">{{company.name}}</option>\n</select>"

/***/ }),

/***/ "./src/app/main/shared/company-combo/company-combo.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/shared/company-combo/company-combo.component.ts ***!
  \**********************************************************************/
/*! exports provided: CompanyComboComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComboComponent", function() { return CompanyComboComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyComboComponent = /** @class */ (function (_super) {
    __extends(CompanyComboComponent, _super);
    function CompanyComboComponent(_autoCarrierService, injector) {
        var _this = _super.call(this, injector) || this;
        _this._autoCarrierService = _autoCarrierService;
        _this.companies = [];
        _this.selectedCompany = undefined;
        _this.selectedCompanyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    CompanyComboComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        abp.ui.setBusy();
        this._autoCarrierService.getCompanyCodeListAsync()
            .finally(function () {
            abp.ui.clearBusy();
        })
            .subscribe(function (result) {
            $.each(result.items, function (index, item) {
                item.name = item.code + '---' + item.name;
            });
            _this.companies = result.items;
            setTimeout(function () {
                $(self.companyComboboxElement.nativeElement).selectpicker('refresh');
            }, 0);
        });
    };
    CompanyComboComponent.prototype.ngAfterViewInit = function () {
        $(this.companyComboboxElement.nativeElement).selectpicker({
            iconBase: 'famfamfam-flag',
            tickIcon: 'fa fa-check'
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('CompanyCombobox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CompanyComboComponent.prototype, "companyComboboxElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CompanyComboComponent.prototype, "selectedCompany", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('selectedCompanyChange'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CompanyComboComponent.prototype, "selectedCompanyChange", void 0);
    CompanyComboComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'company-combo',
            template: __webpack_require__(/*! ./company-combo.component.html */ "./src/app/main/shared/company-combo/company-combo.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["AutoCarrierServiceProxy"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], CompanyComboComponent);
    return CompanyComboComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/main/shared/no-ui-slider/no-ui-slider.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/main/shared/no-ui-slider/no-ui-slider.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center m--margin-bottom-10\" >\n    <div class=\"col-4\">\n        <input type=\"text\" class=\"form-control\" (ngModelChange)=\"minWeightChange($event)\" [ngModel]=\"selectedWeight.minWeight\" placeholder=\"Minimum\">\n    </div>\n    <div class=\"col-4\">\n        <input type=\"text\" class=\"form-control\" (ngModelChange)=\"maxWeightChange($event)\" [ngModel]=\"selectedWeight.maxWeight\" placeholder=\"Maximum\">\n    </div>\n    <div class=\"col-4\">\n        <div #Slider class=\"m-nouislider m-nouislider--handle-primary m-nouislider--connect-warning\"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/shared/no-ui-slider/no-ui-slider.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/shared/no-ui-slider/no-ui-slider.component.ts ***!
  \********************************************************************/
/*! exports provided: NoUiSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoUiSliderComponent", function() { return NoUiSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/common/app-component-base */ "./src/shared/common/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoUiSliderComponent = /** @class */ (function (_super) {
    __extends(NoUiSliderComponent, _super);
    function NoUiSliderComponent(_autoCarrierService, injector) {
        var _this = _super.call(this, injector) || this;
        _this._autoCarrierService = _autoCarrierService;
        _this.selectedWeight = undefined;
        return _this;
    }
    NoUiSliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        setTimeout(function () {
            nouislider__WEBPACK_IMPORTED_MODULE_3__["create"](self.slider.nativeElement, {
                range: {
                    'min': 0,
                    'max': 100
                },
                start: [_this.selectedWeight.minWeight, _this.selectedWeight.maxWeight],
                connect: true,
            });
            self.slider.nativeElement.noUiSlider.on('update', function (values, handle) {
                var i = values[handle];
                handle ? self.selectedWeight.maxWeight = i : self.selectedWeight.minWeight = i;
            });
        }, 0);
    };
    NoUiSliderComponent.prototype.ngOnChanges = function (changes) {
    };
    NoUiSliderComponent.prototype.ngAfterViewInit = function () {
    };
    NoUiSliderComponent.prototype.minWeightChange = function (event) {
        this.slider.nativeElement.noUiSlider.set([event, null]);
        this.selectedWeight.minWeight = event;
    };
    NoUiSliderComponent.prototype.maxWeightChange = function (event) {
        this.slider.nativeElement.noUiSlider.set([null, event]);
        this.selectedWeight.maxWeight = event;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Slider'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NoUiSliderComponent.prototype, "slider", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["CarrierWeightRuleDto"])
    ], NoUiSliderComponent.prototype, "selectedWeight", void 0);
    NoUiSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'no-ui-slider',
            template: __webpack_require__(/*! ./no-ui-slider.component.html */ "./src/app/main/shared/no-ui-slider/no-ui-slider.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["AutoCarrierServiceProxy"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], NoUiSliderComponent);
    return NoUiSliderComponent;
}(_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]));



/***/ })

}]);
//# sourceMappingURL=app-main-main-module.js.map