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
'use strict';

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./slider', './homepage'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./slider'), require('./homepage'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.slider, global.homepage);
    global.main = mod.exports;
  }
})(undefined, function (_slider, _homepage) {
  'use strict';

  var _slider2 = _interopRequireDefault(_slider);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  $(document).ready(function () {

    (0, _slider2.default)();

    (0, _homepage.ableSearch)();
    (0, _homepage.disableSearch)();
    (0, _homepage.toggleNav)();
  });
});

},{"./homepage":1,"./slider":3}],3:[function(require,module,exports){
'use strict';

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.slider = mod.exports;
  }
})(undefined, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var slickSlider = function slickSlider() {
    var _$$slick;

    $('.slider-area').slick((_$$slick = {
      dots: true,
      slidesToShow: true
    }, _defineProperty(_$$slick, 'slidesToShow', 7), _defineProperty(_$$slick, 'slidesToScroll', 1), _defineProperty(_$$slick, 'autoplay', true), _defineProperty(_$$slick, 'speed', 600), _defineProperty(_$$slick, 'arrows', true), _defineProperty(_$$slick, 'prevArrow', '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left"></i></button>'), _defineProperty(_$$slick, 'nextArrow', '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right"></i></button>'), _defineProperty(_$$slick, 'responsive', [{
      breakpoint: 992,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 400,
      settings: {
        slidesToShow: 1
      }
    }]), _$$slick));
    $(".slick-dots li button").text("");
  };

  exports.default = slickSlider;
  module.exports = exports['default'];
});

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxob21lcGFnZS5qcyIsInNyY1xcanNcXG1haW5cXG1haW4uanMiLCJzcmNcXGpzXFxtYWluXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLFFBQU0sYUFBYSxTQUFiLFVBQWEsR0FBTTtBQUNyQixVQUFBLGNBQUEsRUFBQSxLQUFBLENBQXdCLFlBQVU7QUFDOUIsY0FBQSxZQUFBLEVBQUEsUUFBQSxDQUFBLHdCQUFBO0FBQ0EsY0FBQSxZQUFBLEVBQUEsUUFBQSxDQUFBLGVBQUE7QUFGSixTQUFBO0FBREosS0FBQTs7QUFPQSxRQUFNLGdCQUFnQixTQUFoQixhQUFnQixHQUFNO0FBQ3hCLFVBQUEsYUFBQSxFQUFBLEtBQUEsQ0FBdUIsWUFBVTtBQUM3QixjQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsd0JBQUE7QUFDQSxjQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsZUFBQTtBQUZKLFNBQUE7O0FBS0EsVUFBQSxRQUFBLEVBQUEsS0FBQSxDQUFrQixVQUFBLENBQUEsRUFBWTtBQUMxQixnQkFBTSxRQUFRLEVBQUUsRUFBaEIsTUFBYyxDQUFkOztBQUVBLGdCQUFHLENBQUMsTUFBQSxPQUFBLENBQUEsU0FBQSxFQUFELE1BQUEsSUFBb0MsQ0FBQyxNQUFBLFFBQUEsQ0FBeEMsUUFBd0MsQ0FBeEMsRUFBa0U7QUFDOUQsa0JBQUEsWUFBQSxFQUFBLFdBQUEsQ0FBQSx3QkFBQTtBQUNBLGtCQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsZUFBQTtBQUNIO0FBTkwsU0FBQTtBQU5KLEtBQUE7O0FBZ0JBLFFBQU0sWUFBWSxTQUFaLFNBQVksQ0FBQSxDQUFBLEVBQUs7QUFDbkIsVUFBQSxZQUFBLEVBQUEsS0FBQSxDQUFzQixZQUFVO0FBQzVCLGNBQUEsY0FBQSxFQUFBLFdBQUEsQ0FBQSxZQUFBO0FBREosU0FBQTs7QUFJQSxVQUFBLFlBQUEsRUFBQSxLQUFBLENBQXNCLFlBQVU7QUFDNUIsY0FBQSxJQUFBLEVBQUEsV0FBQSxDQUFBLGtCQUFBO0FBREosU0FBQTtBQUxKLEtBQUE7O1lBVUEsVSxHQUFBLFU7WUFBQSxhLEdBQUEsYTtZQUFBLFMsR0FBQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQSxJQUFBLFFBQUEsRUFBQSxLQUFBLENBQWtCLFlBQVU7O0FBRTNCLEtBQUEsR0FBQSxTQUFBLE9BQUE7O0FBRUEsS0FBQSxHQUFBLFVBQUEsVUFBQTtBQUNBLEtBQUEsR0FBQSxVQUFBLGFBQUE7QUFDQSxLQUFBLEdBQUEsVUFBQSxTQUFBO0FBTkQsR0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLE1BQU0sY0FBYyxTQUFkLFdBQWMsR0FBSztBQUFBLFFBQUEsUUFBQTs7QUFFekIsTUFBQSxjQUFBLEVBQUEsS0FBQSxFQUFBLFdBQUE7QUFDTSxZQUROLElBQUE7QUFFTSxvQkFGa0I7QUFBeEIsS0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxjQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLGdCQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFdBQUEsRUFBQSxvRkFBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFdBQUEsRUFBQSxxRkFBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFlBQUEsRUFXa0IsQ0FDVjtBQUNFLGtCQURGLEdBQUE7QUFFRSxnQkFBVTtBQUNSLHNCQUFjO0FBRE47QUFGWixLQURVLEVBT1Y7QUFDRSxrQkFERixHQUFBO0FBRUUsZ0JBQVU7QUFDUixzQkFBYztBQUROO0FBRlosS0FQVSxFQWFWO0FBQ0Usa0JBREYsR0FBQTtBQUVFLGdCQUFVO0FBQ1Isc0JBQWM7QUFETjtBQUZaLEtBYlUsQ0FYbEIsQ0FBQSxFQUFBLFFBQUE7QUFnQ0ksTUFBQSx1QkFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBbENKLEdBQUE7O29CQXFDQSxXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IGFibGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAkKCcuc2VhcmNoLWljb24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5teS1uYXZiYXInKS5hZGRDbGFzcygnanVzdGlmeS1jb250ZW50LWNlbnRlcicpO1xyXG4gICAgICAgICQoJy5teS1uYXZiYXInKS5hZGRDbGFzcygnc2VhcmNoLWFjdGl2ZScpOyBcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGRpc2FibGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAkKCcudGltZXMtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLm15LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyk7XHJcbiAgICAgICAgJCgnLm15LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdzZWFyY2gtYWN0aXZlJyk7XHJcbiAgICB9KSAgXHJcblxyXG4gICAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gJChlLnRhcmdldCk7XHJcblxyXG4gICAgICAgIGlmKCFfdGhpcy5jbG9zZXN0KCcuc2VhcmNoJykubGVuZ3RoICYmICFfdGhpcy5oYXNDbGFzcygnc2VhcmNoJykpIHtcclxuICAgICAgICAgICAgJCgnLm15LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyk7XHJcbiAgICAgICAgICAgICQoJy5teS1uYXZiYXInKS5yZW1vdmVDbGFzcygnc2VhcmNoLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCB0b2dnbGVOYXYgPSBlID0+IHtcclxuICAgICQoJy5oYW1idXJnZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5udi1jb2xsYXBzZScpLnRvZ2dsZUNsYXNzKCd0b2dnbGUtbmF2Jyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnLmhhbWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaGFtYnVyZ2VyLWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7YWJsZVNlYXJjaCwgZGlzYWJsZVNlYXJjaCx0b2dnbGVOYXZ9XHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5pbXBvcnQgc2xpY2tTbGlkZXIgZnJvbSAnLi9zbGlkZXInXHJcbmltcG9ydCB7YWJsZVNlYXJjaCwgZGlzYWJsZVNlYXJjaCx0b2dnbGVOYXZ9IGZyb20gJy4vaG9tZXBhZ2UnXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gc2xpY2tTbGlkZXIoKTtcclxuXHJcbiBhYmxlU2VhcmNoKCk7XHJcbiBkaXNhYmxlU2VhcmNoKClcclxuIHRvZ2dsZU5hdigpO1xyXG4gXHJcblxyXG59KTsiLCJjb25zdCBzbGlja1NsaWRlciA9ICgpPT4ge1xyXG5cclxuJCgnLnNsaWRlci1hcmVhJykuc2xpY2soe1xyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IHRydWUsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogNyxcclxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICBzcGVlZDogNjAwLFxyXG4gICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgIC8vIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZS1hcnJvdyBwcmV2LWFycm93XCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+JyxcclxuICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlLWFycm93IG5leHQtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+JyxcclxuICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA0MDAsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gICAgJChcIi5zbGljay1kb3RzIGxpIGJ1dHRvblwiKS50ZXh0KFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbGlja1NsaWRlciJdfQ==
