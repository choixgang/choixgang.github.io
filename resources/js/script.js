// landing-N1 [tom2bVKMSF]
/* ========== */
/*!
 * MoveTo - A lightweight scroll animation javascript library without any dependency.
 * Version 1.8.2 (28-06-2019 14:30)
 * Licensed under MIT
 * Copyright 2019 Hasan Aydoğdu <hsnaydd@gmail.com>
 */
"use strict";
var MoveTo = function() {
  var e = {
    tolerance: 0,
    duration: 800,
    easing: "easeOutQuart",
    container: window,
    callback: function() {}
  };

  function o(t, n, e, o) {
    return t /= o, -e * (--t * t * t * t - 1) + n
  }

  function v(n, e) {
    var o = {};
    return Object.keys(n).forEach(function(t) {
      o[t] = n[t]
    }), Object.keys(e).forEach(function(t) {
      o[t] = e[t]
    }), o
  }

  function d(t) {
    return t instanceof HTMLElement ? t.scrollTop : t.pageYOffset
  }

  function t() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
      n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    this.options = v(e, t), this.easeFunctions = v({
      easeOutQuart: o
    }, n)
  }
  return t.prototype.registerTrigger = function(t, n) {
    var e = this;
    if (t) {
      var o = t.getAttribute("href") || t.getAttribute("data-target"),
        r = o && "#" !== o ? document.getElementById(o.substring(1)) : document.body,
        i = v(this.options, function(e, t) {
          var o = {};
          return Object.keys(t).forEach(function(t) {
            var n = e.getAttribute("data-mt-".concat(function(t) {
              return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
              })
            }(t)));
            n && (o[t] = isNaN(n) ? n : parseInt(n, 10))
          }), o
        }(t, this.options));
      "function" == typeof n && (i.callback = n);
      var a = function(t) {
        t.preventDefault(), e.move(r, i)
      };
      return t.addEventListener("click", a, !1),
        function() {
          return t.removeEventListener("click", a, !1)
        }
    }
  }, t.prototype.move = function(i) {
    var a = this,
      c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    if (0 === i || i) {
      c = v(this.options, c);
      var u, s = "number" == typeof i ? i : i.getBoundingClientRect().top,
        f = d(c.container),
        l = null;
      s -= c.tolerance;
      window.requestAnimationFrame(function t(n) {
        var e = d(a.options.container);
        l || (l = n - 1);
        var o = n - l;
        if (u && (0 < s && e < u || s < 0 && u < e)) return c.callback(i);
        u = e;
        var r = a.easeFunctions[c.easing](o, f, s, c.duration);
        c.container.scroll(0, r), o < c.duration ? window.requestAnimationFrame(t) : (c.container.scroll(0, s + f), c.callback(i))
      })
    }
  }, t.prototype.addEaseFunction = function(t, n) {
    this.easeFunctions[t] = n
  }, t
}();
"undefined" != typeof module ? module.exports = MoveTo : window.MoveTo = MoveTo;
(function(html) {
  // mobile menu
  const N1MobileMenu = function() {
    const toggleButton = document.querySelector('.landing-N1 .s-header__menu-toggle');
    const mainNavWrap = document.querySelector('.landing-N1 .s-header__nav-wrap');
    const siteBody = document.querySelector('body');
    if (!(toggleButton && mainNavWrap)) return;
    toggleButton.addEventListener('click', function(e) {
      e.preventDefault();
      toggleButton.classList.toggle('is-clicked');
      siteBody.classList.toggle('menu-is-open');
    });
    mainNavWrap.querySelectorAll('.landing-N1 .s-header__nav a').forEach(function(link) {
      link.addEventListener("click", function(e) {
        // at 900px and below
        if (window.matchMedia('(max-width: 900px)').matches) {
          toggleButton.classList.toggle('is-clicked');
          siteBody.classList.toggle('menu-is-open');
        }
      });
    });
    window.addEventListener('resize', function() {
      // above 900px
      if (window.matchMedia('(min-width: 901px)').matches) {
        if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
        if (toggleButton.classList.contains('is-clicked')) toggleButton.classList.remove('is-clicked');
      }
    });
  };
  // sticky header
  const N1StickyHeader = function() {
    const hdr = document.querySelector('.landing-N1');
    if (!hdr) return;
    // const triggerHeight = window.pageYOffset + hdr.getBoundingClientRect().top;
    const triggerHeight = 1;
    window.addEventListener('scroll', function() {
      let loc = window.scrollY;
      if (loc > triggerHeight) {
        hdr.classList.add('sticky');
      } else {
        hdr.classList.remove('sticky');
      }
    });
  };
  // smoothscroll
  const N1ssMoveTo = function() {
    const easeFunctions = {
      easeInQuad: function(t, b, c, d) {
        t /= d;
        return c * t * t + b;
      },
      easeOutQuad: function(t, b, c, d) {
        t /= d;
        return -c * t * (t - 2) + b;
      },
      easeInOutQuad: function(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      },
      easeInOutCubic: function(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      },
    };
    const triggers = document.querySelectorAll(".smoothscroll");
    const moveTo = new MoveTo({
      tolerance: 0,
      duration: 1200,
      easing: "easeInOutCubic",
      container: window,
    }, easeFunctions);
    triggers.forEach(function(trigger) {
      moveTo.registerTrigger(trigger);
    });
  };
  /* initialize */
  (function ssInitN1() {
    N1MobileMenu();
    N1StickyHeader();
    N1ssMoveTo();
  })();
})(document.documentElement);
// landing-N7 [qhm2BwoN3F]
/* ========== */
/*!
 * MoveTo - A lightweight scroll animation javascript library without any dependency.
 * Version 1.8.2 (28-06-2019 14:30)
 * Licensed under MIT
 * Copyright 2019 Hasan Aydoğdu <hsnaydd@gmail.com>
 */
"use strict";
var MoveTo = function() {
  var e = {
    tolerance: 0,
    duration: 800,
    easing: "easeOutQuart",
    container: window,
    callback: function() {}
  };

  function makeTimer() {
    var endTime = new Date("March 22, 2025 13:00:00 UTC+09:00");
    var endTime = (Date.parse(endTime)) / 1000;
    var now = new Date();
    var now = (Date.parse(now) / 1000);
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
  }
  setInterval(function() {
    makeTimer();
  }, 1000);

  function o(t, n, e, o) {
    return t /= o, -e * (--t * t * t * t - 1) + n
  }

  function v(n, e) {
    var o = {};
    return Object.keys(n).forEach(function(t) {
      o[t] = n[t]
    }), Object.keys(e).forEach(function(t) {
      o[t] = e[t]
    }), o
  }

  function d(t) {
    return t instanceof HTMLElement ? t.scrollTop : t.pageYOffset
  }

  function t() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
      n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    this.options = v(e, t), this.easeFunctions = v({
      easeOutQuart: o
    }, n)
  }
  return t.prototype.registerTrigger = function(t, n) {
    var e = this;
    if (t) {
      var o = t.getAttribute("href") || t.getAttribute("data-target"),
        r = o && "#" !== o ? document.getElementById(o.substring(1)) : document.body,
        i = v(this.options, function(e, t) {
          var o = {};
          return Object.keys(t).forEach(function(t) {
            var n = e.getAttribute("data-mt-".concat(function(t) {
              return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
              })
            }(t)));
            n && (o[t] = isNaN(n) ? n : parseInt(n, 10))
          }), o
        }(t, this.options));
      "function" == typeof n && (i.callback = n);
      var a = function(t) {
        t.preventDefault(), e.move(r, i)
      };
      return t.addEventListener("click", a, !1),
        function() {
          return t.removeEventListener("click", a, !1)
        }
    }
  }, t.prototype.move = function(i) {
    var a = this,
      c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    if (0 === i || i) {
      c = v(this.options, c);
      var u, s = "number" == typeof i ? i : i.getBoundingClientRect().top,
        f = d(c.container),
        l = null;
      s -= c.tolerance;
      window.requestAnimationFrame(function t(n) {
        var e = d(a.options.container);
        l || (l = n - 1);
        var o = n - l;
        if (u && (0 < s && e < u || s < 0 && u < e)) return c.callback(i);
        u = e;
        var r = a.easeFunctions[c.easing](o, f, s, c.duration);
        c.container.scroll(0, r), o < c.duration ? window.requestAnimationFrame(t) : (c.container.scroll(0, s + f), c.callback(i))
      })
    }
  }, t.prototype.addEaseFunction = function(t, n) {
    this.easeFunctions[t] = n
  }, t
}();
"undefined" != typeof module ? module.exports = MoveTo : window.MoveTo = MoveTo;
(function() {
  // mail form
  const N7MailChimpForm = function() {
    const mcForm = document.querySelector('#mc-form');
    if (!mcForm) return;
    mcForm.setAttribute('novalidate', true);
    // Field validation
    function hasError(field) {
      if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') return;
      let validity = field.validity;
      if (validity.valid) return;
      if (validity.valueMissing) return 'Please enter an email address.';
      if (validity.typeMismatch) {
        if (field.type === 'email') return 'Please enter a valid email address.';
      }
      // If pattern doesn't match
      if (validity.patternMismatch) {
        if (field.hasAttribute('title')) return field.getAttribute('title');
        return 'Please match the requested format.';
      }
      return 'The value you entered for this field is invalid.';
    };
    // Show error message
    function showError(field, error) {
      let id = field.id || field.name;
      if (!id) return;
      let errorMessage = field.form.querySelector('.mc-status');
      errorMessage.classList.remove('success-message');
      errorMessage.classList.add('error-message');
      errorMessage.innerHTML = error;
    };
    // Check email field on submit
    mcForm.addEventListener('submit', function(event) {
      event.preventDefault();
      let emailField = event.target.querySelector('#mce-EMAIL');
      let error = hasError(emailField);
      if (error) {
        showError(emailField, error);
        emailField.focus();
        return;
      }
    }, false);
  };
  // back to top
  const N7BackToTop = function() {
    const pxShow = 900;
    const goTopButton = document.querySelector(".landing-N7 .ss-go-top");
    if (!goTopButton) return;
    // Show or hide the button
    if (window.scrollY >= pxShow) goTopButton.classList.add("link-is-visible");
    window.addEventListener("scroll", function() {
      if (window.scrollY >= pxShow) {
        if (!goTopButton.classList.contains("link-is-visible")) goTopButton.classList.add("link-is-visible");
      } else {
        goTopButton.classList.remove("link-is-visible");
      }
    });
    goTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  };
  /* Initialize */
  (function ssInitN7() {
    N7MailChimpForm();
    N7BackToTop();
  })();
})();