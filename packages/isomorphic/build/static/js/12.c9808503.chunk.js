(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [12],
  {
    410: function(n, e, t) {
      'use strict';
      var o = t(0),
        a = t.n(o),
        i = 'ltr';
      'undefined' !== typeof window &&
        (i = document.getElementsByTagName('html')[0].getAttribute('dir'));
      e.a = function(n) {
        return function(e) {
          return a.a.createElement(n, Object.assign({}, e, { 'data-rtl': i }));
        };
      };
    },
    411: function(n, e, t) {
      'use strict';
      function o() {
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
      function i() {
        var n =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 'none';
        return '\n      -webkit-box-shadow: '
          .concat(n, ';\n      -moz-box-shadow: ')
          .concat(n, ';\n      box-shadow: ')
          .concat(n, ';\n  ');
      }
      t.d(e, 'c', function() {
        return o;
      }),
        t.d(e, 'a', function() {
          return a;
        }),
        t.d(e, 'b', function() {
          return i;
        });
    },
    416: function(n, e, t) {
      'use strict';
      var o = t(0),
        a = t.n(o),
        i = t(30);
      e.a = Object(i.d)(
        function(n) {
          return a.a.createElement(i.a, n);
        },
        { withRef: !1 }
      );
    },
    476: function(n, e, t) {
      n.exports = t.p + 'static/media/user1.37ea24e9.png';
    },
    500: function(n, e, t) {
      'use strict';
      var o = t(0),
        a = t.n(o),
        i = t(646);
      e.a = function(n) {
        var e = n.id,
          t = n.style,
          o = n.children,
          r = n.className;
        return a.a.createElement(
          i.Scrollbars,
          {
            id: e,
            className: r,
            style: t,
            autoHide: !0,
            autoHideTimeout: 1e3,
            autoHideDuration: 200,
            autoHeightMin: 0,
            autoHeightMax: 200,
            thumbMinSize: 30,
            universal: !0,
          },
          o
        );
      };
    },
    641: function(n, e, t) {
      'use strict';
      (function(n) {
        var o = t(424),
          a = t(0),
          i = t.n(a),
          r = t(642),
          l = t.n(r),
          c = new Set(),
          p = function() {
            return c.forEach(function(n) {
              return n();
            });
          };
        e.a = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.throttleMs,
            a = void 0 === t ? 100 : t,
            r = i.a.useState({
              width: n.browser && window.innerWidth,
              height: n.browser && window.innerHeight,
            }),
            d = Object(o.a)(r, 2),
            s = d[0],
            f = d[1],
            m = l()(function() {
              f({
                width: n.browser && window.innerWidth,
                height: n.browser && window.innerHeight,
              });
            }, a);
          return (
            i.a.useEffect(function() {
              return (
                0 === c.size && window.addEventListener('resize', p, !0),
                c.add(m),
                function() {
                  c.delete(m),
                    0 === c.size && window.removeEventListener('resize', p, !0);
                }
              );
            }, []),
            s
          );
        };
      }.call(this, t(92)));
    },
    645: function(n, e, t) {
      n.exports = t.p + 'static/media/bucket.545fd26b.svg';
    },
    935: function(n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, 'default', function() {
          return Mn;
        });
      t(472);
      var o = t(477),
        a = t(0),
        i = t.n(a),
        r = t(41),
        l = t(641),
        c = t(36),
        p = t(115),
        d = t(416),
        s = function(n) {
          var e = n.config,
            t = n.changeTheme,
            o = n.selectedId,
            a = e.id,
            r = e.label,
            l = e.options;
          return i.a.createElement(
            'div',
            { className: 'themeSwitchBlock' },
            i.a.createElement('h4', null, i.a.createElement(d.a, { id: r })),
            i.a.createElement(
              'div',
              { className: 'themeSwitchBtnWrapper' },
              l.map(function(n) {
                var e = n.themeName,
                  r = n.buttonColor,
                  l = e === o ? 'selectedTheme' : '';
                return i.a.createElement('button', {
                  type: 'button',
                  key: e,
                  onClick: function() {
                    t(a, e);
                  },
                  className: l,
                  style: { backgroundColor: r },
                });
              })
            )
          );
        },
        f = t(114),
        m = t(169),
        h = t(170),
        x = t.n(h),
        u = t(171),
        g = t.n(u),
        b = t(172),
        w = t.n(b),
        y = t(173),
        k = t.n(y),
        v = t(174),
        j = t.n(v),
        O = {
          defaultLanguage: m.a,
          options: [
            { languageId: 'english', locale: 'en', text: 'English', icon: x.a },
            { languageId: 'chinese', locale: 'zh', text: 'Chinese', icon: g.a },
            { languageId: 'spanish', locale: 'es', text: 'Spanish', icon: w.a },
            { languageId: 'french', locale: 'fr', text: 'French', icon: k.a },
            { languageId: 'italian', locale: 'it', text: 'Italian', icon: j.a },
          ],
        };
      var C = O,
        E = f.a.changeLanguage;
      function N() {
        var n = Object(r.c)(function(n) {
            return n.LanguageSwitcher;
          }).language,
          e = Object(r.b)();
        return i.a.createElement(
          'div',
          { className: 'themeSwitchBlock' },
          i.a.createElement(
            'h4',
            null,
            i.a.createElement(d.a, { id: 'languageSwitcher.label' })
          ),
          i.a.createElement(
            'div',
            { className: 'themeSwitchBtnWrapper' },
            C.options.map(function(t) {
              var o = t.languageId,
                a = t.icon,
                r =
                  o === n.languageId
                    ? 'selectedTheme languageSwitch'
                    : 'languageSwitch';
              return i.a.createElement(
                'button',
                {
                  type: 'button',
                  className: r,
                  key: o,
                  onClick: function() {
                    e(E(o));
                  },
                },
                i.a.createElement('img', { src: a, alt: 'flag' })
              );
            })
          )
        );
      }
      var z = t(46),
        D = {
          changeThemes: {
            id: 'changeThemes',
            label: 'themeSwitcher',
            defaultTheme: z.b.theme,
            options: [
              {
                themeName: 'defaultTheme',
                buttonColor: '#ffffff',
                textColor: '#323332',
              },
              {
                themeName: 'theme2',
                buttonColor: '#ffffff',
                textColor: '#323332',
              },
            ],
          },
          topbarTheme: {
            id: 'topbarTheme',
            label: 'themeSwitcher.Topbar',
            defaultTheme: z.b.topbar,
            options: [
              {
                themeName: 'defaultTheme',
                buttonColor: '#ffffff',
                textColor: '#323332',
              },
              {
                themeName: 'theme1',
                buttonColor: '#e0364c',
                backgroundColor: '#e0364c',
                textColor: '#ffffff',
              },
              {
                themeName: 'theme2',
                buttonColor: '#6534ff',
                backgroundColor: '#6534ff',
                textColor: '#ffffff',
              },
              {
                themeName: 'theme3',
                buttonColor: '#4482FF',
                backgroundColor: '#4482FF',
                textColor: '#ffffff',
              },
              {
                themeName: 'theme4',
                buttonColor: '#422e62',
                backgroundColor: '#422e62',
                textColor: '#ffffff',
              },
              {
                themeName: 'theme5',
                buttonColor: '#22144c',
                backgroundColor: '#22144c',
                textColor: '#ffffff',
              },
              {
                themeName: 'theme6',
                buttonColor: '#4670a2',
                backgroundColor: '#4670a2',
                textColor: '#ffffff',
              },
              {
                themeName: 'theme7',
                buttonColor: '#494982',
                backgroundColor: '#494982',
                textColor: '#ffffff',
              },
            ],
          },
          sidebarTheme: {
            id: 'sidebarTheme',
            label: 'themeSwitcher.Sidebar',
            defaultTheme: z.b.sidebar,
            options: [
              {
                themeName: 'defaultTheme',
                buttonColor: '#323332',
                backgroundColor: void 0,
                textColor: '#788195',
              },
              {
                themeName: 'theme1',
                buttonColor: '#e0364c',
                backgroundColor: '#e0364c',
                textColor: '#ffffff',
              },
              {
                themeName: 'theme2',
                buttonColor: '#6534ff',
                backgroundColor: '#6534ff',
                textColor: '#ffffff',
              },
              {
                themeName: 'theme3',
                buttonColor: '#4482FF',
                backgroundColor: '#4482FF',
                textColor: '#ffffff',
              },
              {
                themeName: 'theme4',
                buttonColor: '#422e62',
                backgroundColor: '#422e62',
                textColor: '#ffffff',
              },
              {
                themeName: 'theme5',
                buttonColor: '#22144c',
                backgroundColor: '#22144c',
                textColor: '#ffffff',
              },
              {
                themeName: 'theme6',
                buttonColor: '#4670a2',
                backgroundColor: '#4670a2',
                textColor: '#ffffff',
              },
              {
                themeName: 'theme7',
                buttonColor: '#494982',
                backgroundColor: '#494982',
                textColor: '#ffffff',
              },
            ],
          },
          layoutTheme: {
            id: 'layoutTheme',
            label: 'themeSwitcher.Background',
            defaultTheme: z.b.layout,
            options: [
              {
                themeName: 'defaultTheme',
                buttonColor: '#ffffff',
                backgroundColor: '#F1F3F6',
                textColor: void 0,
              },
              {
                themeName: 'theme1',
                buttonColor: '#ffffff',
                backgroundColor: '#ffffff',
                textColor: '#323232',
              },
              {
                themeName: 'theme2',
                buttonColor: '#F9F9F9',
                backgroundColor: '#F9F9F9',
                textColor: '#ffffff',
              },
              {
                themeName: 'theme3',
                buttonColor: '#ebebeb',
                backgroundColor: '#ebebeb',
                textColor: '#ffffff',
              },
            ],
          },
        };
      var T = D,
        I = t(645),
        S = t.n(I),
        L = t(65),
        B = t(47),
        W = t(56),
        M = t(411),
        A = t(410);
      function F() {
        var n = Object(L.a)([
          '\n  background-color: #ffffff;\n  width: 340px;\n  height: calc(100% - 70px);\n  padding: 0 0 50px;\n  flex-shrink: 0;\n  position: fixed;\n  top: 70px;\n  right: ',
          ';\n  left: ',
          ';\n  z-index: 1001;\n  ',
          ';\n  ',
          ';\n\n  @media only screen and (max-width: 767px) {\n    width: 270px;\n    right: ',
          ';\n    left: ',
          ';\n  }\n\n  &.active {\n    right: ',
          ';\n    left: ',
          ';\n  }\n\n  .switcher {\n    right: ',
          ';\n    left: ',
          ';\n  }\n\n  .componentTitleWrapper {\n    padding: 25px 15px;\n    height: 70px;\n    background-color: ',
          ';\n\n    .componentTitle {\n      font-size: 21px;\n      font-weight: 700;\n      color: #fff;\n      line-height: 1;\n      width: 100%;\n      text-align: center;\n      display: flex;\n      justify-content: center;\n    }\n  }\n\n  .SwitcherBlockWrapper {\n    width: 100%;\n    height: 100%;\n    padding-bottom: 105px;\n    overflow: hidden;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n\n    .themeSwitchBlock {\n      width: 100%;\n      display: -webkit-flex;\n      display: -ms-flex;\n      display: flex;\n      flex-shrink: 0;\n      flex-direction: column;\n      margin-top: 30px;\n\n      h4 {\n        font-size: 14px;\n        font-weight: 700;\n        color: ',
          ';\n        line-height: 1.3;\n        margin-bottom: 0;\n        padding: 0 15px;\n        text-transform: uppercase;\n      }\n\n      .themeSwitchBtnWrapper {\n        width: 100%;\n        display: flex;\n        align-items: center;\n        padding: 15px 20px;\n\n        button {\n          width: 20px;\n          height: 20px;\n          display: flex;\n          margin: ',
          ';\n          border: 1px solid #e4e4e4;\n          outline: 0;\n          padding: 0;\n          background: none;\n          justify-content: center;\n          position: relative;\n          cursor: pointer;\n          ',
          ';\n\n          &.languageSwitch {\n            border: 0;\n            width: 30px;\n            height: auto;\n\n            &.selectedTheme {\n              &:before,\n              &:after {\n                top: 2px;\n                left: ',
          ';\n                right: ',
          ";\n              }\n            }\n          }\n\n          img {\n            width: 100%;\n          }\n\n          &.selectedTheme {\n            &:before {\n              content: '';\n              width: 6px;\n              height: 6px;\n              display: -webkit-inline-flex;\n              display: -ms-inline-flex;\n              display: inline-flex;\n              background-color: ",
          ';\n              position: absolute;\n              top: -2px;\n              left: ',
          ';\n              right: ',
          ';\n              ',
          ";\n            }\n\n            &:after {\n              content: '';\n              width: 6px;\n              height: 6px;\n              display: -webkit-inline-flex;\n              display: -ms-inline-flex;\n              display: inline-flex;\n              border: 1px solid ",
          ';\n              background-color: ',
          ';\n              position: absolute;\n              top: -2px;\n              left: ',
          ';\n              right: ',
          ';\n              -webkit-animation: selectedAnimation 1.2s infinite ease-in-out;\n              animation: selectedAnimation 1.2s infinite ease-in-out;\n              ',
          ';\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .switcherToggleBtn {\n    width: 50px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    background-color: #ffffff;\n    outline: 0;\n    border: 0;\n    position: absolute;\n    text-align: center;\n    top: 200px;\n    left: ',
          ';\n    right: ',
          ';\n    cursor: pointer;\n    border-radius: ',
          ';\n    ',
          ';\n\n    img {\n      width: 23px;\n    }\n  }\n\n  .purchaseBtnWrapper {\n    width: 100%;\n    padding: 25px 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    bottom: 0px;\n    position: absolute;\n    background-color: #ffffff;\n\n    .purchaseBtn {\n      width: calc(100% - 50px);\n      height: 42px;\n      font-size: 14px;\n      font-weight: 700;\n      color: #fff;\n      text-decoration: none;\n      background-color: ',
          ';\n      text-transform: uppercase;\n      line-height: 1;\n      text-align: center;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      ',
          ';\n      ',
          ';\n\n      &:hover {\n        background-color: ',
          ';\n      }\n    }\n  }\n\n  @-webkit-keyframes selectedAnimation {\n    0% {\n      -webkit-transform: scale(0.8);\n      transform: scale(0.8);\n      opacity: 0.5;\n    }\n    100% {\n      -webkit-transform: scale(2.4);\n      transform: scale(2.4);\n      opacity: 0;\n    }\n  }\n  @keyframes selectedAnimation {\n    0% {\n      -webkit-transform: scale(0.8);\n      transform: scale(0.8);\n      opacity: 0.5;\n    }\n    100% {\n      -webkit-transform: scale(2.4);\n      transform: scale(2.4);\n      opacity: 0;\n    }\n  }\n',
        ]);
        return (
          (F = function() {
            return n;
          }),
          n
        );
      }
      var H = B.c.div(
          F(),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '-340px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '-340px' : 'inherit';
          },
          Object(M.c)(),
          Object(M.b)('-1px 0 5px rgba(0,0,0,0.25)'),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '-270px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '-270px' : 'inherit';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '0';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0' : 'inherit';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '-98px' : 'inherit';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '-98px';
          },
          Object(W.palette)('text', 0),
          Object(W.palette)('text', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 0 0 10px' : '0 10px 0 0';
          },
          Object(M.a)('3px'),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '-3px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '-3px' : 'inherit';
          },
          Object(W.palette)('color', 13),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '-2px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '-2px' : 'inherit';
          },
          Object(M.a)('50%'),
          Object(W.palette)('color', 13),
          Object(W.palette)('color', 13),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '-2px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '-2px' : 'inherit';
          },
          Object(M.a)('50%'),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '-50px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '-50px' : 'inherit';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 3px 3px 0' : '3px 0 0 3px';
          },
          Object(M.b)('-2px 0 5px rgba(0,0,0,0.2)'),
          Object(W.palette)('primary', 0),
          Object(M.a)('5px'),
          Object(M.c)(),
          Object(W.palette)('primary', 13)
        ),
        U = Object(A.a)(H),
        R = p.a.switchActivation,
        P = p.a.changeTheme;
      function K() {
        var n = Object(r.c)(function(n) {
            return n.ThemeSwitcher;
          }),
          e = n.isActivated,
          t = n.topbarTheme,
          o = n.sidebarTheme,
          a = n.layoutTheme,
          l = Object(r.b)(),
          c = { background: o.buttonColor };
        return i.a.createElement(
          U,
          { className: e ? 'isoThemeSwitcher active' : 'isoThemeSwitcher' },
          i.a.createElement(
            'div',
            { className: 'componentTitleWrapper', style: c },
            i.a.createElement(
              'h3',
              { className: 'componentTitle' },
              i.a.createElement(d.a, { id: 'themeSwitcher.settings' })
            )
          ),
          i.a.createElement(
            'div',
            { className: 'SwitcherBlockWrapper' },
            i.a.createElement(s, {
              config: T.sidebarTheme,
              changeTheme: function(n, e) {
                return l(P(n, e));
              },
              selectedId: o.themeName,
            }),
            i.a.createElement(s, {
              config: T.topbarTheme,
              changeTheme: function(n, e) {
                return l(P(n, e));
              },
              selectedId: t.themeName,
            }),
            i.a.createElement(s, {
              config: T.layoutTheme,
              changeTheme: function(n, e) {
                return l(P(n, e));
              },
              selectedId: a.themeName,
            }),
            i.a.createElement(N, null)
          ),
          i.a.createElement(
            'div',
            { className: 'purchaseBtnWrapper' },
            i.a.createElement(
              'a',
              {
                href:
                  'https://themeforest.net/item/isomorphic-react-redux-admin-dashboard/20262330?ref=redqteam',
                className: 'purchaseBtn',
                target: '_blank',
                style: c,
              },
              i.a.createElement(d.a, { id: 'themeSwitcher.purchase' })
            )
          ),
          i.a.createElement(
            'button',
            {
              type: 'primary',
              className: 'switcherToggleBtn',
              style: c,
              onClick: function() {
                l(R());
              },
            },
            i.a.createElement('img', { src: S.a, alt: 'bucket' })
          )
        );
      }
      var V = {
          siteName: 'UITRUN ADMIN',
          siteIcon: 'ion-flash',
          footerText: 'UITRUN @ '.concat(
            new Date().getFullYear(),
            ' Created by WebDev Studio, Inc'
          ),
          enableAnimatedRoute: !1,
          apiUrl: 'http://yoursite.com/api/',
          google: { analyticsKey: 'UA-xxxxxxxxx-1' },
          dashboard: '/dashboard',
        },
        q = [
          {
            key: 'questions',
            label: 'sidebar.questions',
            leftIcon: 'ion-android-checkbox-outline',
          },
          {
            key: 'user_manager',
            label: 'sidebar.user_manager',
            leftIcon: 'ion-person',
          },
          {
            key: 'board',
            label: 'sidebar.board',
            leftIcon: 'ion-android-menu',
          },
        ],
        _ = t(500),
        X = (t(933), t(636).a),
        G = t(125),
        J = t(476),
        Y = t.n(J),
        Q = function(n) {
          var e = n.collapsed;
          return i.a.createElement(
            'div',
            { className: 'isoLogoWrapper' },
            e
              ? i.a.createElement(
                  'div',
                  null,
                  i.a.createElement(
                    'h3',
                    null,
                    i.a.createElement(
                      G.b,
                      { to: '/dashboard' },
                      i.a.createElement(
                        'div',
                        null,
                        i.a.createElement('img', {
                          style: { width: '90%', height: '90%' },
                          src: Y.a,
                        })
                      )
                    )
                  )
                )
              : i.a.createElement(
                  'h3',
                  null,
                  i.a.createElement(
                    G.b,
                    { to: '/dashboard' },
                    i.a.createElement('img', {
                      style: {
                        width: '30%',
                        height: '30%',
                        marginRight: '10px',
                        marginTop: '-20px',
                        marginLeft: '-30px',
                      },
                      src: Y.a,
                    }),
                    V.siteName
                  )
                )
          );
        };
      function Z() {
        var n = Object(L.a)([
          '\n  .isomorphicSidebar {\n    z-index: 1000;\n    background: ',
          ';\n    width: 280px;\n    flex: 0 0 280px;\n\n    .scrollarea {\n      height: calc(100vh - 70px);\n    }\n\n    @media only screen and (max-width: 767px) {\n      width: 240px !important;\n      flex: 0 0 240px !important;\n    }\n\n    &.ant-layout-sider-collapsed {\n      @media only screen and (max-width: 767px) {\n        width: 0;\n        min-width: 0 !important;\n        max-width: 0 !important;\n        flex: 0 0 0 !important;\n      }\n    }\n\n    .isoLogoWrapper {\n      height: 70px;\n      background: rgba(0, 0, 0, 0.3);\n      margin: 0;\n      padding: 0 10px;\n      text-align: center;\n      overflow: hidden;\n      ',
          ';\n\n      h3 {\n        a {\n          font-size: 21px;\n          font-weight: 300;\n          line-height: 70px;\n          letter-spacing: 3px;\n          text-transform: uppercase;\n          color: ',
          ';\n          // color: white;\n          display: block;\n          text-decoration: none;\n        }\n      }\n    }\n\n    &.ant-layout-sider-collapsed {\n      .isoLogoWrapper {\n        padding: 0;\n\n        h3 {\n          a {\n            font-size: 27px;\n            font-weight: 500;\n            letter-spacing: 0;\n          }\n        }\n      }\n    }\n\n    .isoDashboardMenu {\n      padding-top: 35px;\n      padding-bottom: 35px;\n      background: transparent;\n\n      a {\n        text-decoration: none;\n        font-weight: 400;\n      }\n\n      .ant-menu-item {\n        width: 100%;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-align: center;\n        align-items: center;\n        padding: 0 24px;\n        margin: 10px 0px 30px 0px;\n      }\n\n      .isoMenuHolder {\n        display: flex;\n        align-items: center;\n\n        i {\n          font-size: 19px;\n          color: inherit;\n          margin: ',
          ';\n          width: 18px;\n          ',
          ';\n        }\n      }\n\n      .anticon {\n        font-size: 18px;\n        margin-right: 30px;\n        color: inherit;\n        ',
          ';\n      }\n\n      .nav-text {\n        font-size: 20px;\n        color: inherit;\n        font-weight: 400;\n        ',
          ';\n      }\n\n      .ant-menu-item-selected {\n        background-color: rgba(0, 0, 0, 0.4) !important;\n        .anticon {\n          color: #fff;\n        }\n\n        i {\n          color: #fff;\n        }\n\n        .nav-text {\n          color: #fff;\n        }\n      }\n\n      > li {\n        &:hover {\n          i,\n          .nav-text {\n            color: #ffffff;\n          }\n        }\n      }\n    }\n\n    .ant-menu-dark .ant-menu-inline.ant-menu-sub {\n      background: ',
          ';\n    }\n\n    .ant-menu-submenu-inline,\n    .ant-menu-submenu-vertical {\n      > .ant-menu-submenu-title {\n        width: 100%;\n        display: flex;\n        align-items: center;\n        padding: 0 24px;\n\n        > span {\n          display: flex;\n          align-items: center;\n        }\n\n        .ant-menu-submenu-arrow {\n          left: ',
          ';\n          right: ',
          ';\n\n          &:before,\n          &:after {\n            width: 8px;\n            ',
          ';\n          }\n\n          &:before {\n            transform: rotate(-45deg) translateX(3px);\n          }\n\n          &:after {\n            transform: rotate(45deg) translateX(-3px);\n          }\n\n          ',
          ';\n        }\n\n        &:hover {\n          .ant-menu-submenu-arrow {\n            &:before,\n            &:after {\n              color: #ffffff;\n            }\n          }\n        }\n      }\n\n      .ant-menu-inline,\n      .ant-menu-submenu-vertical {\n        > li:not(.ant-menu-item-group) {\n          padding-left: ',
          ';\n          padding-right: ',
          ';\n          font-size: 13px;\n          font-weight: 400;\n          margin: 0;\n          color: inherit;\n          ',
          ';\n\n          &:hover {\n            a {\n              color: #ffffff !important;\n            }\n          }\n        }\n\n        .ant-menu-item-group {\n          padding-left: 0;\n\n          .ant-menu-item-group-title {\n            padding-left: 100px !important;\n          }\n          .ant-menu-item-group-list {\n            .ant-menu-item {\n              padding-left: 125px !important;\n            }\n          }\n        }\n      }\n\n      .ant-menu-sub {\n        box-shadow: none;\n        background-color: transparent !important;\n      }\n    }\n\n    &.ant-layout-sider-collapsed {\n      .nav-text {\n        display: none;\n      }\n\n      .ant-menu-submenu-inline > {\n        .ant-menu-submenu-title:after {\n          display: none;\n        }\n      }\n\n      .ant-menu-submenu-vertical {\n        > .ant-menu-submenu-title:after {\n          display: none;\n        }\n\n        .ant-menu-sub {\n          background-color: transparent !important;\n\n          .ant-menu-item {\n            height: 35px;\n          }\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (Z = function() {
            return n;
          }),
          n
        );
      }
      var $ = B.c.div(
          Z(),
          Object(W.palette)('secondary', 0),
          Object(M.a)(),
          Object(W.palette)('grayscale', 6),
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 0 0 30px' : '0 30px 0 0';
          },
          Object(M.c)(),
          Object(M.c)(),
          Object(M.c)(),
          Object(W.palette)('secondary', 5),
          function(n) {
            return 'rtl' === n['data-rtl'] ? '25px' : 'auto';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'auto' : '25px';
          },
          Object(M.c)(),
          '',
          function(n) {
            return 'rtl' === n['data-rtl']
              ? '0px !important'
              : '74px !important';
          },
          function(n) {
            return 'rtl' === n['data-rtl']
              ? '74px !important'
              : '0px !important';
          },
          Object(M.c)()
        ),
        nn = Object(A.a)($),
        en = t(187),
        tn = t(10),
        on = X.SubMenu,
        an = i.a.memo(function(n) {
          var e,
            t = n.singleOption,
            o = n.submenuStyle,
            a = n.submenuColor,
            r = Object(en.a)(n, [
              'singleOption',
              'submenuStyle',
              'submenuColor',
            ]),
            l = Object(tn.i)(),
            c = t.key,
            p = t.label,
            s = t.leftIcon,
            f = t.children,
            m = '/' === (e = l.url).substr(-1) ? e.substr(0, e.length - 1) : e;
          return f
            ? i.a.createElement(
                on,
                Object.assign(
                  {
                    key: c,
                    title: i.a.createElement(
                      'span',
                      { className: 'isoMenuHolder', style: a },
                      i.a.createElement('i', { className: s }),
                      i.a.createElement(
                        'span',
                        { className: 'nav-text' },
                        i.a.createElement(d.a, { id: p })
                      )
                    ),
                  },
                  r
                ),
                f.map(function(n) {
                  var e = n.withoutDashboard
                    ? '/'.concat(n.key)
                    : ''.concat(m, '/').concat(n.key);
                  return i.a.createElement(
                    X.Item,
                    { style: o, key: n.key },
                    i.a.createElement(
                      G.b,
                      { style: a, to: e },
                      i.a.createElement(d.a, { id: n.label })
                    )
                  );
                })
              )
            : i.a.createElement(
                X.Item,
                Object.assign({ key: c }, r),
                i.a.createElement(
                  G.b,
                  { to: ''.concat(m, '/').concat(c) },
                  i.a.createElement(
                    'span',
                    { className: 'isoMenuHolder', style: a },
                    i.a.createElement('i', { className: s }),
                    i.a.createElement(
                      'span',
                      { className: 'nav-text' },
                      i.a.createElement(d.a, { id: p })
                    )
                  )
                )
              );
        }),
        rn = (X.SubMenu, X.ItemGroup, o.a.Sider),
        ln = (c.a.toggleOpenDrawer, c.a.changeOpenKeys),
        cn = c.a.changeCurrent,
        pn = c.a.toggleCollapsed;
      function dn() {
        var n = Object(r.b)(),
          e = Object(r.c)(function(n) {
            return n.App;
          }),
          t = e.view,
          o = e.openKeys,
          a = e.collapsed,
          l = e.openDrawer,
          c = e.current,
          p = e.height,
          d = Object(r.c)(function(n) {
            return n.ThemeSwitcher.sidebarTheme;
          });
        var s = function(n) {
            return { sub3: ['sub2'] }[n] || [];
          },
          f = a && !l,
          m = !0 === f ? 'vertical' : 'inline',
          h = { backgroundColor: d.backgroundColor },
          x = { backgroundColor: 'rgba(0,0,0,0.3)', color: d.textColor },
          u = { color: d.textColor };
        return i.a.createElement(
          nn,
          null,
          i.a.createElement(
            rn,
            {
              trigger: null,
              collapsible: !0,
              collapsed: f,
              width: 350,
              className: 'isomorphicSidebar',
              style: h,
            },
            i.a.createElement(Q, { collapsed: f }),
            i.a.createElement(
              _.a,
              { style: { height: p - 70 } },
              i.a.createElement(
                X,
                {
                  onClick: function(e) {
                    n(cn([e.key])),
                      'MobileView' === t &&
                        setTimeout(function() {
                          n(pn());
                        }, 100);
                  },
                  theme: 'dark',
                  className: 'isoDashboardMenu',
                  mode: m,
                  openKeys: f ? [] : o,
                  selectedKeys: c,
                  onOpenChange: function(e) {
                    var t = e.find(function(n) {
                        return !(o.indexOf(n) > -1);
                      }),
                      a = o.find(function(n) {
                        return !(e.indexOf(n) > -1);
                      }),
                      i = [];
                    t && (i = s(t).concat(t)), a && (i = s(a)), n(ln(i));
                  },
                },
                q.map(function(n) {
                  return i.a.createElement(an, {
                    key: n.key,
                    submenuStyle: x,
                    submenuColor: u,
                    singleOption: n,
                  });
                })
              )
            )
          )
        );
      }
      var sn = t(424);
      function fn() {
        var n = Object(L.a)(
          [
            '\n  .isomorphicTopbar {\n    display: flex;\n    justify-content: space-between;\n    background-color: #ffffff;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    padding: ',
            ';\n    z-index: 1000;\n    ',
            ';\n\n    @media only screen and (max-width: 767px) {\n      padding: ',
            ';\n    }\n\n    &.collapsed {\n      padding: ',
            ';\n      @media only screen and (max-width: 767px) {\n        padding: ',
            ';\n      }\n    }\n\n    .isoLeft {\n      display: flex;\n      align-items: center;\n\n      @media only screen and (max-width: 767px) {\n        margin: ',
            ";\n      }\n\n      .triggerBtn {\n        width: 24px;\n        height: 100%;\n        display: -webkit-inline-flex;\n        display: -ms-inline-flex;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        background-color: transparent;\n        border: 0;\n        outline: 0;\n        position: relative;\n        cursor: pointer;\n\n        &:before {\n          content: '\f20e';\n          font-family: 'Ionicons';\n          font-size: 26px;\n          color: inherit;\n          line-height: 0;\n          position: absolute;\n        }\n      }\n    }\n\n    .isoRight {\n      display: flex;\n      align-items: center;\n\n      li {\n        margin-left: ",
            ';\n        margin-right: ',
            ';\n        cursor: pointer;\n        line-height: normal;\n        position: relative;\n        display: inline-block;\n\n        @media only screen and (max-width: 360px) {\n          margin-left: ',
            ';\n          margin-right: ',
            ';\n        }\n\n        &:last-child {\n          margin: 0;\n        }\n\n        i {\n          font-size: 24px;\n          color: ',
            ';\n          line-height: 1;\n        }\n\n        .isoIconWrapper {\n          position: relative;\n          line-height: normal;\n\n          span {\n            font-size: 12px;\n            color: #fff;\n            background-color: ',
            ';\n            width: 20px;\n            height: 20px;\n            display: -webkit-inline-flex;\n            display: -ms-inline-flex;\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n            line-height: 20px;\n            position: absolute;\n            top: -8px;\n            left: ',
            ';\n            right: ',
            ';\n            ',
            ';\n          }\n        }\n\n        &.isoMail {\n          .isoIconWrapper {\n            span {\n              background-color: ',
            ';\n            }\n          }\n        }\n\n        &.isoNotify {\n          .isoIconWrapper {\n            span {\n              background-color: ',
            ';\n            }\n          }\n        }\n\n        &.isoMsg {\n          .isoIconWrapper {\n            span {\n              background-color: ',
            ';\n            }\n          }\n        }\n\n        &.isoCart {\n          .isoIconWrapper {\n            span {\n              background-color: ',
            ';\n            }\n          }\n        }\n\n        &.isoUser {\n          .isoImgWrapper {\n            width: 40px;\n            height: 40px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            position: relative;\n            background-color: ',
            ';\n            ',
            ';\n\n            img {\n              height: 100%;\n              object-fit: cover;\n            }\n\n            .userActivity {\n              width: 10px;\n              height: 10px;\n              display: block;\n              background-color: ',
            ';\n              position: absolute;\n              bottom: 0;\n              right: 3px;\n              border: 1px solid #ffffff;\n              ',
            ';\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .isoUserDropdown {\n    .ant-popover-inner {\n      .ant-popover-inner-content {\n        .isoUserDropdownContent {\n          padding: 7px 0;\n          display: flex;\n          flex-direction: column;\n          position: absolute;\n          top: 0;\n          right: 0;\n          background-color: #ffffff;\n          width: 220px;\n          min-width: 160px;\n          flex-shrink: 0;\n          .isoBorderRadius(5px);\n          ',
            ';\n          ',
            ';\n          ',
            ';\n\n          .isoDropdownLink {\n            font-size: 13px;\n            color: ',
            ';\n            line-height: 1.1;\n            padding: 7px 15px;\n            background-color: transparent;\n            text-decoration: none;\n            display: flex;\n            justify-content: flex-start;\n            ',
            ';\n\n            &:hover {\n              background-color: ',
            ';\n            }\n          }\n        }\n      }\n    }\n  }\n\n  // Dropdown\n  .ant-popover {\n    .ant-popover-inner {\n      .ant-popover-inner-content {\n        .isoDropdownContent {\n          display: flex;\n          flex-direction: column;\n          position: absolute;\n          top: 0;\n          right: 0;\n          background-color: #ffffff;\n          width: 360px;\n          min-width: 160px;\n          flex-shrink: 0;\n          ',
            ';\n          ',
            ';\n          ',
            ';\n\n          @media only screen and (max-width: 767px) {\n            width: 310px;\n          }\n\n          .isoDropdownHeader {\n            border-bottom: 1px solid #f1f1f1;\n            margin-bottom: 0px;\n            padding: 15px 30px;\n            width: 100%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n\n            h3 {\n              font-size: 14px;\n              font-weight: 500;\n              color: ',
            ';\n              text-align: center;\n              text-transform: uppercase;\n              margin: 0;\n            }\n          }\n\n          .isoDropdownBody {\n            width: 100%;\n            height: 300px;\n            overflow-y: auto;\n            display: flex;\n            flex-direction: column;\n            margin-bottom: 10px;\n            background-color: ',
            ';\n\n            .isoDropdownListItem {\n              padding: 15px 30px;\n              flex-shrink: 0;\n              text-decoration: none;\n              display: flex;\n              flex-direction: column;\n              text-decoration: none;\n              width: 100%;\n              ',
            ';\n\n              &:hover {\n                background-color: ',
            ';\n              }\n\n              .isoListHead {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 5px;\n              }\n\n              h5 {\n                font-size: 13px;\n                font-weight: 500;\n                color: ',
            ';\n                margin-top: 0;\n              }\n\n              p {\n                font-size: 12px;\n                font-weight: 400;\n                color: ',
            ';\n                white-space: nowrap;\n                text-overflow: ellipsis;\n                overflow: hidden;\n              }\n\n              .isoDate {\n                font-size: 11px;\n                color: ',
            ';\n                flex-shrink: 0;\n              }\n            }\n          }\n\n          .isoViewAllBtn {\n            font-size: 13px;\n            font-weight: 500;\n            color: ',
            ';\n            padding: 10px 15px 20px;\n            display: flex;\n            text-decoration: none;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n            ',
            ';\n\n            &:hover {\n              color: ',
            ';\n            }\n          }\n\n          .isoDropdownFooterLinks {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            padding: 10px 30px 20px;\n\n            a {\n              font-size: 13px;\n              font-weight: 500;\n              color: ',
            ';\n              text-decoration: none;\n              padding: 10px 20px;\n              line-height: 1;\n              border: 1px solid ',
            ';\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              ',
            ';\n\n              &:hover {\n                background-color: ',
            ';\n                border-color: ',
            ';\n                color: #ffffff;\n              }\n            }\n\n            h3 {\n              font-size: 14px;\n              font-weight: 500;\n              color: ',
            ';\n              line-height: 1.3;\n            }\n          }\n\n          &.withImg {\n            .isoDropdownListItem {\n              display: flex;\n              flex-direction: row;\n\n              .isoImgWrapper {\n                width: 35px;\n                height: 35px;\n                overflow: hidden;\n                margin-right: 15px;\n                display: -webkit-inline-flex;\n                display: -ms-inline-flex;\n                display: inline-flex;\n                align-items: center;\n                justify-content: center;\n                flex-shrink: 0;\n                background-color: ',
            ';\n                ',
            ';\n\n                img {\n                  width: 100%;\n                  height: 100%;\n                  object-fit: cover;\n                }\n              }\n\n              .isoListContent {\n                width: 100%;\n                display: flex;\n                flex-direction: column;\n\n                .isoListHead {\n                  display: flex;\n                  justify-content: space-between;\n                  align-items: center;\n                  margin-bottom: 10px;\n                }\n\n                h5 {\n                  margin-bottom: 0;\n                  padding-right: 15px;\n                }\n\n                .isoDate {\n                  font-size: 11px;\n                  color: ',
            ';\n                  flex-shrink: 0;\n                }\n\n                p {\n                  white-space: normal;\n                  line-height: 1.5;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n\n    &.topbarMail {\n      .ant-popover-inner {\n        .ant-popover-inner-content {\n          .isoDropdownContent {\n            @media only screen and (max-width: 519px) {\n              right: -170px;\n            }\n          }\n        }\n      }\n    }\n\n    &.topbarMessage {\n      .ant-popover-inner {\n        .ant-popover-inner-content {\n          .isoDropdownContent {\n            @media only screen and (max-width: 500px) {\n              right: -69px;\n            }\n          }\n        }\n      }\n    }\n\n    &.topbarNotification {\n      .ant-popover-inner {\n        .ant-popover-inner-content {\n          .isoDropdownContent {\n            @media only screen and (max-width: 500px) {\n              right: -120px;\n            }\n          }\n        }\n      }\n    }\n\n    &.topbarAddtoCart {\n      .ant-popover-inner {\n        .ant-popover-inner-content {\n          .isoDropdownContent {\n            @media only screen and (max-width: 465px) {\n              right: -55px;\n            }\n\n            .isoDropdownHeader {\n              margin-bottom: 0;\n            }\n\n            .isoDropdownBody {\n              background-color: ',
            ';\n            }\n          }\n        }\n      }\n    }\n  }\n',
          ],
          [
            '\n  .isomorphicTopbar {\n    display: flex;\n    justify-content: space-between;\n    background-color: #ffffff;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    padding: ',
            ';\n    z-index: 1000;\n    ',
            ';\n\n    @media only screen and (max-width: 767px) {\n      padding: ',
            ';\n    }\n\n    &.collapsed {\n      padding: ',
            ';\n      @media only screen and (max-width: 767px) {\n        padding: ',
            ';\n      }\n    }\n\n    .isoLeft {\n      display: flex;\n      align-items: center;\n\n      @media only screen and (max-width: 767px) {\n        margin: ',
            ";\n      }\n\n      .triggerBtn {\n        width: 24px;\n        height: 100%;\n        display: -webkit-inline-flex;\n        display: -ms-inline-flex;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        background-color: transparent;\n        border: 0;\n        outline: 0;\n        position: relative;\n        cursor: pointer;\n\n        &:before {\n          content: '\\f20e';\n          font-family: 'Ionicons';\n          font-size: 26px;\n          color: inherit;\n          line-height: 0;\n          position: absolute;\n        }\n      }\n    }\n\n    .isoRight {\n      display: flex;\n      align-items: center;\n\n      li {\n        margin-left: ",
            ';\n        margin-right: ',
            ';\n        cursor: pointer;\n        line-height: normal;\n        position: relative;\n        display: inline-block;\n\n        @media only screen and (max-width: 360px) {\n          margin-left: ',
            ';\n          margin-right: ',
            ';\n        }\n\n        &:last-child {\n          margin: 0;\n        }\n\n        i {\n          font-size: 24px;\n          color: ',
            ';\n          line-height: 1;\n        }\n\n        .isoIconWrapper {\n          position: relative;\n          line-height: normal;\n\n          span {\n            font-size: 12px;\n            color: #fff;\n            background-color: ',
            ';\n            width: 20px;\n            height: 20px;\n            display: -webkit-inline-flex;\n            display: -ms-inline-flex;\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n            line-height: 20px;\n            position: absolute;\n            top: -8px;\n            left: ',
            ';\n            right: ',
            ';\n            ',
            ';\n          }\n        }\n\n        &.isoMail {\n          .isoIconWrapper {\n            span {\n              background-color: ',
            ';\n            }\n          }\n        }\n\n        &.isoNotify {\n          .isoIconWrapper {\n            span {\n              background-color: ',
            ';\n            }\n          }\n        }\n\n        &.isoMsg {\n          .isoIconWrapper {\n            span {\n              background-color: ',
            ';\n            }\n          }\n        }\n\n        &.isoCart {\n          .isoIconWrapper {\n            span {\n              background-color: ',
            ';\n            }\n          }\n        }\n\n        &.isoUser {\n          .isoImgWrapper {\n            width: 40px;\n            height: 40px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            position: relative;\n            background-color: ',
            ';\n            ',
            ';\n\n            img {\n              height: 100%;\n              object-fit: cover;\n            }\n\n            .userActivity {\n              width: 10px;\n              height: 10px;\n              display: block;\n              background-color: ',
            ';\n              position: absolute;\n              bottom: 0;\n              right: 3px;\n              border: 1px solid #ffffff;\n              ',
            ';\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .isoUserDropdown {\n    .ant-popover-inner {\n      .ant-popover-inner-content {\n        .isoUserDropdownContent {\n          padding: 7px 0;\n          display: flex;\n          flex-direction: column;\n          position: absolute;\n          top: 0;\n          right: 0;\n          background-color: #ffffff;\n          width: 220px;\n          min-width: 160px;\n          flex-shrink: 0;\n          .isoBorderRadius(5px);\n          ',
            ';\n          ',
            ';\n          ',
            ';\n\n          .isoDropdownLink {\n            font-size: 13px;\n            color: ',
            ';\n            line-height: 1.1;\n            padding: 7px 15px;\n            background-color: transparent;\n            text-decoration: none;\n            display: flex;\n            justify-content: flex-start;\n            ',
            ';\n\n            &:hover {\n              background-color: ',
            ';\n            }\n          }\n        }\n      }\n    }\n  }\n\n  // Dropdown\n  .ant-popover {\n    .ant-popover-inner {\n      .ant-popover-inner-content {\n        .isoDropdownContent {\n          display: flex;\n          flex-direction: column;\n          position: absolute;\n          top: 0;\n          right: 0;\n          background-color: #ffffff;\n          width: 360px;\n          min-width: 160px;\n          flex-shrink: 0;\n          ',
            ';\n          ',
            ';\n          ',
            ';\n\n          @media only screen and (max-width: 767px) {\n            width: 310px;\n          }\n\n          .isoDropdownHeader {\n            border-bottom: 1px solid #f1f1f1;\n            margin-bottom: 0px;\n            padding: 15px 30px;\n            width: 100%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n\n            h3 {\n              font-size: 14px;\n              font-weight: 500;\n              color: ',
            ';\n              text-align: center;\n              text-transform: uppercase;\n              margin: 0;\n            }\n          }\n\n          .isoDropdownBody {\n            width: 100%;\n            height: 300px;\n            overflow-y: auto;\n            display: flex;\n            flex-direction: column;\n            margin-bottom: 10px;\n            background-color: ',
            ';\n\n            .isoDropdownListItem {\n              padding: 15px 30px;\n              flex-shrink: 0;\n              text-decoration: none;\n              display: flex;\n              flex-direction: column;\n              text-decoration: none;\n              width: 100%;\n              ',
            ';\n\n              &:hover {\n                background-color: ',
            ';\n              }\n\n              .isoListHead {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 5px;\n              }\n\n              h5 {\n                font-size: 13px;\n                font-weight: 500;\n                color: ',
            ';\n                margin-top: 0;\n              }\n\n              p {\n                font-size: 12px;\n                font-weight: 400;\n                color: ',
            ';\n                white-space: nowrap;\n                text-overflow: ellipsis;\n                overflow: hidden;\n              }\n\n              .isoDate {\n                font-size: 11px;\n                color: ',
            ';\n                flex-shrink: 0;\n              }\n            }\n          }\n\n          .isoViewAllBtn {\n            font-size: 13px;\n            font-weight: 500;\n            color: ',
            ';\n            padding: 10px 15px 20px;\n            display: flex;\n            text-decoration: none;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n            ',
            ';\n\n            &:hover {\n              color: ',
            ';\n            }\n          }\n\n          .isoDropdownFooterLinks {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            padding: 10px 30px 20px;\n\n            a {\n              font-size: 13px;\n              font-weight: 500;\n              color: ',
            ';\n              text-decoration: none;\n              padding: 10px 20px;\n              line-height: 1;\n              border: 1px solid ',
            ';\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              ',
            ';\n\n              &:hover {\n                background-color: ',
            ';\n                border-color: ',
            ';\n                color: #ffffff;\n              }\n            }\n\n            h3 {\n              font-size: 14px;\n              font-weight: 500;\n              color: ',
            ';\n              line-height: 1.3;\n            }\n          }\n\n          &.withImg {\n            .isoDropdownListItem {\n              display: flex;\n              flex-direction: row;\n\n              .isoImgWrapper {\n                width: 35px;\n                height: 35px;\n                overflow: hidden;\n                margin-right: 15px;\n                display: -webkit-inline-flex;\n                display: -ms-inline-flex;\n                display: inline-flex;\n                align-items: center;\n                justify-content: center;\n                flex-shrink: 0;\n                background-color: ',
            ';\n                ',
            ';\n\n                img {\n                  width: 100%;\n                  height: 100%;\n                  object-fit: cover;\n                }\n              }\n\n              .isoListContent {\n                width: 100%;\n                display: flex;\n                flex-direction: column;\n\n                .isoListHead {\n                  display: flex;\n                  justify-content: space-between;\n                  align-items: center;\n                  margin-bottom: 10px;\n                }\n\n                h5 {\n                  margin-bottom: 0;\n                  padding-right: 15px;\n                }\n\n                .isoDate {\n                  font-size: 11px;\n                  color: ',
            ';\n                  flex-shrink: 0;\n                }\n\n                p {\n                  white-space: normal;\n                  line-height: 1.5;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n\n    &.topbarMail {\n      .ant-popover-inner {\n        .ant-popover-inner-content {\n          .isoDropdownContent {\n            @media only screen and (max-width: 519px) {\n              right: -170px;\n            }\n          }\n        }\n      }\n    }\n\n    &.topbarMessage {\n      .ant-popover-inner {\n        .ant-popover-inner-content {\n          .isoDropdownContent {\n            @media only screen and (max-width: 500px) {\n              right: -69px;\n            }\n          }\n        }\n      }\n    }\n\n    &.topbarNotification {\n      .ant-popover-inner {\n        .ant-popover-inner-content {\n          .isoDropdownContent {\n            @media only screen and (max-width: 500px) {\n              right: -120px;\n            }\n          }\n        }\n      }\n    }\n\n    &.topbarAddtoCart {\n      .ant-popover-inner {\n        .ant-popover-inner-content {\n          .isoDropdownContent {\n            @media only screen and (max-width: 465px) {\n              right: -55px;\n            }\n\n            .isoDropdownHeader {\n              margin-bottom: 0;\n            }\n\n            .isoDropdownBody {\n              background-color: ',
            ';\n            }\n          }\n        }\n      }\n    }\n  }\n',
          ]
        );
        return (
          (fn = function() {
            return n;
          }),
          n
        );
      }
      var mn = B.c.div(
          fn(),
          function(n) {
            return 'rtl' === n['data-rtl']
              ? '0 379px 0 31px'
              : '0 31px 0 379px';
          },
          Object(M.c)(),
          function(n) {
            return 'rtl' === n['data-rtl']
              ? '0px 260px 0px 15px !important'
              : '0px 15px 0px 260px !important';
          },
          function(n) {
            return 'rtl' === n['data-rtl']
              ? '0 109px 0 31px'
              : '0 31px 0 109px';
          },
          function(n) {
            return n['data-rtl'], '0px 15px !important';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 0 0 20px' : '0 20px 0 0';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '35px' : '0';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0' : '35px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '25px' : '0';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0' : '25px';
          },
          Object(W.palette)('text', 0),
          Object(W.palette)('secondary', 1),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'inherit' : '10px';
          },
          function(n) {
            return 'rtl' === n['data-rtl'] ? '10px' : 'inherit';
          },
          Object(M.a)('50%'),
          Object(W.palette)('color', 0),
          Object(W.palette)('primary', 2),
          Object(W.palette)('color', 1),
          Object(W.palette)('color', 2),
          Object(W.palette)('grayscale', 9),
          Object(M.a)('50%'),
          Object(W.palette)('color', 3),
          Object(M.a)('50%'),
          Object(M.a)('5px'),
          Object(M.b)('0 2px 10px rgba(0,0,0,0.2)'),
          Object(M.c)(),
          Object(W.palette)('text', 1),
          Object(M.c)(),
          Object(W.palette)('secondary', 6),
          Object(M.a)('5px'),
          Object(M.b)('0 2px 10px rgba(0,0,0,0.2)'),
          Object(M.c)(),
          Object(W.palette)('text', 0),
          Object(W.palette)('grayscale', 6),
          Object(M.c)(),
          Object(W.palette)('grayscale', 3),
          Object(W.palette)('text', 0),
          Object(W.palette)('text', 2),
          Object(W.palette)('grayscale', 1),
          Object(W.palette)('text', 2),
          Object(M.c)(),
          Object(W.palette)('primary', 0),
          Object(W.palette)('text', 0),
          Object(W.palette)('border', 1),
          Object(M.c)(),
          Object(W.palette)('primary', 0),
          Object(W.palette)('primary', 0),
          Object(W.palette)('text', 0),
          Object(W.palette)('grayscale', 9),
          Object(M.a)('50%'),
          Object(W.palette)('grayscale', 1),
          Object(W.palette)('grayscale', 6)
        ),
        hn = Object(A.a)(mn),
        xn = (t(564), t(671).a),
        un = t(15);
      function gn() {
        var n = Object(L.a)([
          '\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  margin: -12px -16px;\n  width: 360px;\n  min-width: 160px;\n  flex-shrink: 0;\n  ',
          ';\n  ',
          ';\n  ',
          ';\n  cursor: pointer;\n  @media only screen and (max-width: 767px) {\n    width: 310px;\n  }\n\n  .isoDropdownHeader {\n    border-bottom: 1px solid #f1f1f1;\n    margin-bottom: 0px;\n    padding: 15px 30px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    h3 {\n      font-size: 14px;\n      font-weight: 500;\n      color: ',
          ';\n      text-align: center;\n      text-transform: uppercase;\n      margin: 0;\n    }\n  }\n\n  .isoDropdownBody {\n    width: 100%;\n    height: 300px;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n    background-color: ',
          ';\n\n    a {\n      text-decoration: none;\n    }\n\n    .isoDropdownListItem {\n      padding: 15px 30px;\n      flex-shrink: 0;\n      text-decoration: none;\n      display: flex;\n      flex-direction: column;\n      text-decoration: none;\n      text-align: ',
          ';\n      width: 100%;\n      border-bottom: 1px solid ',
          ';\n      ',
          ';\n\n      &:hover {\n        background-color: ',
          ';\n      }\n\n      .isoListHead {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-bottom: 5px;\n      }\n\n      h5 {\n        font-size: 13px;\n        font-weight: 500;\n        color: ',
          ';\n        margin-top: 0;\n      }\n\n      p {\n        font-size: 12px;\n        font-weight: 400;\n        color: ',
          ';\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n\n      .isoDate {\n        font-size: 11px;\n        color: ',
          ';\n        flex-shrink: 0;\n      }\n    }\n  }\n\n  .isoViewAllBtn {\n    font-size: 13px;\n    font-weight: 500;\n    color: ',
          ';\n    padding: 10px 15px 20px;\n    display: flex;\n    text-decoration: none;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    ',
          ';\n\n    &:hover {\n      color: ',
          ';\n    }\n  }\n\n  .isoDropdownFooterLinks {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 30px 20px;\n\n    a {\n      font-size: 13px;\n      font-weight: 500;\n      color: ',
          ';\n      text-decoration: none;\n      padding: 10px 20px;\n      line-height: 1;\n      border: 1px solid ',
          ';\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      ',
          ';\n\n      &:hover {\n        background-color: ',
          ';\n        border-color: ',
          ';\n        color: #ffffff;\n      }\n    }\n\n    h3 {\n      font-size: 14px;\n      font-weight: 500;\n      color: ',
          ';\n      line-height: 1.3;\n    }\n  }\n\n  &.withImg {\n    .isoDropdownListItem {\n      display: flex;\n      flex-direction: row;\n\n      .isoImgWrapper {\n        width: 35px;\n        height: 35px;\n        overflow: hidden;\n        margin: ',
          ';\n        display: -webkit-inline-flex;\n        display: -ms-inline-flex;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        background-color: ',
          ';\n        ',
          ';\n\n        img {\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n        }\n      }\n\n      .isoListContent {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n\n        .isoListHead {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          margin-bottom: 10px;\n        }\n\n        h5 {\n          margin-bottom: 0;\n          padding: ',
          ';\n        }\n\n        .isoDate {\n          font-size: 11px;\n          color: ',
          ';\n          flex-shrink: 0;\n        }\n\n        p {\n          white-space: normal;\n          line-height: 1.5;\n        }\n      }\n    }\n  }\n\n  &.topbarMail {\n    @media only screen and (max-width: 519px) {\n      right: -170px;\n    }\n  }\n\n  &.topbarMessage {\n    @media only screen and (max-width: 500px) {\n      right: -69px;\n    }\n  }\n\n  &.topbarNotification {\n    @media only screen and (max-width: 500px) {\n      right: -120px;\n    }\n  }\n\n  &.topbarAddtoCart {\n    @media only screen and (max-width: 465px) {\n      right: -55px;\n    }\n\n    .isoDropdownHeader {\n      margin-bottom: 0;\n    }\n\n    .isoDropdownBody {\n      background-color: ',
          ';\n      display: flex;\n      flex-direction: column;\n\n      .isoNoItemMsg {\n        height: 100%;\n        min-height: 260px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        span {\n          font-size: 30px;\n          font-weight: 300;\n          color: ',
          ';\n          line-height: 1.2;\n        }\n      }\n    }\n  }\n\n  &.isoUserDropdown {\n    padding: 7px 0;\n    display: flex;\n    flex-direction: column;\n    background-color: #ffffff;\n    width: 220px;\n    min-width: 160px;\n    flex-shrink: 0;\n    ',
          ';\n    ',
          ';\n    ',
          ';\n\n    .isoDropdownLink {\n      font-size: 13px;\n      color: ',
          ';\n      line-height: 1.1;\n      padding: 7px 15px;\n      background-color: transparent;\n      text-decoration: none;\n      display: flex;\n      justify-content: flex-start;\n      ',
          ';\n\n      &:hover {\n        background-color: ',
          ';\n      }\n    }\n  }\n',
        ]);
        return (
          (gn = function() {
            return n;
          }),
          n
        );
      }
      var bn = B.c.div(
          gn(),
          Object(M.a)('5px'),
          Object(M.b)('0 2px 10px rgba(0,0,0,0.2)'),
          Object(M.c)(),
          Object(W.palette)('text', 0),
          Object(W.palette)('grayscale', 6),
          function(n) {
            return 'rtl' === n['data-rtl'] ? 'right' : 'left';
          },
          Object(W.palette)('border', 2),
          Object(M.c)(),
          Object(W.palette)('grayscale', 3),
          Object(W.palette)('text', 0),
          Object(W.palette)('text', 2),
          Object(W.palette)('grayscale', 1),
          Object(W.palette)('text', 2),
          Object(M.c)(),
          Object(W.palette)('primary', 0),
          Object(W.palette)('text', 0),
          Object(W.palette)('border', 1),
          Object(M.c)(),
          Object(W.palette)('primary', 0),
          Object(W.palette)('primary', 0),
          Object(W.palette)('text', 0),
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          Object(W.palette)('grayscale', 9),
          Object(M.a)('50%'),
          function(n) {
            return 'rtl' === n['data-rtl'] ? '0 0 0 15px' : '0 15px 0 0';
          },
          Object(W.palette)('grayscale', 1),
          Object(W.palette)('grayscale', 6),
          Object(W.palette)('grayscale', 1),
          Object(M.a)('5px'),
          Object(M.b)('0 2px 10px rgba(0,0,0,0.2)'),
          Object(M.c)(),
          Object(W.palette)('text', 1),
          Object(M.c)(),
          Object(W.palette)('secondary', 6)
        ),
        wn = Object(A.a)(bn),
        yn = un.a.logout;
      function kn() {
        var n = i.a.useState(!1),
          e = Object(sn.a)(n, 2),
          t = e[0],
          o = e[1],
          a = Object(r.b)();
        var l = i.a.createElement(
          wn,
          { className: 'isoUserDropdown' },
          i.a.createElement(
            'div',
            {
              className: 'isoDropdownLink',
              onClick: function() {
                return a(yn());
              },
            },
            i.a.createElement(d.a, { id: 'topbar.logout' })
          )
        );
        return i.a.createElement(
          xn,
          {
            content: l,
            trigger: 'click',
            visible: t,
            onVisibleChange: function() {
              o(function(n) {
                return !n;
              });
            },
            arrowPointAtCenter: !0,
            placement: 'bottomLeft',
          },
          i.a.createElement(
            'div',
            { className: 'isoImgWrapper' },
            i.a.createElement('img', { alt: 'user', src: Y.a }),
            i.a.createElement('span', { className: 'userActivity online' })
          )
        );
      }
      var vn = o.a.Header,
        jn = c.a.toggleCollapsed;
      function On() {
        var n = i.a.useState(''),
          e = Object(sn.a)(n, 2),
          t = (e[0], e[1]),
          o = Object(r.c)(function(n) {
            return n.ThemeSwitcher.topbarTheme;
          }),
          a = Object(r.c)(function(n) {
            return n.App;
          }),
          l = a.collapsed,
          c = a.openDrawer,
          p = Object(r.b)(),
          d = i.a.useCallback(
            function() {
              return p(jn());
            },
            [p]
          ),
          s = l && !c,
          f = {
            background: o.backgroundColor,
            position: 'fixed',
            width: '100%',
            height: 70,
          };
        return i.a.createElement(
          hn,
          null,
          i.a.createElement(
            vn,
            {
              style: f,
              className: s ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar',
            },
            i.a.createElement(
              'div',
              { className: 'isoLeft' },
              i.a.createElement('button', {
                className: s
                  ? 'triggerBtn menuCollapsed'
                  : 'triggerBtn menuOpen',
                style: { color: o.textColor },
                onClick: d,
              })
            ),
            i.a.createElement(
              'ul',
              { className: 'isoRight' },
              i.a.createElement(
                'li',
                {
                  onClick: function() {
                    return t('user');
                  },
                  className: 'isoUser',
                },
                i.a.createElement(kn, null)
              )
            )
          )
        );
      }
      var Cn = t(186),
        En = [
          {
            path: 'questions',
            component: Object(a.lazy)(function() {
              return Promise.all([t.e(0), t.e(3), t.e(13)]).then(
                t.bind(null, 937)
              );
            }),
          },
          {
            path: 'user_manager',
            component: Object(a.lazy)(function() {
              return Promise.all([
                t.e(0),
                t.e(2),
                t.e(3),
                t.e(5),
                t.e(17),
              ]).then(t.bind(null, 938));
            }),
          },
          {
            path: 'board',
            component: Object(a.lazy)(function() {
              return Promise.all([
                t.e(0),
                t.e(2),
                t.e(3),
                t.e(5),
                t.e(16),
              ]).then(t.bind(null, 939));
            }),
          },
        ];
      function Nn() {
        var n = Object(tn.i)().url;
        return i.a.createElement(
          a.Suspense,
          { fallback: i.a.createElement(Cn.a, null) },
          i.a.createElement(
            tn.d,
            null,
            En.map(function(e, t) {
              return i.a.createElement(
                tn.b,
                {
                  exact: e.exact,
                  key: t,
                  path: ''.concat(n, '/').concat(e.path),
                },
                i.a.createElement(e.component, null)
              );
            })
          )
        );
      }
      function zn() {
        var n = Object(L.a)([
          '\n  -webkit-overflow-scrolling: touch;\n  .trigger {\n    font-size: 18px;\n    line-height: 64px;\n    padding: 0 16px;\n    cursor: pointer;\n    transition: color 0.3s;\n  }\n\n  .trigger:hover {\n    color: ',
          ';\n  }\n\n  .ant-layout-sider-collapsed .anticon {\n    font-size: 16px;\n  }\n\n  .ant-layout-sider-collapsed .nav-text {\n    display: none;\n  }\n\n  .ant-layout {\n    background: ',
          ';\n\n    &.isoContentMainLayout {\n      overflow: auto;\n      overflow-x: hidden;\n      @media only screen and (min-width: 768px) and (max-width: 1220px) {\n        width: calc(100% - 80px);\n        flex-shrink: 0;\n      }\n\n      @media only screen and (max-width: 767px) {\n        width: 100%;\n        flex-shrink: 0;\n      }\n    }\n  }\n\n  .isoLayoutContent {\n    width: 100%;\n    padding: 35px;\n    background-color: #ffffff;\n    border: 1px solid ',
          ';\n    height: 100%;\n  }\n\n  .isomorphicLayout {\n    width: calc(100% - 240px);\n    flex-shrink: 0;\n    overflow-x: hidden !important;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n    }\n\n    @media only screen and (min-width: 768px) and (max-width: 1220px) {\n      width: calc(100% - 80px);\n      width: 100%;\n    }\n  }\n\n  .ant-layout-footer {\n    font-size: 13px;\n    @media (max-width: 767px) {\n      padding: 10px 20px;\n    }\n  }\n\n  ',
          ';\n',
        ]);
        return (
          (zn = function() {
            return n;
          }),
          n
        );
      }
      function Dn() {
        var n = Object(L.a)([
          "\nbody {\n  -webkit-overflow-scrolling: touch;\n}\n\nhtml h1,\nhtml h2,\nhtml h3,\nhtml h4,\nhtml h5,\nhtml h6,\nhtml a,\nhtml p,\nhtml li,\ninput,\ntextarea,\nspan,\ndiv,\nhtml,\nbody,\nhtml a {\n  margin-bottom: 0;\n  font-family: 'Roboto', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n}\n\nhtml ul {\n  -webkit-padding-start: 0px;\n  list-style: none;\n  margin-bottom: 0;\n}\n\n.scrollbar-track-y,\n.scrollbar-thumb-y {\n  width: 5px !important;\n}\n\n.scrollbar-track-x,\n.scrollbar-thumb-x {\n  height: 5px !important;\n}\n\n.scrollbar-thumb {\n  border-radius: 0 !important;\n}\n\n.scrollbar-track {\n  background: rgba(222, 222, 222, 0.15) !important;\n}\n\n.scrollbar-thumb {\n  border-radius: 0 !important;\n  background: rgba(0, 0, 0, 0.5) !important;\n}\n\n.ant-popover-placement-bottom > .ant-popover-content > .ant-popover-arrow:after,\n.ant-popover-placement-bottomLeft\n  > .ant-popover-content\n  > .ant-popover-arrow:after,\n.ant-popover-placement-bottomRight\n  > .ant-popover-content\n  > .ant-popover-arrow:after,\n.ant-popover-placement-top > .ant-popover-content > .ant-popover-arrow:after,\n.ant-popover-placement-topLeft\n  > .ant-popover-content\n  > .ant-popover-arrow:after,\n.ant-popover-placement-topRight\n  > .ant-popover-content\n  > .ant-popover-arrow:after {\n  left: 0;\n  margin-left: -4px;\n}\n\n/* Instagram Modal */\n\n.ant-modal-wrap.instagram-modal .ant-modal {\n  max-width: 935px;\n  width: 100% !important;\n}\n\n@media only screen and (max-width: 991px) {\n  .ant-modal-wrap.instagram-modal .ant-modal {\n    padding: 0 60px;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .ant-modal-wrap.instagram-modal .ant-modal {\n    max-width: 580px;\n  }\n}\n\n.ant-modal-wrap.instagram-modal .ant-modal-content {\n  border-radius: 0;\n}\n\n.ant-modal-wrap.instagram-modal .ant-modal-content button.ant-modal-close {\n  position: fixed;\n  color: #fff;\n}\n\n.ant-modal-wrap.instagram-modal .ant-modal-content button.ant-modal-close i {\n  font-size: 24px;\n}\n\n.ant-modal-wrap.instagram-modal .ant-modal-content .ant-modal-body {\n  padding: 0;\n}\n\n/********** Add Your Global RTL CSS Here **********/\n\n/* Popover */\n\nhtml[dir='rtl'] .ant-popover {\n  text-align: right;\n}\n\n/* Ecommerce Card */\n\nhtml[dir='rtl'] .isoCardInfoForm .ant-input {\n  text-align: right;\n}\n\n/* Modal */\n\nhtml[dir='rtl'] .has-success.has-feedback:after,\nhtml[dir='rtl'] .has-warning.has-feedback:after,\nhtml[dir='rtl'] .has-error.has-feedback:after,\nhtml[dir='rtl'] .is-validating.has-feedback:after {\n  left: 0;\n  right: auto;\n}\n\nhtml[dir='rtl'] .ant-modal-close {\n  right: inherit;\n  left: 0;\n}\n\nhtml[dir='rtl'] .ant-modal-footer {\n  text-align: left;\n}\n\nhtml[dir='rtl'] .ant-modal-footer button + button {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\nhtml[dir='rtl'] .ant-confirm-body .ant-confirm-content {\n  margin-right: 42px;\n}\n\nhtml[dir='rtl'] .ant-btn > .anticon + span,\nhtml[dir='rtl'] .ant-btn > span + .anticon {\n  margin-right: 0.5em;\n}\n\nhtml[dir='rtl'] .ant-btn-loading span {\n  margin-left: 0;\n  margin-right: 0.5em;\n}\n\nhtml[dir='rtl']\n  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline) {\n  padding-left: 25px;\n  padding-right: 29px;\n}\n\nhtml[dir='rtl']\n  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline)\n  .anticon {\n  margin-right: -14px;\n  margin-left: 0;\n}\n\n/* Confirm */\n\nhtml[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-body > .anticon {\n  margin-left: 16px;\n  margin-right: 0;\n  float: right;\n}\n\nhtml[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-btns {\n  float: left;\n}\n\nhtml[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-btns button + button {\n  margin-right: 10px;\n  margin-left: 0;\n}\n\n/* Message */\n\nhtml[dir='rtl'] .ant-message .anticon {\n  margin-left: 8px;\n  margin-right: 0;\n}\n\n/* Pop Confirm */\n\nhtml[dir='rtl'] .ant-popover-message-title {\n  padding-right: 20px;\n  padding-left: 0;\n}\n\nhtml[dir='rtl'] .ant-popover-buttons {\n  text-align: left;\n}\n\n/* Notification */\n\nhtml[dir='rtl']\n  .ant-notification-notice-closable\n  .ant-notification-notice-message {\n  padding-left: 24px;\n  padding-right: 0;\n}\n\nhtml[dir='rtl']\n  .ant-notification-notice-with-icon\n  .ant-notification-notice-message,\nhtml[dir='rtl']\n  .ant-notification-notice-with-icon\n  .ant-notification-notice-description {\n  margin-right: 48px;\n}\n\nhtml[dir='rtl'] .ant-notification-notice-close {\n  right: auto;\n  left: 16px;\n}\n\nhtml[dir='rtl'] .ant-notification-notice-with-icon {\n  left: 0;\n}\n\n/* Dropzone */\n\nhtml[dir='rtl'] .dz-hidden-input {\n  display: none;\n}\n\n",
        ]);
        return (
          (Dn = function() {
            return n;
          }),
          n
        );
      }
      var Tn = Object(B.b)(Dn()),
        In = B.c.div(
          zn(),
          Object(W.palette)('primary', 0),
          Object(W.palette)('secondary', 1),
          Object(W.palette)('border', 0),
          ''
        ),
        Sn = o.a.Content,
        Ln = o.a.Footer,
        Bn = c.a.toggleAll,
        Wn = {
          layout: { flexDirection: 'row', overflowX: 'hidden' },
          content: {
            padding: '70px 0 0',
            flexShrink: '0',
            background: '#f1f3f6',
            position: 'relative',
          },
          footer: {
            background: '#ffffff',
            textAlign: 'center',
            borderTop: '1px solid #ededed',
          },
        };
      function Mn() {
        var n = Object(r.b)(),
          e = Object(r.c)(function(n) {
            return n.App.height;
          }),
          t = Object(l.a)(),
          a = t.width,
          c = t.height;
        return (
          i.a.useEffect(
            function() {
              n(Bn(a, c));
            },
            [a, c, n]
          ),
          i.a.createElement(
            In,
            null,
            i.a.createElement(Tn, null),
            i.a.createElement(
              o.a,
              { style: { height: c } },
              i.a.createElement(On, null),
              i.a.createElement(
                o.a,
                { style: Wn.layout },
                i.a.createElement(dn, null),
                i.a.createElement(
                  o.a,
                  { className: 'isoContentMainLayout', style: { height: e } },
                  i.a.createElement(
                    Sn,
                    { className: 'isomorphicContent', style: Wn.content },
                    i.a.createElement(Nn, null)
                  ),
                  i.a.createElement(Ln, { style: Wn.footer }, V.footerText)
                )
              ),
              i.a.createElement(K, null)
            )
          )
        );
      }
    },
  },
]);
//# sourceMappingURL=12.c9808503.chunk.js.map
