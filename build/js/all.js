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
        });
    };

    var disableSearch = function disableSearch() {
        $('.times-icon').click(function () {
            $('.my-navbar').removeClass('justify-content-center');
            $('.my-navbar').removeClass('search-active');
        });

        $(document).click(function (e) {
            var _this = $(e.target);

            if (!_this.closest('.search').length && !_this.hasClass('search')) {
                $('.my-navbar').removeClass('justify-content-center');
                $('.my-navbar').removeClass('search-active');
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxob21lcGFnZS5qcyIsInNyY1xcanNcXG1haW5cXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLFFBQU0sYUFBYSxTQUFiLFVBQWEsR0FBTTtBQUNyQixVQUFBLGNBQUEsRUFBQSxLQUFBLENBQXdCLFlBQVU7QUFDOUIsY0FBQSxZQUFBLEVBQUEsUUFBQSxDQUFBLHdCQUFBO0FBQ0EsY0FBQSxZQUFBLEVBQUEsUUFBQSxDQUFBLGVBQUE7QUFGSixTQUFBO0FBREosS0FBQTs7QUFPQSxRQUFNLGdCQUFnQixTQUFoQixhQUFnQixHQUFNO0FBQ3hCLFVBQUEsYUFBQSxFQUFBLEtBQUEsQ0FBdUIsWUFBVTtBQUM3QixjQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsd0JBQUE7QUFDQSxjQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsZUFBQTtBQUZKLFNBQUE7O0FBS0EsVUFBQSxRQUFBLEVBQUEsS0FBQSxDQUFrQixVQUFBLENBQUEsRUFBWTtBQUMxQixnQkFBTSxRQUFRLEVBQUUsRUFBaEIsTUFBYyxDQUFkOztBQUVBLGdCQUFHLENBQUMsTUFBQSxPQUFBLENBQUEsU0FBQSxFQUFELE1BQUEsSUFBb0MsQ0FBQyxNQUFBLFFBQUEsQ0FBeEMsUUFBd0MsQ0FBeEMsRUFBa0U7QUFDOUQsa0JBQUEsWUFBQSxFQUFBLFdBQUEsQ0FBQSx3QkFBQTtBQUNBLGtCQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsZUFBQTtBQUNIO0FBTkwsU0FBQTtBQU5KLEtBQUE7O0FBZ0JBLFFBQU0sWUFBWSxTQUFaLFNBQVksQ0FBQSxDQUFBLEVBQUs7QUFDbkIsVUFBQSxZQUFBLEVBQUEsS0FBQSxDQUFzQixZQUFVO0FBQzVCLGNBQUEsY0FBQSxFQUFBLFdBQUEsQ0FBQSxZQUFBO0FBREosU0FBQTs7QUFJQSxVQUFBLFlBQUEsRUFBQSxLQUFBLENBQXNCLFlBQVU7QUFDNUIsY0FBQSxJQUFBLEVBQUEsV0FBQSxDQUFBLGtCQUFBO0FBREosU0FBQTtBQUxKLEtBQUE7O1lBVUEsVSxHQUFBLFU7WUFBQSxhLEdBQUEsYTtZQUFBLFMsR0FBQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkEsSUFBQSxRQUFBLEVBQUEsS0FBQSxDQUFrQixZQUFVOztBQUUzQixLQUFBLEdBQUEsVUFBQSxVQUFBO0FBQ0EsS0FBQSxHQUFBLFVBQUEsYUFBQTtBQUNBLEtBQUEsR0FBQSxVQUFBLFNBQUE7QUFKRCxHQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IGFibGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAkKCcuc2VhcmNoLWljb24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5teS1uYXZiYXInKS5hZGRDbGFzcygnanVzdGlmeS1jb250ZW50LWNlbnRlcicpO1xyXG4gICAgICAgICQoJy5teS1uYXZiYXInKS5hZGRDbGFzcygnc2VhcmNoLWFjdGl2ZScpOyBcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGRpc2FibGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAkKCcudGltZXMtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLm15LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyk7XHJcbiAgICAgICAgJCgnLm15LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdzZWFyY2gtYWN0aXZlJyk7XHJcbiAgICB9KSAgXHJcblxyXG4gICAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gJChlLnRhcmdldCk7XHJcblxyXG4gICAgICAgIGlmKCFfdGhpcy5jbG9zZXN0KCcuc2VhcmNoJykubGVuZ3RoICYmICFfdGhpcy5oYXNDbGFzcygnc2VhcmNoJykpIHtcclxuICAgICAgICAgICAgJCgnLm15LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyk7XHJcbiAgICAgICAgICAgICQoJy5teS1uYXZiYXInKS5yZW1vdmVDbGFzcygnc2VhcmNoLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCB0b2dnbGVOYXYgPSBlID0+IHtcclxuICAgICQoJy5oYW1idXJnZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5udi1jb2xsYXBzZScpLnRvZ2dsZUNsYXNzKCd0b2dnbGUtbmF2Jyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnLmhhbWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaGFtYnVyZ2VyLWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7YWJsZVNlYXJjaCwgZGlzYWJsZVNlYXJjaCx0b2dnbGVOYXZ9XHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5pbXBvcnQge2FibGVTZWFyY2gsIGRpc2FibGVTZWFyY2gsdG9nZ2xlTmF2fSBmcm9tICcuL2hvbWVwYWdlJ1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuIGFibGVTZWFyY2goKTtcclxuIGRpc2FibGVTZWFyY2goKVxyXG4gdG9nZ2xlTmF2KCk7XHJcbiBcclxuXHJcbn0pOyJdfQ==
