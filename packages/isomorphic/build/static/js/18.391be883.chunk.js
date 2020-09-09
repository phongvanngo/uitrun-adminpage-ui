(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [18],
  {
    410: function(n, t, e) {
      'use strict';
      var i = e(0),
        a = e.n(i),
        r = 'ltr';
      'undefined' !== typeof window &&
        (r = document.getElementsByTagName('html')[0].getAttribute('dir'));
      t.a = function(n) {
        return function(t) {
          return a.a.createElement(n, Object.assign({}, t, { 'data-rtl': r }));
        };
      };
    },
    411: function(n, t, e) {
      'use strict';
      function i() {
        var n =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0.3;
        return '\n      -webkit-transition: all '
          .concat(
            n,
            's cubic-bezier(0.215, 0.61, 0.355, 1);\n      -moz-transition: all '
          )
          .concat(
            n,
            's cubic-bezier(0.215, 0.61, 0.355, 1);\n      -ms-transition: all '
          )
          .concat(
            n,
            's cubic-bezier(0.215, 0.61, 0.355, 1);\n      -o-transition: all '
          )
          .concat(
            n,
            's cubic-bezier(0.215, 0.61, 0.355, 1);\n      transition: all '
          )
          .concat(n, 's cubic-bezier(0.215, 0.61, 0.355, 1);\n  ');
      }
      function a() {
        var n =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return '\n      -webkit-border-radius: '
          .concat(n, ';\n      -moz-border-radius: ')
          .concat(n, ';\n      -ms-transition: ')
          .concat(n, ';\n      -o-border-radius: ')
          .concat(n, ';\n      border-radius: ')
          .concat(n, ';\n  ');
      }
      function r() {
        var n =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 'none';
        return '\n      -webkit-box-shadow: '
          .concat(n, ';\n      -moz-box-shadow: ')
          .concat(n, ';\n      box-shadow: ')
          .concat(n, ';\n  ');
      }
      e.d(t, 'c', function() {
        return i;
      }),
        e.d(t, 'a', function() {
          return a;
        }),
        e.d(t, 'b', function() {
          return r;
        });
    },
    416: function(n, t, e) {
      'use strict';
      var i = e(0),
        a = e.n(i),
        r = e(30);
      t.a = Object(r.d)(
        function(n) {
          return a.a.createElement(r.a, n);
        },
        { withRef: !1 }
      );
    },
    508: function(n, t, e) {
      n.exports = e.p + 'static/media/rob.b34fc52c.png';
    },
    941: function(n, t, e) {
      'use strict';
      e.r(t);
      var i = e(0),
        a = e.n(i),
        r = e(125),
        o = e(508),
        c = e.n(o),
        l = e(416),
        s = e(65),
        u = e(47),
        d = e(56),
        m = e(411),
        f = e(410);
      function p() {
        var n = Object(s.a)([
          '\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n    flex-direction: column;\n    flex-wrap: nowrap;\n  }\n\n  .iso404Content {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    flex-direction: column;\n\n    @media only screen and (max-width: 767px) {\n      order: 2;\n      margin-top: 20px;\n      align-items: center;\n      text-align: center;\n      flex-direction: column;\n    }\n\n    h1 {\n      font-size: 84px;\n      font-weight: 700;\n      color: ',
          ';\n      line-height: 1;\n      margin: 0 0 25px;\n    }\n\n    h3 {\n      font-size: 24px;\n      font-weight: 400;\n      color: ',
          ';\n      margin: 0 0 10px;\n      line-height: 1.2;\n    }\n\n    p {\n      font-size: 14px;\n      font-weight: 400;\n      color: ',
          ';\n      margin: 0 0 10px;\n    }\n\n    button {\n      display: inline-block;\n      margin-top: 15px;\n      margin-bottom: 0;\n      font-weight: 500;\n      text-align: center;\n      -ms-touch-action: manipulation;\n      touch-action: manipulation;\n      cursor: pointer;\n      background-image: none;\n      border: 0;\n      white-space: nowrap;\n      line-height: 1.5;\n      padding: 0 30px;\n      font-size: 13px;\n      flex-shrink: 0;\n      height: 36px;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      position: relative;\n      color: #ffffff;\n      background-color: ',
          ';\n      ',
          ';\n      ',
          ';\n\n      a {\n        width: 100%;\n        height: 100%;\n        color: #ffffff;\n        text-decoration: none;\n      }\n\n      &:hover {\n        background-color: ',
          ';\n\n        a {\n          text-decoration: none;\n        }\n      }\n\n      &:focus {\n        outline: 0;\n        box-shadow: none;\n\n        a {\n          text-decoration: none;\n        }\n      }\n    }\n  }\n\n  .iso404Artwork {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-left: ',
          ';\n    margin-right: ',
          ';\n    height: 500px;\n\n    @media only screen and (max-width: 767px) {\n      margin-left: ',
          ';\n      margin-right: ',
          ';\n    }\n\n    img {\n      max-height: 100%;\n    }\n  }\n',
        ]);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      var h = u.c.div(
          p(),
          Object(d.palette)('secondary', 2),
          Object(d.palette)('text', 1),
          Object(d.palette)('text', 3),
          Object(d.palette)('primary', 0),
          Object(m.c)(),
          Object(m.a)('18px'),
          Object(d.palette)('primary', 2),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '100px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '100px' : 'inherti';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '0';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0' : 'inherit';
          }
        ),
        b = Object(f.a)(h);
      t.default = function() {
        return a.a.createElement(
          b,
          { className: 'iso404Page' },
          a.a.createElement(
            'div',
            { className: 'iso404Content' },
            a.a.createElement(
              'h1',
              null,
              a.a.createElement(l.a, { id: 'page404.title' })
            ),
            a.a.createElement(
              'h3',
              null,
              a.a.createElement(l.a, { id: 'page404.subTitle' })
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(l.a, { id: 'page404.description' })
            ),
            a.a.createElement(
              r.b,
              { to: '/dashboard' },
              a.a.createElement(
                'button',
                { type: 'button' },
                a.a.createElement(l.a, { id: 'page404.backButton' })
              )
            )
          ),
          a.a.createElement(
            'div',
            { className: 'iso404Artwork' },
            a.a.createElement('img', { alt: '#', src: c.a })
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=18.391be883.chunk.js.map
