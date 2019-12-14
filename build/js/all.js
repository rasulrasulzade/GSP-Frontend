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
            $('.my-navbar').addClass('search-active');
            $('.my-navbar').addClass('justify-content-center');
        });
    };

    var disableSearch = function disableSearch() {
        $('.times-icon').click(function () {
            $('.my-navbar').removeClass('search-active');
            $('.my-navbar').removeClass('justify-content-center');
        });

        $(document).click(function (e) {
            if (!e.target.closest('.search') && !$(e.target).hasClass('search')) {
                console.log(e.target);
                $('.my-navbar').removeClass('search-active');
                $('.my-navbar').removeClass('justify-content-center');
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxob21lcGFnZS5qcyIsInNyY1xcanNcXG1haW5cXG1haW4uanMiLCJzcmNcXGpzXFxtYWluXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLFFBQU0sYUFBYSxTQUFiLFVBQWEsR0FBTTtBQUNyQixVQUFBLGNBQUEsRUFBQSxLQUFBLENBQXdCLFlBQVU7QUFDOUIsY0FBQSxZQUFBLEVBQUEsUUFBQSxDQUFBLGVBQUE7QUFDQSxjQUFBLFlBQUEsRUFBQSxRQUFBLENBQUEsd0JBQUE7QUFGSixTQUFBO0FBREosS0FBQTs7QUFPQSxRQUFNLGdCQUFnQixTQUFoQixhQUFnQixHQUFNO0FBQ3hCLFVBQUEsYUFBQSxFQUFBLEtBQUEsQ0FBdUIsWUFBVTtBQUM3QixjQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsZUFBQTtBQUNBLGNBQUEsWUFBQSxFQUFBLFdBQUEsQ0FBQSx3QkFBQTtBQUZKLFNBQUE7O0FBS0EsVUFBQSxRQUFBLEVBQUEsS0FBQSxDQUFrQixVQUFBLENBQUEsRUFBWTtBQUMxQixnQkFBRyxDQUFDLEVBQUEsTUFBQSxDQUFBLE9BQUEsQ0FBRCxTQUFDLENBQUQsSUFBZ0MsQ0FBQyxFQUFFLEVBQUYsTUFBQSxFQUFBLFFBQUEsQ0FBcEMsUUFBb0MsQ0FBcEMsRUFBb0U7QUFDaEUsd0JBQUEsR0FBQSxDQUFZLEVBQVosTUFBQTtBQUNBLGtCQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsZUFBQTtBQUNBLGtCQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsd0JBQUE7QUFDSDtBQUxMLFNBQUE7QUFOSixLQUFBOztBQWVBLFFBQU0sWUFBWSxTQUFaLFNBQVksQ0FBQSxDQUFBLEVBQUs7QUFDbkIsVUFBQSxZQUFBLEVBQUEsS0FBQSxDQUFzQixZQUFVO0FBQzVCLGNBQUEsY0FBQSxFQUFBLFdBQUEsQ0FBQSxZQUFBO0FBREosU0FBQTs7QUFJQSxVQUFBLFlBQUEsRUFBQSxLQUFBLENBQXNCLFlBQVU7QUFDNUIsY0FBQSxJQUFBLEVBQUEsV0FBQSxDQUFBLGtCQUFBO0FBREosU0FBQTtBQUxKLEtBQUE7O1lBVUEsVSxHQUFBLFU7WUFBQSxhLEdBQUEsYTtZQUFBLFMsR0FBQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQSxJQUFBLFFBQUEsRUFBQSxLQUFBLENBQWtCLFlBQVU7O0FBRTNCLEtBQUEsR0FBQSxTQUFBLE9BQUE7O0FBRUEsS0FBQSxHQUFBLFVBQUEsVUFBQTtBQUNBLEtBQUEsR0FBQSxVQUFBLGFBQUE7QUFDQSxLQUFBLEdBQUEsVUFBQSxTQUFBO0FBTkQsR0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLE1BQU0sY0FBYyxTQUFkLFdBQWMsR0FBSztBQUFBLFFBQUEsUUFBQTs7QUFFekIsTUFBQSxjQUFBLEVBQUEsS0FBQSxFQUFBLFdBQUE7QUFDTSxZQUROLElBQUE7QUFFTSxvQkFGa0I7QUFBeEIsS0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxjQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLGdCQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFdBQUEsRUFBQSxvRkFBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFdBQUEsRUFBQSxxRkFBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFlBQUEsRUFXa0IsQ0FDVjtBQUNFLGtCQURGLEdBQUE7QUFFRSxnQkFBVTtBQUNSLHNCQUFjO0FBRE47QUFGWixLQURVLEVBT1Y7QUFDRSxrQkFERixHQUFBO0FBRUUsZ0JBQVU7QUFDUixzQkFBYztBQUROO0FBRlosS0FQVSxFQWFWO0FBQ0Usa0JBREYsR0FBQTtBQUVFLGdCQUFVO0FBQ1Isc0JBQWM7QUFETjtBQUZaLEtBYlUsQ0FYbEIsQ0FBQSxFQUFBLFFBQUE7QUFnQ0ksTUFBQSx1QkFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBbENKLEdBQUE7O29CQXFDQSxXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IGFibGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAkKCcuc2VhcmNoLWljb24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5teS1uYXZiYXInKS5hZGRDbGFzcygnc2VhcmNoLWFjdGl2ZScpO1xyXG4gICAgICAgICQoJy5teS1uYXZiYXInKS5hZGRDbGFzcygnanVzdGlmeS1jb250ZW50LWNlbnRlcicpO1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZGlzYWJsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgICQoJy50aW1lcy1pY29uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcubXktbmF2YmFyJykucmVtb3ZlQ2xhc3MoJ3NlYXJjaC1hY3RpdmUnKTtcclxuICAgICAgICAkKCcubXktbmF2YmFyJykucmVtb3ZlQ2xhc3MoJ2p1c3RpZnktY29udGVudC1jZW50ZXInKTtcclxuICAgIH0pICBcclxuXHJcbiAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYoIWUudGFyZ2V0LmNsb3Nlc3QoJy5zZWFyY2gnKSAmJiAhJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3NlYXJjaCcpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4gICAgICAgICAgICAkKCcubXktbmF2YmFyJykucmVtb3ZlQ2xhc3MoJ3NlYXJjaC1hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLm15LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZU5hdiA9IGUgPT4ge1xyXG4gICAgJCgnLmhhbWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLm52LWNvbGxhcHNlJykudG9nZ2xlQ2xhc3MoJ3RvZ2dsZS1uYXYnKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCcuaGFtYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdoYW1idXJnZXItYWN0aXZlJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHthYmxlU2VhcmNoLCBkaXNhYmxlU2VhcmNoLHRvZ2dsZU5hdn1cclxuIiwiJ3VzZSBzdHJpY3QnXHJcbmltcG9ydCBzbGlja1NsaWRlciBmcm9tICcuL3NsaWRlcidcclxuaW1wb3J0IHthYmxlU2VhcmNoLCBkaXNhYmxlU2VhcmNoLHRvZ2dsZU5hdn0gZnJvbSAnLi9ob21lcGFnZSdcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiBzbGlja1NsaWRlcigpO1xyXG5cclxuIGFibGVTZWFyY2goKTtcclxuIGRpc2FibGVTZWFyY2goKVxyXG4gdG9nZ2xlTmF2KCk7XHJcbiBcclxuXHJcbn0pOyIsImNvbnN0IHNsaWNrU2xpZGVyID0gKCk9PiB7XHJcblxyXG4kKCcuc2xpZGVyLWFyZWEnKS5zbGljayh7XHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiA3LFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgIHNwZWVkOiA2MDAsXHJcbiAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgLy8gY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlLWFycm93IHByZXYtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGUtYXJyb3cgbmV4dC1hcnJvd1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj4nLFxyXG4gICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDQwMCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICAkKFwiLnNsaWNrLWRvdHMgbGkgYnV0dG9uXCIpLnRleHQoXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWNrU2xpZGVyIl19
