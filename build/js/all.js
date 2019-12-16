(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.homepage = mod.exports;
    }
})(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var ableSearch = function ableSearch() {
        $('.search-icon').click(function () {
            $('.my-navbar').addClass('justify-content-center');
            $('.my-navbar').addClass('search-active');
            $('main').addClass('main-blur');
        });
    };

    var disableSearch = function disableSearch() {
        $('.times-icon').click(function () {
            $('.my-navbar').removeClass('justify-content-center');
            $('.my-navbar').removeClass('search-active');
            $('main').removeClass('main-blur');
        });

        $(document).click(function (e) {
            var _this = $(e.target);

            if (!_this.closest('.search').length && !_this.hasClass('search')) {
                $('.my-navbar').removeClass('justify-content-center');
                $('.my-navbar').removeClass('search-active');
                $('main').removeClass('main-blur');
            }
        });
    };

    var toggleNav = function toggleNav(e) {
        $('.hamburger').click(function () {
            $('.nv-collapse').toggleClass('toggle-nav');
        });

        $('.hamburger').click(function () {
            $(this).toggleClass('hamburger-active');
        });
    };

    exports.ableSearch = ableSearch;
    exports.disableSearch = disableSearch;
    exports.toggleNav = toggleNav;
});

},{}],2:[function(require,module,exports){
"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./homepage'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./homepage'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.homepage);
    global.main = mod.exports;
  }
})(undefined, function (_homepage) {
  'use strict';

  $(document).ready(function () {

    (0, _homepage.ableSearch)();
    (0, _homepage.disableSearch)();
    (0, _homepage.toggleNav)();
  });
});

},{"./homepage":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxob21lcGFnZS5qcyIsInNyY1xcanNcXG1haW5cXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLFFBQU0sYUFBYSxTQUFiLFVBQWEsR0FBTTtBQUNyQixVQUFBLGNBQUEsRUFBQSxLQUFBLENBQXdCLFlBQVU7QUFDOUIsY0FBQSxZQUFBLEVBQUEsUUFBQSxDQUFBLHdCQUFBO0FBQ0EsY0FBQSxZQUFBLEVBQUEsUUFBQSxDQUFBLGVBQUE7QUFDQSxjQUFBLE1BQUEsRUFBQSxRQUFBLENBQUEsV0FBQTtBQUhKLFNBQUE7QUFESixLQUFBOztBQVFBLFFBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCLEdBQU07QUFDeEIsVUFBQSxhQUFBLEVBQUEsS0FBQSxDQUF1QixZQUFVO0FBQzdCLGNBQUEsWUFBQSxFQUFBLFdBQUEsQ0FBQSx3QkFBQTtBQUNBLGNBQUEsWUFBQSxFQUFBLFdBQUEsQ0FBQSxlQUFBO0FBQ0EsY0FBQSxNQUFBLEVBQUEsV0FBQSxDQUFBLFdBQUE7QUFISixTQUFBOztBQU1BLFVBQUEsUUFBQSxFQUFBLEtBQUEsQ0FBa0IsVUFBQSxDQUFBLEVBQVk7QUFDMUIsZ0JBQU0sUUFBUSxFQUFFLEVBQWhCLE1BQWMsQ0FBZDs7QUFFQSxnQkFBRyxDQUFDLE1BQUEsT0FBQSxDQUFBLFNBQUEsRUFBRCxNQUFBLElBQW9DLENBQUMsTUFBQSxRQUFBLENBQXhDLFFBQXdDLENBQXhDLEVBQWtFO0FBQzlELGtCQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsd0JBQUE7QUFDQSxrQkFBQSxZQUFBLEVBQUEsV0FBQSxDQUFBLGVBQUE7QUFDQSxrQkFBQSxNQUFBLEVBQUEsV0FBQSxDQUFBLFdBQUE7QUFDSDtBQVBMLFNBQUE7QUFQSixLQUFBOztBQWtCQSxRQUFNLFlBQVksU0FBWixTQUFZLENBQUEsQ0FBQSxFQUFLO0FBQ25CLFVBQUEsWUFBQSxFQUFBLEtBQUEsQ0FBc0IsWUFBVTtBQUM1QixjQUFBLGNBQUEsRUFBQSxXQUFBLENBQUEsWUFBQTtBQURKLFNBQUE7O0FBSUEsVUFBQSxZQUFBLEVBQUEsS0FBQSxDQUFzQixZQUFVO0FBQzVCLGNBQUEsSUFBQSxFQUFBLFdBQUEsQ0FBQSxrQkFBQTtBQURKLFNBQUE7QUFMSixLQUFBOztZQVVBLFUsR0FBQSxVO1lBQUEsYSxHQUFBLGE7WUFBQSxTLEdBQUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLElBQUEsUUFBQSxFQUFBLEtBQUEsQ0FBa0IsWUFBVTs7QUFFM0IsS0FBQSxHQUFBLFVBQUEsVUFBQTtBQUNBLEtBQUEsR0FBQSxVQUFBLGFBQUE7QUFDQSxLQUFBLEdBQUEsVUFBQSxTQUFBO0FBSkQsR0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBhYmxlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgJCgnLnNlYXJjaC1pY29uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcubXktbmF2YmFyJykuYWRkQ2xhc3MoJ2p1c3RpZnktY29udGVudC1jZW50ZXInKTtcclxuICAgICAgICAkKCcubXktbmF2YmFyJykuYWRkQ2xhc3MoJ3NlYXJjaC1hY3RpdmUnKTsgXHJcbiAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdtYWluLWJsdXInKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGRpc2FibGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAkKCcudGltZXMtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLm15LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyk7XHJcbiAgICAgICAgJCgnLm15LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdzZWFyY2gtYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdtYWluLWJsdXInKTtcclxuICAgIH0pICBcclxuXHJcbiAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSAkKGUudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgaWYoIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2gnKS5sZW5ndGggJiYgIV90aGlzLmhhc0NsYXNzKCdzZWFyY2gnKSkge1xyXG4gICAgICAgICAgICAkKCcubXktbmF2YmFyJykucmVtb3ZlQ2xhc3MoJ2p1c3RpZnktY29udGVudC1jZW50ZXInKTtcclxuICAgICAgICAgICAgJCgnLm15LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdzZWFyY2gtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJ21haW4nKS5yZW1vdmVDbGFzcygnbWFpbi1ibHVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZU5hdiA9IGUgPT4ge1xyXG4gICAgJCgnLmhhbWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLm52LWNvbGxhcHNlJykudG9nZ2xlQ2xhc3MoJ3RvZ2dsZS1uYXYnKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCcuaGFtYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdoYW1idXJnZXItYWN0aXZlJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHthYmxlU2VhcmNoLCBkaXNhYmxlU2VhcmNoLHRvZ2dsZU5hdn1cclxuIiwiJ3VzZSBzdHJpY3QnXHJcbmltcG9ydCB7YWJsZVNlYXJjaCwgZGlzYWJsZVNlYXJjaCx0b2dnbGVOYXZ9IGZyb20gJy4vaG9tZXBhZ2UnXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gYWJsZVNlYXJjaCgpO1xyXG4gZGlzYWJsZVNlYXJjaCgpXHJcbiB0b2dnbGVOYXYoKTtcclxuIFxyXG5cclxufSk7Il19
