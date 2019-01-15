(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/@angular/common/locales/ast.js":
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/ast.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        return 5;
    }
    exports.default = [
        'ast', [['a', 'p'], ['AM', 'PM'], ['de la mañana', 'de la tarde']],
        [['a', 'p'], ['AM', 'PM'], ['mañana', 'tarde']],
        [
            ['D', 'L', 'M', 'M', 'X', 'V', 'S'], ['dom', 'llu', 'mar', 'mié', 'xue', 'vie', 'sáb'],
            ['domingu', 'llunes', 'martes', 'miércoles', 'xueves', 'vienres', 'sábadu'],
            ['do', 'll', 'ma', 'mi', 'xu', 'vi', 'sá']
        ],
        u,
        [
            ['X', 'F', 'M', 'A', 'M', 'X', 'X', 'A', 'S', 'O', 'P', 'A'],
            ['xin', 'feb', 'mar', 'abr', 'may', 'xun', 'xnt', 'ago', 'set', 'och', 'pay', 'avi'],
            [
                'de xineru', 'de febreru', 'de marzu', 'd’abril', 'de mayu', 'de xunu', 'de xunetu',
                'd’agostu', 'de setiembre', 'd’ochobre', 'de payares', 'd’avientu'
            ]
        ],
        [
            ['X', 'F', 'M', 'A', 'M', 'X', 'X', 'A', 'S', 'O', 'P', 'A'],
            ['Xin', 'Feb', 'Mar', 'Abr', 'May', 'Xun', 'Xnt', 'Ago', 'Set', 'Och', 'Pay', 'Avi'],
            [
                'xineru', 'febreru', 'marzu', 'abril', 'mayu', 'xunu', 'xunetu', 'agostu', 'setiembre',
                'ochobre', 'payares', 'avientu'
            ]
        ],
        [['e.C.', 'd.C.'], u, ['enantes de Cristu', 'después de Cristu']], 1, [6, 0],
        ['d/M/yy', 'd MMM y', 'd MMMM \'de\' y', 'EEEE, d MMMM \'de\' y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1} {0}', '{1}, {0}', '{1} \'a\' \'les\' {0}', u],
        [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'ND', ':'],
        ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'], '€', 'euro', {
            'BYN': [],
            'DKK': [],
            'HRK': [],
            'ISK': [],
            'NOK': [],
            'PLN': [],
            'RUR': [],
            'SEK': [],
            'THB': ['฿'],
            'TWD': ['NT$']
        },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2xvY2FsZXMvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgseUNBQXlDO0lBQ3pDLCtDQUErQztJQUUvQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFcEIsZ0JBQWdCLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0JBQWU7UUFDYixLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9DO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RixDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQztZQUMzRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztTQUMzQztRQUNELENBQUM7UUFDRDtZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDNUQsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUNwRjtnQkFDRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXO2dCQUNuRixVQUFVLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVzthQUNuRTtTQUNGO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVELENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDcEY7Z0JBQ0UsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXO2dCQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7YUFDaEM7U0FDRjtRQUNELENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixDQUFDO1FBQ2pFLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO1FBQ3BELENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztRQUM3RCxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7WUFDekQsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNaLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztTQUNmO1FBQ0QsTUFBTTtLQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGguYWJzKG4pKSwgdiA9IG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aDtcbiAgaWYgKGkgPT09IDEgJiYgdiA9PT0gMCkgcmV0dXJuIDE7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdhc3QnLCBbWydhJywgJ3AnXSwgWydBTScsICdQTSddLCBbJ2RlIGxhIG1hw7FhbmEnLCAnZGUgbGEgdGFyZGUnXV0sXG4gIFtbJ2EnLCAncCddLCBbJ0FNJywgJ1BNJ10sIFsnbWHDsWFuYScsICd0YXJkZSddXSxcbiAgW1xuICAgIFsnRCcsICdMJywgJ00nLCAnTScsICdYJywgJ1YnLCAnUyddLCBbJ2RvbScsICdsbHUnLCAnbWFyJywgJ21pw6knLCAneHVlJywgJ3ZpZScsICdzw6FiJ10sXG4gICAgWydkb21pbmd1JywgJ2xsdW5lcycsICdtYXJ0ZXMnLCAnbWnDqXJjb2xlcycsICd4dWV2ZXMnLCAndmllbnJlcycsICdzw6FiYWR1J10sXG4gICAgWydkbycsICdsbCcsICdtYScsICdtaScsICd4dScsICd2aScsICdzw6EnXVxuICBdLFxuICB1LFxuICBbXG4gICAgWydYJywgJ0YnLCAnTScsICdBJywgJ00nLCAnWCcsICdYJywgJ0EnLCAnUycsICdPJywgJ1AnLCAnQSddLFxuICAgIFsneGluJywgJ2ZlYicsICdtYXInLCAnYWJyJywgJ21heScsICd4dW4nLCAneG50JywgJ2FnbycsICdzZXQnLCAnb2NoJywgJ3BheScsICdhdmknXSxcbiAgICBbXG4gICAgICAnZGUgeGluZXJ1JywgJ2RlIGZlYnJlcnUnLCAnZGUgbWFyenUnLCAnZOKAmWFicmlsJywgJ2RlIG1heXUnLCAnZGUgeHVudScsICdkZSB4dW5ldHUnLFxuICAgICAgJ2TigJlhZ29zdHUnLCAnZGUgc2V0aWVtYnJlJywgJ2TigJlvY2hvYnJlJywgJ2RlIHBheWFyZXMnLCAnZOKAmWF2aWVudHUnXG4gICAgXVxuICBdLFxuICBbXG4gICAgWydYJywgJ0YnLCAnTScsICdBJywgJ00nLCAnWCcsICdYJywgJ0EnLCAnUycsICdPJywgJ1AnLCAnQSddLFxuICAgIFsnWGluJywgJ0ZlYicsICdNYXInLCAnQWJyJywgJ01heScsICdYdW4nLCAnWG50JywgJ0FnbycsICdTZXQnLCAnT2NoJywgJ1BheScsICdBdmknXSxcbiAgICBbXG4gICAgICAneGluZXJ1JywgJ2ZlYnJlcnUnLCAnbWFyenUnLCAnYWJyaWwnLCAnbWF5dScsICd4dW51JywgJ3h1bmV0dScsICdhZ29zdHUnLCAnc2V0aWVtYnJlJyxcbiAgICAgICdvY2hvYnJlJywgJ3BheWFyZXMnLCAnYXZpZW50dSdcbiAgICBdXG4gIF0sXG4gIFtbJ2UuQy4nLCAnZC5DLiddLCB1LCBbJ2VuYW50ZXMgZGUgQ3Jpc3R1JywgJ2Rlc3B1w6lzIGRlIENyaXN0dSddXSwgMSwgWzYsIDBdLFxuICBbJ2QvTS95eScsICdkIE1NTSB5JywgJ2QgTU1NTSBcXCdkZVxcJyB5JywgJ0VFRUUsIGQgTU1NTSBcXCdkZVxcJyB5J10sXG4gIFsnSEg6bW0nLCAnSEg6bW06c3MnLCAnSEg6bW06c3MgeicsICdISDptbTpzcyB6enp6J10sXG4gIFsnezF9IHswfScsICd7MX0sIHswfScsICd7MX0gXFwnYVxcJyBcXCdsZXNcXCcgezB9JywgdV0sXG4gIFsnLCcsICcuJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05EJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSwgJ+KCrCcsICdldXJvJywge1xuICAgICdCWU4nOiBbXSxcbiAgICAnREtLJzogW10sXG4gICAgJ0hSSyc6IFtdLFxuICAgICdJU0snOiBbXSxcbiAgICAnTk9LJzogW10sXG4gICAgJ1BMTic6IFtdLFxuICAgICdSVVInOiBbXSxcbiAgICAnU0VLJzogW10sXG4gICAgJ1RIQic6IFsn4Li/J10sXG4gICAgJ1RXRCc6IFsnTlQkJ11cbiAgfSxcbiAgcGx1cmFsXG5dO1xuIl19

/***/ })

}]);
//# sourceMappingURL=35.js.map