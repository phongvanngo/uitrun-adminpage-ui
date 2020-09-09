(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [7],
  {
    11: function(e, t, a) {
      'use strict';
      a(215);
      var i = a(138);
      t.a = function(e, t, a) {
        i.a[e]({ message: t, description: a });
      };
    },
    114: function(e, t, a) {
      'use strict';
      var i = a(63),
        o = {
          CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
          ACTIVATE_LANG_MODAL: 'ACTIVATE_LANG_MODAL',
          switchActivation: function() {
            return { type: o.ACTIVATE_LANG_MODAL };
          },
          changeLanguage: function(e) {
            return { type: o.CHANGE_LANGUAGE, language: Object(i.b)(e) };
          },
        };
      t.a = o;
    },
    115: function(e, t, a) {
      'use strict';
      var i = a(25),
        o = {
          CHANGE_THEME: 'CHANGE_THEME',
          SWITCH_ACTIVATION: 'SWITCH_ACTIVATION',
          switchActivation: function() {
            return { type: o.SWITCH_ACTIVATION };
          },
          changeTheme: function(e, t) {
            var a = Object(i.b)(e, t);
            return (
              'layoutTheme' === e &&
                (document.getElementsByClassName(
                  'isomorphicContent'
                )[0].style.backgroundColor = a.backgroundColor),
              { type: o.CHANGE_THEME, attribute: e, theme: a }
            );
          },
        };
      t.a = o;
    },
    14: function(e, t, a) {
      'use strict';
      var i = a(3),
        o = a.n(i),
        r = a(9),
        n = a(88),
        s = a.n(n),
        l = a(89),
        c = a(38),
        d = a.n(c),
        u = s.a.create({
          baseURL: 'http://localhost:3000/api/v1',
          headers: { 'content-type': 'application/json' },
          paramsSerializer: function(e) {
            return d.a.stringify(e);
          },
        });
      u.interceptors.request.use(
        function(e) {
          var t = localStorage.getItem('id_token');
          return (
            console.log(t),
            console.log('hello from interceptors'),
            t && (e.headers.Authorization = 'Bearer '.concat(t)),
            e
          );
        },
        function(e) {
          return e;
        }
      );
      var m = (function() {
        var e = Object(r.a)(
          o.a.mark(function e(t, a) {
            var i, r, n, c;
            return o.a.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        console.log(a),
                        (e.next = 4),
                        s.a.post('127.0.0.1/users/token', { refreshtoken: a })
                      );
                    case 4:
                      return (
                        (i = e.sent),
                        console.log(i),
                        (r = i.data),
                        (n = r.token),
                        (c = r.refreshtoken),
                        Object(l.save)('accessToken', n),
                        Object(l.save)('refreshToken', c),
                        (t.headers.Authorization = ''.concat(n)),
                        (e.next = 12),
                        s()(t)
                      );
                    case 12:
                      return e.abrupt('return', e.sent);
                    case 15:
                      return (
                        (e.prev = 15),
                        (e.t0 = e.catch(0)),
                        window.location.reload(),
                        e.abrupt('return', Promise.reject(e.t0))
                      );
                    case 19:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 15]]
            );
          })
        );
        return function(t, a) {
          return e.apply(this, arguments);
        };
      })();
      u.interceptors.response.use(
        function(e) {
          return e;
        },
        function(e) {
          var t = e.config,
            a = e.config.validateStatus,
            i = e.response.status;
          if (a()) return e;
          if (401 === i) {
            console.log('hello from refresh');
            var o = Object(l.get)('refreshToken');
            return o ? m(t, o) : void window.location.reload();
          }
          return 404 !== i ? e : void 0;
        }
      ),
        (t.a = u);
    },
    15: function(e, t, a) {
      'use strict';
      var i = a(14),
        o = a(11),
        r = {
          CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
          LOGIN_REQUEST: 'LOGIN_REQUEST',
          LOGOUT: 'LOGOUT',
          LOGIN_SUCCESS: 'LOGIN_SUCCESS',
          LOGIN_ERROR: 'LOGIN_ERROR',
          EDIT_PASSWORD: 'EDIT_PASSWORD',
          EDIT_USERNAME: 'EDIT_USERNAME',
          checkAuthorization: function() {
            return { type: r.CHECK_AUTHORIZATION };
          },
          login: function(e) {
            return function(t) {
              return i.a
                .post('auth/login/admin', e)
                .then(function(e) {
                  switch ((console.log(e), e.status)) {
                    case 200:
                      Object(o.a)(
                        'success',
                        '\u0110\u0103ng nh\u1eadp th\xe0nh c\xf4ng'
                      ),
                        t({ type: r.LOGIN_REQUEST, payload: e.data });
                      break;
                    case 400:
                    case 401:
                      Object(o.a)('warning', 'Wrong username or password', '');
                      break;
                    default:
                      Object(o.a)(
                        'warning',
                        'T\xe0i kho\u1ea3n kh\xf4ng t\u1ed3n t\u1ea1i',
                        ''
                      );
                  }
                })
                .catch(function(e) {
                  console.log(e),
                    Object(o.a)('warning', 'Sai m\u1eadt kh\u1ea9u', '');
                });
            };
          },
          logout: function() {
            return { type: r.LOGOUT };
          },
          editPassword: function(e) {
            return { type: r.EDIT_PASSWORD, payload: e };
          },
          editUsername: function(e) {
            return { type: r.EDIT_USERNAME, payload: e };
          },
        };
      t.a = r;
    },
    169: function(e, t, a) {
      'use strict';
      t.a = 'english';
    },
    170: function(e, t, a) {
      e.exports = a.p + 'static/media/uk.bc48afcc.svg';
    },
    171: function(e, t, a) {
      e.exports = a.p + 'static/media/china.4e4d59b7.svg';
    },
    172: function(e, t, a) {
      e.exports = a.p + 'static/media/spain.6a9dc11f.svg';
    },
    173: function(e, t, a) {
      e.exports = a.p + 'static/media/france.bcd389de.svg';
    },
    174: function(e, t, a) {
      e.exports = a.p + 'static/media/italy.604345b4.svg';
    },
    185: function(e, t, a) {
      'use strict';
      var i = a(3),
        o = a.n(i),
        r = a(2),
        n = a(9),
        s = a(14),
        l = a(38),
        c = a.n(l),
        d = a(11);
      JSON.parse(
        '[{\n  "std_id": "41163-008",\n  "score": 97,\n  "time": "16:49"\n}, {\n  "std_id": "53113-218",\n  "score": 44,\n  "time": "3:00"\n}, {\n  "std_id": "59779-308",\n  "score": 37,\n  "time": "21:30"\n}, {\n  "std_id": "67544-511",\n  "score": 81,\n  "time": "5:22"\n}, {\n  "std_id": "76335-005",\n  "score": 73,\n  "time": "18:54"\n}, {\n  "std_id": "59779-579",\n  "score": 8,\n  "time": "1:40"\n}, {\n  "std_id": "0555-0635",\n  "score": 5,\n  "time": "18:43"\n}, {\n  "std_id": "59351-0305",\n  "score": 98,\n  "time": "5:19"\n}, {\n  "std_id": "54458-301",\n  "score": 97,\n  "time": "6:28"\n}, {\n  "std_id": "23594-505",\n  "score": 60,\n  "time": "19:21"\n}, {\n  "std_id": "43742-0193",\n  "score": 47,\n  "time": "2:39"\n}, {\n  "std_id": "55301-253",\n  "score": 84,\n  "time": "9:15"\n}, {\n  "std_id": "49288-0897",\n  "score": 45,\n  "time": "17:42"\n}, {\n  "std_id": "10544-214",\n  "score": 33,\n  "time": "22:55"\n}, {\n  "std_id": "55154-5895",\n  "score": 8,\n  "time": "20:15"\n}, {\n  "std_id": "36987-2737",\n  "score": 65,\n  "time": "6:09"\n}, {\n  "std_id": "49643-342",\n  "score": 97,\n  "time": "2:38"\n}, {\n  "std_id": "0615-2561",\n  "score": 80,\n  "time": "20:25"\n}, {\n  "std_id": "60512-6440",\n  "score": 25,\n  "time": "0:27"\n}, {\n  "std_id": "60505-3620",\n  "score": 60,\n  "time": "4:34"\n}, {\n  "std_id": "48951-3109",\n  "score": 15,\n  "time": "11:07"\n}, {\n  "std_id": "61314-016",\n  "score": 64,\n  "time": "8:39"\n}, {\n  "std_id": "53808-0920",\n  "score": 54,\n  "time": "17:27"\n}, {\n  "std_id": "48951-8133",\n  "score": 53,\n  "time": "15:14"\n}, {\n  "std_id": "63629-1774",\n  "score": 49,\n  "time": "5:37"\n}, {\n  "std_id": "65862-029",\n  "score": 17,\n  "time": "1:55"\n}, {\n  "std_id": "63941-376",\n  "score": 5,\n  "time": "9:01"\n}, {\n  "std_id": "0615-0828",\n  "score": 58,\n  "time": "1:03"\n}, {\n  "std_id": "30142-182",\n  "score": 54,\n  "time": "15:33"\n}, {\n  "std_id": "36987-1400",\n  "score": 18,\n  "time": "14:27"\n}, {\n  "std_id": "63739-291",\n  "score": 55,\n  "time": "15:16"\n}, {\n  "std_id": "11819-363",\n  "score": 19,\n  "time": "3:36"\n}, {\n  "std_id": "54868-6198",\n  "score": 68,\n  "time": "19:38"\n}, {\n  "std_id": "49999-879",\n  "score": 80,\n  "time": "8:10"\n}, {\n  "std_id": "50268-796",\n  "score": 95,\n  "time": "14:36"\n}, {\n  "std_id": "50523-546",\n  "score": 53,\n  "time": "6:14"\n}, {\n  "std_id": "10812-351",\n  "score": 10,\n  "time": "13:53"\n}, {\n  "std_id": "43547-221",\n  "score": 44,\n  "time": "19:02"\n}, {\n  "std_id": "0378-9104",\n  "score": 85,\n  "time": "7:44"\n}, {\n  "std_id": "68016-070",\n  "score": 73,\n  "time": "18:16"\n}, {\n  "std_id": "54340-179",\n  "score": 66,\n  "time": "16:15"\n}, {\n  "std_id": "76000-411",\n  "score": 61,\n  "time": "13:28"\n}, {\n  "std_id": "41520-231",\n  "score": 35,\n  "time": "7:03"\n}, {\n  "std_id": "64205-585",\n  "score": 8,\n  "time": "13:23"\n}, {\n  "std_id": "62003-002",\n  "score": 68,\n  "time": "19:17"\n}, {\n  "std_id": "54868-1157",\n  "score": 46,\n  "time": "9:35"\n}, {\n  "std_id": "0781-5125",\n  "score": 48,\n  "time": "8:27"\n}, {\n  "std_id": "47682-097",\n  "score": 29,\n  "time": "0:17"\n}, {\n  "std_id": "61957-1027",\n  "score": 75,\n  "time": "8:09"\n}, {\n  "std_id": "52125-865",\n  "score": 2,\n  "time": "23:48"\n}, {\n  "std_id": "53045-105",\n  "score": 44,\n  "time": "8:54"\n}, {\n  "std_id": "41520-300",\n  "score": 91,\n  "time": "14:45"\n}, {\n  "std_id": "63824-016",\n  "score": 60,\n  "time": "13:48"\n}, {\n  "std_id": "76328-101",\n  "score": 54,\n  "time": "16:45"\n}, {\n  "std_id": "0173-0676",\n  "score": 63,\n  "time": "0:05"\n}, {\n  "std_id": "11523-7221",\n  "score": 3,\n  "time": "14:28"\n}, {\n  "std_id": "41415-046",\n  "score": 23,\n  "time": "13:31"\n}, {\n  "std_id": "49738-466",\n  "score": 88,\n  "time": "0:34"\n}, {\n  "std_id": "49349-924",\n  "score": 94,\n  "time": "6:41"\n}, {\n  "std_id": "63629-1597",\n  "score": 31,\n  "time": "8:42"\n}, {\n  "std_id": "49781-081",\n  "score": 58,\n  "time": "10:01"\n}, {\n  "std_id": "36987-1223",\n  "score": 87,\n  "time": "11:24"\n}, {\n  "std_id": "68878-130",\n  "score": 91,\n  "time": "4:52"\n}, {\n  "std_id": "66530-253",\n  "score": 17,\n  "time": "22:22"\n}, {\n  "std_id": "54458-990",\n  "score": 1,\n  "time": "22:55"\n}, {\n  "std_id": "53746-102",\n  "score": 15,\n  "time": "3:54"\n}, {\n  "std_id": "52815-121",\n  "score": 66,\n  "time": "20:22"\n}, {\n  "std_id": "16555-006",\n  "score": 32,\n  "time": "15:41"\n}, {\n  "std_id": "61481-3004",\n  "score": 45,\n  "time": "17:35"\n}, {\n  "std_id": "37000-565",\n  "score": 46,\n  "time": "14:34"\n}, {\n  "std_id": "12546-321",\n  "score": 6,\n  "time": "7:13"\n}, {\n  "std_id": "43063-387",\n  "score": 71,\n  "time": "11:08"\n}, {\n  "std_id": "68788-9086",\n  "score": 7,\n  "time": "20:35"\n}, {\n  "std_id": "62756-402",\n  "score": 91,\n  "time": "7:38"\n}, {\n  "std_id": "68151-2103",\n  "score": 74,\n  "time": "0:41"\n}, {\n  "std_id": "0615-7757",\n  "score": 46,\n  "time": "2:25"\n}, {\n  "std_id": "50988-214",\n  "score": 72,\n  "time": "3:41"\n}, {\n  "std_id": "64239-101",\n  "score": 42,\n  "time": "6:55"\n}, {\n  "std_id": "53208-424",\n  "score": 63,\n  "time": "2:25"\n}, {\n  "std_id": "48951-1046",\n  "score": 53,\n  "time": "15:32"\n}, {\n  "std_id": "24338-050",\n  "score": 18,\n  "time": "22:28"\n}, {\n  "std_id": "57337-058",\n  "score": 14,\n  "time": "14:03"\n}, {\n  "std_id": "53346-1366",\n  "score": 3,\n  "time": "11:58"\n}, {\n  "std_id": "55319-081",\n  "score": 62,\n  "time": "7:54"\n}, {\n  "std_id": "43846-0028",\n  "score": 6,\n  "time": "5:53"\n}, {\n  "std_id": "59746-030",\n  "score": 23,\n  "time": "9:58"\n}, {\n  "std_id": "36987-3408",\n  "score": 89,\n  "time": "10:10"\n}, {\n  "std_id": "68479-202",\n  "score": 80,\n  "time": "0:27"\n}, {\n  "std_id": "49035-660",\n  "score": 52,\n  "time": "8:06"\n}, {\n  "std_id": "60429-307",\n  "score": 54,\n  "time": "7:03"\n}, {\n  "std_id": "68084-300",\n  "score": 74,\n  "time": "4:45"\n}, {\n  "std_id": "49349-025",\n  "score": 86,\n  "time": "13:31"\n}, {\n  "std_id": "0440-7183",\n  "score": 56,\n  "time": "7:50"\n}, {\n  "std_id": "23155-291",\n  "score": 31,\n  "time": "23:10"\n}, {\n  "std_id": "0781-9221",\n  "score": 97,\n  "time": "23:44"\n}, {\n  "std_id": "65342-1008",\n  "score": 96,\n  "time": "19:55"\n}, {\n  "std_id": "11822-9019",\n  "score": 74,\n  "time": "7:47"\n}, {\n  "std_id": "17478-933",\n  "score": 12,\n  "time": "8:15"\n}, {\n  "std_id": "52854-036",\n  "score": 36,\n  "time": "11:07"\n}, {\n  "std_id": "68387-521",\n  "score": 45,\n  "time": "13:57"\n}]'
      );
      function u(e, t) {
        console.log(e),
          window.confirm(e + ', reload ?') && t(b.fetchScoreBoard());
      }
      var m = {
          getScoreBoard: (function() {
            var e = Object(n.a)(
              o.a.mark(function e(t, a) {
                var i, r;
                return o.a.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          '/score',
                          (i = c.a.stringify(t)),
                          (e.next = 4),
                          s.a
                            .get('/score?' + i)
                            .then(function(e) {
                              switch (e.status) {
                                case 200:
                                  return (
                                    Object(d.a)(
                                      'success',
                                      'Get score board successfully'
                                    ),
                                    e.data
                                  );
                                case 500:
                                  return (
                                    Object(d.a)('warning', 'No information'), []
                                  );
                                default:
                                  return u(e.status, a), [];
                              }
                            })
                            .catch(function(e) {
                              return u('connection failed', a), [];
                            })
                        );
                      case 4:
                        return (r = e.sent), e.abrupt('return', r);
                      case 6:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function(t, a) {
              return e.apply(this, arguments);
            };
          })(),
        },
        p = {
          FETCH_SCORE_BOARD: 'FETCH_SCOREBOARD',
          fetchScoreBoard: function() {
            return (function() {
              var e = Object(n.a)(
                o.a.mark(function e(t) {
                  var a, i, n;
                  return o.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = { pageSize: 500, page: 0 }),
                            (e.next = 3),
                            m.getScoreBoard(a, t)
                          );
                        case 3:
                          (i = e.sent),
                            (n = i
                              ? i.map(function(e, t) {
                                  return Object(r.a)(
                                    Object(r.a)({}, e),
                                    {},
                                    { key: t + 1 }
                                  );
                                })
                              : []),
                            t({ type: p.FETCH_SCORE_BOARD, scoreBoard: n });
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function(t) {
                return e.apply(this, arguments);
              };
            })();
          },
        },
        b = (t.a = p);
    },
    186: function(e, t, a) {
      'use strict';
      var i = a(0),
        o = a.n(i),
        r = a(65),
        n = a(47),
        s = a(56);
      function l() {
        var e = Object(r.a)([
          '\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  z-index: 10000000000;\n  top: 0;\n  right: 0;\n\n  @media only screen and (min-width: 768px) and (max-width: 1220px) {\n    width: calc(100% - 80px);\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n\n  .isoContentLoader {\n    width: 50px;\n    height: 50px;\n    animation: svgSpinner 1.4s linear infinite;\n  }\n\n  .isoContentLoaderCircle {\n    animation: svgSpinnerCircle 1.4s ease-in-out infinite;\n    stroke-dasharray: 80px, 200px;\n    stroke-dashoffset: 0px;\n    stroke: ',
          ';\n    stroke-linecap: round;\n  }\n\n  @keyframes svgSpinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes svgSpinnerCircle {\n    0% {\n      stroke-dasharray: 1px, 200px;\n      stroke-dashoffset: 0px;\n    }\n    50% {\n      stroke-dasharray: 100px, 200px;\n      stroke-dashoffset: -15px;\n    }\n    100% {\n      stroke-dasharray: 100px, 200px;\n      stroke-dashoffset: -120px;\n    }\n  }\n',
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      var c = n.c.div(l(), Object(s.palette)('primary', 0));
      t.a = function(e) {
        return o.a.createElement(
          c,
          null,
          o.a.createElement(
            'svg',
            { className: 'isoContentLoader', viewBox: '0 0 50 50' },
            o.a.createElement('circle', {
              className: 'isoContentLoaderCircle',
              cx: '25',
              cy: '25',
              r: '20',
              fill: 'none',
              strokeWidth: '3.6',
            })
          )
        );
      };
    },
    193: function(e, t) {},
    195: function(e) {
      e.exports = JSON.parse(
        '{"sidebar.email":"Email","sidebar.chat":"Chat","sidebar.ecommerce":"Ecommerce","sidebar.shop":"Shop","sidebar.cart":"Cart","sidebar.checkout":"Checkout","sidebar.cards":"Cards","sidebar.maps":"Maps","sidebar.irestorecrud":"Firestore CRUD","sidebar.firestorecrudarticle":"Articles","sidebar.firestorecrudinvestor":"Investors","sidebar.googleMap":"Google Map","sidebar.leafletMap":"Leaflet Map","sidebar.calendar":"Calendar","sidebar.notes":"Notes","sidebar.todos":"Todos","sidebar.contacts":"Contacts","sidebar.board":"B\u1ea3ng x\u1ebfp h\u1ea1ng","sidebar.questions":"Qu\u1ea3n l\xfd c\xe2u h\u1ecfi","sidebar.shuffle":"Shuffle","sidebar.charts":"Charts","sidebar.googleCharts":"Google Carts","sidebar.recharts":"Recharts","sidebar.reactVis":"React Vis","sidebar.reactChart2":"React-Chart-2","sidebar.reactTrend":"React-Trend","sidebar.eChart":"Echart","sidebar.forms":"Forms","sidebar.input":"Input","sidebar.editor":"Editor","sidebar.formsWithValidation":"Forms With Validation","sidebar.progress":"Progress","sidebar.button":"Button","sidebar.tab":"Tab","sidebar.checkbox":"Checkbox","sidebar.radiobox":"Radiobox","sidebar.transfer":"Transfer","sidebar.autocomplete":"AutoComplete","sidebar.boxOptions":"Box Options","sidebar.uiElements":"UI Elements","sidebar.badge":"Badge","sidebar.card2":"Card","sidebar.corusel":"Carousal","sidebar.collapse":"Collapse","sidebar.popover":"Pop Over","sidebar.tooltip":"Tooltip","sidebar.tag":"Tag","sidebar.timeline":"Timeline","sidebar.dropdown":"Dropdown","sidebar.pagination":"Pagination","sidebar.rating":"Rating","sidebar.tree":"Tree","sidebar.advancedElements":"Advanced Elements","sidebar.reactDates":"React Dates","sidebar.swiperslider":"Swiper Slider","sidebar.codeMirror":"Code Mirror","sidebar.uppy":"Uppy Uploader","sidebar.dropzone":"Drop Zone","sidebar.feedback":"Feedback","sidebar.alert":"Alert","sidebar.modal":"Modal","sidebar.message":"Message","sidebar.notification":"Notification","sidebar.popConfirm":"Pop Confirm","sidebar.spin":"Spin","sidebar.tables":"Tables","sidebar.user_manager":"Qu\u1ea3n l\xfd th\xed sinh","sidebar.antTables":"Ant Tables","sidebar.pages":"Pages","sidebar.500":"500","sidebar.404":"404","sidebar.signIn":"Sign In","sidebar.signUp":"Sign Up","sidebar.forgotPw":"Forgot Passwords","sidebar.resetPw":"Reset Passwords","sidebar.invoice":"Invoice","sidebar.menuLevels":"Menu Levels","sidebar.item1":"Item 1","sidebar.item2":"Item 2","sidebar.option1":"Option 1","sidebar.option2":"Option 2","sidebar.option3":"Option 3","sidebar.option4":"Option 4","sidebar.blankPage":"Blank Page","sidebar.githubSearch":"Github Search","sidebar.youtubeSearch":"Youtube Search","sidebar.scrumboard":"Scrum Board","sidebar.profile":"Profile","sidebar.quiz":"Quiz","sidebar.authCheck":"Check Auth Status","sidebar.swiperSlider":"Swiper Slider","languageSwitcher.label":"Change Language","themeSwitcher":"Theme Switcher","themeSwitcher.Sidebar":"Sidebar","themeSwitcher.Topbar":"Topbar","themeSwitcher.Background":"Background","feedback.alert.basicTitle":"Basic Title","feedback.alert.successText":"Success text","feedback.alert.infoText":"Info Text","feedback.alert.warningText":"Warning Text","feedback.alert.errorText":"Error Text","feedback.alert.closableAlertType":"Closable Alert Type","feedback.alert.iconAlertType":"Icon Alert Type","feedback.alert.iconInfoAlertType":"Icon Info Alert Type","feedback.alert.successTips":"success tips","feedback.alert.successTipsDescription":"Detailed description and advices about successful copywriting.","feedback.alert.informationTips":"Informational Notes","feedback.alert.informationDescription":"Additional description and informations about copywriting.","feedback.alert.warningTips":"Warning","feedback.alert.warningDescription":"This is a warning notice about copywriting.","feedback.alert.errorTips":"Error","feedback.alert.errorDescription":"This is an error message about copywriting.","feedback.alert.modalTitle":"Modal one with customize Footer","feedback.alert.modalSubTitle":"Basic modal dialog.","feedback.alert.successTitle":"Success","feedback.alert.infoTitle":"Info","feedback.alert.errorTitle":"Error","feedback.alert.warningTitle":"Warning","feedback.alert.modalBlockTitle":"Modal","feedback.alert.confirmationModalDialogue":"Confirmation modal dialog","feedback.alert.simpleModalDialogue":"Simple modal dialog","feedback.alert.message":"Message","feedback.alert.normalMessageTitle":"Normal Message","feedback.alert.normalMessageSubtitle":"Normal messages as feedbacks.","feedback.alert.displayMessage":"Display normal message","feedback.alert.displayOtherTypeMessageTitle":"Other Types of Message","feedback.alert.displayOtherTypeMessageSubTitle":"Messages of success   error and warning types.","feedback.alert.customizeDurationTitle":"Customize duration","feedback.alert.customizeDurationSubTitle":"ustomize message display duration from default 1.5s to 10s.","feedback.alert.customizeDurationButton":"Customized display duration","feedback.alert.messageLoadingTitle":"Message of loading","feedback.alert.messageLoadingSubTitle":"Display a global loading indicator   which is dismissed by itself asynchronously.","feedback.alert.displayLoadIndicator":"Display a loading indicator","feedback.alert.notification":"Notification","feedback.alert.notificationBasicTitle":"Basic","feedback.alert.notificationBasicSubTitle":"The simplest usage that close the notification box after 4.5s.","feedback.alert.notificationBasicDescription":"Open the notification box","feedback.alert.notificationDurationTitle":"Duration after which the notification box is closed","feedback.alert.notificationDurationSubTitle":"Duration can be used to specify how long the notification stays open. After the duration time elapses   the notification closes automatically. If not specified   default value is 4.5 seconds. If you set the value to 0   the notification box will never close automatically.","feedback.alert.notificationwithIconTitle":"Notification with icon","feedback.alert.notificationwithIconSubTitle":"A notification box with a icon at the left side.","feedback.alert.notificationwithCustomIconTitle":"Notification with custom icon","feedback.alert.notificationwithCustomIconSubTitle":"Normal messages as feedbacks.","feedback.alert.notificationwithCustomButtonTitle":"Notification with custom button","feedback.alert.notificationwithCustomButtonSubTitle":"Normal messages as feedbacks.","feedback.alert.popConfirm":"Pop Confirm","feedback.alert.popConfirm.basicTitle":"Basic Confirm","feedback.alert.popConfirm.basicSubTitle":"The basic example.","feedback.alert.popConfirm.delete":"Delete","feedback.alert.popConfirm.notiWithIconTitle":"Notification with custom icon","feedback.alert.popConfirm.notiWithIconSubTitle":"Normal messages as feedbacks.","feedback.alert.popConfirm.TL":"TL","feedback.alert.popConfirm.top":"Top","feedback.alert.popConfirm.TR":"TR","feedback.alert.popConfirm.LT":"LT","feedback.alert.popConfirm.left":"Left","feedback.alert.popConfirm.LB":"LB","feedback.alert.popConfirm.RT":"RT","feedback.alert.popConfirm.right":"Right","feedback.alert.popConfirm.RB":"RB","feedback.alert.popConfirm.Bl":"BL","feedback.alert.popConfirm.bottom":"Bottom","feedback.alert.popConfirm.BR":"BR","feedback.alert.spin":"Spin","feedback.alert.spin.basicTitle":"Size Spin","feedback.alert.spin.background":"Spin With Background","feedback.alert.spin.backgroundDescription":"Spin With Background description","feedback.alert.spin.loadingState":"Loading State","feedback.alert.spin.alertTitle":"Alert message title","feedback.alert.spin.alertDescription":"Further details about the context of this alert.","forms.input.header":"Input","forms.input.basicTitle":"Basic usage","forms.input.basicSubTitle":"Basic usage example.","forms.input.variationsTitle":"Three sizes of Input","forms.input.variationsSubtitle":"There are three sizes of an Input box  large (42px  \u3001default (35px   and small (30px  . Note  Inside of forms   only the large size is used.","forms.input.groupTitle":"Input Group","forms.input.groupSubTitle":"Input.Group example Note  You dont need Col to control the width in the compact mode.","forms.input.autoSizingTitle":"Autosizing the height to fit the content","forms.input.autoSizingSubTitle":"autosize prop for a textarea type of Input makes the height to automatically adjust based on the content. An options object can be provided to autosize to specify the minimum and maximum number of lines the textarea will automatically adjust.","forms.input.prePostTabTitle":"Pre    Post tab","forms.input.prePostTabSubTitle":"Using pre &amp; post tabs example..","forms.input.textAreaTitle":"Textarea","forms.input.textAreaSubTitle":"For multi-line user input cases   an input whose type prop has the value of textarea can be used.","forms.input.searchTitle":"Search","forms.input.searchSubTitle":"Example of creating a search box by grouping a standard input with a search button","forms.editor.header":"Editor","forms.formsWithValidation.header":"Customized Validation Form","forms.formsWithValidation.failLabel":"Fail","forms.formsWithValidation.failHelp":"Should be combination of numbers & alphabets","forms.formsWithValidation.warningLabel":"Warning","forms.formsWithValidation.ValidatingLabel":"Validating","forms.formsWithValidation.ValidatingHelp":"The information is being validated...","forms.formsWithValidation.SuccessLabel":"Success","forms.formsWithValidation.WarninghasFeedbackLabel":"Warning","forms.formsWithValidation.FailhasFeedbackLabel":"Fail","forms.formsWithValidation.FailhasFeedbackHelp":"Should be combination of numbers & alphabets","forms.progressBar.header":"Progress Bar","forms.progressBar.standardTitle":"Progress bar","forms.progressBar.standardSubTitle":"A standard progress bar.","forms.progressBar.circularTitle":"Circular Progress bar","forms.progressBar.circularSubTitle":"A circular progress bar.","forms.progressBar.miniTitle":"Mini size progress bar","forms.progressBar.miniSubTitle":"Appropriate for a narrow area.","forms.progressBar.miniCircularTitle":"A smaller circular progress bar.","forms.progressBar.dynamicCircularTitle":"Dynamic circular progress bar","forms.progressBar.dynamicCircularSubTitle":"A dynamic progress bar is better.","forms.progressBar.customTextTitle":"Custom text format","forms.progressBar.customTextSubTitle":"You can custom text format by setting format.","forms.progressBar.dashboardTitle":"Dashboard","forms.progressBar.dashboardSubTitle":"A dashboard style of progress.","forms.button.header":"Buttons","forms.button.simpleButton":"Button Type","forms.button.iconButton":"Button Icon","forms.button.simpleButtonPrimaryText":"Primary","forms.button.simpleButtonDefaultText":"Default","forms.button.simpleButtonDashedText":"Dashed","forms.button.simpleButtonDangerText":"Danger","forms.button.iconPrimaryButton":"search","forms.button.iconSimpleButton":"search","forms.button.iconCirculerButton":"search","forms.button.iconDashedButton":"search","forms.button.SizedButton":"Button Size","forms.button.DisabledButton":"Button Disabled","forms.button.LoadingButton":"Button Loading","forms.button.MultipleButton":"Multiple Button","forms.button.groupButton":"Button Group","forms.Tabs.header":"Tabs","forms.Tabs.simpleTabTitle":"search","forms.Tabs.simpleTabSubTitle":"Disabled Tabs","forms.Tabs.iconTabTitle":"Icon Tabs","forms.Tabs.miniTabTitle":"Mini Tabs","forms.Tabs.extraTabTitle":"Extra Action Tabs","forms.Tabs.TabpositionTitle":"Position","forms.Tabs.TabpositionSubTitle":"Tabss position  left   right   top or bottom","forms.Tabs.cardTitle":"Card Type Tabs","forms.Tabs.editableTitle":"Add and Close Tabs","forms.Tabs.verticalTitle":"Vertical Type Tabs","forms.Tabs.basicTitle":"Basic Tabs","forms.checkbox.header":"Checkbox","forms.checkbox.basicTitle":"Basic Checkbox","forms.checkbox.basicSubTitle":"Basic usage of checkbox.","forms.checkbox.groupTitle":"Checkbox Group","forms.checkbox.groupSubTitle":"Generate a group of checkboxes from an array. Use disabled to disable a checkbox.","forms.checkbox.groupCheckTitle":"Checkbox Group","forms.checkbox.groupCheckSubTitle":"Generate a group of checkboxes from an array. Use disabled to disable a checkbox.","forms.radio.header":"Radio","forms.radio.simpleTitle":"Basic Radio","forms.radio.simpleSubTitle":"The simplest use. Use disabled to disable a radio.","forms.radio.groupTitle":"Vertical RadioGroup","forms.radio.groupSubTitle":"Vertical RadioGroup   with more radios.","forms.radio.groupSecondTitle":"RadioGroup","forms.radio.groupSecondSubTitle":"A group of radio components.","forms.radio.groupThirdTitle":"RadioGroup","forms.radio.groupThirdSubTitle":"A group of radio components.","forms.transfer.header":"Transfer","forms.transfer.SubTitle":"Transfer with a search box.","forms.transfer.Title":"Search","forms.autocomplete.header":"Autocomplete","forms.autocomplete.simpleTitle":"Customized","forms.autocomplete.simpleSubTitle":"You could pass AutoComplete.Option as children of AutoComplete   instead of using dataSource","forms.autocomplete.customizeTitle":"Customize Input Component","forms.autocomplete.customizeSubTitle":"Customize Input Component","uiElements.badge.badge":"Badge","uiElements.badge.basicExample":"Basic Example","uiElements.badge.basicExampleSubTitle":"Simplest Usage. Badge will be hidden when count is 0   but we can use showZero to show it.","uiElements.badge.overflowCount":"Overflow Count","uiElements.badge.overflowCountSubTitle":"OverflowCount is displayed when count is larger than overflowCount. The default value of overflowCount is 99.","uiElements.badge.status":"Status","uiElements.badge.statusSubTitle":"Standalone badge with status.","uiElements.badge.success":"Success","uiElements.badge.error":"Error","uiElements.badge.default":"Default","uiElements.badge.processing":"Processing","uiElements.badge.warning":"Warning","uiElements.badge.redBadge":"Red badge","uiElements.badge.redBadgeSubTitle":"This will simply display a red badge   without a specific count.","uiElements.badge.linkSomething":"Link something","uiElements.cards.cards":"Cards","uiElements.cards.basicCard":"Basic card","uiElements.cards.basicCardSubTitle":"A basic card containing a title   content and an extra corner content.","uiElements.cards.more":"More","uiElements.cards.cardTitle":"Card Title","uiElements.cards.cardContent":"Card content","uiElements.cards.lorem":"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","uiElements.cards.noBorder":"No Border","uiElements.cards.noBorderSubTitle":"A borderless card on a gray background.","uiElements.cards.gridCard":"Grid card","uiElements.cards.gridCardSubTitle":"Cards usually cooperate with grid layout in overview page.","uiElements.cards.loadingCard":"Loading card","uiElements.cards.loadingCardSubTitle":"Shows a loading indicator while the contents of the card is being fetched.","uiElements.cards.whateverContent":"Whatever content","uiElements.cards.customizedContentTitle":"Customized Content","uiElements.cards.customizedContent":"Shows a loading indicator while the contents of the card is being fetched.","uiElements.cards.europeStreetBeat":"Europe Street beat","uiElements.cards.instagram":"www.instagram.com","uiElements.carousel.carousel":"Carousal","uiElements.carousel.verticalCarousel":"Vertical Carousel","uiElements.carousel.verticalCarouselSubTitle":"Vertical pagination. use   vertical=true","uiElements.carousel.basicCarousel":"Basic Carousel","uiElements.carousel.basicCarouselSubTitle":"Basic usage","uiElements.carousel.fadeInTransition":"Fade In Transition","uiElements.carousel.fadeInTransitionSubTitle":"Slides use fade for transition.   effect=fade","uiElements.carousel.scrollAutomatically":"Scroll Automatically","uiElements.carousel.scrollAutomaticallySubTitle":"Timing of scrolling to the next card  picture. autoplay","uiElements.collapse.collapse":"Collapse","uiElements.collapse.collapseSubTitle":"More than one panel can be expanded at a time   the first panel is initialized to be active in this case. use   defaultActiveKey=  [keyNum]","uiElements.collapse.text":"A dog is a type of domesticated animal. Known for its loyalty and faithfulness   it can be found as a welcome guest in many households across the world.","uiElements.collapse.headerOne":"This is panel header 1","uiElements.collapse.headerTwo":"This is panel header 2","uiElements.collapse.headerThree":"This is panel header 3","uiElements.collapse.headerNested":"This is panel nest panel","uiElements.collapse.nestedExample":"Nested Example","uiElements.collapse.nestedExampleSubTitle":"Collapse is nested inside the Collapse.","uiElements.collapse.borderlessExample":"Borderless Example","uiElements.collapse.borderlessExampleSubTitle":"A borderless style of Collapse. use   bordered=  false","uiElements.collapse.accordion":"Accordion","uiElements.collapse.accordionSubTitle":"Accordion mode   only one panel can be expanded at a time. The first panel will be expanded by default. use accordion","uiElements.popover.popover":"Popover","uiElements.popover.basicExample":"Basic Example","uiElements.popover.basicExampleSubTitle":"The most basic example. The size of the floating layer depends on the contents region.","uiElements.popover.hoverMe":"Hover me","uiElements.popover.title":"Title","uiElements.popover.titleTrigger":"Three ways to trigger","uiElements.popover.titleTriggerSubTitle":"Mouse to click   focus and move in.","uiElements.popover.focusMe":"Focus me","uiElements.popover.clickMe":"Click me","uiElements.popover.placement":"Placement","uiElements.popover.placementSubTitle":"There are 12 placement options available.","uiElements.popover.top":"Top","uiElements.popover.topLeft":"Top Left","uiElements.popover.topRight":"Top Right","uiElements.popover.leftTop":"Left Top","uiElements.popover.left":"Left","uiElements.popover.leftBottom":"Left Bottom","uiElements.popover.rightTop":"Right Top","uiElements.popover.right":"Right","uiElements.popover.bottom":"Bottom","uiElements.popover.bottomLeft":"Bottom Left","uiElements.popover.bottomRight":"Bottom Right","uiElements.popover.boxTitle":"Controlling the close of the dialog","uiElements.popover.boxSubTitle":"Use visible prop to control the display of the card.","uiElements.popover.TR":"TR","uiElements.popover.TL":"TL","uiElements.popover.LT":"LT","uiElements.popover.LB":"LB","uiElements.popover.RT":"RT","uiElements.popover.RB":"RB","uiElements.popover.BL":"BL","uiElements.popover.BR":"BR","uiElements.popover.close":"Close","uiElements.tooltip.tooltip":"Tooltip","uiElements.tooltip.tooltipContent":"Tooltip Content","uiElements.tooltip.basicExample":"Basic Example","uiElements.tooltip.basicExampleSubTitle":"The simplest usage.","uiElements.tooltip.placementTitle":"Placement","uiElements.tooltip.placementSubTitle":"The ToolTip has 12 placements choice.","uiElements.tooltip.TL":"TL","uiElements.tooltip.TR":"TR","uiElements.tooltip.LT":"LT","uiElements.tooltip.LB":"LB","uiElements.tooltip.RT":"RT","uiElements.tooltip.RB":"RB","uiElements.tooltip.BL":"BL","uiElements.tooltip.BR":"BR","uiElements.tooltip.bottom":"Bottom","uiElements.tooltip.right":"Right","uiElements.tooltip.left":"Left","uiElements.tooltip.top":"Top","uiElements.tooltip.tooltipContentSpan":"Tooltip will show when mouse enter.","uiElements.tooltip.contentSpan":"Tooltip Content","uiElements.tags.tags":"Tags","uiElements.tags.basicExample":"Basic Example","uiElements.tags.basicExampleSubTitle":"Usage of basic Tag   and it could be closable by set closable property. Closable Tag supports onClose afterClose events.","uiElements.tags.tagOne":"Tag 1","uiElements.tags.tagTwo":"Tag 2","uiElements.tags.link":"Link","uiElements.tags.preventDefault":"Prevent Default","uiElements.tags.colorfulTag":"Colorful Tag","uiElements.tags.hotTags":"Hot Tags","uiElements.tags.hotTagsSubTitle":"Select your favourite topics.","uiElements.tags.hots":"Hots","uiElements.tags.addRemoveDynamically":"Add & Remove Dynamically","uiElements.tags.addRemoveDynamicallySubTitle":"Generating a set of Tags by array   you can add and remove dynamically. Its based on afterClose event   which will be triggered while the close animation end.","uiElements.tags.newTag":"+ New Tag","uiElements.timeline.timeline":"Timeline","uiElements.timeline.basicExample":"Basic Example","uiElements.timeline.basicTimeline":"Basic timeline","uiElements.timeline.lastNode":"Last Node","uiElements.timeline.lastNodeContent":"When the timeline is incomplete and ongoing   put a ghost node at last. set   pending=  true     or   pending=  a React Element","uiElements.timeline.seeMore":"See more","uiElements.timeline.custom":"Custom","uiElements.timeline.customContent":"Set a node as an icon or other custom element.","uiElements.timeline.colorExample":"Color Example","uiElements.timeline.colorExampleContent":"Set the color of circles. green means completed or success status   red means warning or error   and blue means ongoing or other default status.","uiElements.timeline.createServiceSite":"Create a services site 2015-09-01","uiElements.timeline.solveInitialNetwork":"Solve initial network problems 2015-09-01","uiElements.timeline.networkProblemSolved":"Network problems being solved 2015-09-01","uiElements.timeline.technicalTesting":"Technical testing 2015-09-01","uiElements.dropdown.dropdown":"Dropdown","uiElements.dropdown.hoverDropdown":"Hover Drop Down","uiElements.dropdown.hoverMe":"Hover me","uiElements.dropdown.hoverPlacement":"Hover Placement Drop Down","uiElements.dropdown.hoverDisableLink":"Hover Drop Down with Disable link","uiElements.dropdown.clickedDropdown":"Clicked Drop Down","uiElements.dropdown.buttonDropdown":"Button with dropdown menu","uiElements.pagination.pagination":"Pagination","uiElements.pagination.basic":"Basic","uiElements.pagination.more":"More","uiElements.pagination.changer":"Changer","uiElements.pagination.jumper":"Jumper","uiElements.pagination.miniSize":"Mini Size","uiElements.pagination.simpleMode":"Simple Mode","uiElements.pagination.controlled":"Controlled","uiElements.pagination.totalNumber":"Total Number","uiElements.rating.rating":"Rating","uiElements.rating.basicExample":"Basic Example","uiElements.rating.basicExampleSubTitle":"The simplest usage.","uiElements.rating.halfStar":"Half star","uiElements.rating.halfStarSubTitle":"Support select half star.","uiElements.rating.showCopywriting":"Show copywriting","uiElements.rating.showCopywritingSubTitle":"Add copywriting in rate components.","uiElements.rating.readOnly":"Read only","uiElements.rating.readOnlySubTitle":"Read only   cant use mouse to interact.","uiElements.rating.otherCharacter":"Other Character","uiElements.rating.otherCharacterSubTitle":"Replace the default star to other character like alphabet   digit   iconfont or even Chinese word.","uiElements.tree.tree":"Tree","uiElements.tree.basicExample":"Basic example","uiElements.tree.basicExampleSubTitle":"The most basic usage   tell you how to use checkable   selectable   disabled   defaultExpandKeys   and etc.","uiElements.tree.basicControlledExample":"Basic controlled example","uiElements.tree.basicControlledExampleSubTitle":"basic controlled example","uiElements.tree.draggableExample":"Draggable example","uiElements.tree.draggableExampleSubTitle":"Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode.","uiElements.tree.loadAsync":"Load data asynchronously","uiElements.tree.loadAsyncSubTitle":"To load data asynchronously when click to expand a treeNode.","uiElements.tree.searchableExample":"Searchable example","uiElements.tree.searchableExampleSubTitle":"Searchable Tree","uiElements.tree.treeWithLine":"Tree With Line","shuffle.descriptionOne":"Netscape 2.0 ships   introducing Javascript","shuffle.descriptionTwo":"Jesse James Garrett releases AJAX spec","shuffle.descriptionThree":"jQuery 1.0 released","shuffle.descriptionFour":"First underscore.js commit","shuffle.descriptionFive":"Backbone.js becomes a thing","shuffle.descriptionSix":"Angular 1.0 released","shuffle.descriptionSeven":"React is open-sourced; developers rejoice","toggle.list":"List","toggle.grid":"Grid","toggle.ascending":"Ascending","toggle.descending":"Descending","toggle.shuffle":"Shuffle","toggle.rotate":"Rotate","toggle.addItem":"Add Item","toggle.removeItem":"Remove Item","contactlist.searchContacts":"Search Contacts","contactlist.addNewContact":"Add New Contact","questionlist.addNewQuestion":"Th\xeam c\xe2u h\u1ecfi","questionlist.searchQuestions":"T\xecm ki\u1ebfm c\xe2u h\u1ecfi","notes.ChoseColor":"Choose a color for your note","notes.addNote":"Add New Note","page404.title":"404","page404.subTitle":"Looks like you got lost","page404.description":"The page youre looking for doesnt exist or has been moved.","page404.backButton":"BACK HOME","page500.title":"500","page500.subTitle":"Internal Server Error","page500.description":"Something went wrong. Please try again later.","page500.backButton":"BACK HOME","page.forgetPassTitle":"Isomorphic","page.forgetPassSubTitle":"Forgot Password?","page.forgetPassDescription":"Enter your email and we send you a reset link.","page.sendRequest":"Send request","page.resetPassTitle":"Isomorphic","page.resetPassSubTitle":"Reset Password","page.resetPassDescription":"Enter new password and confirm it.","page.resetPassSave":"Save","page.signInTitle":"UITRUN ADMIN PAGE","page.signInRememberMe":"Remember me","page.signInButton":"Sign in","page.signInPreview":"username: demo   password: demodemo   or just click on any button.","page.signInFacebook":"Sign in with Facebook","page.signInGooglePlus":"Sign in with Google Plus","page.signInAuth0":"Sign in with Auth0","page.signInMobile":"Sign in with Phone","page.signUpMobile":"Sign up with Phone","page.signInForgotPass":"Forgot password","page.signInCreateAccount":"Create an Isomorphoic account","page.signUpTitle":"Isomorphic","page.signUpTermsConditions":"I agree with terms and condtions","page.signUpButton":"Sign Up","page.signUpFacebook":"Sign up with Facebook","page.signUpGooglePlus":"Sign up with Google Plus","page.signUpAuth0":"Sign Up with Auth0","page.signUpAlreadyAccount":"Already have an account? Sign in.","widget.reportswidget.label":"Income","widget.reportswidget.details":"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor","widget.singleprogresswidget1.label":"Marketing","widget.singleprogresswidget2.label":"Addvertisement","widget.singleprogresswidget3.label":"Consulting","widget.singleprogresswidget4.label":"Development","widget.stickerwidget1.number":"210","widget.stickerwidget1.text":"Unread Email","widget.stickerwidget2.number":"1749","widget.stickerwidget2.text":"Image Upload","widget.stickerwidget3.number":"3024","widget.stickerwidget3.text":"Total Message","widget.stickerwidget4.number":"54","widget.stickerwidget4.text":"Orders Post","widget.salewidget1.label":"Income","widget.salewidget1.price":"$15000","widget.salewidget1.details":"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor","widget.salewidget2.label":"Income","widget.salewidget2.price":"$15000","widget.salewidget2.details":"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor","widget.salewidget3.label":"Income","widget.salewidget3.price":"$15000","widget.salewidget3.details":"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor","widget.salewidget4.label":"Income","widget.salewidget4.price":"$15000","widget.salewidget4.details":"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor","widget.cardwidget1.number":"110","widget.cardwidget1.text":"New Messages","widget.cardwidget2.number":"100%","widget.cardwidget2.text":"Volume","widget.cardwidget3.number":"137","widget.cardwidget3.text":"Achievement","widget.progresswidget1.label":"Download","widget.progresswidget1.details":"50% Complete","widget.progresswidget2.label":"Support","widget.progresswidget2.details":"80% Satisfied Customer","widget.progresswidget3.label":"Upload","widget.progresswidget3.details":"65% Complete","widget.vcardwidget.name":"Jhon Doe","widget.vcardwidget.title":"Sr. iOS Developer","widget.vcardwidget.description":"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor ammet dolar consectetur adipisicing elit","checkout.billingform.firstname":"First Name","checkout.billingform.lastname":"Last Name","checkout.billingform.company":"Company Name","checkout.billingform.email":"Email Address","checkout.billingform.mobile":"Mobile No","checkout.billingform.country":"Country","checkout.billingform.city":"City","checkout.billingform.address":"Address","checkout.billingform.addressoptional":"Apartment   suite   unit etc. (optional","checkout.billingform.checkbox":"Create an account?","antTable.title.image":"Image","antTable.title.firstName":"First Name","antTable.title.lastName":"Last Name","antTable.title.city":"City","antTable.title.street":"Street","antTable.title.email":"Email","antTable.title.dob":"DOB","antTable.title.userId":"userId","antTable.title.score":"\u0110i\u1ec3m b\xe0i thi","antTable.title.startTime":"Th\u1eddi gian b\u1eaft \u0111\u1ea7u","antTable.title.finishTime":"Th\u1eddi gian k\u1ebft th\xfac","antTable.title.userCode":"M\xe3 d\u1ef1 thi","antTable.title.fullName":"H\u1ecd T\xean","antTable.title.stdId":"M\xe3 s\u1ed1 sinh vi\xean","antTable.title.id":"ID","antTable.title.NumericalOrder":"STT","antTable.title.timeFinish":"Th\u1eddi gian ho\xe0n th\xe0nh","Map.leaflet.basicTitle":"Basic Map","Map.leaflet.basicMarkerTitle":"Basic Map(With Default Marker","Map.leaflet.leafletCustomMarkerTitle":"Basic Map(With Custom Icon Marker)","Map.leaflet.leafletCustomHtmlMarkerTitle":"Basic Map(With Custom Html Marker","Map.leaflet.leafletMarkerClusterTitle":"Basic Map(With Marker Cluster","Map.leaflet.leafletRoutingTitle":"Basic Map Routing","Component.contacts.noOption":"No contact found","Component.questions.noOption":"Kh\xf4ng t\xecm th\u1ea5y c\xe2u h\u1ecfi","email.send":"SEND","email.cancel":"CANCEL","email.compose":"COMPOSE","email.noMessage":"Please select a mail to read","themeSwitcher.purchase":"PURCHASE NOW","themeSwitcher.settings":"Settings","sidebar.selectbox":"Select","sidebar.frappeChart":"Frappe Charts","topbar.myprofile":"My Profile","topbar.help":"Help","topbar.logout":"Logout","topbar.viewAll":"View All","topbar.viewCart":"View Cart","topbar.totalPrice":"Total Price","Swiper.basic.basicTitle":"Basic Slider","Swiper.bullet.bulletTitle":"Bullet Pagination","Swiper.progress.progressTitle":"Progress Pagination","Swiper.fraction.fractionTitle":"Fraction Pagination","Swiper.numbered.numberedTitle":"Numbered Pagination","Swiper.scroll.scrollTitle":"Scrollbar","Swiper.verticle.verticleTitle":"Verticle Slider","Swiper.multiple.multipleGridTitle":"Multiple Grid Slider","Swiper.free.freeTitle":"Swiper Free Mode","Swiper.multirow.multirowTitle":"Multiple row On View","Swiper.cursor.cursorTitle":"Slider with Cursor","Swiper.loop.infiniteTitle":"Slider with Infinite Loop","Swiper.wheel.wheelTitle":"Slider with Mouse Wheel","Swiper.auto.autoPlayTitle":"Slider with Autoplay","Swiper.lazy.lazyTitle":"Slider with Lazyload","Swiper.custom.customScrollTitle":"Custom view with all Naviation","Swiper.custom.basicNavTitle":"Basic Naviation","Swiper.custom.buttonNavTitle":"Custom Naviation"}'
      );
    },
    197: function(e) {
      e.exports = JSON.parse(
        '{"sidebar.swiperslider":"\u6ed1\u584a","sidebar.email":"\u7535\u5b50\u90ae\u4ef6","sidebar.chat":"\u804a","sidebar.ecommerce":"\u7535\u5b50\u5546\u52a1","sidebar.shop":"\u5e97","sidebar.cart":"\u5927\u8f66","sidebar.checkout":"\u67e5\u770b","sidebar.cards":"\u724c","sidebar.maps":"\u5730\u56fe","sidebar.googleMap":"\u8c37\u6b4c\u5730\u56fe","sidebar.leafletMap":"\u4f20\u5355\u5730\u56fe","sidebar.calendar":"\u65e5\u5386","sidebar.notes":"\u7b14\u8bb0","sidebar.todos":"\u5f85\u529e\u4e8b\u9879","sidebar.contacts":"\u5f80\u6765","sidebar.shuffle":"\u62d6\u66f3","sidebar.charts":"\u56fe\u8868","sidebar.googleCharts":"Google\u8d2d\u7269\u8f66","sidebar.recharts":"\u91cd\u65b0\u56fe\u8868","sidebar.reactVis":"\u53cd\u5e94\u53ef\u89c1","sidebar.reactChart2":"\u53cd\u5e94 - \u56fe2","sidebar.reactTrend":"\u53cd\u5e94-\u8d8b\u52bf","sidebar.eChart":"Echart","sidebar.forms":"\u5f62\u5f0f","sidebar.input":"\u8f93\u5165","sidebar.editor":"\u7f16\u8f91","sidebar.formsWithValidation":"\u9a8c\u8bc1\u5f62\u5f0f","sidebar.progress":"\u8fdb\u5c55","sidebar.button":"\u6309\u952e","sidebar.tab":"\u6807\u7b7e","sidebar.checkbox":"\u590d\u9009\u6846","sidebar.radiobox":"\u6536\u97f3\u673a\u76d2","sidebar.transfer":"\u8f6c\u8ba9","sidebar.autocomplete":"\u81ea\u52a8\u5b8c\u6210","sidebar.boxOptions":"\u6846\u9009\u9879","sidebar.uiElements":"UI\u5143\u7d20","sidebar.badge":"\u5fbd\u7ae0","sidebar.card2":"\u5361","sidebar.corusel":"\u72c2\u6b22\u6e38\u884c","sidebar.collapse":"\u574d\u65b9","sidebar.popover":"\u6d41\u884c","sidebar.tooltip":"\u63d0\u793a","sidebar.tag":"\u6807\u7b7e","sidebar.timeline":"\u65f6\u95f4\u7ebf","sidebar.dropdown":"\u843d\u4e0b","sidebar.pagination":"\u5206\u9875","sidebar.rating":"\u8bc4\u5206","sidebar.tree":"\u6811","sidebar.advancedElements":"\u9ad8\u7ea7\u5143\u7d20","sidebar.reactDates":"\u53cd\u5e94\u65e5\u671f","sidebar.codeMirror":"\u4ee3\u7801\u955c","sidebar.uppy":"Uppy\u4e0a\u4f20\u5668","sidebar.dropzone":"\u62d6\u653e\u533a","sidebar.feedback":"\u53cd\u9988","sidebar.alert":"\u8b66\u62a5","sidebar.modal":"\u8bed\u6c14","sidebar.message":"\u4fe1\u606f","sidebar.notification":"\u901a\u77e5","sidebar.popConfirm":"\u6d41\u884c\u786e\u8ba4","sidebar.spin":"\u7eba","sidebar.tables":"\u8868","sidebar.antTables":"\u8682\u8681\u8868","sidebar.pages":"\u7f51\u9875","sidebar.500":"500","sidebar.404":"404","sidebar.signIn":"\u7b7e\u5230","sidebar.signUp":"\u6ce8\u518c","sidebar.forgotPw":"\u5fd8\u8bb0\u5bc6\u7801","sidebar.resetPw":"\u91cd\u7f6e\u5bc6\u7801","sidebar.invoice":"\u53d1\u7968","sidebar.menuLevels":"\u83dc\u5355\u7ea7\u522b","sidebar.item1":"\u9879\u76ee1","sidebar.item2":"\u9879\u76ee2","sidebar.option1":"\u9009\u98791","sidebar.option2":"\u9009\u98792","sidebar.option3":"\u9009\u98793","sidebar.option4":"\u9009\u98794","sidebar.blankPage":"\u7a7a\u767d\u9875","sidebar.githubSearch":"Github\u641c\u7d22","sidebar.youtubeSearch":"Youtube\u641c\u7d22","languageSwitcher.label":"\u6539\u53d8\u8bed\u8a00","themeSwitcher":"\u4e3b\u9898\u5207\u6362\u5668","themeSwitcher.Sidebar":"\u4fa7\u8fb9\u680f","themeSwitcher.Topbar":"\u9876\u680f","themeSwitcher.Background":"\u80cc\u666f","feedback.alert.basicTitle":"\u57fa\u672c\u6807\u9898","feedback.alert.successText":"\u6210\u529f\u6587\u672c","feedback.alert.infoText":"\u4fe1\u606f\u6587\u672c","feedback.alert.warningText":"\u8b66\u544a\u6587\u5b57","feedback.alert.errorText":"\u9519\u8bef\u6587\u672c","feedback.alert.closableAlertType":"\u53ef\u5173\u95ed\u8b66\u62a5\u7c7b\u578b","feedback.alert.iconAlertType":"\u56fe\u6807\u8b66\u62a5\u7c7b\u578b","feedback.alert.iconInfoAlertType":"\u56fe\u6807\u4fe1\u606f\u8b66\u62a5\u7c7b\u578b","feedback.alert.successTips":"\u6210\u529f\u63d0\u793a","feedback.alert.successTipsDescription":"\u5173\u4e8e\u6210\u529f\u5199\u4f5c\u7684\u8be6\u7ec6\u63cf\u8ff0\u548c\u5efa\u8bae\u3002","feedback.alert.informationTips":"\u4fe1\u606f\u5907\u6ce8","feedback.alert.informationDescription":"\u5173\u4e8e\u6587\u6848\u7684\u9644\u52a0\u8bf4\u660e\u548c\u4fe1\u606f\u3002","feedback.alert.warningTips":"\u8b66\u544a","feedback.alert.warningDescription":"\u8fd9\u662f\u5173\u4e8e\u6587\u6848\u7684\u8b66\u544a\u901a\u77e5\u3002","feedback.alert.errorTips":"\u9519\u8bef","feedback.alert.errorDescription":"\u8fd9\u662f\u5173\u4e8e\u6587\u6848\u7684\u9519\u8bef\u4fe1\u606f\u3002","feedback.alert.modalTitle":"\u5177\u6709\u81ea\u5b9a\u4e49\u9875\u811a\u7684\u6a21\u6001","feedback.alert.modalSubTitle":"\u57fa\u672c\u6a21\u6001\u5bf9\u8bdd\u6846","feedback.alert.successTitle":"\u6210\u529f","feedback.alert.infoTitle":"\u4fe1\u606f","feedback.alert.errorTitle":"\u9519\u8bef","feedback.alert.warningTitle":"\u8b66\u544a","feedback.alert.modalBlockTitle":"\u8bed\u6c14","feedback.alert.confirmationModalDialogue":"\u786e\u8ba4\u6a21\u6001\u5bf9\u8bdd\u6846","feedback.alert.simpleModalDialogue":"\u7b80\u5355\u7684\u6a21\u6001\u5bf9\u8bdd\u6846","feedback.alert.message":"\u4fe1\u606f","feedback.alert.normalMessageTitle":"\u6b63\u5e38\u8baf\u606f","feedback.alert.normalMessageSubtitle":"\u6b63\u5e38\u6d88\u606f\u4f5c\u4e3a\u53cd\u9988\u3002","feedback.alert.displayMessage":"\u663e\u793a\u6b63\u5e38\u6d88\u606f","feedback.alert.displayOtherTypeMessageTitle":"\u5176\u4ed6\u7c7b\u578b\u7684\u6d88\u606f","feedback.alert.displayOtherTypeMessageSubTitle":"\u6d88\u606f\u7684\u6210\u529f\uff0c\u9519\u8bef\u548c\u8b66\u544a\u7c7b\u578b\u3002","feedback.alert.customizeDurationTitle":"\u81ea\u5b9a\u4e49\u6301\u7eed\u65f6\u95f4","feedback.alert.customizeDurationSubTitle":"\u81ea\u5b9a\u4e49\u6d88\u606f\u663e\u793a\u6301\u7eed\u65f6\u95f4\u4ece\u9ed8\u8ba4\u503c1.5s\u523010s\u3002","feedback.alert.customizeDurationButton":"\u5b9a\u5236\u663e\u793a\u6301\u7eed\u65f6\u95f4","feedback.alert.messageLoadingTitle":"\u52a0\u8f7d\u6d88\u606f","feedback.alert.messageLoadingSubTitle":"\u663e\u793a\u4e00\u4e2a\u5168\u5c40\u52a0\u8f7d\u6307\u793a\u5668\uff0c\u5b83\u81ea\u8eab\u88ab\u5f02\u6b65\u5730\u5173\u95ed\u3002","feedback.alert.displayLoadIndicator":"\u663e\u793a\u88c5\u8f7d\u6307\u793a\u706f","feedback.alert.notification":"\u901a\u77e5","feedback.alert.notificationBasicTitle":"\u57fa\u672c","feedback.alert.notificationBasicSubTitle":"4.5s\u540e\u5173\u95ed\u901a\u77e5\u6846\u7684\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002","feedback.alert.notificationBasicDescription":"\u6253\u5f00\u901a\u77e5\u6846","feedback.alert.notificationDurationTitle":"\u901a\u77e5\u6846\u5173\u95ed\u4e4b\u540e\u7684\u65f6\u95f4","feedback.alert.notificationDurationSubTitle":"\u6301\u7eed\u65f6\u95f4\u53ef\u7528\u4e8e\u6307\u5b9a\u901a\u77e5\u4fdd\u6301\u6253\u5f00\u7684\u65f6\u95f4\u3002\u6301\u7eed\u65f6\u95f4\u8fc7\u540e\uff0c\u901a\u77e5\u81ea\u52a8\u5173\u95ed\u3002\u5982\u679c\u672a\u6307\u5b9a\uff0c\u9ed8\u8ba4\u503c\u4e3a4.5\u79d2\u3002\u5982\u679c\u5c06\u503c\u8bbe\u7f6e\u4e3a0\uff0c\u5219\u901a\u77e5\u6846\u5c06\u6c38\u8fdc\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\u3002","feedback.alert.notificationwithIconTitle":"\u901a\u77e5\u56fe\u6807","feedback.alert.notificationwithIconSubTitle":"\u5177\u6709\u5de6\u4fa7\u56fe\u6807\u7684\u901a\u77e5\u6846\u3002","feedback.alert.notificationwithCustomIconTitle":"\u901a\u77e5\u4e0e\u81ea\u5b9a\u4e49\u56fe\u6807","feedback.alert.notificationwithCustomIconSubTitle":"\u6b63\u5e38\u6d88\u606f\u4f5c\u4e3a\u53cd\u9988\u3002","feedback.alert.notificationwithCustomButtonTitle":"\u901a\u77e5\u4f7f\u7528\u81ea\u5b9a\u4e49\u6309\u94ae","feedback.alert.notificationwithCustomButtonSubTitle":"\u6b63\u5e38\u6d88\u606f\u4f5c\u4e3a\u53cd\u9988\u3002","feedback.alert.popConfirm":"\u6d41\u884c\u786e\u8ba4","feedback.alert.popConfirm.basicTitle":"\u57fa\u672c\u786e\u8ba4","feedback.alert.popConfirm.basicSubTitle":"\u7684\u57fa\u672c\u4f8b\u5b50\u3002","feedback.alert.popConfirm.delete":"\u5220\u9664","feedback.alert.popConfirm.notiWithIconTitle":"\u901a\u77e5\u4e0e\u81ea\u5b9a\u4e49\u56fe\u6807","feedback.alert.popConfirm.notiWithIconSubTitle":"\u6b63\u5e38\u6d88\u606f\u4f5c\u4e3a\u53cd\u9988\u3002","feedback.alert.popConfirm.TL":"TL","feedback.alert.popConfirm.top":"\u6700\u4f73","feedback.alert.popConfirm.TR":"TR","feedback.alert.popConfirm.LT":"LT","feedback.alert.popConfirm.left":"\u5269\u4e0b","feedback.alert.popConfirm.LB":"\u78c5","feedback.alert.popConfirm.RT":"RT","feedback.alert.popConfirm.right":"\u5bf9","feedback.alert.popConfirm.RB":"RB","feedback.alert.popConfirm.Bl":"BL","feedback.alert.popConfirm.bottom":"\u5e95\u90e8","feedback.alert.popConfirm.BR":"BR","feedback.alert.spin":"\u7eba","feedback.alert.spin.basicTitle":"\u5c3a\u5bf8\u65cb\u8f6c","feedback.alert.spin.background":"\u65cb\u8f6c\u80cc\u666f","feedback.alert.spin.backgroundDescription":"\u65cb\u8f6c\u80cc\u666f\u63cf\u8ff0","feedback.alert.spin.loadingState":"\u88c5\u8f7d\u72b6\u6001\uff1a","feedback.alert.spin.alertTitle":"\u63d0\u9192\u6d88\u606f\u6807\u9898","feedback.alert.spin.alertDescription":"\u6709\u5173\u6b64\u8b66\u62a5\u7684\u4e0a\u4e0b\u6587\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002","forms.input.header":"\u8f93\u5165","forms.input.basicTitle":"\u57fa\u672c\u7528\u6cd5","forms.input.basicSubTitle":"\u57fa\u672c\u4f7f\u7528\u793a\u4f8b\u3002","forms.input.variationsTitle":"\u4e09\u79cd\u5c3a\u5bf8\u7684\u8f93\u5165","forms.input.variationsSubtitle":"\u8f93\u5165\u6846\u6709\u4e09\u79cd\u5c3a\u5bf8\uff1a\u5927\uff0842\u50cf\u7d20\uff09\uff0c\u9ed8\u8ba4\uff0835\u50cf\u7d20\uff09\u548c\u5c0f\uff0830\u50cf\u7d20\uff09\u3002\u6ce8\u610f\uff1a\u5728\u8868\u683c\u5185\u90e8\uff0c\u53ea\u4f7f\u7528\u5927\u5c3a\u5bf8\u3002","forms.input.groupTitle":"\u8f93\u5165\u7ec4","forms.input.groupSubTitle":"Input.Group\u793a\u4f8b\u6ce8\u610f\uff1a\u60a8\u4e0d\u9700\u8981Col\u6765\u63a7\u5236\u7d27\u51d1\u6a21\u5f0f\u4e0b\u7684\u5bbd\u5ea6\u3002","forms.input.autoSizingTitle":"\u81ea\u52a8\u8c03\u6574\u9ad8\u5ea6\u4ee5\u9002\u5e94\u5185\u5bb9","forms.input.autoSizingSubTitle":"\u5bf9\u4e8etextarea\u7c7b\u578b\u7684\u8f93\u5165\uff0cautosize prop\u53ef\u4ee5\u6839\u636e\u5185\u5bb9\u81ea\u52a8\u8c03\u6574\u9ad8\u5ea6\u3002\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u9009\u9879\u5bf9\u8c61\u6765\u81ea\u52a8\u8c03\u6574\uff0c\u4ee5\u6307\u5b9atextarea\u5c06\u81ea\u52a8\u8c03\u6574\u7684\u6700\u5c0f\u548c\u6700\u5927\u884c\u6570\u3002","forms.input.prePostTabTitle":"\u524d  \u540e\u9009\u9879\u5361","forms.input.prePostTabSubTitle":"\u4f7f\u7528\u524d\uff06amp;\u5e16\u5b50\u6807\u7b7e\u793a\u4f8b..","forms.input.textAreaTitle":"\u591a\u884c\u6587\u672c","forms.input.textAreaSubTitle":"\u5bf9\u4e8e\u591a\u884c\u7528\u6237\u8f93\u5165\u6848\u4f8b\uff0c\u53ef\u4ee5\u4f7f\u7528\u7c7b\u578bprop\u5177\u6709textarea\u503c\u7684\u8f93\u5165\u3002","forms.input.searchTitle":"\u641c\u7d22","forms.input.searchSubTitle":"\u901a\u8fc7\u4f7f\u7528\u641c\u7d22\u6309\u94ae\u5bf9\u6807\u51c6\u8f93\u5165\u8fdb\u884c\u5206\u7ec4\u6765\u521b\u5efa\u641c\u7d22\u6846\u7684\u793a\u4f8b","forms.editor.header":"\u7f16\u8f91","forms.formsWithValidation.header":"\u5b9a\u5236\u9a8c\u8bc1\u8868","forms.formsWithValidation.failLabel":"\u5931\u8d25","forms.formsWithValidation.failHelp":"\u5e94\u8be5\u662f\u6570\u5b57\uff06amp;\u5b57\u6bcd","forms.formsWithValidation.warningLabel":"\u8b66\u544a","forms.formsWithValidation.ValidatingLabel":"\u8bc1\u5b9e","forms.formsWithValidation.ValidatingHelp":"\u4fe1\u606f\u6b63\u5728\u9a8c\u8bc1...","forms.formsWithValidation.SuccessLabel":"\u6210\u529f","forms.formsWithValidation.WarninghasFeedbackLabel":"\u8b66\u544a","forms.formsWithValidation.FailhasFeedbackLabel":"\u5931\u8d25","forms.formsWithValidation.FailhasFeedbackHelp":"\u5e94\u8be5\u662f\u6570\u5b57\uff06amp;\u5b57\u6bcd","forms.progressBar.header":"\u8fdb\u5ea6\u6761","forms.progressBar.standardTitle":"\u8fdb\u5ea6\u6761","forms.progressBar.standardSubTitle":"\u6807\u51c6\u8fdb\u5ea6\u6761\u3002","forms.progressBar.circularTitle":"\u5faa\u73af\u8fdb\u5ea6\u680f","forms.progressBar.circularSubTitle":"\u4e00\u4e2a\u5faa\u73af\u8fdb\u5ea6\u6761\u3002","forms.progressBar.miniTitle":"\u8ff7\u4f60\u5c3a\u5bf8\u8fdb\u5ea6\u6761","forms.progressBar.miniSubTitle":"\u9002\u5408\u72ed\u7a84\u7684\u5730\u533a\u3002","forms.progressBar.miniCircularTitle":"\u4e00\u4e2a\u8f83\u5c0f\u7684\u5706\u5f62\u8fdb\u5ea6\u6761\u3002","forms.progressBar.dynamicCircularTitle":"\u52a8\u6001\u5faa\u73af\u8fdb\u5ea6\u6761","forms.progressBar.dynamicCircularSubTitle":"\u52a8\u6001\u8fdb\u5ea6\u6761\u66f4\u597d\u3002","forms.progressBar.customTextTitle":"\u81ea\u5b9a\u4e49\u6587\u672c\u683c\u5f0f","forms.progressBar.customTextSubTitle":"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u683c\u5f0f\u81ea\u5b9a\u4e49\u6587\u672c\u683c\u5f0f\u3002","forms.progressBar.dashboardTitle":"\u4eea\u8868\u677f","forms.progressBar.dashboardSubTitle":"\u4eea\u8868\u677f\u98ce\u683c\u7684\u8fdb\u6b65\u3002","forms.button.header":"\u7ebd\u6263","forms.button.simpleButton":"\u6309\u94ae\u7c7b\u578b","forms.button.iconButton":"\u6309\u94ae\u56fe\u6807","forms.button.simpleButtonPrimaryText":"\u4e3b","forms.button.simpleButtonDefaultText":"\u9ed8\u8ba4","forms.button.simpleButtonDashedText":"\u865a\u7ebf","forms.button.simpleButtonDangerText":"\u5371\u9669","forms.button.iconPrimaryButton":"\u641c\u7d22","forms.button.iconSimpleButton":"\u641c\u7d22","forms.button.iconCirculerButton":"\u641c\u7d22","forms.button.iconDashedButton":"\u641c\u7d22","forms.button.SizedButton":"\u6309\u94ae\u5927\u5c0f","forms.button.DisabledButton":"\u6309\u94ae\u7981\u7528","forms.button.LoadingButton":"\u6309\u94ae\u52a0\u8f7d","forms.button.MultipleButton":"\u591a\u91cd\u6309\u94ae","forms.button.groupButton":"\u6309\u94ae\u7ec4","forms.Tabs.header":"\u6807\u7b7e","forms.Tabs.simpleTabTitle":"\u641c\u7d22","forms.Tabs.simpleTabSubTitle":"\u7981\u7528\u6807\u7b7e","forms.Tabs.iconTabTitle":"\u56fe\u6807\u6807\u7b7e","forms.Tabs.miniTabTitle":"\u8ff7\u4f60\u6807\u7b7e","forms.Tabs.extraTabTitle":"\u989d\u5916\u52a8\u4f5c\u6807\u7b7e","forms.Tabs.TabpositionTitle":"\u4f4d\u7f6e","forms.Tabs.TabpositionSubTitle":"\u6807\u7b7e\u7684\u4f4d\u7f6e\uff1a\u5de6\uff0c\u53f3\uff0c\u4e0a\u6216\u4e0b","forms.Tabs.cardTitle":"\u5361\u7c7b\u578b\u9009\u9879\u5361","forms.Tabs.editableTitle":"\u6dfb\u52a0\u548c\u5173\u95ed\u9009\u9879\u5361","forms.Tabs.verticalTitle":"\u5782\u76f4\u7c7b\u578b\u6807\u7b7e","forms.Tabs.basicTitle":"\u57fa\u672c\u6807\u7b7e","forms.checkbox.header":"\u590d\u9009\u6846","forms.checkbox.basicTitle":"\u57fa\u672c\u590d\u9009\u6846","forms.checkbox.basicSubTitle":"\u590d\u9009\u6846\u7684\u57fa\u672c\u7528\u6cd5","forms.checkbox.groupTitle":"\u590d\u9009\u6846\u7ec4","forms.checkbox.groupSubTitle":"\u4ece\u6570\u7ec4\u751f\u6210\u4e00\u7ec4\u590d\u9009\u6846\u3002\u7981\u7528\u6b64\u529f\u80fd\u53ef\u7981\u7528\u590d\u9009\u6846\u3002","forms.checkbox.groupCheckTitle":"\u590d\u9009\u6846\u7ec4","forms.checkbox.groupCheckSubTitle":"\u4ece\u6570\u7ec4\u751f\u6210\u4e00\u7ec4\u590d\u9009\u6846\u3002\u7981\u7528\u6b64\u529f\u80fd\u53ef\u7981\u7528\u590d\u9009\u6846\u3002","forms.radio.header":"\u65e0\u7ebf\u7535","forms.radio.simpleTitle":"\u57fa\u672c\u7535\u53f0","forms.radio.simpleSubTitle":"\u6700\u7b80\u5355\u7684\u7528\u6cd5\u7981\u7528\u7981\u7528\u5e7f\u64ad\u3002","forms.radio.groupTitle":"\u5782\u76f4\u65e0\u7ebf\u7535\u7ec4","forms.radio.groupSubTitle":"\u5782\u76f4\u65e0\u7ebf\u7535\u7ec4\uff0c\u66f4\u591a\u6536\u97f3\u673a\u3002","forms.radio.groupSecondTitle":"RadioGroup\u4e2d","forms.radio.groupSecondSubTitle":"\u4e00\u7ec4\u65e0\u7ebf\u7535\u7ec4\u4ef6\u3002","forms.radio.groupThirdTitle":"RadioGroup\u4e2d","forms.radio.groupThirdSubTitle":"\u4e00\u7ec4\u65e0\u7ebf\u7535\u7ec4\u4ef6\u3002","forms.transfer.header":"\u8f6c\u8ba9","forms.transfer.SubTitle":"\u4f7f\u7528\u641c\u7d22\u6846\u8f6c\u79fb\u3002","forms.transfer.Title":"\u641c\u7d22","forms.autocomplete.header":"\u81ea\u52a8\u5b8c\u6210","forms.autocomplete.simpleTitle":"\u5b9a\u5236","forms.autocomplete.simpleSubTitle":"\u60a8\u53ef\u4ee5\u5c06AutoComplete.Option\u4f5c\u4e3aAutoComplete\u7684\u5b50\u4ee3\u7801\uff0c\u800c\u4e0d\u662f\u4f7f\u7528dataSource","forms.autocomplete.customizeTitle":"\u81ea\u5b9a\u4e49\u8f93\u5165\u7ec4\u4ef6","forms.autocomplete.customizeSubTitle":"\u81ea\u5b9a\u4e49\u8f93\u5165\u7ec4\u4ef6","uiElements.badge.badge":"\u5fbd\u7ae0","uiElements.badge.basicExample":"\u57fa\u672c\u4f8b\u5b50","uiElements.badge.basicExampleSubTitle":"\u6700\u7b80\u5355\u7684\u7528\u6cd5\u5f53count\u4e3a0\u65f6\uff0c\u5fbd\u7ae0\u5c06\u88ab\u9690\u85cf\uff0c\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528showZero\u6765\u663e\u793a\u3002","uiElements.badge.overflowCount":"\u6ea2\u51fa\u8ba1\u6570","uiElements.badge.overflowCountSubTitle":"\u5f53count\u5927\u4e8eoverflowCount\u65f6\uff0c\u4f1a\u663e\u793aOverflowCount\u3002 overflowCount\u7684\u9ed8\u8ba4\u503c\u4e3a99\u3002","uiElements.badge.status":"\u72b6\u6001","uiElements.badge.statusSubTitle":"\u72ec\u7acb\u5fbd\u7ae0\u4e0e\u72b6\u6001\u3002","uiElements.badge.success":"\u6210\u529f","uiElements.badge.error":"\u9519\u8bef","uiElements.badge.default":"\u9ed8\u8ba4","uiElements.badge.processing":"\u5904\u7406","uiElements.badge.warning":"\u8b66\u544a","uiElements.badge.redBadge":"\u7ea2\u8272\u5fbd\u7ae0","uiElements.badge.redBadgeSubTitle":"\u8fd9\u53ea\u4f1a\u663e\u793a\u4e00\u4e2a\u7ea2\u8272\u7684\u5fbd\u7ae0\uff0c\u6ca1\u6709\u7279\u5b9a\u7684\u6570\u5b57\u3002","uiElements.badge.linkSomething":"\u94fe\u63a5\u4e00\u4e9b\u4e1c\u897f","uiElements.cards.cards":"\u724c","uiElements.cards.basicCard":"\u57fa\u672c\u5361","uiElements.cards.basicCardSubTitle":"\u5305\u542b\u6807\u9898\uff0c\u5185\u5bb9\u548c\u989d\u5916\u89d2\u843d\u5185\u5bb9\u7684\u57fa\u672c\u5361\u3002","uiElements.cards.more":"\u66f4\u591a","uiElements.cards.cardTitle":"\u5361\u6807\u9898","uiElements.cards.cardContent":"\u5361\u5185\u5bb9","uiElements.cards.lorem":"Lorem ipsum dolor sit amet\uff0cconsectetur adipisicing elit\uff0csed do eiusmod tempor incididunt ut labore et dolore magna aliqua\u3002 Ut enim ad minim veniam\uff0cquis nostrud exerciseitation ullamco laboris nisi ut aliquip ex ea commodo\u56e0\u6b64\u3002","uiElements.cards.noBorder":"\u6ca1\u6709\u8fb9\u754c","uiElements.cards.noBorderSubTitle":"\u5728\u7070\u8272\u80cc\u666f\u4e0a\u7684\u65e0\u8fb9\u754c\u7684\u5361\u3002","uiElements.cards.gridCard":"\u7f51\u683c\u5361","uiElements.cards.gridCardSubTitle":"\u5361\u901a\u5e38\u5728\u6982\u89c8\u9875\u9762\u4e2d\u4e0e\u7f51\u683c\u5e03\u5c40\u914d\u5408\u4f7f\u7528\u3002","uiElements.cards.loadingCard":"\u88c5\u5361","uiElements.cards.loadingCardSubTitle":"\u663e\u793a\u52a0\u8f7d\u6307\u793a\u7b26\uff0c\u540c\u65f6\u6b63\u5728\u53d6\u51fa\u5361\u7684\u5185\u5bb9\u3002","uiElements.cards.whateverContent":"\u65e0\u8bba\u5185\u5bb9","uiElements.cards.customizedContentTitle":"\u5b9a\u5236\u5185\u5bb9","uiElements.cards.customizedContent":"\u663e\u793a\u52a0\u8f7d\u6307\u793a\u7b26\uff0c\u540c\u65f6\u6b63\u5728\u53d6\u51fa\u5361\u7684\u5185\u5bb9\u3002","uiElements.cards.europeStreetBeat":"\u6b27\u6d32\u8857\u62cd","uiElements.cards.instagram":"www.instagram.com","uiElements.carousel.carousel":"\u72c2\u6b22\u6e38\u884c","uiElements.carousel.verticalCarousel":"\u5782\u76f4\u65cb\u8f6c\u6728\u9a6c","uiElements.carousel.verticalCarouselSubTitle":"\u5782\u76f4\u5206\u9875\u3002\u4f7f\u7528  vertical =true","uiElements.carousel.basicCarousel":"\u57fa\u672c\u8f6c\u76d8","uiElements.carousel.basicCarouselSubTitle":"\u57fa\u672c\u7528\u6cd5","uiElements.carousel.fadeInTransition":"\u6de1\u5165\u6de1\u51fa","uiElements.carousel.fadeInTransitionSubTitle":"\u5e7b\u706f\u7247\u4f7f\u7528\u6de1\u5165\u6de1\u51fa\u3002   \u6548\u679c= \u6de1\u5165","uiElements.carousel.scrollAutomatically":"\u81ea\u52a8\u6eda\u52a8","uiElements.carousel.scrollAutomaticallySubTitle":"\u6eda\u52a8\u5230\u4e0b\u4e00\u5f20\u5361  \u56fe\u7247\u7684\u65f6\u95f4\u3002\u81ea\u52a8\u64ad\u653e","uiElements.collapse.collapse":"\u574d\u65b9","uiElements.collapse.collapseSubTitle":"\u4e00\u6b21\u53ef\u4ee5\u6269\u5c55\u591a\u4e2a\u9762\u677f\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u7b2c\u4e00\u4e2a\u9762\u677f\u88ab\u521d\u59cb\u5316\u4e3a\u6d3b\u52a8\u72b6\u6001\u3002\u4f7f\u7528  defaultActiveKey =   [keyNum]","uiElements.collapse.text":"\u72d7\u662f\u4e00\u79cd\u9a6f\u517b\u52a8\u7269\u3002\u4ee5\u5176\u5fe0\u8bda\u548c\u5fe0\u8bda\u800c\u95fb\u540d\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u4e16\u754c\u5404\u5730\u8bb8\u591a\u5bb6\u5ead\u7684\u6b22\u8fce\u5ba2\u4eba\u3002","uiElements.collapse.headerOne":"\u8fd9\u662f\u9762\u677f\u6807\u98981","uiElements.collapse.headerTwo":"\u8fd9\u662f\u9762\u677f\u6807\u98982","uiElements.collapse.headerThree":"\u8fd9\u662f\u9762\u677f\u6807\u98983","uiElements.collapse.headerNested":"\u8fd9\u662f\u9762\u677f\u5d4c\u5957\u9762\u677f","uiElements.collapse.nestedExample":"\u5d4c\u5957\u793a\u4f8b","uiElements.collapse.nestedExampleSubTitle":"\u6298\u53e0\u5d4c\u5957\u5728\u6298\u53e0\u4e2d\u3002","uiElements.collapse.borderlessExample":"\u65e0\u8fb9\u754c\u7684\u4f8b\u5b50","uiElements.collapse.borderlessExampleSubTitle":"\u65e0\u8fb9\u754c\u98ce\u683c\u7684\u6298\u53e0\u3002\u4f7f\u7528  bordered =   false","uiElements.collapse.accordion":"\u624b\u98ce\u7434","uiElements.collapse.accordionSubTitle":"\u624b\u98ce\u7434\u6a21\u5f0f\uff0c\u4e00\u6b21\u53ea\u80fd\u6269\u5c55\u4e00\u4e2a\u9762\u677f\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7b2c\u4e00\u4e2a\u9762\u677f\u5c06\u88ab\u6269\u5c55\u3002\u4f7f\u7528\u624b\u98ce\u7434","uiElements.popover.popover":"\u9165\u6599\u997c","uiElements.popover.basicExample":"\u57fa\u672c\u4f8b\u5b50","uiElements.popover.basicExampleSubTitle":"\u6700\u57fa\u672c\u7684\u4f8b\u5b50\u3002\u6d6e\u52a8\u5c42\u7684\u5927\u5c0f\u53d6\u51b3\u4e8e\u5185\u5bb9\u533a\u57df\u3002","uiElements.popover.hoverMe":"\u60ac\u505c\u6211","uiElements.popover.title":"\u6807\u9898","uiElements.popover.titleTrigger":"\u4e09\u79cd\u89e6\u53d1\u65b9\u5f0f","uiElements.popover.titleTriggerSubTitle":"\u9f20\u6807\u70b9\u51fb\uff0c\u5bf9\u7126\u548c\u79fb\u52a8\u3002","uiElements.popover.focusMe":"\u805a\u7126\u6211","uiElements.popover.clickMe":"\u70b9\u51fb\u6211","uiElements.popover.placement":"\u653e\u7f6e","uiElements.popover.placementSubTitle":"\u670912\u4e2a\u653e\u7f6e\u9009\u9879\u53ef\u7528\u3002","uiElements.popover.top":"\u6700\u4f73","uiElements.popover.topLeft":"\u5de6\u4e0a\u89d2","uiElements.popover.topRight":"\u53f3\u4e0a","uiElements.popover.leftTop":"\u5de6\u4e0a","uiElements.popover.left":"\u5269\u4e0b","uiElements.popover.leftBottom":"\u5de6\u4e0b","uiElements.popover.rightTop":"\u53f3\u4e0a","uiElements.popover.right":"\u5bf9","uiElements.popover.bottom":"\u5e95\u90e8","uiElements.popover.bottomLeft":"\u5de6\u4e0b\u65b9","uiElements.popover.bottomRight":"\u53f3\u4e0b","uiElements.popover.boxTitle":"\u63a7\u5236\u5bf9\u8bdd\u6846\u7684\u5173\u95ed","uiElements.popover.boxSubTitle":"\u4f7f\u7528\u53ef\u89c1\u652f\u67f1\u6765\u63a7\u5236\u663e\u5361\u7684\u663e\u793a\u3002","uiElements.popover.TR":"TR","uiElements.popover.TL":"TL","uiElements.popover.LT":"LT","uiElements.popover.LB":"\u78c5","uiElements.popover.RT":"RT","uiElements.popover.RB":"RB","uiElements.popover.BL":"BL","uiElements.popover.BR":"BR","uiElements.popover.close":"\u5173","uiElements.tooltip.tooltip":"\u63d0\u793a","uiElements.tooltip.tooltipContent":"\u5de5\u5177\u63d0\u793a\u5185\u5bb9","uiElements.tooltip.basicExample":"\u57fa\u672c\u4f8b\u5b50","uiElements.tooltip.basicExampleSubTitle":"\u6700\u7b80\u5355\u7684\u7528\u6cd5","uiElements.tooltip.placementTitle":"\u653e\u7f6e","uiElements.tooltip.placementSubTitle":"\u5de5\u5177\u63d0\u793a\u670912\u4e2a\u5e03\u5c40\u9009\u62e9\u3002","uiElements.tooltip.TL":"TL","uiElements.tooltip.TR":"TR","uiElements.tooltip.LT":"LT","uiElements.tooltip.LB":"\u78c5","uiElements.tooltip.RT":"RT","uiElements.tooltip.RB":"RB","uiElements.tooltip.BL":"BL","uiElements.tooltip.BR":"BR","uiElements.tooltip.bottom":"\u5e95\u90e8","uiElements.tooltip.right":"\u5bf9","uiElements.tooltip.left":"\u5269\u4e0b","uiElements.tooltip.top":"\u6700\u4f73","uiElements.tooltip.tooltipContentSpan":"\u9f20\u6807\u8fdb\u5165\u65f6\u4f1a\u663e\u793a\u5de5\u5177\u63d0\u793a\u3002","uiElements.tooltip.contentSpan":"\u5de5\u5177\u63d0\u793a\u5185\u5bb9","uiElements.tags.tags":"\u6807\u7b7e","uiElements.tags.basicExample":"\u57fa\u672c\u4f8b\u5b50","uiElements.tags.basicExampleSubTitle":"\u4f7f\u7528\u57fa\u672c\u6807\u7b7e\uff0c\u5b83\u53ef\u4ee5\u901a\u8fc7set closable\u5c5e\u6027\u6765\u5173\u95ed\u3002\u5173\u95ed\u6807\u7b7e\u652f\u6301onClose afterClose\u4e8b\u4ef6\u3002","uiElements.tags.tagOne":"\u6807\u7b7e1","uiElements.tags.tagTwo":"\u6807\u7b7e2","uiElements.tags.link":"\u94fe\u63a5","uiElements.tags.preventDefault":"\u9632\u6b62\u9ed8\u8ba4","uiElements.tags.colorfulTag":"\u591a\u5f69\u6807\u7b7e","uiElements.tags.hotTags":"\u70ed\u95e8\u6807\u7b7e","uiElements.tags.hotTagsSubTitle":"\u9009\u62e9\u60a8\u6700\u559c\u6b22\u7684\u4e3b\u9898\u3002","uiElements.tags.hots":"\u70ed\u95e8\u6d3b\u52a8\uff1a","uiElements.tags.addRemoveDynamically":"\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664","uiElements.tags.addRemoveDynamicallySubTitle":"\u901a\u8fc7\u6570\u7ec4\u751f\u6210\u4e00\u7ec4\u6807\u7b7e\uff0c\u53ef\u4ee5\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664\u3002\u5b83\u57fa\u4e8eafterClose\u4e8b\u4ef6\uff0c\u8fd9\u5c06\u5728\u5173\u95ed\u52a8\u753b\u7ed3\u675f\u65f6\u89e6\u53d1\u3002","uiElements.tags.newTag":"+\u65b0\u6807\u7b7e","uiElements.timeline.timeline":"\u65f6\u95f4\u7ebf","uiElements.timeline.basicExample":"\u57fa\u672c\u4f8b\u5b50","uiElements.timeline.basicTimeline":"\u57fa\u672c\u65f6\u95f4\u8868","uiElements.timeline.lastNode":"\u4e0a\u4e00\u4e2a\u8282\u70b9","uiElements.timeline.lastNodeContent":"\u5f53\u65f6\u95f4\u8f74\u4e0d\u5b8c\u6574\u548c\u6301\u7eed\u65f6\uff0c\u6700\u540e\u653e\u4e00\u4e2a\u9b3c\u8282\u70b9\u3002 set   pending =   true    \u6216  pending =   a React Element","uiElements.timeline.seeMore":"\u67e5\u770b\u66f4\u591a","uiElements.timeline.custom":"\u4e60\u60ef","uiElements.timeline.customContent":"\u5c06\u8282\u70b9\u8bbe\u7f6e\u4e3a\u56fe\u6807\u6216\u5176\u4ed6\u81ea\u5b9a\u4e49\u5143\u7d20\u3002","uiElements.timeline.colorExample":"\u989c\u8272\u793a\u4f8b","uiElements.timeline.colorExampleContent":"\u8bbe\u7f6e\u5708\u5b50\u7684\u989c\u8272\u3002\u7eff\u8272\u8868\u793a\u5b8c\u6210\u6216\u6210\u529f\u72b6\u6001\uff0c\u7ea2\u8272\u8868\u793a\u8b66\u544a\u6216\u9519\u8bef\uff0c\u84dd\u8272\u8868\u793a\u6b63\u5728\u8fdb\u884c\u6216\u5176\u4ed6\u9ed8\u8ba4\u72b6\u6001\u3002","uiElements.timeline.createServiceSite":"\u521b\u5efa\u670d\u52a1\u7f51\u7ad92015-09-01","uiElements.timeline.solveInitialNetwork":"\u89e3\u51b3\u521d\u59cb\u7f51\u7edc\u95ee\u98982015-09-01","uiElements.timeline.networkProblemSolved":"\u7f51\u7edc\u95ee\u9898\u6b63\u5728\u89e3\u51b32015-09-01","uiElements.timeline.technicalTesting":"\u6280\u672f\u6d4b\u8bd52015-09-01","uiElements.dropdown.dropdown":"\u843d\u4e0b","uiElements.dropdown.hoverDropdown":"\u60ac\u505c\u4e0b\u62c9","uiElements.dropdown.hoverMe":"\u60ac\u505c\u6211","uiElements.dropdown.hoverPlacement":"\u60ac\u505c\u653e\u7f6e\u4e0b\u62c9","uiElements.dropdown.hoverDisableLink":"\u60ac\u505c\u4e0b\u62c9\u4e0e\u7981\u7528\u94fe\u63a5","uiElements.dropdown.clickedDropdown":"\u70b9\u51fb\u4e0b\u62c9","uiElements.dropdown.buttonDropdown":"\u6309\u94ae\u4e0e\u4e0b\u62c9\u83dc\u5355","uiElements.pagination.pagination":"\u5206\u9875","uiElements.pagination.basic":"\u57fa\u672c","uiElements.pagination.more":"\u66f4\u591a","uiElements.pagination.changer":"\u6362","uiElements.pagination.jumper":"\u8de8\u63a5\u5668","uiElements.pagination.miniSize":"\u8ff7\u4f60\u5c3a\u5bf8","uiElements.pagination.simpleMode":"\u7b80\u5355\u6a21\u5f0f","uiElements.pagination.controlled":"\u53d7\u63a7","uiElements.pagination.totalNumber":"\u603b\u6570","uiElements.rating.rating":"\u8bc4\u5206","uiElements.rating.basicExample":"\u57fa\u672c\u4f8b\u5b50","uiElements.rating.basicExampleSubTitle":"\u6700\u7b80\u5355\u7684\u7528\u6cd5","uiElements.rating.halfStar":"\u534a\u661f","uiElements.rating.halfStarSubTitle":"\u652f\u6301\u9009\u62e9\u534a\u661f\u3002","uiElements.rating.showCopywriting":"\u663e\u793a\u6587\u6848","uiElements.rating.showCopywritingSubTitle":"\u4ee5\u901f\u7387\u7ec4\u4ef6\u6dfb\u52a0\u6587\u6848\u3002","uiElements.rating.readOnly":"\u53ea\u8bfb","uiElements.rating.readOnlySubTitle":"\u53ea\u8bfb\uff0c\u4e0d\u80fd\u4f7f\u7528\u9f20\u6807\u8fdb\u884c\u4ea4\u4e92\u3002","uiElements.rating.otherCharacter":"\u5176\u4ed6\u6027\u683c","uiElements.rating.otherCharacterSubTitle":"\u5c06\u9ed8\u8ba4\u660e\u661f\u66ff\u6362\u4e3a\u5176\u4ed6\u5b57\u7b26\uff0c\u5982\u5b57\u6bcd\uff0c\u6570\u5b57\uff0ciconfont\u751a\u81f3\u4e2d\u6587\u5b57\u3002","uiElements.tree.tree":"\u6811","uiElements.tree.basicExample":"\u57fa\u672c\u4f8b\u5b50","uiElements.tree.basicExampleSubTitle":"\u6700\u57fa\u672c\u7684\u7528\u6cd5\uff0c\u544a\u8bc9\u4f60\u5982\u4f55\u4f7f\u7528\u53ef\u68c0\u67e5\uff0c\u53ef\u9009\u62e9\uff0c\u7981\u7528\uff0cdefaultExpandKeys\u7b49\u3002","uiElements.tree.basicControlledExample":"\u57fa\u672c\u63a7\u5236\u793a\u4f8b","uiElements.tree.basicControlledExampleSubTitle":"\u57fa\u672c\u63a7\u5236\u793a\u4f8b","uiElements.tree.draggableExample":"\u53ef\u62d6\u66f3\u7684\u4f8b\u5b50","uiElements.tree.draggableExampleSubTitle":"\u62d6\u52a8treeNode\u63d2\u5165\u53e6\u4e00\u4e2atreeNode\u6216\u63d2\u5165\u5230\u53e6\u4e00\u4e2a\u7236TreeNode\u4e2d\u3002","uiElements.tree.loadAsync":"\u5f02\u6b65\u52a0\u8f7d\u6570\u636e","uiElements.tree.loadAsyncSubTitle":"\u5355\u51fb\u4ee5\u5c55\u5f00treeNode\u65f6\u5f02\u6b65\u52a0\u8f7d\u6570\u636e\u3002","uiElements.tree.searchableExample":"\u53ef\u641c\u7d22\u7684\u4f8b\u5b50","uiElements.tree.searchableExampleSubTitle":"\u53ef\u641c\u7d22\u7684\u6811","uiElements.tree.treeWithLine":"\u6811\u4e0e\u7ebf","shuffle.descriptionOne":"Netscape 2.0\u53d1\u5e03\uff0c\u5f15\u5165Javascript","shuffle.descriptionTwo":"Jesse James Garrett\u53d1\u5e03\u4e86AJAX\u89c4\u8303","shuffle.descriptionThree":"jQuery 1.0\u53d1\u5e03","shuffle.descriptionFour":"\u9996\u5148\u4e0b\u5212\u7ebf","shuffle.descriptionFive":"Backbone.js\u6210\u4e3a\u4e00\u4ef6\u4e8b\u60c5","shuffle.descriptionSix":"\u89d2\u5ea61.0\u53d1\u5e03","shuffle.descriptionSeven":"\u53cd\u5e94\u662f\u5f00\u6e90\u7684\u5f00\u53d1\u5546\u9ad8\u5174","toggle.list":"\u540d\u5355","toggle.grid":"\u683c","toggle.ascending":"\u4e0a\u5347","toggle.descending":"\u964d\u5e8f","toggle.shuffle":"\u62d6\u66f3","toggle.rotate":"\u65cb\u8f6c","toggle.addItem":"\u65b0\u589e\u9879\u76ee","toggle.removeItem":"\u9664\u53bb\u9879\u76ee","contactlist.searchContacts":"\u641c\u7d22\u8054\u7cfb\u4eba","contactlist.addNewContact":"\u6dfb\u52a0\u65b0\u8054\u7cfb\u4eba","notes.ChoseColor":"\u4e3a\u60a8\u7684\u7b14\u8bb0\u9009\u62e9\u4e00\u79cd\u989c\u8272","notes.addNote":"\u6dfb\u52a0\u65b0\u6ce8","page404.title":"404","page404.subTitle":"\u770b\u8d77\u6765\u4f60\u5df2\u7ecf\u8ff7\u8def\u4e86","page404.description":"\u60a8\u6b63\u5728\u5bfb\u627e\u7684\u9875\u9762\u4e0d\u5b58\u5728\u6216\u5df2\u88ab\u79fb\u52a8\u3002","page404.backButton":"\u56de\u5bb6","page500.title":"500","page500.subTitle":"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef","page500.description":"\u51fa\u4e86\u4e9b\u95ee\u9898\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u4fe1\u3002","page500.backButton":"\u56de\u5bb6","page.forgetPassTitle":"\u540c\u6784","page.forgetPassSubTitle":"\u5fd8\u8bb0\u5bc6\u7801\uff1f","page.forgetPassDescription":"\u8f93\u5165\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\uff0c\u6211\u4eec\u5411\u60a8\u53d1\u9001\u91cd\u7f6e\u94fe\u63a5\u3002","page.sendRequest":"\u53d1\u9001\u8bf7\u6c42","page.resetPassTitle":"\u540c\u6784","page.resetPassSubTitle":"\u91cd\u8bbe\u5bc6\u7801","page.resetPassDescription":"\u8f93\u5165\u65b0\u5bc6\u7801\u5e76\u8fdb\u884c\u786e\u8ba4\u3002","page.resetPassSave":"\u4fdd\u5b58","page.signInTitle":"\u540c\u6784","page.signInRememberMe":"\u8bb0\u4f4f\u6211","page.signInButton":"\u7b7e\u5230","page.signInPreview":"\u7528\u6237\u540d\uff1ademo\uff0c\u5bc6\u7801\uff1ademodemo\uff0c\u6216\u8005\u70b9\u51fb\u4efb\u610f\u6309\u94ae\u3002","page.signInFacebook":"\u7528Facebook\u767b\u5f55","page.signInGooglePlus":"\u4f7f\u7528Google Plus\u767b\u5f55","page.signInAuth0":"\u7528Auth0\u767b\u5f55","page.signInForgotPass":"\u5fd8\u8bb0\u5bc6\u7801","page.signInCreateAccount":"\u521b\u5efa\u4e00\u4e2a\u5f02\u6784\u5e10\u6237","page.signUpTitle":"\u540c\u6784","page.signUpTermsConditions":"\u6211\u540c\u610f\u6761\u6b3e\u548c\u6761\u4ef6","page.signUpButton":"\u6ce8\u518c","page.signUpFacebook":"\u7528Facebook\u6ce8\u518c","page.signUpGooglePlus":"\u7528Google Plus\u6ce8\u518c","page.signUpAuth0":"\u6ce8\u518cAuth0","page.signUpAlreadyAccount":"\u5df2\u7ecf\u6709\u8d26\u6237\uff1f\u7b7e\u5230\u3002","widget.reportswidget.label":"\u6536\u5165","widget.reportswidget.details":"Lorem ipsum dolor sit amet\uff0cconsectetur adipisicing elit\uff0csed do eiusmod tempor","widget.singleprogresswidget1.label":"\u8425\u9500","widget.singleprogresswidget2.label":"Addvertisement","widget.singleprogresswidget3.label":"\u54a8\u8be2","widget.singleprogresswidget4.label":"\u53d1\u5c55","widget.stickerwidget1.number":"210","widget.stickerwidget1.text":"\u672a\u8bfb\u7535\u5b50\u90ae\u4ef6","widget.stickerwidget2.number":"1749","widget.stickerwidget2.text":"\u56fe\u7247\u4e0a\u4f20","widget.stickerwidget3.number":"3024","widget.stickerwidget3.text":"\u603b\u4fe1\u606f","widget.stickerwidget4.number":"54","widget.stickerwidget4.text":"\u8ba2\u5355\u53d1\u5e03","widget.salewidget1.label":"\u6536\u5165","widget.salewidget1.price":"$ 15000","widget.salewidget1.details":"Lorem ipsum dolor sit amet\uff0cconsectetur adipisicing elit\uff0csed do eiusmod tempor","widget.salewidget2.label":"\u6536\u5165","widget.salewidget2.price":"$ 15000","widget.salewidget2.details":"Lorem ipsum dolor sit amet\uff0cconsectetur adipisicing elit\uff0csed do eiusmod tempor","widget.salewidget3.label":"\u6536\u5165","widget.salewidget3.price":"$ 15000","widget.salewidget3.details":"Lorem ipsum dolor sit amet\uff0cconsectetur adipisicing elit\uff0csed do eiusmod tempor","widget.salewidget4.label":"\u6536\u5165","widget.salewidget4.price":"$ 15000","widget.salewidget4.details":"Lorem ipsum dolor sit amet\uff0cconsectetur adipisicing elit\uff0csed do eiusmod tempor","widget.cardwidget1.number":"110","widget.cardwidget1.text":"\u65b0\u6d88\u606f","widget.cardwidget2.number":"100\uff05","widget.cardwidget2.text":"\u5377","widget.cardwidget3.number":"137","widget.cardwidget3.text":"\u6210\u5c31","widget.progresswidget1.label":"\u4e0b\u8f7d","widget.progresswidget1.details":"50\uff05\u5b8c\u6210","widget.progresswidget2.label":"\u652f\u6301","widget.progresswidget2.details":"80\uff05\u6ee1\u610f\u5ba2\u6237","widget.progresswidget3.label":"\u4e0a\u4f20","widget.progresswidget3.details":"65\uff05\u5b8c\u6210","widget.vcardwidget.name":"Jhon Doe","widget.vcardwidget.title":"\u9ad8\u7ea7iOS\u5f00\u53d1\u4eba\u5458","widget.vcardwidget.description":"Lorem ipsum dolor sit amet\uff0cconsectetur adipisicing elit\uff0csed do eiusmod tempor ammet dolar consectetur adipisicing elit","checkout.billingform.firstname":"\u540d\u5b57","checkout.billingform.lastname":"\u59d3","checkout.billingform.company":"\u516c\u53f8\u540d","checkout.billingform.email":"\u7535\u5b50\u90ae\u4ef6\u5730\u5740","checkout.billingform.mobile":"\u624b\u673a\u53f7\u7801","checkout.billingform.country":"\u56fd\u5bb6","checkout.billingform.city":"\u5e02","checkout.billingform.address":"\u5730\u5740","checkout.billingform.addressoptional":"\u516c\u5bd3\uff0c\u5957\u623f\uff0c\u5355\u4f4d\u7b49\uff08\u53ef\u9009\uff09","checkout.billingform.checkbox":"\u521b\u5efa\u4e00\u4e2a\u5e10\u6237\uff1f","antTable.title.image":"\u56fe\u7247","antTable.title.firstName":"\u540d\u5b57","antTable.title.lastName":"\u59d3","antTable.title.city":"\u5e02","antTable.title.street":"\u8857","antTable.title.email":"\u7535\u5b50\u90ae\u4ef6","antTable.title.dob":"DOB","Map.leaflet.basicTitle":"\u57fa\u672c\u5730\u56fe","Map.leaflet.basicMarkerTitle":"\u57fa\u672c\u5730\u56fe\uff08\u5e26\u9ed8\u8ba4\u6807\u8bb0\uff09","Map.leaflet.leafletCustomMarkerTitle":"\u57fa\u672c\u5730\u56fe\uff08\u4f7f\u7528\u81ea\u5b9a\u4e49\u56fe\u6807\u6807\u8bb0\uff09","Map.leaflet.leafletCustomHtmlMarkerTitle":"\u57fa\u672c\u5730\u56fe\uff08\u4f7f\u7528\u81ea\u5b9a\u4e49Html\u6807\u8bb0\uff09","Map.leaflet.leafletMarkerClusterTitle":"\u57fa\u672c\u5730\u56fe\uff08\u5e26\u6807\u8bb0\u7fa4\u96c6\uff09","Map.leaflet.leafletRoutingTitle":"\u57fa\u672c\u5730\u56fe\u8def\u7531","Component.contacts.noOption":"\u627e\u4e0d\u5230\u8054\u7cfb","email.send":"\u53d1\u9001","email.cancel":"\u53d6\u6d88","email.compose":"\u64b0\u5199","email.noMessage":"\u8bf7\u9009\u62e9\u4e00\u4e2a\u90ae\u4ef6\u9605\u8bfb","themeSwitcher.purchase":"\u73b0\u5728\u4e70","themeSwitcher.settings":"\u8bbe\u7f6e","sidebar.selectbox":"\u9009\u62e9","sidebar.frappeChart":"\u56fe\u8868","topbar.myprofile":"\u6211\u7684\u7b80\u5386","topbar.help":"\u5e2e\u5e2e\u6211","topbar.logout":"\u767b\u51fa","topbar.viewAll":"\u67e5\u770b\u5168\u90e8","topbar.viewCart":"\u67e5\u770b\u8d2d\u7269\u8f66","topbar.totalPrice":"\u603b\u4ef7\u683c","sidebar.scrumboard":"Scrum\u677f","sidebar.firestorecrud":"Firestore CRUD","sidebar.firestorecrudarticle":"\u7528\u54c1","sidebar.firestorecrudinvestor":"\u6295\u8d44\u8005"}'
      );
    },
    199: function(e) {
      e.exports = JSON.parse(
        '{"sidebar.swiperslider":"\u0627\u0644\u0645\u062a\u0632\u0644\u062c","sidebar.email":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a","sidebar.chat":"\u062f\u0631\u062f\u0634\u0629","sidebar.ecommerce":"\u0627\u0644\u062a\u062c\u0627\u0631\u0629 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629","sidebar.shop":"\u0645\u062a\u062c\u0631","sidebar.cart":"\u0639\u0631\u0628\u0629 \u0627\u0644\u062a\u0633\u0648\u0642","sidebar.checkout":"\u0627\u0644\u062f\u0641\u0639","sidebar.cards":"\u0628\u0637\u0627\u0642\u0627\u062a","sidebar.maps":"\u062e\u0631\u0627\u0626\u0637","sidebar.googleMap":"\u062e\u0631\u0627\u0626\u0637 \u062c\u0648\u062c\u0644","sidebar.leafletMap":"\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0646\u0634\u0631\u0629","sidebar.calendar":"\u0627\u0644\u062a\u0642\u0648\u064a\u0645","sidebar.notes":"\u0645\u0644\u0627\u062d\u0638\u0627\u062a","sidebar.todos":"\u062a\u0648\u062f\u0648\u0633","sidebar.contacts":"\u062c\u0647\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644","sidebar.shuffle":"\u062e\u0644\u0637","sidebar.charts":"\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u064a\u0629","sidebar.googleCharts":"\u0639\u0631\u0628\u0627\u062a \u063a\u0648\u063a\u0644","sidebar.recharts":"Recharts","sidebar.reactVis":"\u0631\u062f \u0641\u064a\u0633","sidebar.reactChart2":"\u0627\u0644\u0631\u062f-\u0645\u062e\u0637\u0637-2","sidebar.reactTrend":"\u0627\u0644\u0631\u062f-\u062a\u0631\u064a\u0646\u062f","sidebar.eChart":"Echart","sidebar.forms":"\u0625\u0633\u062a\u0645\u0627\u0631\u0627\u062a","sidebar.input":"\u0625\u062f\u062e\u0627\u0644","sidebar.editor":"\u0645\u062d\u0631\u0631","sidebar.formsWithValidation":"\u0646\u0645\u0627\u0630\u062c \u0645\u0639 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0635\u062d\u0629","sidebar.progress":"\u062a\u0642\u062f\u0645","sidebar.button":"\u0632\u0631","sidebar.tab":"\u0627\u0644\u062a\u0628\u0648\u064a\u0628","sidebar.checkbox":"\u0645\u0631\u0628\u0639","sidebar.radiobox":"\u0645\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u062f\u064a\u0648","sidebar.transfer":"\u062a\u062d\u0648\u064a\u0644","sidebar.autocomplete":"\u0627\u0644\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062a\u0644\u0642\u0627\u0626\u064a","sidebar.boxOptions":"\u062e\u064a\u0627\u0631\u0627\u062a \u0645\u0631\u0628\u0639","sidebar.uiElements":"\u0639\u0646\u0627\u0635\u0631 \u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645","sidebar.badge":"\u0634\u0627\u0631\u0629","sidebar.card2":"\u0628\u0637\u0627\u0642\u0629","sidebar.corusel":"\u0625\u062d\u062a\u0641\u0627\u0644 \u0635\u0627\u062e\u0628 \u0645\u062e\u0645\u0648\u0631","sidebar.collapse":"\u0627\u0646\u0647\u062f\u0627\u0645","sidebar.popover":"\u0627\u0644\u0628\u0648\u0628","sidebar.tooltip":"\u062a\u0644\u0645\u064a\u062d","sidebar.tag":"\u0628\u0637\u0627\u0642\u0629","sidebar.timeline":"\u0627\u0644\u062c\u062f\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064a","sidebar.dropdown":"\u0627\u0633\u0642\u0627\u0637","sidebar.pagination":"\u062a\u0631\u0642\u064a\u0645 \u0627\u0644\u0635\u0641\u062d\u0627\u062a","sidebar.rating":"\u062a\u0642\u064a\u064a\u0645","sidebar.tree":"\u0634\u062c\u0631\u0629","sidebar.advancedElements":"\u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629","sidebar.reactDates":"\u062a\u0648\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629","sidebar.codeMirror":"\u0643\u0648\u062f \u0645\u0631\u0622\u0629","sidebar.uppy":"\u0648\u0628\u064a \u0631\u0627\u0641\u0639","sidebar.dropzone":"\u0625\u0633\u0642\u0627\u0637 \u0627\u0644\u0645\u0646\u0637\u0642\u0629","sidebar.feedback":"\u0631\u062f\u0648\u062f \u0627\u0644\u0641\u0639\u0644","sidebar.alert":"\u0645\u062d\u0632\u0631","sidebar.modal":"\u0634\u0643\u0644\u064a","sidebar.message":"\u0631\u0633\u0627\u0644\u0629","sidebar.notification":"\u0625\u0639\u0644\u0627\u0645","sidebar.popConfirm":"\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0628\u0648\u0628","sidebar.spin":"\u063a\u0632\u0644","sidebar.tables":"\u0627\u0644\u062c\u062f\u0627\u0648\u0644","sidebar.antTables":"\u062c\u062f\u0627\u0648\u0644 \u0627\u0644\u0646\u0645\u0644","sidebar.pages":"\u0635\u0641\u062d\u0627\u062a","sidebar.500":"500","sidebar.404":"404","sidebar.signIn":"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644","sidebar.signUp":"\u0633\u062c\u0644","sidebar.forgotPw":"\u0646\u0633\u064a\u062a \u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0631\u0648\u0631","sidebar.resetPw":"\u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646 \u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0631\u0648\u0631","sidebar.invoice":"\u0641\u0627\u062a\u0648\u0631\u0629","sidebar.menuLevels":"\u0645\u0633\u062a\u0648\u064a\u0627\u062a \u0627\u0644\u0642\u0627\u0626\u0645\u0629","sidebar.item1":"\u0627\u0644\u0628\u0646\u062f 1","sidebar.item2":"\u0627\u0644\u0628\u0646\u062f 2","sidebar.option1":"\u0627\u0644\u062e\u064a\u0627\u0631 1","sidebar.option2":"\u0627\u0644\u062e\u064a\u0627\u0631 2","sidebar.option3":"\u0627\u0644\u062e\u064a\u0627\u0631 3","sidebar.option4":"\u0627\u0644\u062e\u064a\u0627\u0631 4","sidebar.blankPage":"\u0635\u0641\u062d\u0629 \u0641\u0627\u0631\u063a\u0629","sidebar.githubSearch":"\u062c\u064a\u062b\u0628 \u0627\u0644\u0628\u062d\u062b","sidebar.youtubeSearch":"\u0628\u062d\u062b \u064a\u0648\u062a\u064a\u0648\u0628","languageSwitcher.label":"\u063a\u064a\u0631 \u0627\u0644\u0644\u063a\u0629","themeSwitcher":"\u0645\u0648\u0636\u0648\u0639 \u0627\u0644\u062c\u0644\u0627\u062f","themeSwitcher.Sidebar":"\u0627\u0644\u0634\u0631\u064a\u0637 \u0627\u0644\u062c\u0627\u0646\u0628\u064a","themeSwitcher.Topbar":"\u0627\u0644\u0634\u0631\u064a\u0637 \u0627\u0644\u0639\u0644\u0648\u0649","themeSwitcher.Background":"\u062e\u0644\u0641\u064a\u0629","feedback.alert.basicTitle":"\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0623\u0633\u0627\u0633\u064a","feedback.alert.successText":"\u0646\u0635 \u0627\u0644\u0646\u062c\u0627\u062d","feedback.alert.infoText":"\u0646\u0635 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a","feedback.alert.warningText":"\u0646\u0635 \u0627\u0644\u062a\u062d\u0630\u064a\u0631","feedback.alert.errorText":"\u0646\u0635 \u062e\u0637\u0623","feedback.alert.closableAlertType":"\u0646\u0648\u0639 \u0627\u0644\u062a\u0646\u0628\u064a\u0647 \u0627\u0644\u0642\u0627\u0628\u0644 \u0644\u0644\u0625\u063a\u0644\u0627\u0642","feedback.alert.iconAlertType":"\u0631\u0645\u0632 \u0646\u0648\u0639 \u0627\u0644\u062a\u0646\u0628\u064a\u0647","feedback.alert.iconInfoAlertType":"\u0631\u0645\u0632 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0646\u0648\u0639 \u0627\u0644\u062a\u0646\u0628\u064a\u0647","feedback.alert.successTips":"\u0646\u0635\u0627\u0626\u062d \u0627\u0644\u0646\u062c\u0627\u062d","feedback.alert.successTipsDescription":"\u0648\u0635\u0641 \u0645\u0641\u0635\u0644 \u0648\u0646\u0635\u0627\u0626\u062d \u062d\u0648\u0644 \u0627\u0644\u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0646\u0627\u062c\u062d\u0629.","feedback.alert.informationTips":"\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0625\u0639\u0644\u0627\u0645\u064a\u0629","feedback.alert.informationDescription":"\u0648\u0635\u0641 \u0625\u0636\u0627\u0641\u064a \u0648\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u062d\u0648\u0644 \u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0646\u0635\u0648\u0635.","feedback.alert.warningTips":"\u062a\u062d\u0630\u064a\u0631","feedback.alert.warningDescription":"\u0647\u0630\u0627 \u0625\u0634\u0639\u0627\u0631 \u062a\u062d\u0630\u064a\u0631 \u062d\u0648\u0644 \u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0646\u0635\u0648\u0635.","feedback.alert.errorTips":"\u062e\u0637\u0623","feedback.alert.errorDescription":"\u0647\u0630\u0647 \u0631\u0633\u0627\u0644\u0629 \u062e\u0637\u0623 \u062d\u0648\u0644 \u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0646\u0635\u0648\u0635.","feedback.alert.modalTitle":"\u0645\u0634\u0631\u0648\u0637 \u0648\u0627\u062d\u062f \u0645\u0639 \u062a\u062e\u0635\u064a\u0635 \u062a\u0630\u064a\u064a\u0644 \u0627\u0644\u0635\u0641\u062d\u0629","feedback.alert.modalSubTitle":"\u0645\u0631\u0628\u0639 \u062d\u0648\u0627\u0631 \u0623\u0633\u0627\u0633\u064a \u0645\u0634\u0631\u0648\u0637.","feedback.alert.successTitle":"\u0646\u062c\u0627\u062d","feedback.alert.infoTitle":"\u0645\u0639\u0644\u0648\u0645\u0627\u062a","feedback.alert.errorTitle":"\u062e\u0637\u0623","feedback.alert.warningTitle":"\u062a\u062d\u0630\u064a\u0631","feedback.alert.modalBlockTitle":"\u0634\u0643\u0644\u064a","feedback.alert.confirmationModalDialogue":"\u062d\u0648\u0627\u0631 \u0645\u0634\u0631\u0648\u0637 \u0627\u0644\u062a\u0623\u0643\u064a\u062f","feedback.alert.simpleModalDialogue":"\u062d\u0648\u0627\u0631 \u0645\u0634\u0631\u0648\u0637 \u0628\u0633\u064a\u0637","feedback.alert.message":"\u0631\u0633\u0627\u0644\u0629","feedback.alert.normalMessageTitle":"\u0631\u0633\u0627\u0644\u0629 \u0639\u0627\u062f\u064a\u0629","feedback.alert.normalMessageSubtitle":"\u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0639\u0627\u062f\u064a\u0629 \u0643\u062a\u0639\u0644\u064a\u0642\u0627\u062a.","feedback.alert.displayMessage":"\u0639\u0631\u0636 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0639\u0627\u062f\u064a\u0629","feedback.alert.displayOtherTypeMessageTitle":"\u0623\u0646\u0648\u0627\u0639 \u0623\u062e\u0631\u0649 \u0645\u0646 \u0627\u0644\u0631\u0633\u0627\u0626\u0644","feedback.alert.displayOtherTypeMessageSubTitle":"\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0646\u062c\u0627\u062d \u0648\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0648\u0627\u0644\u0625\u0646\u0630\u0627\u0631\u0627\u062a.","feedback.alert.customizeDurationTitle":"\u062a\u062e\u0635\u064a\u0635 \u0627\u0644\u0645\u062f\u0629","feedback.alert.customizeDurationSubTitle":"\u0623\u0648\u0633\u062a\u0645\u064a\u0632 \u0645\u062f\u0629 \u0639\u0631\u0636 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0645\u0646 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a 1.5s \u0625\u0644\u0649 10s.","feedback.alert.customizeDurationButton":"\u062a\u062e\u0635\u064a\u0635 \u0645\u062f\u0629 \u0627\u0644\u0639\u0631\u0636","feedback.alert.messageLoadingTitle":"\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u062d\u0645\u064a\u0644","feedback.alert.messageLoadingSubTitle":"\u0639\u0631\u0636 \u0645\u0624\u0634\u0631 \u062a\u062d\u0645\u064a\u0644 \u0639\u0627\u0644\u0645\u064a\u060c \u064a\u062a\u0645 \u0631\u0641\u0636\u0647 \u0641\u064a \u062d\u062f \u0630\u0627\u062a\u0647 \u0628\u0634\u0643\u0644 \u063a\u064a\u0631 \u0645\u062a\u0632\u0627\u0645\u0646.","feedback.alert.displayLoadIndicator":"\u0639\u0631\u0636 \u0645\u0624\u0634\u0631 \u0627\u0644\u062a\u062d\u0645\u064a\u0644","feedback.alert.notification":"\u0625\u0639\u0644\u0627\u0645","feedback.alert.notificationBasicTitle":"\u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629","feedback.alert.notificationBasicSubTitle":"\u0623\u0628\u0633\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0630\u064a \u064a\u063a\u0644\u0642 \u0645\u0631\u0628\u0639 \u0627\u0644\u0625\u0639\u0644\u0627\u0645 \u0628\u0639\u062f 4.5S.","feedback.alert.notificationBasicDescription":"\u0627\u0641\u062a\u062d \u0645\u0631\u0628\u0639 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a","feedback.alert.notificationDurationTitle":"\u0627\u0644\u0645\u062f\u0629 \u0627\u0644\u062a\u064a \u064a\u062a\u0645 \u0628\u0639\u062f\u0647\u0627 \u0625\u063a\u0644\u0627\u0642 \u0645\u0631\u0628\u0639 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a","feedback.alert.notificationDurationSubTitle":"\u064a\u0645\u0643\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0645\u062f\u0629 \u0644\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0645\u062f\u0629 \u0627\u0644\u062a\u064a \u064a\u0628\u0642\u0649 \u0641\u064a\u0647\u0627 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u0645\u0641\u062a\u0648\u062d\u0627. \u0628\u0639\u062f \u0627\u0646\u0642\u0636\u0627\u0621 \u0627\u0644\u0645\u062f\u0629 \u0627\u0644\u0632\u0645\u0646\u064a\u0629\u060c \u064a\u062a\u0645 \u0625\u063a\u0644\u0627\u0642 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u062a\u0644\u0642\u0627\u0626\u064a\u0627. \u0625\u0630\u0627 \u0644\u0645 \u064a\u062a\u0645 \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0629 \u0647\u064a 4.5 \u062b\u0627\u0646\u064a\u0629. \u0625\u0630\u0627 \u0642\u0645\u062a \u0628\u062a\u0639\u064a\u064a\u0646 \u0627\u0644\u0642\u064a\u0645\u0629 \u0625\u0644\u0649 0\u060c \u0644\u0646 \u064a\u062a\u0645 \u0625\u063a\u0644\u0627\u0642 \u0645\u0631\u0628\u0639 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u062a\u0644\u0642\u0627\u0626\u064a\u0627 \u062a\u0644\u0642\u0627\u0626\u064a\u0627.","feedback.alert.notificationwithIconTitle":"\u0625\u0639\u0644\u0627\u0645 \u0645\u0639 \u0631\u0645\u0632","feedback.alert.notificationwithIconSubTitle":"\u0645\u0631\u0628\u0639 \u0625\u0639\u0644\u0627\u0645 \u0645\u0639 \u0631\u0645\u0632 \u0639\u0644\u0649 \u0627\u0644\u062c\u0627\u0646\u0628 \u0627\u0644\u0623\u064a\u0633\u0631.","feedback.alert.notificationwithCustomIconTitle":"\u0625\u0639\u0644\u0627\u0645 \u0645\u0639 \u0631\u0645\u0632 \u0645\u062e\u0635\u0635","feedback.alert.notificationwithCustomIconSubTitle":"\u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0639\u0627\u062f\u064a\u0629 \u0643\u062a\u0639\u0644\u064a\u0642\u0627\u062a.","feedback.alert.notificationwithCustomButtonTitle":"\u0625\u0639\u0644\u0627\u0645 \u0645\u0639 \u0632\u0631 \u0645\u062e\u0635\u0635","feedback.alert.notificationwithCustomButtonSubTitle":"\u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0639\u0627\u062f\u064a\u0629 \u0643\u062a\u0639\u0644\u064a\u0642\u0627\u062a.","feedback.alert.popConfirm":"\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0628\u0648\u0628","feedback.alert.popConfirm.basicTitle":"\u062a\u0623\u0643\u064a\u062f \u0623\u0633\u0627\u0633\u064a","feedback.alert.popConfirm.basicSubTitle":"\u0627\u0644\u0645\u062b\u0627\u0644 \u0627\u0644\u0623\u0633\u0627\u0633\u064a.","feedback.alert.popConfirm.delete":"\u062d\u0630\u0641","feedback.alert.popConfirm.notiWithIconTitle":"\u0625\u0639\u0644\u0627\u0645 \u0645\u0639 \u0631\u0645\u0632 \u0645\u062e\u0635\u0635","feedback.alert.popConfirm.notiWithIconSubTitle":"\u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0639\u0627\u062f\u064a\u0629 \u0643\u062a\u0639\u0644\u064a\u0642\u0627\u062a.","feedback.alert.popConfirm.TL":"TL","feedback.alert.popConfirm.top":"\u0623\u0639\u0644\u0649","feedback.alert.popConfirm.TR":"TR","feedback.alert.popConfirm.LT":"LT","feedback.alert.popConfirm.left":"\u0627\u0644\u064a\u0633\u0627\u0631","feedback.alert.popConfirm.LB":"\u0631\u0637\u0644","feedback.alert.popConfirm.RT":"RT","feedback.alert.popConfirm.right":"\u062d\u0642","feedback.alert.popConfirm.RB":"RB","feedback.alert.popConfirm.Bl":"BL","feedback.alert.popConfirm.bottom":"\u0627\u0644\u0623\u0633\u0641\u0644","feedback.alert.popConfirm.BR":"BR","feedback.alert.spin":"\u063a\u0632\u0644","feedback.alert.spin.basicTitle":"\u062d\u062c\u0645 \u062a\u062f\u0648\u0631","feedback.alert.spin.background":"\u062a\u062f\u0648\u0631 \u0645\u0639 \u0627\u0644\u062e\u0644\u0641\u064a\u0629","feedback.alert.spin.backgroundDescription":"\u062a\u062f\u0648\u0631 \u0645\u0639 \u0648\u0635\u0641 \u0627\u0644\u062e\u0644\u0641\u064a\u0629","feedback.alert.spin.loadingState":"\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u062f\u0648\u0644\u0629","feedback.alert.spin.alertTitle":"\u0639\u0646\u0648\u0627\u0646 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u0646\u0628\u064a\u0647","feedback.alert.spin.alertDescription":"\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u062d\u0648\u0644 \u0633\u064a\u0627\u0642 \u0647\u0630\u0627 \u0627\u0644\u062a\u0646\u0628\u064a\u0647.","forms.input.header":"\u0625\u062f\u062e\u0627\u0644","forms.input.basicTitle":"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064a","forms.input.basicSubTitle":"\u0645\u062b\u0627\u0644 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064a.","forms.input.variationsTitle":"\u062b\u0644\u0627\u062b\u0629 \u0623\u062d\u062c\u0627\u0645 \u0645\u0646 \u0627\u0644\u0625\u062f\u062e\u0627\u0644","forms.input.variationsSubtitle":"\u0647\u0646\u0627\u0643 \u062b\u0644\u0627\u062b\u0629 \u0623\u062d\u062c\u0627\u0645 \u0645\u0646 \u0645\u0631\u0628\u0639 \u0627\u0644\u0625\u062f\u062e\u0627\u0644  \u0643\u0628\u064a\u0631 (42px  \u060c \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a (35px   \u0648\u0627\u0644\u0635\u063a\u064a\u0631\u0629 (30px  . \u0645\u0644\u0627\u062d\u0638\u0629  \u062f\u0627\u062e\u0644 \u0627\u0644\u0646\u0645\u0627\u0630\u062c\u060c \u064a\u062a\u0645 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u062d\u062c\u0645 \u0627\u0644\u0643\u0628\u064a\u0631 \u0641\u0642\u0637.","forms.input.groupTitle":"\u0645\u062c\u0645\u0648\u0639\u0629 \u0627\u0644\u0625\u062f\u062e\u0627\u0644","forms.input.groupSubTitle":"\u0627\u0644\u0625\u062f\u062e\u0627\u0644. \u0645\u062b\u0627\u0644 \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0644\u0627\u062d\u0638\u0629  \u0623\u0646\u062a \u0644\u0627 \u062a\u062d\u062a\u0627\u062c \u0643\u0648\u0644 \u0644\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0627\u0644\u0639\u0631\u0636 \u0641\u064a \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0645\u0636\u063a\u0648\u0637.","forms.input.autoSizingTitle":"\u064a\u0645\u0643\u0646\u0643 \u0636\u0628\u0637 \u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u0627\u0631\u062a\u0641\u0627\u0639 \u0644\u062a\u062a\u0646\u0627\u0633\u0628 \u0645\u0639 \u0627\u0644\u0645\u062d\u062a\u0648\u0649","forms.input.autoSizingSubTitle":"\u0623\u0648\u062a\u0648\u0633\u064a\u0632\u064a \u062f\u0639\u0627\u0645\u0629 \u0644\u0646\u0648\u0639 \u062a\u0643\u0633\u062a\u0627\u0631\u064a\u0627 \u0645\u0646 \u0627\u0644\u0645\u062f\u062e\u0644\u0627\u062a \u064a\u062c\u0639\u0644 \u0627\u0631\u062a\u0641\u0627\u0639 \u0644\u0636\u0628\u0637 \u062a\u0644\u0642\u0627\u0626\u064a\u0627 \u0627\u0633\u062a\u0646\u0627\u062f\u0627 \u0625\u0644\u0649 \u0627\u0644\u0645\u062d\u062a\u0648\u0649. \u064a\u0645\u0643\u0646 \u062a\u0648\u0641\u064a\u0631 \u0643\u0627\u0626\u0646 \u062e\u064a\u0627\u0631\u0627\u062a \u0644 \u0623\u0648\u062a\u0648\u0633\u064a\u0632\u064a \u0644\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u062d\u062f \u0627\u0644\u0623\u062f\u0646\u0649 \u0648\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0639\u062f\u062f \u0627\u0644\u062e\u0637\u0648\u0637 \u0627\u0644\u062a\u064a \u0633\u0648\u0641 \u062a\u0643\u0633\u062a\u0627\u0631\u064a\u0627 \u0636\u0628\u0637 \u062a\u0644\u0642\u0627\u0626\u064a\u0627.","forms.input.prePostTabTitle":"\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062a\u0628\u0648\u064a\u0628 \u0645\u0627 \u0642\u0628\u0644    \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629","forms.input.prePostTabSubTitle":"\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0628\u0631\u064a & \u0623\u0645\u0628\u061b \u0646\u0645\u0648\u0630\u062c \u0639\u0644\u0627\u0645\u0627\u062a \u062a\u0628\u0648\u064a\u0628 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0627\u062a ..","forms.input.textAreaTitle":"\u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0646\u0635","forms.input.textAreaSubTitle":"\u0628\u0627\u0644\u0646\u0633\u0628\u0629 \u0644\u062d\u0627\u0644\u0627\u062a \u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u062e\u0637\u0648\u0637\u060c \u064a\u0645\u0643\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0645\u062f\u062e\u0644\u0627\u062a \u0627\u0644\u062a\u064a \u0644\u0647\u0627 \u0642\u064a\u0645\u0629 \u062f\u0639\u0627\u0645\u0629 \u0642\u064a\u0645\u0629 \u062a\u0643\u0633\u062a\u0627\u0631\u064a\u0627.","forms.input.searchTitle":"\u0628\u062d\u062b","forms.input.searchSubTitle":"\u0645\u062b\u0627\u0644 \u0644\u0625\u0646\u0634\u0627\u0621 \u0645\u0631\u0628\u0639 \u0628\u062d\u062b \u0639\u0646 \u0637\u0631\u064a\u0642 \u062a\u062c\u0645\u064a\u0639 \u0625\u062f\u062e\u0627\u0644 \u0642\u064a\u0627\u0633\u064a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0632\u0631 \u0628\u062d\u062b","forms.editor.header":"\u0645\u062d\u0631\u0631","forms.formsWithValidation.header":"\u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u0645\u062e\u0635\u0635","forms.formsWithValidation.failLabel":"\u0641\u0634\u0644","forms.formsWithValidation.failHelp":"\u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0645\u0632\u064a\u062c \u0645\u0646 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 & \u0623\u0645\u0628\u061b \u0627\u0644\u062d\u0631\u0648\u0641 \u0627\u0644\u0647\u062c\u0627\u0626\u064a\u0629","forms.formsWithValidation.warningLabel":"\u062a\u062d\u0630\u064a\u0631","forms.formsWithValidation.ValidatingLabel":"\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0635\u062d\u0629","forms.formsWithValidation.ValidatingHelp":"\u062c\u0627\u0631 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0635\u062d\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a ...","forms.formsWithValidation.SuccessLabel":"\u0646\u062c\u0627\u062d","forms.formsWithValidation.WarninghasFeedbackLabel":"\u062a\u062d\u0630\u064a\u0631","forms.formsWithValidation.FailhasFeedbackLabel":"\u0641\u0634\u0644","forms.formsWithValidation.FailhasFeedbackHelp":"\u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0645\u0632\u064a\u062c \u0645\u0646 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 & \u0623\u0645\u0628\u061b \u0627\u0644\u062d\u0631\u0648\u0641 \u0627\u0644\u0647\u062c\u0627\u0626\u064a\u0629","forms.progressBar.header":"\u0634\u0631\u064a\u0637 \u0627\u0644\u062a\u0642\u062f\u0645","forms.progressBar.standardTitle":"\u0634\u0631\u064a\u0637 \u0627\u0644\u062a\u0642\u062f\u0645","forms.progressBar.standardSubTitle":"\u0634\u0631\u064a\u0637 \u062a\u0642\u062f\u0645 \u0642\u064a\u0627\u0633\u064a.","forms.progressBar.circularTitle":"\u0634\u0631\u064a\u0637 \u0627\u0644\u062a\u0642\u062f\u0645 \u0627\u0644\u062f\u0627\u0626\u0631\u064a","forms.progressBar.circularSubTitle":"\u0634\u0631\u064a\u0637 \u062a\u0642\u062f\u0645 \u062f\u0627\u0626\u0631\u064a.","forms.progressBar.miniTitle":"\u0645\u064a\u0646\u064a \u062d\u062c\u0645 \u0634\u0631\u064a\u0637 \u0627\u0644\u062a\u0642\u062f\u0645","forms.progressBar.miniSubTitle":"\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0645\u0646\u0637\u0642\u0629 \u0636\u064a\u0642\u0629.","forms.progressBar.miniCircularTitle":"\u0634\u0631\u064a\u0637 \u062a\u0642\u062f\u0645 \u062f\u0627\u0626\u0631\u064a \u0623\u0635\u063a\u0631.","forms.progressBar.dynamicCircularTitle":"\u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a\u0629 \u0634\u0631\u064a\u0637 \u0627\u0644\u062a\u0642\u062f\u0645 \u062f\u0627\u0626\u0631\u064a\u0629","forms.progressBar.dynamicCircularSubTitle":"\u0634\u0631\u064a\u0637 \u0627\u0644\u062a\u0642\u062f\u0645 \u0627\u0644\u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a \u0647\u0648 \u0623\u0641\u0636\u0644.","forms.progressBar.customTextTitle":"\u062a\u0646\u0633\u064a\u0642 \u0646\u0635 \u0645\u062e\u0635\u0635","forms.progressBar.customTextSubTitle":"\u064a\u0645\u0643\u0646\u0643 \u062a\u0646\u0633\u064a\u0642 \u0627\u0644\u0646\u0635 \u0627\u0644\u0645\u062e\u0635\u0635 \u0639\u0646 \u0637\u0631\u064a\u0642 \u0648\u0636\u0639 \u0627\u0644\u062a\u0646\u0633\u064a\u0642.","forms.progressBar.dashboardTitle":"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629","forms.progressBar.dashboardSubTitle":"\u0646\u0645\u0637 \u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629 \u0644\u0644\u062a\u0642\u062f\u0645.","forms.button.header":"\u0648\u0635\u0641\u062a","forms.button.simpleButton":"\u0646\u0648\u0639 \u0627\u0644\u0632\u0631","forms.button.iconButton":"\u0631\u0645\u0632 \u0627\u0644\u0632\u0631","forms.button.simpleButtonPrimaryText":"\u0627\u0628\u062a\u062f\u0627\u0626\u064a","forms.button.simpleButtonDefaultText":"\u0627\u0641\u062a\u0631\u0627\u0636\u064a","forms.button.simpleButtonDashedText":"\u0645\u062a\u0642\u0637\u0639","forms.button.simpleButtonDangerText":"\u062e\u0637\u0631","forms.button.iconPrimaryButton":"\u0628\u062d\u062b","forms.button.iconSimpleButton":"\u0628\u062d\u062b","forms.button.iconCirculerButton":"\u0628\u062d\u062b","forms.button.iconDashedButton":"\u0628\u062d\u062b","forms.button.SizedButton":"\u062d\u062c\u0645 \u0627\u0644\u0632\u0631","forms.button.DisabledButton":"\u062a\u0645 \u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u0632\u0631","forms.button.LoadingButton":"\u0632\u0631 \u0627\u0644\u062a\u062d\u0645\u064a\u0644","forms.button.MultipleButton":"\u0632\u0631 \u0645\u062a\u0639\u062f\u062f\u0629","forms.button.groupButton":"\u0632\u0631 \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0629","forms.Tabs.header":"\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u0628\u0648\u064a\u0628","forms.Tabs.simpleTabTitle":"\u0628\u062d\u062b","forms.Tabs.simpleTabSubTitle":"\u062a\u0645 \u062a\u0639\u0637\u064a\u0644 \u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u0628\u0648\u064a\u0628","forms.Tabs.iconTabTitle":"\u0623\u064a\u0642\u0648\u0646\u0629 \u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u0628\u0648\u064a\u0628","forms.Tabs.miniTabTitle":"\u0645\u064a\u0646\u064a \u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u0628\u0648\u064a\u0628","forms.Tabs.extraTabTitle":"\u0639\u0644\u0627\u0645\u0627\u062a \u062a\u0628\u0648\u064a\u0628 \u0625\u0636\u0627\u0641\u064a\u0629 \u0644\u0644\u0639\u0645\u0644","forms.Tabs.TabpositionTitle":"\u0645\u0648\u0636\u0639","forms.Tabs.TabpositionSubTitle":"\u0645\u0648\u0636\u0639 \u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u0628\u0648\u064a\u0628  \u064a\u0633\u0627\u0631 \u0623\u0648 \u064a\u0645\u064a\u0646 \u0623\u0648 \u0623\u0639\u0644\u0649 \u0623\u0648 \u0623\u0633\u0641\u0644","forms.Tabs.cardTitle":"\u0646\u0648\u0639 \u0628\u0637\u0627\u0642\u0629 \u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u0628\u0648\u064a\u0628","forms.Tabs.editableTitle":"\u0625\u0636\u0627\u0641\u0629 \u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u0628\u0648\u064a\u0628 \u0648\u0625\u063a\u0644\u0627\u0642\u0647\u0627","forms.Tabs.verticalTitle":"\u0639\u0645\u0648\u062f\u064a \u0646\u0648\u0639 \u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u0628\u0648\u064a\u0628","forms.Tabs.basicTitle":"\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u0628\u0648\u064a\u0628 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629","forms.checkbox.header":"\u0645\u0631\u0628\u0639","forms.checkbox.basicTitle":"\u0645\u0631\u0628\u0639 \u0627\u0644\u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0623\u0633\u0627\u0633\u064a","forms.checkbox.basicSubTitle":"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064a \u0644\u062e\u0627\u0646\u0629 \u0627\u0644\u0627\u062e\u062a\u064a\u0627\u0631.","forms.checkbox.groupTitle":"\u0645\u0631\u0628\u0639 \u0627\u0644\u0627\u062e\u062a\u064a\u0627\u0631","forms.checkbox.groupSubTitle":"\u0625\u0646\u0634\u0627\u0621 \u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0645\u0631\u0628\u0639\u0627\u062a \u0627\u0644\u0627\u062e\u062a\u064a\u0627\u0631 \u0645\u0646 \u0635\u0641\u064a\u0641. \u0627\u0633\u062a\u062e\u062f\u0645 \u062a\u0639\u0637\u064a\u0644 \u0644\u062a\u0639\u0637\u064a\u0644 \u0645\u0631\u0628\u0639 \u0627\u062e\u062a\u064a\u0627\u0631.","forms.checkbox.groupCheckTitle":"\u0645\u0631\u0628\u0639 \u0627\u0644\u0627\u062e\u062a\u064a\u0627\u0631","forms.checkbox.groupCheckSubTitle":"\u0625\u0646\u0634\u0627\u0621 \u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0645\u0631\u0628\u0639\u0627\u062a \u0627\u0644\u0627\u062e\u062a\u064a\u0627\u0631 \u0645\u0646 \u0635\u0641\u064a\u0641. \u0627\u0633\u062a\u062e\u062f\u0645 \u062a\u0639\u0637\u064a\u0644 \u0644\u062a\u0639\u0637\u064a\u0644 \u0645\u0631\u0628\u0639 \u0627\u062e\u062a\u064a\u0627\u0631.","forms.radio.header":"\u0631\u0627\u062f\u064a\u0648","forms.radio.simpleTitle":"\u0627\u0644\u0631\u0627\u062f\u064a\u0648 \u0627\u0644\u0623\u0633\u0627\u0633\u064a","forms.radio.simpleSubTitle":"\u0623\u0628\u0633\u0637 \u0627\u0633\u062a\u062e\u062f\u0627\u0645. \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062a\u0639\u0637\u064a\u0644 \u0644\u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u0631\u0627\u062f\u064a\u0648.","forms.radio.groupTitle":"\u0639\u0645\u0648\u062f\u064a \u0631\u0627\u062f\u064a\u0648\u063a\u0631\u0648\u0628","forms.radio.groupSubTitle":"\u0639\u0645\u0648\u062f\u064a \u0631\u0627\u062f\u064a\u0648\u063a\u0631\u0648\u0628\u060c \u0645\u0639 \u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0623\u062c\u0647\u0632\u0629 \u0627\u0644\u0631\u0627\u062f\u064a\u0648.","forms.radio.groupSecondTitle":"RadioGroup","forms.radio.groupSecondSubTitle":"\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0645\u0643\u0648\u0646\u0627\u062a \u0627\u0644\u0631\u0627\u062f\u064a\u0648.","forms.radio.groupThirdTitle":"RadioGroup","forms.radio.groupThirdSubTitle":"\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0645\u0643\u0648\u0646\u0627\u062a \u0627\u0644\u0631\u0627\u062f\u064a\u0648.","forms.transfer.header":"\u062a\u062d\u0648\u064a\u0644","forms.transfer.SubTitle":"\u0646\u0642\u0644 \u0645\u0639 \u0645\u0631\u0628\u0639 \u0627\u0644\u0628\u062d\u062b.","forms.transfer.Title":"\u0628\u062d\u062b","forms.autocomplete.header":"\u0627\u0644\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062a\u0644\u0642\u0627\u0626\u064a","forms.autocomplete.simpleTitle":"\u062d\u0633\u0628 \u0627\u0644\u0637\u0644\u0628","forms.autocomplete.simpleSubTitle":"\u0647\u0644 \u064a\u0645\u0643\u0646 \u0623\u0646 \u062a\u0645\u0631 AutoComplete.Option \u0643\u0623\u0637\u0641\u0627\u0644 \u0627\u0644\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062a\u0644\u0642\u0627\u0626\u064a\u060c \u0628\u062f\u0644\u0627 \u0645\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062f\u0627\u062a\u0633\u0648\u0631\u0633","forms.autocomplete.customizeTitle":"\u062a\u062e\u0635\u064a\u0635 \u0645\u0643\u0648\u0646 \u0627\u0644\u0625\u062f\u062e\u0627\u0644","forms.autocomplete.customizeSubTitle":"\u062a\u062e\u0635\u064a\u0635 \u0645\u0643\u0648\u0646 \u0627\u0644\u0625\u062f\u062e\u0627\u0644","uiElements.badge.badge":"\u0634\u0627\u0631\u0629","uiElements.badge.basicExample":"\u0645\u062b\u0627\u0644 \u0623\u0633\u0627\u0633\u064a","uiElements.badge.basicExampleSubTitle":"\u0623\u0628\u0633\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645. \u0633\u064a\u062a\u0645 \u0625\u062e\u0641\u0627\u0621 \u0634\u0627\u0631\u0629 \u0639\u0646\u062f\u0645\u0627 \u0627\u0644\u0639\u062f \u0647\u0648 0\u060c \u0648\u0644\u0643\u0646 \u064a\u0645\u0643\u0646\u0646\u0627 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0634\u0648\u0632\u064a\u0631\u0648 \u0644\u0625\u0638\u0647\u0627\u0631 \u0630\u0644\u0643.","uiElements.badge.overflowCount":"\u062a\u062c\u0627\u0648\u0632 \u0639\u062f\u062f","uiElements.badge.overflowCountSubTitle":"\u064a\u062a\u0645 \u0639\u0631\u0636 \u0623\u0648\u0641\u064a\u0631\u0641\u0644\u0648\u0643\u0648\u0646\u062a \u0639\u0646\u062f\u0645\u0627 \u064a\u0643\u0648\u0646 \u0639\u062f\u062f \u0623\u0643\u0628\u0631 \u0645\u0646 \u0623\u0648\u0641\u064a\u0631\u0641\u0644\u0648\u0643\u0648\u0646\u062a. \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0629 \u0644 \u0623\u0648\u0641\u064a\u0631\u0641\u0644\u0648\u0643\u0648\u0646\u062a \u0647\u064a 99.","uiElements.badge.status":"\u0627\u0644\u062d\u0627\u0644\u0629","uiElements.badge.statusSubTitle":"\u0634\u0627\u0631\u0629 \u0645\u0633\u062a\u0642\u0644\u0629 \u0645\u0639 \u0627\u0644\u0648\u0636\u0639.","uiElements.badge.success":"\u0646\u062c\u0627\u062d","uiElements.badge.error":"\u062e\u0637\u0623","uiElements.badge.default":"\u0627\u0641\u062a\u0631\u0627\u0636\u064a","uiElements.badge.processing":"\u0645\u0639\u0627\u0644\u062c\u0629","uiElements.badge.warning":"\u062a\u062d\u0630\u064a\u0631","uiElements.badge.redBadge":"\u0634\u0627\u0631\u0629 \u062d\u0645\u0631\u0627\u0621","uiElements.badge.redBadgeSubTitle":"\u0648\u0647\u0630\u0627 \u0628\u0628\u0633\u0627\u0637\u0629 \u0639\u0631\u0636 \u0634\u0627\u0631\u0629 \u062d\u0645\u0631\u0627\u0621\u060c \u062f\u0648\u0646 \u0639\u062f\u062f \u0645\u0639\u064a\u0646.","uiElements.badge.linkSomething":"\u0631\u0628\u0637 \u0634\u064a\u0621","uiElements.cards.cards":"\u0628\u0637\u0627\u0642\u0627\u062a","uiElements.cards.basicCard":"\u0628\u0637\u0627\u0642\u0629 \u0623\u0633\u0627\u0633\u064a\u0629","uiElements.cards.basicCardSubTitle":"\u0628\u0637\u0627\u0642\u0629 \u0623\u0633\u0627\u0633\u064a\u0629 \u062a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u0639\u0646\u0648\u0627\u0646 \u0648\u0645\u062d\u062a\u0648\u0649 \u0648\u0645\u062d\u062a\u0648\u0649 \u0632\u0627\u0648\u064a\u0629 \u0625\u0636\u0627\u0641\u064a.","uiElements.cards.more":"\u0623\u0643\u062b\u0631 \u0645\u0646","uiElements.cards.cardTitle":"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0637\u0627\u0642\u0629","uiElements.cards.cardContent":"\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0628\u0637\u0627\u0642\u0629","uiElements.cards.lorem":"\u0644\u0648\u0631\u064a\u0645 \u0625\u064a\u0628\u0633\u0648\u0645 \u062f\u0648\u0644\u0648\u0631 \u0633\u064a\u062a \u0623\u0645\u064a\u062a\u060c \u0643\u0648\u0646\u0633\u0643\u062a\u064a\u062a\u0648\u0631 \u0623\u062f\u064a\u0628\u064a\u0633\u064a\u0633\u064a\u0646\u063a \u0625\u0644\u064a\u062a\u060c \u0633\u064a\u062f \u062f\u0648 \u0625\u064a\u0633\u0645\u0648\u062f \u062a\u064a\u0645\u0628\u0648\u0631 \u0625\u0646\u0633\u064a\u062f\u0648\u0646\u062a \u0623\u0648\u062a \u0644\u0627\u0628\u0648\u0631 \u0625\u062a \u062f\u0648\u0644\u0648\u0631 \u0645\u0627\u063a\u0646\u0627 \u0623\u0644\u064a\u0643\u0648\u0627. \u0623\u0648\u062a \u0625\u0646\u064a\u0645 \u0623\u062f \u0645\u064a\u0646\u064a\u0645 \u0641\u064a\u0646\u064a\u0627\u0645\u060c \u0643\u0648\u064a\u0633 \u0646\u0648\u0633\u062a\u0631\u0648\u062f \u0625\u0643\u0633\u064a\u0631\u0633\u064a\u0633\u0627\u062a\u064a\u0648\u0646 \u0623\u0648\u0644\u0627\u0645\u0643\u0648 \u0644\u0627\u0628\u0648\u0631\u064a\u0633 \u0646\u064a\u0633\u064a \u0623\u0648\u062a \u0623\u0644\u064a\u0643\u064a\u0628 \u0625\u0643\u0633 \u0625\u064a \u0643\u0648\u0645\u0648\u062f\u0648 \u062b\u0648\u0633\u0643\u0627\u062a.","uiElements.cards.noBorder":"\u0644\u064a\u0633 \u0644\u0647\u0627 \u062d\u062f\u0648\u062f","uiElements.cards.noBorderSubTitle":"\u0628\u0637\u0627\u0642\u0629 \u0628\u0644\u0627 \u062d\u062f\u0648\u062f \u0639\u0644\u0649 \u062e\u0644\u0641\u064a\u0629 \u0631\u0645\u0627\u062f\u064a\u0629.","uiElements.cards.gridCard":"\u0628\u0637\u0627\u0642\u0629 \u0627\u0644\u0634\u0628\u0643\u0629","uiElements.cards.gridCardSubTitle":"\u0628\u0637\u0627\u0642\u0627\u062a \u0639\u0627\u062f\u0629 \u0645\u0627 \u062a\u062a\u0639\u0627\u0648\u0646 \u0645\u0639 \u062a\u062e\u0637\u064a\u0637 \u0627\u0644\u0634\u0628\u0643\u0629 \u0641\u064a \u0635\u0641\u062d\u0629 \u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629.","uiElements.cards.loadingCard":"\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0628\u0637\u0627\u0642\u0629","uiElements.cards.loadingCardSubTitle":"\u0644\u0639\u0631\u0636 \u0645\u0624\u0634\u0631 \u0627\u0644\u062a\u062d\u0645\u064a\u0644 \u0623\u062b\u0646\u0627\u0621 \u062c\u0644\u0628 \u0645\u062d\u062a\u0648\u064a\u0627\u062a \u0627\u0644\u0628\u0637\u0627\u0642\u0629.","uiElements.cards.whateverContent":"\u0623\u064a\u0627 \u0643\u0627\u0646 \u0627\u0644\u0645\u062d\u062a\u0648\u0649","uiElements.cards.customizedContentTitle":"\u0645\u062d\u062a\u0648\u0649 \u0645\u062e\u0635\u0635","uiElements.cards.customizedContent":"\u0644\u0639\u0631\u0636 \u0645\u0624\u0634\u0631 \u0627\u0644\u062a\u062d\u0645\u064a\u0644 \u0623\u062b\u0646\u0627\u0621 \u062c\u0644\u0628 \u0645\u062d\u062a\u0648\u064a\u0627\u062a \u0627\u0644\u0628\u0637\u0627\u0642\u0629.","uiElements.cards.europeStreetBeat":"\u0641\u0627\u0632 \u0634\u0627\u0631\u0639 \u0623\u0648\u0631\u0648\u0628\u0627","uiElements.cards.instagram":"www.instagram.com","uiElements.carousel.carousel":"\u0625\u062d\u062a\u0641\u0627\u0644 \u0635\u0627\u062e\u0628 \u0645\u062e\u0645\u0648\u0631","uiElements.carousel.verticalCarousel":"\u062f\u0627\u0626\u0631\u064a \u0639\u0645\u0648\u062f\u064a","uiElements.carousel.verticalCarouselSubTitle":"\u062a\u0631\u0642\u064a\u0645 \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0627\u0644\u0631\u0623\u0633\u064a. \u0627\u0633\u062a\u062e\u062f\u0645   \u0641\u0631\u062a\u064a\u0643\u0627\u0644 = \u062a\u0631\u0648","uiElements.carousel.basicCarousel":"\u062f\u0627\u0626\u0631\u064a \u0627\u0644\u0623\u0633\u0627\u0633\u064a","uiElements.carousel.basicCarouselSubTitle":"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064a","uiElements.carousel.fadeInTransition":"\u062a\u062a\u0644\u0627\u0634\u0649 \u0641\u064a \u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644","uiElements.carousel.fadeInTransitionSubTitle":"\u0627\u0644\u0634\u0631\u0627\u0626\u062d \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062a\u062a\u0644\u0627\u0634\u0649 \u0644\u0644\u0627\u0646\u062a\u0642\u0627\u0644.   \u062a\u0623\u062b\u064a\u0631 = \u062a\u062a\u0644\u0627\u0634\u0649","uiElements.carousel.scrollAutomatically":"\u0645\u0631\u0631 \u062a\u0644\u0642\u0627\u0626\u064a\u0627","uiElements.carousel.scrollAutomaticallySubTitle":"\u062a\u0648\u0642\u064a\u062a \u0627\u0644\u062a\u0645\u0631\u064a\u0631 \u0625\u0644\u0649 \u0628\u0637\u0627\u0642\u0629 \u0627\u0644\u0645\u0642\u0628\u0644    \u0627\u0644\u0635\u0648\u0631\u0629. \u062a\u0634\u063a\u064a\u0644 \u062a\u0644\u0642\u0627\u0626\u064a","uiElements.collapse.collapse":"\u0627\u0646\u0647\u062f\u0627\u0645","uiElements.collapse.collapseSubTitle":"\u064a\u0645\u0643\u0646 \u062a\u0648\u0633\u064a\u0639 \u0623\u0643\u062b\u0631 \u0645\u0646 \u0644\u0648\u062d\u0629 \u0648\u0627\u062d\u062f\u0629 \u0641\u064a \u0648\u0642\u062a \u0648\u0627\u062d\u062f\u060c \u064a\u062a\u0645 \u062a\u0647\u064a\u0626\u0629 \u0627\u0644\u0644\u0648\u062d\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u0644\u062a\u0643\u0648\u0646 \u0646\u0634\u0637\u0629 \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u062d\u0627\u0644\u0629. \u0648\u0633   \u062f\u064a\u0641\u0648\u0644\u062a\u0627\u0643\u062a\u064a\u0641\u064a\u0643\u064a =   [\u0643\u064a\u0646\u0648\u0645]","uiElements.collapse.text":"\u0627\u0644\u0643\u0644\u0628 \u0647\u0648 \u0646\u0648\u0639 \u0645\u0646 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u0623\u0646\u0633\u0629. \u0627\u0644\u0645\u0639\u0631\u0648\u0641\u0629 \u0639\u0646 \u0648\u0644\u0627\u0626\u0647\u0627 \u0648\u0627\u0644\u0625\u062e\u0644\u0627\u0635\u060c \u0648\u064a\u0645\u0643\u0646 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u064a\u0647\u0627 \u0643\u0636\u064a\u0641 \u062a\u0631\u062d\u064a\u0628 \u0641\u064a \u0627\u0644\u0639\u062f\u064a\u062f \u0645\u0646 \u0627\u0644\u0623\u0633\u0631 \u0641\u064a \u062c\u0645\u064a\u0639 \u0623\u0646\u062d\u0627\u0621 \u0627\u0644\u0639\u0627\u0644\u0645.","uiElements.collapse.headerOne":"\u0647\u0630\u0627 \u0647\u0648 \u0631\u0623\u0633 \u0627\u0644\u0644\u0648\u062d\u0629 1","uiElements.collapse.headerTwo":"\u0647\u0630\u0627 \u0647\u0648 \u0631\u0623\u0633 \u0627\u0644\u0644\u0648\u062d\u0629 2","uiElements.collapse.headerThree":"\u0647\u0630\u0627 \u0647\u0648 \u0631\u0623\u0633 \u0627\u0644\u0644\u0648\u062d\u0629 3","uiElements.collapse.headerNested":"\u0647\u0630\u0627 \u0647\u0648 \u0644\u0648\u062d\u0629 \u0644\u0648\u062d\u0629 \u0627\u0644\u0639\u0634","uiElements.collapse.nestedExample":"\u0645\u062b\u0627\u0644 \u0645\u062a\u062f\u0627\u062e\u0644","uiElements.collapse.nestedExampleSubTitle":"\u064a\u062a\u0645 \u062f\u0645\u062c \u0643\u0648\u0644\u0627\u0628\u0633 \u062f\u0627\u062e\u0644 \u0643\u0648\u0644\u0627\u0628\u0633.","uiElements.collapse.borderlessExample":"\u0645\u062b\u0627\u0644 \u0628\u0644\u0627 \u062d\u062f\u0648\u062f","uiElements.collapse.borderlessExampleSubTitle":"\u0646\u0645\u0637 \u0628\u0644\u0627 \u062d\u062f\u0648\u062f \u0645\u0646 \u0643\u0648\u0644\u0627\u0628\u0633. \u0627\u0633\u062a\u062e\u062f\u0645   \u0628\u0648\u0631\u062f\u0631\u062f =   \u0641\u0627\u0644\u0633","uiElements.collapse.accordion":"\u0623\u0643\u0648\u0631\u062f\u064a\u0648\u0646","uiElements.collapse.accordionSubTitle":"\u0648\u0636\u0639 \u0627\u0644\u0623\u0643\u0648\u0631\u062f\u064a\u0648\u0646\u060c \u0644\u0648\u062d\u0629 \u0648\u0627\u062d\u062f\u0629 \u0641\u0642\u0637 \u064a\u0645\u0643\u0646 \u062a\u0648\u0633\u064a\u0639\u0647\u0627 \u0641\u064a \u0648\u0642\u062a \u0648\u0627\u062d\u062f. \u0633\u064a\u062a\u0645 \u062a\u0648\u0633\u064a\u0639 \u0627\u0644\u0644\u0648\u062d\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u0628\u0634\u0643\u0644 \u0627\u0641\u062a\u0631\u0627\u0636\u064a. \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0623\u0643\u0648\u0631\u062f\u064a\u0648\u0646","uiElements.popover.popover":"\u0627\u0644\u0628\u0648\u0628","uiElements.popover.basicExample":"\u0645\u062b\u0627\u0644 \u0623\u0633\u0627\u0633\u064a","uiElements.popover.basicExampleSubTitle":"\u0623\u0628\u0633\u0637 \u0645\u062b\u0627\u0644. \u062d\u062c\u0645 \u0637\u0628\u0642\u0629 \u0639\u0627\u0626\u0645\u0629 \u064a\u0639\u062a\u0645\u062f \u0639\u0644\u0649 \u0645\u062d\u062a\u0648\u064a\u0627\u062a \u0627\u0644\u0645\u0646\u0637\u0642\u0629.","uiElements.popover.hoverMe":"\u0645\u0631\u0631 \u0644\u064a","uiElements.popover.title":"\u0639\u0646\u0648\u0627\u0646","uiElements.popover.titleTrigger":"\u062b\u0644\u0627\u062b \u0637\u0631\u0642 \u0644\u062a\u062d\u0631\u064a\u0643","uiElements.popover.titleTriggerSubTitle":"\u0627\u0644\u0645\u0627\u0648\u0633 \u0641\u0648\u0642\u060c \u0648\u0627\u0644\u062a\u0631\u0643\u064a\u0632 \u0648\u0627\u0644\u062a\u062d\u0631\u0643 \u0641\u064a.","uiElements.popover.focusMe":"\u0631\u0643\u0632\u0646\u064a","uiElements.popover.clickMe":"\u0627\u0646\u0642\u0631 \u0641\u0648\u0642 \u0644\u064a","uiElements.popover.placement":"\u062a\u062d\u062f\u064a\u062f \u0645\u0633\u062a\u0648\u0649","uiElements.popover.placementSubTitle":"\u062a\u062a\u0648\u0641\u0631 12 \u062e\u064a\u0627\u0631\u0627 \u0644\u0644\u0645\u0648\u0627\u0636\u0639.","uiElements.popover.top":"\u0623\u0639\u0644\u0649","uiElements.popover.topLeft":"\u0623\u0639\u0644\u0649 \u0627\u0644\u064a\u0633\u0627\u0631","uiElements.popover.topRight":"\u0627\u0639\u0644\u0649 \u0627\u0644\u064a\u0645\u064a\u0646","uiElements.popover.leftTop":"\u0623\u0639\u0644\u0649 \u0627\u0644\u064a\u0633\u0627\u0631","uiElements.popover.left":"\u0627\u0644\u064a\u0633\u0627\u0631","uiElements.popover.leftBottom":"\u0623\u0633\u0641\u0644 \u0627\u0644\u064a\u0633\u0627\u0631","uiElements.popover.rightTop":"\u0623\u0639\u0644\u0649 \u0627\u0644\u064a\u0645\u064a\u0646","uiElements.popover.right":"\u062d\u0642","uiElements.popover.bottom":"\u0627\u0644\u0623\u0633\u0641\u0644","uiElements.popover.bottomLeft":"\u0623\u0633\u0641\u0644 \u0627\u0644\u064a\u0633\u0627\u0631","uiElements.popover.bottomRight":"\u0623\u0633\u0641\u0644 \u064a\u0645\u064a\u0646","uiElements.popover.boxTitle":"\u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0625\u063a\u0644\u0627\u0642 \u0645\u0631\u0628\u0639 \u0627\u0644\u062d\u0648\u0627\u0631","uiElements.popover.boxSubTitle":"\u0627\u0633\u062a\u062e\u062f\u0645 \u062f\u0639\u0627\u0645\u0629 \u0645\u0631\u0626\u064a\u0629 \u0644\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0639\u0631\u0636 \u0627\u0644\u0628\u0637\u0627\u0642\u0629.","uiElements.popover.TR":"TR","uiElements.popover.TL":"TL","uiElements.popover.LT":"LT","uiElements.popover.LB":"\u0631\u0637\u0644","uiElements.popover.RT":"RT","uiElements.popover.RB":"RB","uiElements.popover.BL":"BL","uiElements.popover.BR":"BR","uiElements.popover.close":"\u0642\u0631\u064a\u0628","uiElements.tooltip.tooltip":"\u062a\u0644\u0645\u064a\u062d","uiElements.tooltip.tooltipContent":"\u062a\u0644\u0645\u064a\u062d \u0627\u0644\u0645\u062d\u062a\u0648\u0649","uiElements.tooltip.basicExample":"\u0645\u062b\u0627\u0644 \u0623\u0633\u0627\u0633\u064a","uiElements.tooltip.basicExampleSubTitle":"\u0623\u0628\u0633\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645.","uiElements.tooltip.placementTitle":"\u062a\u062d\u062f\u064a\u062f \u0645\u0633\u062a\u0648\u0649","uiElements.tooltip.placementSubTitle":"\u064a\u062d\u062a\u0648\u064a \u062a\u0648\u0644\u062a\u064a\u0628 \u0639\u0644\u0649 12 \u0627\u062e\u062a\u064a\u0627\u0631 \u0644\u0644\u0645\u0648\u0627\u0636\u0639.","uiElements.tooltip.TL":"TL","uiElements.tooltip.TR":"TR","uiElements.tooltip.LT":"LT","uiElements.tooltip.LB":"\u0631\u0637\u0644","uiElements.tooltip.RT":"RT","uiElements.tooltip.RB":"RB","uiElements.tooltip.BL":"BL","uiElements.tooltip.BR":"BR","uiElements.tooltip.bottom":"\u0627\u0644\u0623\u0633\u0641\u0644","uiElements.tooltip.right":"\u062d\u0642","uiElements.tooltip.left":"\u0627\u0644\u064a\u0633\u0627\u0631","uiElements.tooltip.top":"\u0623\u0639\u0644\u0649","uiElements.tooltip.tooltipContentSpan":"\u0633\u064a\u062a\u0645 \u0639\u0631\u0636 \u062a\u0644\u0645\u064a\u062d \u0639\u0646\u062f\u0645\u0627 \u064a\u062f\u062e\u0644 \u0627\u0644\u0645\u0627\u0648\u0633.","uiElements.tooltip.contentSpan":"\u062a\u0644\u0645\u064a\u062d \u0627\u0644\u0645\u062d\u062a\u0648\u0649","uiElements.tags.tags":"\u0627\u0644\u0643\u0644\u0645\u0627\u062a","uiElements.tags.basicExample":"\u0645\u062b\u0627\u0644 \u0623\u0633\u0627\u0633\u064a","uiElements.tags.basicExampleSubTitle":"\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629\u060c \u0648\u064a\u0645\u0643\u0646 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0642\u0627\u0628\u0644\u0627 \u0644\u0644\u0625\u063a\u0644\u0627\u0642 \u0639\u0646 \u0637\u0631\u064a\u0642 \u0645\u062c\u0645\u0648\u0639\u0629 \u0627\u0644\u0645\u0645\u062a\u0644\u0643\u0627\u062a \u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0625\u063a\u0644\u0627\u0642. \u0643\u0644\u0648\u0633\u0627\u0628\u0644 \u062a\u062f\u0639\u0645 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0625\u063a\u0644\u0648\u0633 \u0628\u0639\u062f \u0623\u062d\u062f\u0627\u062b \u0643\u0644\u0648\u0633.","uiElements.tags.tagOne":"\u0639\u0644\u0627\u0645\u0629 1","uiElements.tags.tagTwo":"\u0639\u0644\u0627\u0645\u0629 2","uiElements.tags.link":"\u062d\u0644\u0642\u0629 \u0627\u0644\u0648\u0635\u0644","uiElements.tags.preventDefault":"\u0645\u0646\u0639 \u0627\u0641\u062a\u0631\u0627\u0636\u064a","uiElements.tags.colorfulTag":"\u0639\u0644\u0627\u0645\u0629 \u0645\u0644\u0648\u0646\u0629","uiElements.tags.hotTags":"\u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u0633\u0627\u062e\u0646\u0629","uiElements.tags.hotTagsSubTitle":"\u062d\u062f\u062f \u0627\u0644\u0645\u0648\u0636\u0648\u0639\u0627\u062a \u0627\u0644\u0645\u0641\u0636\u0644\u0629 \u0644\u062f\u064a\u0643.","uiElements.tags.hots":"\u0627\u0644\u0633\u0648\u0627\u062e\u0646","uiElements.tags.addRemoveDynamically":"\u0625\u0636\u0627\u0641\u0629 & \u0625\u0632\u0627\u0644\u0629 \u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a\u0627","uiElements.tags.addRemoveDynamicallySubTitle":"\u0625\u0646\u0634\u0627\u0621 \u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062a \u0645\u0646 \u0642\u0628\u0644 \u0645\u062c\u0645\u0648\u0639\u0629\u060c \u064a\u0645\u0643\u0646\u0643 \u0625\u0636\u0627\u0641\u0629 \u0648\u0625\u0632\u0627\u0644\u0629 \u062d\u064a\u0648\u064a. \u0639\u0644\u0649 \u0623\u0633\u0627\u0633 \u0627\u0644\u062d\u062f\u062b \u0628\u0639\u062f \u0643\u0644\u0648\u0633\u060c \u0648\u0627\u0644\u062a\u064a \u0633\u064a\u062a\u0645 \u062a\u0634\u063a\u064a\u0644\u0647\u0627 \u0641\u064a \u062d\u064a\u0646 \u0646\u0647\u0627\u064a\u0629 \u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0645\u062a\u062d\u0631\u0643\u0629 \u0648\u062b\u064a\u0642.","uiElements.tags.newTag":"+ \u0639\u0644\u0627\u0645\u0629 \u062c\u062f\u064a\u062f\u0629","uiElements.timeline.timeline":"\u0627\u0644\u062c\u062f\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064a","uiElements.timeline.basicExample":"\u0645\u062b\u0627\u0644 \u0623\u0633\u0627\u0633\u064a","uiElements.timeline.basicTimeline":"\u0627\u0644\u062c\u062f\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064a \u0627\u0644\u0623\u0633\u0627\u0633\u064a","uiElements.timeline.lastNode":"\u0627\u0644\u0639\u0642\u062f\u0629 \u0627\u0644\u0623\u062e\u064a\u0631\u0629","uiElements.timeline.lastNodeContent":"\u0639\u0646\u062f\u0645\u0627 \u064a\u0643\u0648\u0646 \u0627\u0644\u062c\u062f\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064a \u063a\u064a\u0631 \u0645\u0643\u062a\u0645\u0644 \u0648\u0645\u0633\u062a\u0645\u0631\u060c \u0636\u0639 \u0639\u0642\u062f\u0629 \u0634\u0628\u062d \u0641\u064a \u0627\u0644\u0645\u0627\u0636\u064a. \u0633\u064a\u062a   \u0628\u0646\u062f\u064a\u0646\u063a =   \u062a\u0631\u0648     \u0623\u0648\u0631   \u0628\u0646\u062f\u064a\u0646\u063a =   a \u0631\u064a\u0627\u0643\u062a \u0625\u0644\u064a\u0645\u0646\u062a","uiElements.timeline.seeMore":"\u0634\u0627\u0647\u062f \u0627\u0644\u0645\u0632\u064a\u062f","uiElements.timeline.custom":"\u0627\u0644\u0639\u0627\u062f\u0629","uiElements.timeline.customContent":"\u062a\u0639\u064a\u064a\u0646 \u0639\u0642\u062f\u0629 \u0643\u0631\u0645\u0632 \u0623\u0648 \u0639\u0646\u0635\u0631 \u0645\u062e\u0635\u0635 \u0622\u062e\u0631.","uiElements.timeline.colorExample":"\u0645\u062b\u0627\u0644 \u0639\u0644\u0649 \u0627\u0644\u0623\u0644\u0648\u0627\u0646","uiElements.timeline.colorExampleContent":"\u062a\u0639\u064a\u064a\u0646 \u0644\u0648\u0646 \u0627\u0644\u062f\u0648\u0627\u0626\u0631. \u0627\u0644\u0623\u062e\u0636\u0631 \u064a\u0639\u0646\u064a \u0627\u0644\u0627\u0646\u062a\u0647\u0627\u0621 \u0623\u0648 \u062d\u0627\u0644\u0629 \u0627\u0644\u0646\u062c\u0627\u062d\u060c \u0623\u062d\u0645\u0631 \u064a\u0639\u0646\u064a \u0627\u0644\u062a\u062d\u0630\u064a\u0631 \u0623\u0648 \u0627\u0644\u062e\u0637\u0623\u060c \u0648\u0627\u0644\u0623\u0632\u0631\u0642 \u064a\u0639\u0646\u064a \u0627\u0633\u062a\u0645\u0631\u0627\u0631 \u0623\u0648 \u062d\u0627\u0644\u0629 \u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0629 \u0623\u062e\u0631\u0649.","uiElements.timeline.createServiceSite":"\u0625\u0646\u0634\u0627\u0621 \u0645\u0648\u0642\u0639 \u062e\u062f\u0645\u0627\u062a 2015-09-01","uiElements.timeline.solveInitialNetwork":"\u062d\u0644 \u0645\u0634\u0627\u0643\u0644 \u0627\u0644\u0634\u0628\u0643\u0629 \u0627\u0644\u0623\u0648\u0644\u064a\u0629 2015-09-01","uiElements.timeline.networkProblemSolved":"\u0645\u0634\u0627\u0643\u0644 \u0627\u0644\u0634\u0628\u0643\u0629 \u0627\u0644\u062a\u064a \u064a\u062a\u0645 \u062d\u0644\u0647\u0627 2015-09-01","uiElements.timeline.technicalTesting":"\u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631\u0627\u062a \u0627\u0644\u0641\u0646\u064a\u0629 2015-09-01","uiElements.dropdown.dropdown":"\u0627\u0633\u0642\u0627\u0637","uiElements.dropdown.hoverDropdown":"\u0645\u0631\u0631 \u0644\u0623\u0633\u0641\u0644","uiElements.dropdown.hoverMe":"\u0645\u0631\u0631 \u0644\u064a","uiElements.dropdown.hoverPlacement":"\u062a\u062d\u0648\u0645 \u0627\u0644\u062a\u0646\u0633\u064a\u0628 \u0627\u0644\u0645\u0646\u0633\u062f\u0644\u0629","uiElements.dropdown.hoverDisableLink":"\u0645\u0631\u0631 \u0645\u0624\u0634\u0631 \u0627\u0644\u0645\u0627\u0648\u0633 \u0644\u0623\u0633\u0641\u0644 \u0645\u0639 \u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u0631\u0627\u0628\u0637","uiElements.dropdown.clickedDropdown":"\u0627\u0644\u0646\u0642\u0631 \u0627\u0644\u0645\u0646\u0633\u062f\u0644\u0629","uiElements.dropdown.buttonDropdown":"\u0632\u0631 \u0645\u0639 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0646\u0633\u062f\u0644\u0629","uiElements.pagination.pagination":"\u062a\u0631\u0642\u064a\u0645 \u0627\u0644\u0635\u0641\u062d\u0627\u062a","uiElements.pagination.basic":"\u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629","uiElements.pagination.more":"\u0623\u0643\u062b\u0631 \u0645\u0646","uiElements.pagination.changer":"\u0627\u0644\u0645\u063a\u064a\u0631","uiElements.pagination.jumper":"\u0633\u062a\u0631\u0629 \u0627\u0648 \u0642\u0641\u0627\u0632 \u0627\u0648 \u0644\u0627\u0639\u0628 \u0642\u0641\u0632","uiElements.pagination.miniSize":"\u062d\u062c\u0645 \u0635\u063a\u064a\u0631","uiElements.pagination.simpleMode":"\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0628\u0633\u064a\u0637","uiElements.pagination.controlled":"\u062e\u0627\u0636\u0639 \u0644\u0644\u0633\u064a\u0637\u0631\u0629","uiElements.pagination.totalNumber":"\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a","uiElements.rating.rating":"\u062a\u0642\u064a\u064a\u0645","uiElements.rating.basicExample":"\u0645\u062b\u0627\u0644 \u0623\u0633\u0627\u0633\u064a","uiElements.rating.basicExampleSubTitle":"\u0623\u0628\u0633\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645.","uiElements.rating.halfStar":"\u0646\u0635\u0641 \u0646\u062c\u0648\u0645","uiElements.rating.halfStarSubTitle":"\u062f\u0639\u0645 \u062d\u062f\u062f \u0646\u0635\u0641 \u0627\u0644\u0646\u062c\u0645.","uiElements.rating.showCopywriting":"\u0639\u0631\u0636 \u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0646\u0635\u0648\u0635","uiElements.rating.showCopywritingSubTitle":"\u0625\u0636\u0627\u0641\u0629 \u0645\u0643\u0648\u0646\u0627\u062a \u0627\u0644\u0643\u062a\u0627\u0628\u0629 \u0641\u064a \u0645\u0639\u062f\u0644.","uiElements.rating.readOnly":"\u064a\u0642\u0631\u0623 \u0641\u0642\u0637","uiElements.rating.readOnlySubTitle":"\u0644\u0644\u0642\u0631\u0627\u0621\u0629 \u0641\u0642\u0637\u060c \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0645\u0627\u0648\u0633 \u0644\u0644\u062a\u0641\u0627\u0639\u0644.","uiElements.rating.otherCharacter":"\u0634\u062e\u0635\u064a\u0629 \u0623\u062e\u0631\u0649","uiElements.rating.otherCharacterSubTitle":"\u0627\u0633\u062a\u0628\u062f\u0627\u0644 \u0627\u0644\u0646\u062c\u0645\u0629 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0629 \u0625\u0644\u0649 \u062d\u0631\u0641 \u0622\u062e\u0631 \u0645\u062b\u0644 \u0627\u0644\u0623\u0628\u062c\u062f\u064a\u0629\u060c \u0623\u0631\u0642\u0627\u0645\u060c \u0625\u064a\u0643\u0648\u0646\u0641\u0648\u0646\u062a \u0623\u0648 \u062d\u062a\u0649 \u0643\u0644\u0645\u0629 \u0627\u0644\u0635\u064a\u0646\u064a\u0629.","uiElements.tree.tree":"\u0634\u062c\u0631\u0629","uiElements.tree.basicExample":"\u0645\u062b\u0627\u0644 \u0623\u0633\u0627\u0633\u064a","uiElements.tree.basicExampleSubTitle":"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u060c \u0623\u062e\u0628\u0631\u0643 \u0639\u0646 \u0643\u064a\u0641\u064a\u0629 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0642\u0627\u0628\u0644 \u0644\u0644\u062a\u062d\u062f\u064a\u062f\u060c \u0642\u0627\u0628\u0644 \u0644\u0644\u062a\u062d\u062f\u064a\u062f\u060c \u062a\u0639\u0637\u064a\u0644\u060c \u062f\u064a\u0641\u0648\u0644\u062a\u0643\u0633\u0627\u0646\u062f\u064a\u0643\u064a\u0633\u060c \u0648\u0645\u0627 \u0625\u0644\u0649 \u0630\u0644\u0643.","uiElements.tree.basicControlledExample":"\u0645\u062b\u0627\u0644 \u062a\u062d\u0643\u0645 \u0623\u0633\u0627\u0633\u064a","uiElements.tree.basicControlledExampleSubTitle":"\u0645\u062b\u0627\u0644 \u0623\u0633\u0627\u0633\u064a \u0644\u0644\u062a\u062d\u0643\u0645","uiElements.tree.draggableExample":"\u0645\u062b\u0627\u0644 \u0642\u0627\u0628\u0644 \u0644\u0644\u0633\u062d\u0628","uiElements.tree.draggableExampleSubTitle":"\u0627\u0633\u062d\u0628 \u062a\u0631\u064a\u0646\u0648\u062f \u0644\u0625\u062f\u0631\u0627\u062c \u0628\u0639\u062f \u062a\u0631\u064a\u0646\u0648\u062f \u0623\u062e\u0631\u0649 \u0623\u0648 \u0625\u062f\u0631\u0627\u062c \u0641\u064a \u062a\u0631\u064a\u0646\u0648\u062f \u0627\u0644\u0623\u0635\u0644 \u0627\u0644\u0622\u062e\u0631.","uiElements.tree.loadAsync":"\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0628\u0634\u0643\u0644 \u063a\u064a\u0631 \u0645\u062a\u0632\u0627\u0645\u0646","uiElements.tree.loadAsyncSubTitle":"\u0644\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0628\u0634\u0643\u0644 \u063a\u064a\u0631 \u0645\u062a\u0632\u0627\u0645\u0646 \u0639\u0646\u062f \u0627\u0644\u0646\u0642\u0631 \u0644\u062a\u0648\u0633\u064a\u0639 \u062a\u0631\u064a\u0646\u0648\u062f.","uiElements.tree.searchableExample":"\u0645\u062b\u0627\u0644 \u0642\u0627\u0628\u0644 \u0644\u0644\u0628\u062d\u062b","uiElements.tree.searchableExampleSubTitle":"\u0634\u062c\u0631\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0628\u062d\u062b","uiElements.tree.treeWithLine":"\u0634\u062c\u0631\u0629 \u0645\u0639 \u062e\u0637","shuffle.descriptionOne":"\u0646\u064a\u062a\u0633\u0643\u064a\u0628 2.0 \u0627\u0644\u0633\u0641\u0646\u060c \u0648\u062a\u0642\u062f\u064a\u0645 \u062c\u0627\u0641\u0627 \u0633\u0643\u0631\u064a\u0628\u062a","shuffle.descriptionTwo":"\u062c\u064a\u0633\u064a \u062c\u064a\u0645\u0633 \u063a\u0627\u0631\u064a\u062a \u064a\u0637\u0644\u0642 \u0645\u0648\u0627\u0635\u0641\u0627\u062a \u0623\u062c\u0627\u0643\u0633","shuffle.descriptionThree":"\u062c\u0643\u0631\u064a 1.0 \u0635\u062f\u0631","shuffle.descriptionFour":"\u062a\u0644\u062a\u0632\u0645 suberscore.js \u0627\u0644\u0623\u0648\u0644\u0649","shuffle.descriptionFive":"Backbone.js \u064a\u0635\u0628\u062d \u0634\u064a\u0626\u0627","shuffle.descriptionSix":"\u0627\u0644\u0632\u0627\u0648\u064a 1.0 \u0635\u062f\u0631","shuffle.descriptionSeven":"\u0631\u062f \u0641\u0639\u0644 \u0645\u0641\u062a\u0648\u062d \u0627\u0644\u0645\u0635\u062f\u0631\u061b \u0627\u0644\u0645\u0637\u0648\u0631\u064a\u0646 \u0646\u0641\u0631\u062d","toggle.list":"\u0642\u0627\u0626\u0645\u0629","toggle.grid":"\u0634\u0628\u0643\u0629","toggle.ascending":"\u062a\u0635\u0627\u0639\u062f\u064a","toggle.descending":"\u062a\u0646\u0627\u0632\u0644\u064a","toggle.shuffle":"\u062e\u0644\u0637","toggle.rotate":"\u0627\u0633\u062a\u062f\u0627\u0631\u0629","toggle.addItem":"\u0627\u0636\u0627\u0641\u0629 \u0639\u0646\u0635\u0631","toggle.removeItem":"\u0625\u0632\u0627\u0644\u0629 \u0628\u0646\u062f","contactlist.searchContacts":"\u0627\u062a\u0635\u0627\u0644\u0627\u062a \u0628\u062d\u062b","contactlist.addNewContact":"\u0625\u0636\u0627\u0641\u0629 \u062c\u0647\u0629 \u0627\u062a\u0635\u0627\u0644 \u062c\u062f\u064a\u062f\u0629","notes.ChoseColor":"\u0627\u062e\u062a\u0631 \u0644\u0648\u0646\u0627 \u0644\u0645\u0644\u0627\u062d\u0638\u062a\u0643","notes.addNote":"\u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0627\u062d\u0638\u0629 \u062c\u062f\u064a\u062f\u0629","page404.title":"404","page404.subTitle":"\u064a\u0628\u062f\u0648 \u0623\u0646\u0643 \u0642\u062f \u0641\u0642\u062f\u062a","page404.description":"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u062a\u064a \u062a\u0628\u062d\u062b \u0639\u0646\u0647\u0627 \u063a\u064a\u0631 \u0645\u0648\u062c\u0648\u062f\u0629 \u0623\u0648 \u062a\u0645 \u0646\u0642\u0644\u0647\u0627.","page404.backButton":"\u0639\u0648\u062f\u0629 \u0627\u0644\u0645\u0646\u0632\u0644","page500.title":"500","page500.subTitle":"\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u062e\u0627\u062f\u0645 \u0627\u0644\u062f\u0627\u062e\u0644\u064a","page500.description":"\u0647\u0646\u0627\u0643 \u062e\u0637\u0623 \u0645\u0627. \u0627\u0644\u0631\u062c\u0627\u0621 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629.","page500.backButton":"\u0639\u0648\u062f\u0629 \u0627\u0644\u0645\u0646\u0632\u0644","page.forgetPassTitle":"\u0645\u062a\u0645\u0627\u062b\u0644","page.forgetPassSubTitle":"\u0647\u0644 \u0646\u0633\u064a\u062a \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061f","page.forgetPassDescription":"\u0623\u062f\u062e\u0644 \u0628\u0631\u064a\u062f\u0643 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0648\u0646\u0631\u0633\u0644 \u0625\u0644\u064a\u0643 \u0631\u0627\u0628\u0637 \u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646.","page.sendRequest":"\u0627\u0631\u0633\u0644 \u0637\u0644\u0628","page.resetPassTitle":"\u0645\u062a\u0645\u0627\u062b\u0644","page.resetPassSubTitle":"\u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631","page.resetPassDescription":"\u0623\u062f\u062e\u0644 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u062c\u062f\u064a\u062f\u0629 \u0648\u0642\u0645 \u0628\u062a\u0623\u0643\u064a\u062f\u0647\u0627.","page.resetPassSave":"\u062d\u0641\u0638","page.signInTitle":"\u0645\u062a\u0645\u0627\u062b\u0644","page.signInRememberMe":"\u062a\u0630\u0643\u0631\u0646\u0649","page.signInButton":"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644","page.signInPreview":"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645  \u062a\u062c\u0631\u064a\u0628\u064a\u060c \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631  \u062f\u064a\u0645\u0648\u062f\u064a\u0645\u0648\u060c \u0623\u0648 \u0641\u0642\u0637 \u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \u0623\u064a \u0632\u0631.","page.signInFacebook":"\u0642\u0645 \u0628\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0641\u064a\u0633\u0628\u0648\u0643","page.signInGooglePlus":"\u0633\u062c\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u063a\u0648\u063a\u0644 \u0628\u0644\u0648\u0633","page.signInAuth0":"\u0633\u062c\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0623\u0648\u062b0","page.signInForgotPass":"\u0647\u0644 \u0646\u0633\u064a\u062a \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631","page.signInCreateAccount":"\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628 \u0625\u0633\u0648\u0645\u0648\u0631\u0641\u0648\u064a\u0643","page.signUpTitle":"\u0645\u062a\u0645\u0627\u062b\u0644","page.signUpTermsConditions":"\u0623\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645","page.signUpButton":"\u0633\u062c\u0644","page.signUpFacebook":"\u0627\u0634\u062a\u0631\u0643 \u0639\u0628\u0631 \u062d\u0633\u0627\u0628 \u0641\u0627\u064a\u0633\u0628\u0648\u0643","page.signUpGooglePlus":"\u0627\u0634\u062a\u0631\u0643 \u0645\u0639 \u063a\u0648\u063a\u0644 \u0628\u0644\u0648\u0633","page.signUpAuth0":"\u0627\u0634\u062a\u0631\u0643 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0623\u0648\u062b0","page.signUpAlreadyAccount":"\u0647\u0644 \u0644\u062f\u064a\u0643 \u062d\u0633\u0627\u0628 \u0628\u0627\u0644\u0641\u0639\u0644\u061f \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644.","widget.reportswidget.label":"\u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a","widget.reportswidget.details":"\u0644\u0648\u0631\u064a\u0645 \u0625\u064a\u0628\u0633\u0648\u0645 \u062f\u0648\u0644\u0648\u0631 \u0633\u064a\u062a \u0623\u0645\u064a\u062a\u060c \u0643\u0648\u0646\u0633\u0643\u062a\u064a\u062a\u0648\u0631 \u0623\u062f\u064a\u0628\u064a\u0633\u064a\u0633\u064a\u0646\u063a \u0625\u0644\u064a\u062a\u060c \u0633\u064a\u062f \u062f\u0648 \u0625\u064a\u0633\u0645\u0648\u062f \u062a\u064a\u0645\u0628\u0648\u0631","widget.singleprogresswidget1.label":"\u062a\u0633\u0648\u064a\u0642","widget.singleprogresswidget2.label":"Addvertisement","widget.singleprogresswidget3.label":"\u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a","widget.singleprogresswidget4.label":"\u062a\u0637\u0648\u064a\u0631","widget.stickerwidget1.number":"210","widget.stickerwidget1.text":"\u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u063a\u064a\u0631 \u0645\u0642\u0631\u0648\u0621","widget.stickerwidget2.number":"1749","widget.stickerwidget2.text":"\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0635\u0648\u0631","widget.stickerwidget3.number":"3024","widget.stickerwidget3.text":"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0631\u0633\u0627\u0644\u0629","widget.stickerwidget4.number":"54","widget.stickerwidget4.text":"\u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629","widget.salewidget1.label":"\u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a","widget.salewidget1.price":"$ 15000","widget.salewidget1.details":"\u0644\u0648\u0631\u064a\u0645 \u0625\u064a\u0628\u0633\u0648\u0645 \u062f\u0648\u0644\u0648\u0631 \u0633\u064a\u062a \u0623\u0645\u064a\u062a\u060c \u0643\u0648\u0646\u0633\u0643\u062a\u064a\u062a\u0648\u0631 \u0623\u062f\u064a\u0628\u064a\u0633\u064a\u0633\u064a\u0646\u063a \u0625\u0644\u064a\u062a\u060c \u0633\u064a\u062f \u062f\u0648 \u0625\u064a\u0633\u0645\u0648\u062f \u062a\u064a\u0645\u0628\u0648\u0631","widget.salewidget2.label":"\u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a","widget.salewidget2.price":"$ 15000","widget.salewidget2.details":"\u0644\u0648\u0631\u064a\u0645 \u0625\u064a\u0628\u0633\u0648\u0645 \u062f\u0648\u0644\u0648\u0631 \u0633\u064a\u062a \u0623\u0645\u064a\u062a\u060c \u0643\u0648\u0646\u0633\u0643\u062a\u064a\u062a\u0648\u0631 \u0623\u062f\u064a\u0628\u064a\u0633\u064a\u0633\u064a\u0646\u063a \u0625\u0644\u064a\u062a\u060c \u0633\u064a\u062f \u062f\u0648 \u0625\u064a\u0633\u0645\u0648\u062f \u062a\u064a\u0645\u0628\u0648\u0631","widget.salewidget3.label":"\u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a","widget.salewidget3.price":"$ 15000","widget.salewidget3.details":"\u0644\u0648\u0631\u064a\u0645 \u0625\u064a\u0628\u0633\u0648\u0645 \u062f\u0648\u0644\u0648\u0631 \u0633\u064a\u062a \u0623\u0645\u064a\u062a\u060c \u0643\u0648\u0646\u0633\u0643\u062a\u064a\u062a\u0648\u0631 \u0623\u062f\u064a\u0628\u064a\u0633\u064a\u0633\u064a\u0646\u063a \u0625\u0644\u064a\u062a\u060c \u0633\u064a\u062f \u062f\u0648 \u0625\u064a\u0633\u0645\u0648\u062f \u062a\u064a\u0645\u0628\u0648\u0631","widget.salewidget4.label":"\u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a","widget.salewidget4.price":"$ 15000","widget.salewidget4.details":"\u0644\u0648\u0631\u064a\u0645 \u0625\u064a\u0628\u0633\u0648\u0645 \u062f\u0648\u0644\u0648\u0631 \u0633\u064a\u062a \u0623\u0645\u064a\u062a\u060c \u0643\u0648\u0646\u0633\u0643\u062a\u064a\u062a\u0648\u0631 \u0623\u062f\u064a\u0628\u064a\u0633\u064a\u0633\u064a\u0646\u063a \u0625\u0644\u064a\u062a\u060c \u0633\u064a\u062f \u062f\u0648 \u0625\u064a\u0633\u0645\u0648\u062f \u062a\u064a\u0645\u0628\u0648\u0631","widget.cardwidget1.number":"110","widget.cardwidget1.text":"\u0631\u0633\u0627\u0626\u0644 \u062c\u062f\u064a\u062f\u0629","widget.cardwidget2.number":"100\u066a","widget.cardwidget2.text":"\u0627\u0644\u0635\u0648\u062a","widget.cardwidget3.number":"137","widget.cardwidget3.text":"\u0645\u0648\u0647\u0644\u0627\u062a","widget.progresswidget1.label":"\u062a\u062d\u0645\u064a\u0644","widget.progresswidget1.details":"50\u066a \u0643\u0627\u0645\u0644\u0629","widget.progresswidget2.label":"\u0627\u0644\u062f\u0639\u0645","widget.progresswidget2.details":"80\u066a \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0631\u0627\u0636","widget.progresswidget3.label":"\u062a\u062d\u0645\u064a\u0644","widget.progresswidget3.details":"65\u066a \u0643\u0627\u0645\u0644\u0629","widget.vcardwidget.name":"\u062c\u0648\u0646 \u062f\u0648","widget.vcardwidget.title":"\u0645\u0637\u0648\u0631 \u064a\u0648\u0633","widget.vcardwidget.description":"\u0644\u0648\u0631\u064a\u0645 \u0625\u064a\u0628\u0633\u0648\u0645 \u062f\u0648\u0644\u0648\u0631 \u0633\u064a\u062a \u0623\u0645\u064a\u062a\u060c \u0643\u0648\u0646\u0633\u0643\u062a\u064a\u062a\u0648\u0631 \u0623\u062f\u064a\u0628\u064a\u0633\u064a\u0633\u064a\u0646\u063a \u0625\u0644\u064a\u062a\u060c \u0633\u064a\u062f \u062f\u0648 \u0625\u064a\u0633\u0645\u0648\u062f \u062a\u064a\u0645\u0628\u0648\u0631 \u0623\u0645\u062a \u0631\u0648\u0644\u0631 \u0643\u0648\u0646\u0633\u0643\u062a\u064a\u062a\u0648\u0631 \u0623\u062f\u064a\u0628\u064a\u0633\u064a\u0633\u064a\u0646\u063a \u0625\u0644\u064a\u062a","checkout.billingform.firstname":"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644","checkout.billingform.lastname":"\u0627\u0644\u0643\u0646\u064a\u0629","checkout.billingform.company":"\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629","checkout.billingform.email":"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a","checkout.billingform.mobile":"\u0631\u0642\u0645 \u0627\u0644\u0645\u062d\u0645\u0648\u0644","checkout.billingform.country":"\u0628\u0644\u062f","checkout.billingform.city":"\u0645\u062f\u064a\u0646\u0629","checkout.billingform.address":"\u0639\u0646\u0648\u0627\u0646","checkout.billingform.addressoptional":"\u0634\u0642\u0629\u060c \u062c\u0646\u0627\u062d\u060c \u0648\u062d\u062f\u0629 \u0627\u0644\u062e (\u0627\u062e\u062a\u064a\u0627\u0631\u064a","checkout.billingform.checkbox":"\u0627\u0646\u0634\u0626 \u062d\u0633\u0627\u0628\u061f","antTable.title.image":"\u0635\u0648\u0631\u0629","antTable.title.firstName":"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644","antTable.title.lastName":"\u0627\u0644\u0643\u0646\u064a\u0629","antTable.title.city":"\u0645\u062f\u064a\u0646\u0629","antTable.title.street":"\u0634\u0627\u0631\u0639","antTable.title.email":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a","antTable.title.dob":"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u064a\u0644\u0627\u062f","Map.leaflet.basicTitle":"\u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629","Map.leaflet.basicMarkerTitle":"\u062e\u0631\u064a\u0637\u0629 \u0623\u0633\u0627\u0633\u064a\u0629 (\u0645\u0639 \u0639\u0644\u0627\u0645\u0629 \u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0629","Map.leaflet.leafletCustomMarkerTitle":"\u062e\u0631\u064a\u0637\u0629 \u0623\u0633\u0627\u0633\u064a\u0629 (\u0645\u0639 \u0639\u0644\u0627\u0645\u0629 \u0631\u0645\u0632 \u0645\u062e\u0635\u0635","Map.leaflet.leafletCustomHtmlMarkerTitle":"\u062e\u0631\u064a\u0637\u0629 \u0623\u0633\u0627\u0633\u064a\u0629 (\u0645\u0639 \u0639\u0644\u0627\u0645\u0629 \u0647\u062a\u0645\u0644 \u0645\u062e\u0635\u0635\u0629","Map.leaflet.leafletMarkerClusterTitle":"\u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 (\u0645\u0639 \u0645\u062c\u0645\u0648\u0639\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062a","Map.leaflet.leafletRoutingTitle":"\u062e\u0631\u064a\u0637\u0629 \u0623\u0633\u0627\u0633\u064a\u0629 \u0627\u0644\u062a\u0648\u062c\u064a\u0647","Component.contacts.noOption":"\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u062c\u0647\u0629 \u0627\u062a\u0635\u0627\u0644","email.send":"\u0625\u0631\u0633\u0627\u0644","email.cancel":"\u0625\u0644\u063a\u0627\u0621","email.compose":"\u0645\u0624\u0644\u0641 \u0645\u0648\u0633\u064a\u0642\u0649","email.noMessage":"\u0627\u0644\u0631\u062c\u0627\u0621 \u062a\u062d\u062f\u064a\u062f \u0628\u0631\u064a\u062f \u0644\u0644\u0642\u0631\u0627\u0621\u0629","themeSwitcher.purchase":"\u0634\u0631\u0627\u0621 \u0627\u0644\u0622\u0646","themeSwitcher.settings":"\u0625\u0639\u062f\u0627\u062f\u0627\u062a","sidebar.selectbox":"\u062a\u062d\u062f\u064a\u062f","topbar.myprofile":"\u0645\u0644\u0641\u064a"}'
      );
    },
    201: function(e) {
      e.exports = JSON.parse(
        '{"sidebar.swiperslider":"Slider","sidebar.email":"E-mail","sidebar.chat":"Chiacchierare","sidebar.ecommerce":"ecommerce","sidebar.shop":"Negozio","sidebar.cart":"Carrello","sidebar.checkout":"check-out","sidebar.cards":"Carte","sidebar.maps":"Mappe","sidebar.googleMap":"Google Map","sidebar.leafletMap":"Mappa del foglio","sidebar.calendar":"Calendario","sidebar.firestorecrud":"Firestore CRUD","sidebar.firestorecrudarticle":"articoli","sidebar.firestorecrudinvestor":"Investitori","sidebar.notes":"Gli appunti","sidebar.todos":"Todos","sidebar.contacts":"Contatti","sidebar.shuffle":"rimescolare","sidebar.charts":"Grafici","sidebar.googleCharts":"Google Carts","sidebar.recharts":"Recharts","sidebar.reactVis":"React Vis","sidebar.reactChart2":"React-Chart-2","sidebar.reactTrend":"React-Trend","sidebar.eChart":"Echart","sidebar.forms":"Forme","sidebar.input":"Ingresso","sidebar.editor":"editore","sidebar.formsWithValidation":"Forme con validazione","sidebar.progress":"Progresso","sidebar.button":"Pulsante","sidebar.tab":"linguetta","sidebar.checkbox":"casella di controllo","sidebar.radiobox":"radiobox","sidebar.transfer":"Trasferimento","sidebar.autocomplete":"Completamento automatico","sidebar.boxOptions":"Opzioni casella","sidebar.uiElements":"Elementi UI","sidebar.badge":"Distintivo","sidebar.card2":"Carta","sidebar.corusel":"gozzoviglia","sidebar.collapse":"Crollo","sidebar.popover":"Pop Over","sidebar.tooltip":"tooltip","sidebar.tag":"Etichetta","sidebar.timeline":"Sequenza temporale","sidebar.dropdown":"Cadere in picchiata","sidebar.pagination":"paginatura","sidebar.rating":"Valutazione","sidebar.tree":"Albero","sidebar.advancedElements":"Elementi avanzati","sidebar.reactDates":"Date di reazione","sidebar.codeMirror":"Specchio di codice","sidebar.uppy":"Uploader Uppy","sidebar.dropzone":"Zona di rilascio","sidebar.feedback":"Risposta","sidebar.alert":"Mettere in guardia","sidebar.modal":"Modale","sidebar.message":"Messaggio","sidebar.notification":"Notifica","sidebar.popConfirm":"Pop Conferma","sidebar.spin":"Roteare","sidebar.tables":"tabelle","sidebar.antTables":"Ant Table","sidebar.pages":"pagine","sidebar.500":"500","sidebar.404":"404","sidebar.signIn":"Registrati","sidebar.signUp":"Registrazione","sidebar.forgotPw":"Hai dimenticato le password","sidebar.resetPw":"Azzerare le password","sidebar.invoice":"Fattura","sidebar.menuLevels":"Livelli del menu","sidebar.item1":"Voce 1","sidebar.item2":"Articolo 2","sidebar.option1":"opzione 1","sidebar.option2":"Opzione 2","sidebar.option3":"Opzione 3","sidebar.option4":"Opzione 4","sidebar.blankPage":"Pagina vuota","sidebar.githubSearch":"Ricerca Github","sidebar.youtubeSearch":"Cambia lingua","languageSwitcher.label":"Switcher di temi","themeSwitcher":"Sidebar","themeSwitcher.Sidebar":"topbar","themeSwitcher.Topbar":"sfondo","themeSwitcher.Background":"Titolo di base","feedback.alert.basicTitle":"Testo di successo","feedback.alert.successText":"Info Testo","feedback.alert.infoText":"Testo di avviso","feedback.alert.warningText":"Testo di errore","feedback.alert.errorText":"Tipo avvisi chiudibili","feedback.alert.closableAlertType":"Tipo di avviso di icone","feedback.alert.iconAlertType":"Tipo di avviso di informazioni sullicona","feedback.alert.iconInfoAlertType":"suggerimenti di successo","feedback.alert.successTips":"Descrizione dettagliata e consigli su copywriting di successo.","feedback.alert.successTipsDescription":"Note informative","feedback.alert.informationTips":"Descrizione e informazioni aggiuntive su copywriting.","feedback.alert.informationDescription":"avvertimento","feedback.alert.warningTips":"Questo \xe8 un avviso di avviso di copywriting.","feedback.alert.warningDescription":"Errore","feedback.alert.errorTips":"Si tratta di un messaggio di errore relativo a copywriting.","feedback.alert.errorDescription":"Modale con personalizzazione di pi\xe8 di pagina","feedback.alert.modalTitle":"Dialogo modale di base.","feedback.alert.modalSubTitle":"Successo","feedback.alert.successTitle":"Informazioni","feedback.alert.infoTitle":"Errore","feedback.alert.errorTitle":"avvertimento","feedback.alert.warningTitle":"Modale","feedback.alert.modalBlockTitle":"Finestra di dialogo Modalit\xe0 di conferma","feedback.alert.confirmationModalDialogue":"Semplice dialogo modale","feedback.alert.simpleModalDialogue":"Messaggio","feedback.alert.message":"Messaggio normale","feedback.alert.normalMessageTitle":"Messaggi normali come feedback.","feedback.alert.normalMessageSubtitle":"Visualizza il messaggio normale","feedback.alert.displayMessage":"Altri tipi di messaggio","feedback.alert.displayOtherTypeMessageTitle":"Messaggi di tipo di successo   di errore e di avviso.","feedback.alert.displayOtherTypeMessageSubTitle":"Personalizza durata","feedback.alert.customizeDurationTitle":"personalizzare la durata della visualizzazione dei messaggi da default da 1.5s a 10s.","feedback.alert.customizeDurationSubTitle":"Durata del display personalizzata","feedback.alert.customizeDurationButton":"Messaggio di caricamento","feedback.alert.messageLoadingTitle":"Visualizzare un indicatore globale di caricamento   che viene eliminato in modo sincrono.","feedback.alert.messageLoadingSubTitle":"Visualizzare un indicatore di caricamento","feedback.alert.displayLoadIndicator":"Notifica","feedback.alert.notification":"Di base","feedback.alert.notificationBasicTitle":"Lutilizzo pi\xf9 semplice che chiude la casella di notifica dopo 4.5s.","feedback.alert.notificationBasicSubTitle":"Aprire la casella di notifica","feedback.alert.notificationBasicDescription":"Durata dopo la chiusura della casella di notifica","feedback.alert.notificationDurationTitle":"La durata pu\xf2 essere utilizzata per specificare la durata della notifica rimanere aperta. Dopo la scadenza della durata   la notifica si chiude automaticamente. Se non \xe8 specificato   il valore predefinito \xe8 di 4  5 secondi. Se si imposta il valore su 0   la casella di notifica non si chiude automaticamente.","feedback.alert.notificationDurationSubTitle":"Notifica con icona","feedback.alert.notificationwithIconTitle":"Una casella di notifica con unicona sul lato sinistro.","feedback.alert.notificationwithIconSubTitle":"Notifica con icona personalizzata","feedback.alert.notificationwithCustomIconTitle":"Messaggi normali come feedback.","feedback.alert.notificationwithCustomIconSubTitle":"Notifica con il pulsante personalizzato","feedback.alert.notificationwithCustomButtonTitle":"Messaggi normali come feedback.","feedback.alert.notificationwithCustomButtonSubTitle":"Pop Conferma","feedback.alert.popConfirm":"Conferma fondamentale","feedback.alert.popConfirm.basicTitle":"Lesempio di base.","feedback.alert.popConfirm.basicSubTitle":"Elimina","feedback.alert.popConfirm.delete":"Notifica con icona personalizzata","feedback.alert.popConfirm.notiWithIconTitle":"Messaggi normali come feedback.","feedback.alert.popConfirm.notiWithIconSubTitle":"TL","feedback.alert.popConfirm.TL":"Superiore","feedback.alert.popConfirm.top":"TR","feedback.alert.popConfirm.TR":"LT","feedback.alert.popConfirm.LT":"Sinistra","feedback.alert.popConfirm.left":"LIBBRE","feedback.alert.popConfirm.LB":"RT","feedback.alert.popConfirm.RT":"Destra","feedback.alert.popConfirm.right":"RB","feedback.alert.popConfirm.RB":"BL","feedback.alert.popConfirm.Bl":"Parte inferiore","feedback.alert.popConfirm.bottom":"BR","feedback.alert.popConfirm.BR":"Roteare","feedback.alert.spin":"Dimensioni Spin","feedback.alert.spin.basicTitle":"Spin con lo sfondo","feedback.alert.spin.background":"Spin con descrizione di sfondo","feedback.alert.spin.backgroundDescription":"Stato di caricamento","feedback.alert.spin.loadingState":"Titolo del messaggio di avviso","feedback.alert.spin.alertTitle":"Ulteriori dettagli sul contesto di questo avviso.","feedback.alert.spin.alertDescription":"Ingresso","forms.input.header":"Utilizzo di base","forms.input.basicTitle":"Esempio di utilizzo di base.","forms.input.basicSubTitle":"Tre formati di ingresso","forms.input.variationsTitle":"Sono disponibili tre dimensioni di una casella Input  grande (42px     predefinito (35px   e piccolo (30px  . Nota  Allinterno delle forme viene utilizzata solo la grande dimensione.","forms.input.variationsSubtitle":"Gruppo di input","forms.input.groupTitle":"Esempio di input.Group Nota  Non \xe8 necessario Col per controllare la larghezza nella modalit\xe0 compatta.","forms.input.groupSubTitle":"Autosizing laltezza per adattarsi al contenuto","forms.input.autoSizingTitle":"autosize prop per un tipo di textarea dellinput rende laltezza regolabile automaticamente in base al contenuto. Pu\xf2 essere fornito un oggetto opzioni per autosizzare per specificare il numero minimo e massimo di righe che larea textarea regoler\xe0 automaticamente.","forms.input.autoSizingSubTitle":"Scheda Pre    Post","forms.input.prePostTabTitle":"Utilizzo di pre & amp; esempi di tabulazioni post ..","forms.input.prePostTabSubTitle":"Textarea","forms.input.textAreaTitle":"Per i casi di input utente multi-line   \xe8 possibile utilizzare un input il cui tipo prop ha il valore di textarea.","forms.input.textAreaSubTitle":"Ricerca","forms.input.searchTitle":"Esempio di creazione di una casella di ricerca raggruppando un input standard con un pulsante di ricerca","forms.input.searchSubTitle":"editore","forms.editor.header":"Modulo di convalida personalizzata","forms.formsWithValidation.header":"Fallire","forms.formsWithValidation.failLabel":"Dovrebbe essere combinazione di numeri & amp; alfabeti","forms.formsWithValidation.failHelp":"avvertimento","forms.formsWithValidation.warningLabel":"Convalida","forms.formsWithValidation.ValidatingLabel":"Le informazioni vengono convalidate ...","forms.formsWithValidation.ValidatingHelp":"Successo","forms.formsWithValidation.SuccessLabel":"avvertimento","forms.formsWithValidation.WarninghasFeedbackLabel":"Fallire","forms.formsWithValidation.FailhasFeedbackLabel":"Dovrebbe essere combinazione di numeri & amp; alfabeti","forms.formsWithValidation.FailhasFeedbackHelp":"Barra di avanzamento","forms.progressBar.header":"Barra di avanzamento","forms.progressBar.standardTitle":"Una barra di avanzamento standard.","forms.progressBar.standardSubTitle":"Barra di progressione circolare","forms.progressBar.circularTitle":"Una barra di avanzamento circolare.","forms.progressBar.circularSubTitle":"Barra di avanzamento di taglia minima","forms.progressBar.miniTitle":"Adatto per una zona stretta.","forms.progressBar.miniSubTitle":"Una barra di avanzamento circolare pi\xf9 piccola.","forms.progressBar.miniCircularTitle":"Barra di avanzamento circolare dinamica","forms.progressBar.dynamicCircularTitle":"Una barra dinamica di avanzamento \xe8 migliore.","forms.progressBar.dynamicCircularSubTitle":"Formato di testo personalizzato","forms.progressBar.customTextTitle":"\xc8 possibile formattare il testo personalizzato impostando il formato.","forms.progressBar.customTextSubTitle":"Cruscotto","forms.progressBar.dashboardTitle":"Uno stile del cruscotto del progresso.","forms.progressBar.dashboardSubTitle":"pulsanti","forms.button.header":"Tipo di pulsante","forms.button.simpleButton":"Icona pulsante","forms.button.iconButton":"Primario","forms.button.simpleButtonPrimaryText":"Predefinito","forms.button.simpleButtonDefaultText":"tratteggiata","forms.button.simpleButtonDashedText":"Pericolo","forms.button.simpleButtonDangerText":"ricerca","forms.button.iconPrimaryButton":"ricerca","forms.button.iconSimpleButton":"ricerca","forms.button.iconCirculerButton":"ricerca","forms.button.iconDashedButton":"Dimensioni del pulsante","forms.button.SizedButton":"Pulsante disabilitato","forms.button.DisabledButton":"Caricamento del tasto","forms.button.LoadingButton":"Pulsante multiplo","forms.button.MultipleButton":"Gruppo di pulsanti","forms.button.groupButton":"Tabs","forms.Tabs.header":"ricerca","forms.Tabs.simpleTabTitle":"Schede disattivate","forms.Tabs.simpleTabSubTitle":"Tabulazioni delle icone","forms.Tabs.iconTabTitle":"Mini schede","forms.Tabs.miniTabTitle":"Schede Azione Extra","forms.Tabs.extraTabTitle":"Posizione","forms.Tabs.TabpositionTitle":"Posizione delle schede  sinistra   destra   superiore o inferiore","forms.Tabs.TabpositionSubTitle":"Schede del tipo di scheda","forms.Tabs.cardTitle":"Aggiungi e chiudi le schede","forms.Tabs.editableTitle":"Schede di tipo verticale","forms.Tabs.verticalTitle":"Schede di base","forms.Tabs.basicTitle":"casella di controllo","forms.checkbox.header":"Casella di controllo di base","forms.checkbox.basicTitle":"Utilizzo di base della casella di controllo.","forms.checkbox.basicSubTitle":"Gruppo di casella di controllo","forms.checkbox.groupTitle":"Generare un gruppo di caselle di controllo da un array. Utilizza disabilitato per disattivare una casella di controllo.","forms.checkbox.groupSubTitle":"Gruppo di casella di controllo","forms.checkbox.groupCheckTitle":"Generare un gruppo di caselle di controllo da un array. Utilizza disabilitato per disattivare una casella di controllo.","forms.checkbox.groupCheckSubTitle":"Radio","forms.radio.header":"Radio di base","forms.radio.simpleTitle":"Luso pi\xf9 semplice. Usare disabilitato per disattivare una radio.","forms.radio.simpleSubTitle":"RadioGroup verticale","forms.radio.groupTitle":"RadioGroup verticale   con pi\xf9 radio.","forms.radio.groupSubTitle":"RadioGroup","forms.radio.groupSecondTitle":"Un gruppo di componenti radio.","forms.radio.groupSecondSubTitle":"RadioGroup","forms.radio.groupThirdTitle":"Un gruppo di componenti radio.","forms.radio.groupThirdSubTitle":"Trasferimento","forms.transfer.header":"Trasferisci con una casella di ricerca.","forms.transfer.SubTitle":"Ricerca","forms.transfer.Title":"Completamento automatico","forms.autocomplete.header":"su misura","forms.autocomplete.simpleTitle":"Potresti passare AutoComplete.Option come bambini di AutoComplete   invece di utilizzare dataSource","forms.autocomplete.simpleSubTitle":"Personalizza componente di input","forms.autocomplete.customizeTitle":"Personalizza componente di input","forms.autocomplete.customizeSubTitle":"Distintivo","uiElements.badge.badge":"Esempio di base","uiElements.badge.basicExample":"Uso pi\xf9 semplice. Il distintivo sar\xe0 nascosto quando il conteggio \xe8 0   ma possiamo usare showZero per mostrarlo.","uiElements.badge.basicExampleSubTitle":"Numero di overflow","uiElements.badge.overflowCount":"OverflowCount viene visualizzato quando il conteggio \xe8 maggiore di overflowCount. Il valore predefinito di overflowCount \xe8 99.","uiElements.badge.overflowCountSubTitle":"Stato","uiElements.badge.status":"Distintivo autonomo con stato.","uiElements.badge.statusSubTitle":"Successo","uiElements.badge.success":"Errore","uiElements.badge.error":"Predefinito","uiElements.badge.default":"lavorazione","uiElements.badge.processing":"avvertimento","uiElements.badge.warning":"Distintivo rosso","uiElements.badge.redBadge":"Questo mostrer\xe0 semplicemente un distintivo rosso   senza un conteggio specifico.","uiElements.badge.redBadgeSubTitle":"Collegare qualcosa","uiElements.badge.linkSomething":"Carte","uiElements.cards.cards":"Scheda di base","uiElements.cards.basicCard":"Una scheda di base contenente un titolo   un contenuto e un contenuto aggiuntivo dangolo.","uiElements.cards.basicCardSubTitle":"Di Pi\xf9","uiElements.cards.more":"Titolo della carta","uiElements.cards.cardTitle":"Contenuto della scheda","uiElements.cards.cardContent":"Il peso del peso \xe8 ridotto   lelit di adipisizione del consectetur   che rende meno efficace il lavoro e la dolce magna aliqua. Lut enim ad minim veniam   quis nostrud esercizio ullamco laboris nisi ut aliquip ex ea commodo consequat.","uiElements.cards.lorem":"Nessun bordo","uiElements.cards.noBorder":"Una carta senza bordi su uno sfondo grigio.","uiElements.cards.noBorderSubTitle":"Scheda di griglia","uiElements.cards.gridCard":"Carte di solito cooperano con il layout della griglia nella pagina di panoramica.","uiElements.cards.gridCardSubTitle":"Caricamento della carta","uiElements.cards.loadingCard":"Mostra un indicatore di caricamento durante il recupero del contenuto della scheda.","uiElements.cards.loadingCardSubTitle":"Qualunque contenuto","uiElements.cards.whateverContent":"Contenuto personalizzato","uiElements.cards.customizedContentTitle":"Mostra un indicatore di caricamento durante il recupero del contenuto della scheda.","uiElements.cards.customizedContent":"Europa Street beat","uiElements.cards.europeStreetBeat":"www.instagram.com","uiElements.cards.instagram":"gozzoviglia","uiElements.carousel.carousel":"Carosello verticale","uiElements.carousel.verticalCarousel":"Pagination verticale. utilizzare   vertical = true","uiElements.carousel.verticalCarouselSubTitle":"Carosello di base","uiElements.carousel.basicCarousel":"Utilizzo di base","uiElements.carousel.basicCarouselSubTitle":"Fade in transizione","uiElements.carousel.fadeInTransition":"Le diapositive utilizzano dissolvenza per la transizione.   Effetto = dissolvenza","uiElements.carousel.fadeInTransitionSubTitle":"Scorri automaticamente","uiElements.carousel.scrollAutomatically":"Timing di scorrimento alla scheda    immagine successiva. riproduzione automatica","uiElements.carousel.scrollAutomaticallySubTitle":"Crollo","uiElements.collapse.collapse":"Pi\xf9 di un pannello pu\xf2 essere espanso alla volta   il primo pannello viene inizializzato per essere attivo in questo caso. utilizzare   defaultActiveKey =   [keyNum]","uiElements.collapse.collapseSubTitle":"Un cane \xe8 un tipo di animale domestico. Conosciuto per la sua fedelt\xe0 e fedelt\xe0   si pu\xf2 trovare come un ospite benvenuto in molte famiglie in tutto il mondo.","uiElements.collapse.text":"Questa \xe8 lintestazione del pannello 1","uiElements.collapse.headerOne":"Questa \xe8 lintestazione del pannello 2","uiElements.collapse.headerTwo":"Questa \xe8 lintestazione del pannello 3","uiElements.collapse.headerThree":"Questo \xe8 il pannello nido del pannello","uiElements.collapse.headerNested":"Esempio nidificato","uiElements.collapse.nestedExample":"Il crollo \xe8 nidificato allinterno del Collapse.","uiElements.collapse.nestedExampleSubTitle":"Esempio senza bordi","uiElements.collapse.borderlessExample":"Uno stile senza bordo di Collapse. utilizzare   bordered =   false","uiElements.collapse.borderlessExampleSubTitle":"Fisarmonica","uiElements.collapse.accordion":"Modalit\xe0 fisarmonica   \xe8 possibile espandere un solo pannello alla volta. Il primo pannello verr\xe0 espanso per impostazione predefinita. utilizzare la fisarmonica","uiElements.collapse.accordionSubTitle":"popover","uiElements.popover.popover":"Esempio di base","uiElements.popover.basicExample":"Lesempio pi\xf9 semplice. La dimensione dello strato galleggiante dipende dalla regione dei contenuti.","uiElements.popover.basicExampleSubTitle":"Allontanami","uiElements.popover.hoverMe":"Titolo","uiElements.popover.title":"Tre modi per attivare","uiElements.popover.titleTrigger":"Mouse per fare clic   concentrarsi e muoversi.","uiElements.popover.titleTriggerSubTitle":"Mi concentri","uiElements.popover.focusMe":"Cliccami","uiElements.popover.clickMe":"Posizionamento","uiElements.popover.placement":"Sono disponibili 12 opzioni di posizionamento.","uiElements.popover.placementSubTitle":"Superiore","uiElements.popover.top":"A sinistra in alto","uiElements.popover.topLeft":"In alto a destra","uiElements.popover.topRight":"In alto a sinistra","uiElements.popover.leftTop":"Sinistra","uiElements.popover.left":"Sinistra inferiore","uiElements.popover.leftBottom":"Destra destra","uiElements.popover.rightTop":"Destra","uiElements.popover.right":"Parte inferiore","uiElements.popover.bottom":"In basso a sinistra","uiElements.popover.bottomLeft":"In basso a destra","uiElements.popover.bottomRight":"Controllare la chiusura della finestra di dialogo","uiElements.popover.boxTitle":"Utilizzare un supporto visibile per controllare la visualizzazione della scheda.","uiElements.popover.boxSubTitle":"TR","uiElements.popover.TR":"TL","uiElements.popover.TL":"LT","uiElements.popover.LT":"LIBBRE","uiElements.popover.LB":"RT","uiElements.popover.RT":"RB","uiElements.popover.RB":"BL","uiElements.popover.BL":"BR","uiElements.popover.BR":"Vicino","uiElements.popover.close":"tooltip","uiElements.tooltip.tooltip":"Contenuto del Tooltip","uiElements.tooltip.tooltipContent":"Esempio di base","uiElements.tooltip.basicExample":"Luso pi\xf9 semplice.","uiElements.tooltip.basicExampleSubTitle":"Posizionamento","uiElements.tooltip.placementTitle":"La ToolTip ha 12 scelta dei posizionamenti.","uiElements.tooltip.placementSubTitle":"TL","uiElements.tooltip.TL":"TR","uiElements.tooltip.TR":"LT","uiElements.tooltip.LT":"LIBBRE","uiElements.tooltip.LB":"RT","uiElements.tooltip.RT":"RB","uiElements.tooltip.RB":"BL","uiElements.tooltip.BL":"BR","uiElements.tooltip.BR":"Parte inferiore","uiElements.tooltip.bottom":"Destra","uiElements.tooltip.right":"Sinistra","uiElements.tooltip.left":"Superiore","uiElements.tooltip.top":"Tooltip verr\xe0 mostrato quando il mouse entra.","uiElements.tooltip.tooltipContentSpan":"Contenuto del Tooltip","uiElements.tooltip.contentSpan":"tag","uiElements.tags.tags":"Esempio di base","uiElements.tags.basicExample":"Utilizzo di Tag di base e potrebbe essere chiuso da una propriet\xe0 chiusa configurabile. Tag Closable supporta onClose afterClose eventi.","uiElements.tags.basicExampleSubTitle":"Tag 1","uiElements.tags.tagOne":"Tag 2","uiElements.tags.tagTwo":"collegamento","uiElements.tags.link":"Impedire il default","uiElements.tags.preventDefault":"Tag colorato","uiElements.tags.colorfulTag":"Tag Hot","uiElements.tags.hotTags":"Seleziona i tuoi argomenti preferiti.","uiElements.tags.hotTagsSubTitle":"Hots","uiElements.tags.hots":"Aggiungi e rimuove in modo dinamico","uiElements.tags.addRemoveDynamically":"La generazione di un insieme di tag per array consente di aggiungere e rimuovere in modo dinamico. Il suo \xe8 basato sullevento afterClose   che verr\xe0 attivato mentre la fine animazione fine.","uiElements.tags.addRemoveDynamicallySubTitle":"+ Nuovo tag","uiElements.tags.newTag":"Sequenza temporale","uiElements.timeline.timeline":"Esempio di base","uiElements.timeline.basicExample":"Timeline di base","uiElements.timeline.basicTimeline":"Ultimo nodo","uiElements.timeline.lastNode":"Quando la timeline \xe8 incompleta e in corso   infine   metti un nodo fantasma. impostare   in attesa =   true     o   in attesa =   a React Element","uiElements.timeline.lastNodeContent":"Vedi altro","uiElements.timeline.seeMore":"costume","uiElements.timeline.custom":"Imposta un nodo come unicona o un altro elemento personalizzato.","uiElements.timeline.customContent":"Esempio di colore","uiElements.timeline.colorExample":"Imposta il colore dei cerchi. verde significa stato completato o successo   rosso significa avvertimento o errore   e blu significa stato continuo o altro.","uiElements.timeline.colorExampleContent":"Creare un sito di servizi per il 2015-09-01","uiElements.timeline.createServiceSite":"Risolvere i problemi di rete iniziali dal 2015-09-01","uiElements.timeline.solveInitialNetwork":"Problemi di rete risolti 2015-09-01","uiElements.timeline.networkProblemSolved":"Test tecnici del 2015-09-01","uiElements.timeline.technicalTesting":"Cadere in picchiata","uiElements.dropdown.dropdown":"Disattiva a discesa","uiElements.dropdown.hoverDropdown":"Allontanami","uiElements.dropdown.hoverMe":"Posizionamento di posizionamento a discesa","uiElements.dropdown.hoverPlacement":"Sospendi con il disattivato link","uiElements.dropdown.hoverDisableLink":"Clicca su Drop Down","uiElements.dropdown.clickedDropdown":"Pulsante con menu a discesa","uiElements.dropdown.buttonDropdown":"paginatura","uiElements.pagination.pagination":"Di base","uiElements.pagination.basic":"Di Pi\xf9","uiElements.pagination.more":"Changer","uiElements.pagination.changer":"Saltatore","uiElements.pagination.jumper":"Mini formato","uiElements.pagination.miniSize":"Modalit\xe0 semplice","uiElements.pagination.simpleMode":"Controlled","uiElements.pagination.controlled":"Numero totale","uiElements.pagination.totalNumber":"Valutazione","uiElements.rating.rating":"Esempio di base","uiElements.rating.basicExample":"Luso pi\xf9 semplice.","uiElements.rating.basicExampleSubTitle":"Met\xe0 stella","uiElements.rating.halfStar":"Sostenere selezionare la met\xe0 della stella.","uiElements.rating.halfStarSubTitle":"Mostra copywriting","uiElements.rating.showCopywriting":"Aggiungi copywriting in componenti di velocit\xe0.","uiElements.rating.showCopywritingSubTitle":"Sola lettura","uiElements.rating.readOnly":"Leggi solo   non pu\xf2 utilizzare il mouse per interagire.","uiElements.rating.readOnlySubTitle":"Altro carattere","uiElements.rating.otherCharacter":"Sostituire la stella predefinita in altri caratteri come lalfabeto   la cifra   licona o anche la parola cinese.","uiElements.rating.otherCharacterSubTitle":"Albero","uiElements.tree.tree":"Esempio di base","uiElements.tree.basicExample":"Lutilizzo pi\xf9 semplice   ti dice come utilizzare controllibili   selezionabili   disattivati   defaultExpandKeys e cos\xec via.","uiElements.tree.basicExampleSubTitle":"Esempio controllato di base","uiElements.tree.basicControlledExample":"esempio controllato di base","uiElements.tree.basicControlledExampleSubTitle":"Esempio Draggable","uiElements.tree.draggableExample":"Trascinare alberoNode da inserire dopo laltro alberoNodo o inserire nellaltro albero TreeNode.","uiElements.tree.draggableExampleSubTitle":"Caricare i dati in modo asincrono","uiElements.tree.loadAsync":"Per caricare i dati in modo asincrono quando si fa clic per espandere un alberoNodo.","uiElements.tree.loadAsyncSubTitle":"Esempio esplorabile","uiElements.tree.searchableExample":"Albero ricercabile","uiElements.tree.searchableExampleSubTitle":"Albero Con Linea","uiElements.tree.treeWithLine":"Netscape 2.0 viene fornito   introducendo Javascript","shuffle.descriptionOne":"Jesse James Garrett rilascia AJAX spec","shuffle.descriptionTwo":"jQuery 1.0 \xe8 stato rilasciato","shuffle.descriptionThree":"Prima sottolineare. Commit","shuffle.descriptionFour":"Backbone.js diventa una cosa","shuffle.descriptionFive":"Angular 1.0 \xe8 stato rilasciato","shuffle.descriptionSix":"React \xe8 aperto; gli sviluppatori si rallegrano","shuffle.descriptionSeven":"Elenco","toggle.list":"Griglia","toggle.grid":"Ascendente","toggle.ascending":"Discendente","toggle.descending":"rimescolare","toggle.shuffle":"Ruotare","toggle.rotate":"Aggiungi articolo","toggle.addItem":"Rimuovi oggetto","toggle.removeItem":"Cerca i contatti","contactlist.searchContacts":"Aggiungi nuovo contatto","contactlist.addNewContact":"Scegli un colore per la tua nota","notes.ChoseColor":"Aggiungi nuova nota","notes.addNote":"404","page404.title":"Sembra che ti sei perso","page404.subTitle":"La pagina che stai cercando non esiste o \xe8 stata spostata.","page404.description":"RITORNO A CASA","page404.backButton":"500","page500.title":"Errore interno del server","page500.subTitle":"Qualcosa \xe8 andato storto. Riprova la lettera.","page500.description":"RITORNO A CASA","page500.backButton":"isomorfo","page.forgetPassTitle":"Ha dimenticato la password?","page.forgetPassSubTitle":"Inserisci la tua email e ti inviamo un collegamento di ripristino.","page.forgetPassDescription":"Invia richiesta","page.sendRequest":"isomorfo","page.resetPassTitle":"Resetta la password","page.resetPassSubTitle":"Inserire una nuova password e confermarla.","page.resetPassDescription":"Salvare","page.resetPassSave":"isomorfo","page.signInTitle":"Ricordati di me","page.signInRememberMe":"registrati","page.signInButton":"username  demo   password  demodemo   o basta cliccare su qualsiasi pulsante.","page.signInPreview":"Accedi con Facebook","page.signInFacebook":"Accedi con Google Plus","page.signInGooglePlus":"Accedi con Auth0","page.signInAuth0":"Ha dimenticato la password","page.signInForgotPass":"Crea un account Isomorphoic","page.signInCreateAccount":"isomorfo","page.signUpTitle":"Sono daccordo con i termini e le condivisioni","page.signUpTermsConditions":"Registrazione","page.signUpButton":"Registrati con Facebook","page.signUpFacebook":"Registrati con Google Plus","page.signUpGooglePlus":"Registrati con Auth0","page.signUpAuth0":"Hai gi\xe0 un account? Registrati.","page.signUpAlreadyAccount":"Reddito","widget.reportswidget.label":"Il suo peso \xe8 ridotto   \xe8 aumentato   \xe8 aumentato","widget.reportswidget.details":"Marketing","widget.singleprogresswidget1.label":"Addvertisement","widget.singleprogresswidget2.label":"Consulenza","widget.singleprogresswidget3.label":"Sviluppo","widget.singleprogresswidget4.label":"210","widget.stickerwidget1.number":"Email non letti","widget.stickerwidget1.text":"1749","widget.stickerwidget2.number":"Upload di immagini","widget.stickerwidget2.text":"3024","widget.stickerwidget3.number":"Messaggio totale","widget.stickerwidget3.text":"54","widget.stickerwidget4.number":"Ordini Post","widget.stickerwidget4.text":"Reddito","widget.salewidget1.label":"$ 15000","widget.salewidget1.price":"Il suo peso \xe8 ridotto   \xe8 aumentato   \xe8 aumentato","widget.salewidget1.details":"Reddito","widget.salewidget2.label":"$ 15000","widget.salewidget2.price":"Il suo peso \xe8 ridotto   \xe8 aumentato   \xe8 aumentato","widget.salewidget2.details":"Reddito","widget.salewidget3.label":"$ 15000","widget.salewidget3.price":"Il suo peso \xe8 ridotto   \xe8 aumentato   \xe8 aumentato","widget.salewidget3.details":"Reddito","widget.salewidget4.label":"$ 15000","widget.salewidget4.price":"Il suo peso \xe8 ridotto   \xe8 aumentato   \xe8 aumentato","widget.salewidget4.details":"110","widget.cardwidget1.number":"Nuovi messaggi","widget.cardwidget1.text":"100%","widget.cardwidget2.number":"Volume","widget.cardwidget2.text":"137","widget.cardwidget3.number":"realizzazione","widget.cardwidget3.text":"Scaricare","widget.progresswidget1.label":"50% completato","widget.progresswidget1.details":"Supporto","widget.progresswidget2.label":"80% Cliente soddisfatto","widget.progresswidget2.details":"Caricare","widget.progresswidget3.label":"65% completato","widget.progresswidget3.details":"Jhon Doe","widget.vcardwidget.name":"Sr. iOS Developer","widget.vcardwidget.title":"Il peso \xe8 ridotto   il prezzo \xe8 basso   il prezzo \xe8 basso   il prezzo \xe8 basso","widget.vcardwidget.description":"Nome di battesimo","checkout.billingform.firstname":"Cognome","checkout.billingform.lastname":"Nome della ditta","checkout.billingform.company":"Indirizzo email","checkout.billingform.email":"Mobile no","checkout.billingform.mobile":"Nazione","checkout.billingform.country":"Citt\xe0","checkout.billingform.city":"Indirizzo","checkout.billingform.address":"Appartamento   suite   unit\xe0 ecc. (Opzionale","checkout.billingform.addressoptional":"Crea un account?","checkout.billingform.checkbox":"Immagine","antTable.title.image":"Nome di battesimo","antTable.title.firstName":"Cognome","antTable.title.lastName":"Citt\xe0","antTable.title.city":"strada","antTable.title.street":"E-mail","antTable.title.email":"DOB","antTable.title.dob":"Mappa di base","Map.leaflet.basicTitle":"Mappa di base (con il marcatore di default","Map.leaflet.basicMarkerTitle":"Mappa di base (con il simbolo personalizzato dellicona","Map.leaflet.leafletCustomMarkerTitle":"Mappa di base (con il personalizzatore Html Marker","Map.leaflet.leafletCustomHtmlMarkerTitle":"Mappa di base (con cluster di marcatori","Map.leaflet.leafletMarkerClusterTitle":"Routing della mappa di base","Map.leaflet.leafletRoutingTitle":"Nessun contatto trovato","Component.contacts.noOption":"INVIARE","email.send":"ANNULLA","email.cancel":"COMPORRE","email.compose":"Seleziona una mail per leggere","email.noMessage":"PAGARE ORA","themeSwitcher.purchase":"ACQUISTA ADESSO","themeSwitcher.settings":"Selezionare","sidebar.selectbox":"Selezionare","sidebar.frappeChart":"Frappe Charts","topbar.myprofile":"Il mio profilo","topbar.help":"Aiuto","topbar.logout":"Disconnettersi","topbar.viewAll":"Guarda tutto","topbar.viewCart":"Visualizza carrello","topbar.totalPrice":"Prezzo totale","sidebar.scrumboard":"Scrum Board"}'
      );
    },
    204: function(e) {
      e.exports = JSON.parse(
        '{"sidebar.swiperslider":"Control deslizante","sidebar.email":"Email","sidebar.chat":"Charla","sidebar.ecommerce":"Ecommerce","sidebar.shop":"tienda","sidebar.cart":"Carro","sidebar.checkout":"revisa","sidebar.cards":"Divertido Tarjetas","sidebar.maps":"Mapas","sidebar.firestorecrud":"Crud de Firestore","sidebar.firestorecrudarticle":"Art\xedculos","sidebar.firestorecrudinvestor":"Inversores","sidebar.googleMap":"Mapa de Google","sidebar.leafletMap":"Mapa del folleto","sidebar.calendar":"Calendario","sidebar.notes":"Notas","sidebar.todos":"Todos","sidebar.contacts":"Contactos","sidebar.shuffle":"Barajar","sidebar.charts":"Gr\xe1ficos","sidebar.googleCharts":"Google Carts","sidebar.recharts":"Recharts","sidebar.reactVis":"Reaccionar Vis","sidebar.reactChart2":"React-Chart-2","sidebar.reactTrend":"Reaccionar","sidebar.eChart":"Echart","sidebar.forms":"Formularios","sidebar.input":"Entrada","sidebar.editor":"Editor","sidebar.formsWithValidation":"Formularios con validaci\xf3n","sidebar.progress":"Progreso","sidebar.button":"Bot\xf3n","sidebar.tab":"Leng\xfceta","sidebar.checkbox":"Caja","sidebar.radiobox":"Radiobox","sidebar.selectbox":"Seleccionar","sidebar.transfer":"Transferir","sidebar.autocomplete":"Autocompletar","sidebar.boxOptions":"Opciones de Caja","sidebar.uiElements":"Elementos de la interfaz de usuario","sidebar.badge":"Distintivo","sidebar.card2":"Tarjeta","sidebar.corusel":"Parranda","sidebar.collapse":"Colapso","sidebar.popover":"Acercarse","sidebar.tooltip":"Tooltip","sidebar.tag":"Etiqueta","sidebar.timeline":"Cronograma","sidebar.dropdown":"Desplegable","sidebar.pagination":"Paginaci\xf3n","sidebar.rating":"Clasificaci\xf3n","sidebar.tree":"\xc1rbol","sidebar.advancedElements":"Elementos avanzados","sidebar.reactDates":"Reaccionar fechas","sidebar.codeMirror":"C\xf3digo Espejo","sidebar.uppy":"Uppy Uploader","sidebar.dropzone":"Zona de descenso","sidebar.feedback":"Realimentaci\xf3n","sidebar.alert":"Alerta","sidebar.modal":"Modal","sidebar.message":"Mensaje","sidebar.notification":"Notificaci\xf3n","sidebar.popConfirm":"Pop confirmar","sidebar.spin":"Girar","sidebar.tables":"Mesas","sidebar.antTables":"Tablas de hormigas","sidebar.pages":"P\xe1ginas","sidebar.500":"500","sidebar.404":"404","sidebar.signIn":"Registrarse","sidebar.signUp":"Reg\xedstrate","sidebar.forgotPw":"Olvid\xe9 contrase\xf1as","sidebar.resetPw":"Restablecer contrase\xf1as","sidebar.invoice":"Factura","sidebar.menuLevels":"Niveles de men\xfa","sidebar.item1":"Art\xedculo 1","sidebar.item2":"Art\xedculo 2","sidebar.option1":"Opci\xf3n 1","sidebar.option2":"opcion 2","sidebar.option3":"Opci\xf3n 3","sidebar.option4":"Opci\xf3n 4","sidebar.quiz":"Quiz","sidebar.blankPage":"P\xe1gina en blanco","sidebar.githubSearch":"Github Buscar","sidebar.youtubeSearch":"B\xfasqueda de Youtube","languageSwitcher.label":"Cambiar idioma","themeSwitcher":"Selector de temas","themeSwitcher.Sidebar":"Barra lateral","themeSwitcher.Topbar":"Barra superior","themeSwitcher.Background":"Fondo","feedback.alert.basicTitle":"T\xedtulo B\xe1sico","feedback.alert.successText":"Texto de \xe9xito","feedback.alert.infoText":"Texto de la informaci\xf3n","feedback.alert.warningText":"Texto de advertencia","feedback.alert.errorText":"Texto de error","feedback.alert.closableAlertType":"Tipo de Alerta Closable","feedback.alert.iconAlertType":"Tipo de alerta de icono","feedback.alert.iconInfoAlertType":"Tipo de Alerta","feedback.alert.successTips":"consejos de \xe9xito","feedback.alert.successTipsDescription":"Descripci\xf3n detallada y consejos sobre copywriting exitoso.","feedback.alert.informationTips":"Notas informativas","feedback.alert.informationDescription":"Descripci\xf3n adicional e informaciones sobre copywriting.","feedback.alert.warningTips":"Advertencia","feedback.alert.warningDescription":"Este es un aviso de advertencia sobre copywriting.","feedback.alert.errorTips":"Error","feedback.alert.errorDescription":"Este es un mensaje de error acerca de copywriting.","feedback.alert.modalTitle":"Modal uno con personalizar Footer","feedback.alert.modalSubTitle":"Di\xe1logo modal b\xe1sico.","feedback.alert.successTitle":"\xc9xito","feedback.alert.infoTitle":"Informaci\xf3n","feedback.alert.errorTitle":"Error","feedback.alert.warningTitle":"Advertencia","feedback.alert.modalBlockTitle":"Modal","feedback.alert.confirmationModalDialogue":"Cuadro de di\xe1logo modal de confirmaci\xf3n","feedback.alert.simpleModalDialogue":"Di\xe1logo modal simple","feedback.alert.message":"Mensaje","feedback.alert.normalMessageTitle":"Mensaje normal","feedback.alert.normalMessageSubtitle":"Mensajes normales como retroalimentaci\xf3n.","feedback.alert.displayMessage":"Mostrar mensaje normal","feedback.alert.displayOtherTypeMessageTitle":"Otros tipos de mensaje","feedback.alert.displayOtherTypeMessageSubTitle":"Mensajes de \xe9xito   error y tipos de advertencia.","feedback.alert.customizeDurationTitle":"Personalizar duraci\xf3n","feedback.alert.customizeDurationSubTitle":"ustomize la duraci\xf3n de la exhibici\xf3n del mensaje de 1.5s a 10s por defecto.","feedback.alert.customizeDurationButton":"Duraci\xf3n de la pantalla personalizada","feedback.alert.messageLoadingTitle":"Mensaje de carga","feedback.alert.messageLoadingSubTitle":"Mostrar un indicador de carga global   que se descarta por s\xed mismo de forma as\xedncrona.","feedback.alert.displayLoadIndicator":"Mostrar un indicador de carga","feedback.alert.notification":"Notificaci\xf3n","feedback.alert.notificationBasicTitle":"BASIC","feedback.alert.notificationBasicSubTitle":"El uso m\xe1s simple que cierre la caja de notificaci\xf3n despu\xe9s de 4.5s.","feedback.alert.notificationBasicDescription":"Abrir el cuadro de notificaci\xf3n","feedback.alert.notificationDurationTitle":"Duraci\xf3n despu\xe9s de la cual se cierra el cuadro de notificaci\xf3n","feedback.alert.notificationDurationSubTitle":"La duraci\xf3n se puede utilizar para especificar cu\xe1nto tiempo permanece abierta la notificaci\xf3n. Una vez transcurrido el tiempo de duraci\xf3n   la notificaci\xf3n se cierra autom\xe1ticamente. Si no se especifica   el valor predeterminado es 4  5 segundos. Si establece el valor en 0   el cuadro de notificaci\xf3n nunca se cerrar\xe1 autom\xe1ticamente.","feedback.alert.notificationwithIconTitle":"Notificaci\xf3n con icono","feedback.alert.notificationwithIconSubTitle":"Un cuadro de notificaci\xf3n con un icono en el lado izquierdo.","feedback.alert.notificationwithCustomIconTitle":"Notificaci\xf3n con icono personalizado","feedback.alert.notificationwithCustomIconSubTitle":"Mensajes normales como retroalimentaci\xf3n.","feedback.alert.notificationwithCustomButtonTitle":"Notificaci\xf3n con bot\xf3n personalizado","feedback.alert.notificationwithCustomButtonSubTitle":"Mensajes normales como retroalimentaci\xf3n.","feedback.alert.popConfirm":"Pop confirmar","feedback.alert.popConfirm.basicTitle":"Confirmaci\xf3n b\xe1sica","feedback.alert.popConfirm.basicSubTitle":"El ejemplo b\xe1sico.","feedback.alert.popConfirm.delete":"Borrar","feedback.alert.popConfirm.notiWithIconTitle":"Notificaci\xf3n con icono personalizado","feedback.alert.popConfirm.notiWithIconSubTitle":"Mensajes normales como retroalimentaci\xf3n.","feedback.alert.popConfirm.TL":"TL","feedback.alert.popConfirm.top":"Parte superior","feedback.alert.popConfirm.TR":"TR","feedback.alert.popConfirm.LT":"LT","feedback.alert.popConfirm.left":"Izquierda","feedback.alert.popConfirm.LB":"LB","feedback.alert.popConfirm.RT":"RT","feedback.alert.popConfirm.right":"Derecha","feedback.alert.popConfirm.RB":"RB","feedback.alert.popConfirm.Bl":"licenciado en Derecho","feedback.alert.popConfirm.bottom":"Fondo","feedback.alert.popConfirm.BR":"BR","feedback.alert.spin":"Girar","feedback.alert.spin.basicTitle":"Girar el tama\xf1o","feedback.alert.spin.background":"Girar con fondo","feedback.alert.spin.backgroundDescription":"Descripci\xf3n de Spin With Background","feedback.alert.spin.loadingState":"Estado de carga ","feedback.alert.spin.alertTitle":"T\xedtulo del mensaje de alerta","feedback.alert.spin.alertDescription":"M\xe1s detalles sobre el contexto de esta alerta.","forms.input.header":"Entrada","forms.input.basicTitle":"Uso b\xe1sico","forms.input.basicSubTitle":"Ejemplo de uso b\xe1sico.","forms.input.variationsTitle":"Tres tama\xf1os de entrada","forms.input.variationsSubtitle":"Hay tres tama\xf1os de un cuadro de entrada  grande (42px     predeterminado (35px   y peque\xf1o (30px  . Nota  Dentro de los formularios   s\xf3lo se utiliza el tama\xf1o grande.","forms.input.groupTitle":"Grupo de entrada","forms.input.groupSubTitle":"Ejemplo de Input.Group Nota  No necesita Col para controlar el ancho en el modo compacto.","forms.input.autoSizingTitle":"Autosizing la altura para ajustar el contenido","forms.input.autoSizingSubTitle":"prop de autosize para un tipo de entrada textarea hace que la altura se ajuste autom\xe1ticamente en funci\xf3n del contenido. Se puede proporcionar un objeto de opciones al tama\xf1o autom\xe1tico para especificar el n\xfamero m\xednimo y m\xe1ximo de l\xedneas que la zona de texto ajustar\xe1 autom\xe1ticamente.","forms.input.prePostTabTitle":"Pesta\xf1a Pre    Post","forms.input.prePostTabSubTitle":"El uso de pre & amp; post tabs ejemplo ..","forms.input.textAreaTitle":"\xc1rea de texto","forms.input.textAreaSubTitle":"Para casos de entrada de usuario multi-l\xednea   se puede utilizar una entrada cuyo tipo prop tiene el valor de textarea.","forms.input.searchTitle":"Buscar","forms.input.searchSubTitle":"Ejemplo de creaci\xf3n de un cuadro de b\xfasqueda agrupando una entrada est\xe1ndar con un bot\xf3n de b\xfasqueda","forms.editor.header":"Editor","forms.formsWithValidation.header":"Formulario de validaci\xf3n personalizado","forms.formsWithValidation.failLabel":"Fallar","forms.formsWithValidation.failHelp":"Debe ser la combinaci\xf3n de n\xfameros & amp; alfabetos","forms.formsWithValidation.warningLabel":"Advertencia","forms.formsWithValidation.ValidatingLabel":"Validando","forms.formsWithValidation.ValidatingHelp":"La informaci\xf3n est\xe1 siendo validada ...","forms.formsWithValidation.SuccessLabel":"\xc9xito","forms.formsWithValidation.WarninghasFeedbackLabel":"Advertencia","forms.formsWithValidation.FailhasFeedbackLabel":"Fallar","forms.formsWithValidation.FailhasFeedbackHelp":"Debe ser la combinaci\xf3n de n\xfameros & amp; alfabetos","forms.progressBar.header":"Barra de progreso","forms.progressBar.standardTitle":"Barra de progreso","forms.progressBar.standardSubTitle":"Una barra de progreso est\xe1ndar.","forms.progressBar.circularTitle":"Barra de progreso circular","forms.progressBar.circularSubTitle":"Una barra de progreso circular.","forms.progressBar.miniTitle":"Barra de progreso de tama\xf1o mini","forms.progressBar.miniSubTitle":"Adecuado para un \xe1rea estrecha.","forms.progressBar.miniCircularTitle":"Una barra de progreso circular m\xe1s peque\xf1a.","forms.progressBar.dynamicCircularTitle":"Barra de progreso circular din\xe1mica","forms.progressBar.dynamicCircularSubTitle":"Una barra de progreso din\xe1mica es mejor.","forms.progressBar.customTextTitle":"Formato de texto personalizado","forms.progressBar.customTextSubTitle":"Puede personalizar el formato de texto configurando el formato.","forms.progressBar.dashboardTitle":"Tablero","forms.progressBar.dashboardSubTitle":"Un estilo de progreso en el tablero de instrumentos.","forms.button.header":"Botones","forms.button.simpleButton":"Tipo de bot\xf3n","forms.button.iconButton":"Icono de bot\xf3n","forms.button.simpleButtonPrimaryText":"Primario","forms.button.simpleButtonDefaultText":"Defecto","forms.button.simpleButtonDashedText":"Da\xf1ado","forms.button.simpleButtonDangerText":"Peligro","forms.button.iconPrimaryButton":"buscar","forms.button.iconSimpleButton":"buscar","forms.button.iconCirculerButton":"buscar","forms.button.iconDashedButton":"buscar","forms.button.SizedButton":"Tama\xf1o del bot\xf3n","forms.button.DisabledButton":"Bot\xf3n desactivado","forms.button.LoadingButton":"Bot\xf3n de carga","forms.button.MultipleButton":"Bot\xf3n m\xfaltiple","forms.button.groupButton":"Grupo de botones","forms.Tabs.header":"Pesta\xf1as","forms.Tabs.simpleTabTitle":"buscar","forms.Tabs.simpleTabSubTitle":"Pesta\xf1as inhabilitadas","forms.Tabs.iconTabTitle":"Icono de las pesta\xf1as","forms.Tabs.miniTabTitle":"Mini pesta\xf1as","forms.Tabs.extraTabTitle":"Pesta\xf1as de acci\xf3n adicionales","forms.Tabs.TabpositionTitle":"Posici\xf3n","forms.Tabs.TabpositionSubTitle":"Posici\xf3n de las pesta\xf1as  izquierda   derecha   arriba o abajo","forms.Tabs.cardTitle":"Fichas de tipo de tarjeta","forms.Tabs.editableTitle":"Agregar y cerrar pesta\xf1as","forms.Tabs.verticalTitle":"Fichas de tipo vertical","forms.Tabs.basicTitle":"Pesta\xf1as b\xe1sicas","forms.checkbox.header":"Caja","forms.checkbox.basicTitle":"Casilla de verificaci\xf3n b\xe1sica","forms.checkbox.basicSubTitle":"Uso b\xe1sico de la casilla de verificaci\xf3n.","forms.checkbox.groupTitle":"Grupo de casillas de verificaci\xf3n","forms.checkbox.groupSubTitle":"Genera un grupo de casillas de verificaci\xf3n de una matriz. Utilizar desactivado para deshabilitar una casilla de verificaci\xf3n.","forms.checkbox.groupCheckTitle":"Grupo de casillas de verificaci\xf3n","forms.checkbox.groupCheckSubTitle":"Genera un grupo de casillas de verificaci\xf3n de una matriz. Utilizar desactivado para deshabilitar una casilla de verificaci\xf3n.","forms.radio.header":"Radio","forms.radio.simpleTitle":"Radio b\xe1sica","forms.radio.simpleSubTitle":"El uso m\xe1s simple. Utilizar desactivado para desactivar una radio.","forms.radio.groupTitle":"Grupo de radio vertical","forms.radio.groupSubTitle":"Vertical RadioGroup   con m\xe1s radios.","forms.radio.groupSecondTitle":"Grupo de radio","forms.radio.groupSecondSubTitle":"Un grupo de componentes de radio.","forms.radio.groupThirdTitle":"Grupo de radio","forms.radio.groupThirdSubTitle":"Un grupo de componentes de radio.","forms.transfer.header":"Transferir","forms.transfer.SubTitle":"Transferir con un cuadro de b\xfasqueda.","forms.transfer.Title":"Buscar","forms.autocomplete.header":"Autocompletar","forms.autocomplete.simpleTitle":"Personalizado","forms.autocomplete.simpleSubTitle":"Puede pasar AutoComplete.Option como hijos de Autocompletar   en lugar de utilizar dataSource","forms.autocomplete.customizeTitle":"Personalizar el componente de entrada","forms.autocomplete.customizeSubTitle":"Personalizar el componente de entrada","uiElements.badge.badge":"Distintivo","uiElements.badge.basicExample":"Ejemplo B\xe1sico","uiElements.badge.basicExampleSubTitle":"Uso m\xe1s simple. La insignia se ocultar\xe1 cuando count sea 0   pero podemos usar showZero para mostrarlo.","uiElements.badge.overflowCount":"Cuenta de desbordamiento","uiElements.badge.overflowCountSubTitle":"OverflowCount se muestra cuando count es mayor que overflowCount. El valor predeterminado de overflowCount es 99.","uiElements.badge.status":"Estado","uiElements.badge.statusSubTitle":"Insignia aut\xf3noma con estado.","uiElements.badge.success":"\xc9xito","uiElements.badge.error":"Error","uiElements.badge.default":"Defecto","uiElements.badge.processing":"Tratamiento","uiElements.badge.warning":"Advertencia","uiElements.badge.redBadge":"Insignia roja","uiElements.badge.redBadgeSubTitle":"Esto simplemente mostrar\xe1 una insignia roja   sin un conteo espec\xedfico.","uiElements.badge.linkSomething":"Enlace algo","uiElements.cards.cards":"Divertido Tarjetas","uiElements.cards.basicCard":"Tarjeta b\xe1sica","uiElements.cards.basicCardSubTitle":"Una tarjeta b\xe1sica que contiene un t\xedtulo   contenido y un contenido de esquina adicional.","uiElements.cards.more":"M\xe1s","uiElements.cards.cardTitle":"T\xedtulo de la tarjeta","uiElements.cards.cardContent":"Contenido de la tarjeta","uiElements.cards.lorem":"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor incididunt ut labore y dolore magna aliqua. Ut enim ad minim veniam   quis nostrud ejercicio ullamco laboris nisi ut aliquip ex y commodo consequat.","uiElements.cards.noBorder":"Sin bordes","uiElements.cards.noBorderSubTitle":"Una tarjeta sin fronteras sobre un fondo gris.","uiElements.cards.gridCard":"Tarjeta de red","uiElements.cards.gridCardSubTitle":"Las tarjetas suelen cooperar con el dise\xf1o de la cuadr\xedcula en la p\xe1gina de vista general.","uiElements.cards.loadingCard":"Carga de la tarjeta","uiElements.cards.loadingCardSubTitle":"Muestra un indicador de carga mientras se est\xe1 recuperando el contenido de la tarjeta.","uiElements.cards.whateverContent":"Cualquier contenido","uiElements.cards.customizedContentTitle":"Contenido personalizado","uiElements.cards.customizedContent":"Muestra un indicador de carga mientras se est\xe1 recuperando el contenido de la tarjeta.","uiElements.cards.europeStreetBeat":"Europa Street beat","uiElements.cards.instagram":"www.instagram.com","uiElements.carousel.carousel":"Parranda","uiElements.carousel.verticalCarousel":"Carrusel vertical","uiElements.carousel.verticalCarouselSubTitle":"Paginaci\xf3n vertical. use   vertical = true  ","uiElements.carousel.basicCarousel":"Carrusel b\xe1sico","uiElements.carousel.basicCarouselSubTitle":"Uso b\xe1sico","uiElements.carousel.fadeInTransition":"Fade In Transition","uiElements.carousel.fadeInTransitionSubTitle":"Las diapositivas utilizan el fundido para la transici\xf3n.   effect = fade  ","uiElements.carousel.scrollAutomatically":"Desplazarse autom\xe1ticamente","uiElements.carousel.scrollAutomaticallySubTitle":"Tiempo de desplazamiento a la siguiente tarjeta    imagen. auto reproducci\xf3n","uiElements.collapse.collapse":"Colapso","uiElements.collapse.collapseSubTitle":"Se puede ampliar m\xe1s de un panel a la vez   el primer panel se inicializa para estar activo en este caso. use   defaultActiveKey =   [keyNum]    ","uiElements.collapse.text":"Un perro es un tipo de animal domesticado. Conocido por su lealtad y fidelidad   se puede encontrar como un invitado de bienvenida en muchos hogares de todo el mundo.","uiElements.collapse.headerOne":"Este es el encabezado del panel 1","uiElements.collapse.headerTwo":"Se trata de la cabecera del panel 2","uiElements.collapse.headerThree":"Este es el encabezado del panel 3","uiElements.collapse.headerNested":"\xc9ste es panel del nido del panel","uiElements.collapse.nestedExample":"Ejemplo anidado","uiElements.collapse.nestedExampleSubTitle":"Collapse est\xe1 anidado dentro del Collapse.","uiElements.collapse.borderlessExample":"Ejemplo sin m\xe1rgenes","uiElements.collapse.borderlessExampleSubTitle":"Un estilo sin fronteras de Collapse. use   bordered =   false    ","uiElements.collapse.accordion":"Acorde\xf3n","uiElements.collapse.accordionSubTitle":"Acorde\xf3n   s\xf3lo se puede ampliar un panel cada vez. El primer panel se ampliar\xe1 de forma predeterminada. utilizar acorde\xf3n","uiElements.popover.popover":"Popover","uiElements.popover.basicExample":"Ejemplo B\xe1sico","uiElements.popover.basicExampleSubTitle":"El ejemplo m\xe1s b\xe1sico. El tama\xf1o de la capa flotante depende de la regi\xf3n del contenido.","uiElements.popover.hoverMe":"M\xedrame","uiElements.popover.title":"T\xedtulo","uiElements.popover.titleTrigger":"Tres maneras de activar","uiElements.popover.titleTriggerSubTitle":"El rat\xf3n para hacer clic   enfocar y moverse.","uiElements.popover.focusMe":"Enf\xf3came","uiElements.popover.clickMe":"Haz click en mi","uiElements.popover.placement":"Colocaci\xf3n","uiElements.popover.placementSubTitle":"Hay 12 opciones de colocaci\xf3n disponibles.","uiElements.popover.top":"Parte superior","uiElements.popover.topLeft":"Arriba a la izquierda","uiElements.popover.topRight":"Parte superior derecha","uiElements.popover.leftTop":"Parte superior izquierda","uiElements.popover.left":"Izquierda","uiElements.popover.leftBottom":"Abajo a la izquierda","uiElements.popover.rightTop":"Justo arriba","uiElements.popover.right":"Derecha","uiElements.popover.bottom":"Fondo","uiElements.popover.bottomLeft":"Abajo Izquierda","uiElements.popover.bottomRight":"Abajo a la derecha","uiElements.popover.boxTitle":"Control del cierre del di\xe1logo","uiElements.popover.boxSubTitle":"Utilice el apoyo visible para controlar la visualizaci\xf3n de la tarjeta.","uiElements.popover.TR":"TR","uiElements.popover.TL":"TL","uiElements.popover.LT":"LT","uiElements.popover.LB":"LB","uiElements.popover.RT":"RT","uiElements.popover.RB":"RB","uiElements.popover.BL":"licenciado en Derecho","uiElements.popover.BR":"BR","uiElements.popover.close":"Cerca","uiElements.tooltip.tooltip":"Tooltip","uiElements.tooltip.tooltipContent":"Contenido de informaci\xf3n sobre herramientas","uiElements.tooltip.basicExample":"Ejemplo B\xe1sico","uiElements.tooltip.basicExampleSubTitle":"El uso m\xe1s simple.","uiElements.tooltip.placementTitle":"Colocaci\xf3n","uiElements.tooltip.placementSubTitle":"La herramienta tiene 12 opciones de ubicaci\xf3n.","uiElements.tooltip.TL":"TL","uiElements.tooltip.TR":"TR","uiElements.tooltip.LT":"LT","uiElements.tooltip.LB":"LB","uiElements.tooltip.RT":"RT","uiElements.tooltip.RB":"RB","uiElements.tooltip.BL":"licenciado en Derecho","uiElements.tooltip.BR":"BR","uiElements.tooltip.bottom":"Fondo","uiElements.tooltip.right":"Derecha","uiElements.tooltip.left":"Izquierda","uiElements.tooltip.top":"Parte superior","uiElements.tooltip.tooltipContentSpan":"La informaci\xf3n sobre herramientas se mostrar\xe1 cuando se introduzca el rat\xf3n.","uiElements.tooltip.contentSpan":"Contenido de informaci\xf3n sobre herramientas","uiElements.tags.tags":"Etiquetas","uiElements.tags.basicExample":"Ejemplo B\xe1sico","uiElements.tags.basicExampleSubTitle":"Uso de la etiqueta b\xe1sica   y podr\xeda ser cerrable por la propiedad cerrable del sistema. La etiqueta Closable soporta eventos onClose afterClose.","uiElements.tags.tagOne":"Etiqueta 1","uiElements.tags.tagTwo":"Etiqueta 2","uiElements.tags.link":"Enlazar","uiElements.tags.preventDefault":"Prevenga el Incumplimiento","uiElements.tags.colorfulTag":"Etiqueta colorida","uiElements.tags.hotTags":"Etiquetas populares","uiElements.tags.hotTagsSubTitle":"Seleccione sus temas favoritos.","uiElements.tags.hots":"Hots ","uiElements.tags.addRemoveDynamically":"Agregar y eliminar din\xe1micamente","uiElements.tags.addRemoveDynamicallySubTitle":"Generando un conjunto de etiquetas por matriz   puede agregar y quitar din\xe1micamente. Se basa en el evento afterClose   que se activar\xe1 mientras finaliza la animaci\xf3n de cierre.","uiElements.tags.newTag":"+ Nueva etiqueta","uiElements.timeline.timeline":"Cronograma","uiElements.timeline.basicExample":"Ejemplo B\xe1sico","uiElements.timeline.basicTimeline":"L\xednea de tiempo b\xe1sica","uiElements.timeline.lastNode":"Ultimo nodo","uiElements.timeline.lastNodeContent":"Cuando la l\xednea de tiempo est\xe1 incompleta y en curso   poner un nodo fantasma por fin. set   pending =   true     o   pending =   un elemento React    ","uiElements.timeline.seeMore":"Ver m\xe1s","uiElements.timeline.custom":"Personalizado","uiElements.timeline.customContent":"Establezca un nodo como un icono u otro elemento personalizado.","uiElements.timeline.colorExample":"Ejemplo de color","uiElements.timeline.colorExampleContent":"Establecer el color de los c\xedrculos. verde significa estado completado o de \xe9xito   rojo significa advertencia o error y azul significa estado en curso u otro estado predeterminado.","uiElements.timeline.createServiceSite":"Crear un sitio de servicios 2015-09-01","uiElements.timeline.solveInitialNetwork":"Resolver problemas de red iniciales 2015-09-01","uiElements.timeline.networkProblemSolved":"Problemas de red resueltos 2015-09-01","uiElements.timeline.technicalTesting":"Pruebas t\xe9cnicas 2015-09-01","uiElements.dropdown.dropdown":"Desplegable","uiElements.dropdown.hoverDropdown":"Despl\xe1cese","uiElements.dropdown.hoverMe":"M\xedrame","uiElements.dropdown.hoverPlacement":"Despliegue de colocaci\xf3n de cola","uiElements.dropdown.hoverDisableLink":"Desplazamiento con desplegable","uiElements.dropdown.clickedDropdown":"Desplegable pulsado","uiElements.dropdown.buttonDropdown":"Bot\xf3n con men\xfa desplegable","uiElements.pagination.pagination":"Paginaci\xf3n","uiElements.pagination.basic":"BASIC","uiElements.pagination.more":"M\xe1s","uiElements.pagination.changer":"Cambiador","uiElements.pagination.jumper":"Saltador","uiElements.pagination.miniSize":"Tama\xf1o mini","uiElements.pagination.simpleMode":"Modo simple","uiElements.pagination.controlled":"Revisado","uiElements.pagination.totalNumber":"Numero total","uiElements.rating.rating":"Clasificaci\xf3n","uiElements.rating.basicExample":"Ejemplo B\xe1sico","uiElements.rating.basicExampleSubTitle":"El uso m\xe1s simple.","uiElements.rating.halfStar":"Media estrella","uiElements.rating.halfStarSubTitle":"Soporte de media estrella.","uiElements.rating.showCopywriting":"Mostrar copywriting","uiElements.rating.showCopywritingSubTitle":"A\xf1adir copywriting en los componentes de la tarifa.","uiElements.rating.readOnly":"Solo lectura","uiElements.rating.readOnlySubTitle":"S\xf3lo lectura   no puede utilizar el rat\xf3n para interactuar.","uiElements.rating.otherCharacter":"Otro Personaje","uiElements.rating.otherCharacterSubTitle":"Reemplace la estrella predeterminada por otro car\xe1cter como alfabeto   d\xedgito   iconfonte o incluso palabra china.","uiElements.tree.tree":"\xc1rbol","uiElements.tree.basicExample":"Ejemplo b\xe1sico","uiElements.tree.basicExampleSubTitle":"El uso m\xe1s b\xe1sico   te dir\xe1 c\xf3mo usar checkable   seleccionable   disabled   defaultExpandKeys   y etc.","uiElements.tree.basicControlledExample":"Ejemplo controlado b\xe1sico","uiElements.tree.basicControlledExampleSubTitle":"ejemplo controlado b\xe1sico","uiElements.tree.draggableExample":"Ejemplo arrastrable","uiElements.tree.draggableExampleSubTitle":"Arrastre treeNode para insertar despu\xe9s del otro treeNode o inserte en el otro TreeNode padre.","uiElements.tree.loadAsync":"Cargar datos asincr\xf3nicamente","uiElements.tree.loadAsyncSubTitle":"Para cargar datos asincr\xf3nicamente cuando haga clic para expandir un treeNode.","uiElements.tree.searchableExample":"Ejemplo de b\xfasqueda","uiElements.tree.searchableExampleSubTitle":"\xc1rbol de b\xfasqueda","uiElements.tree.treeWithLine":"\xc1rbol con l\xednea","shuffle.descriptionOne":"Netscape 2.0 se expande   introduciendo Javascript","shuffle.descriptionTwo":"Jesse James Garrett lanza la especificaci\xf3n AJAX","shuffle.descriptionThree":"jQuery 1.0 publicado","shuffle.descriptionFour":"Primero underscore.js commit","shuffle.descriptionFive":"Backbone.js se convierte en una cosa","shuffle.descriptionSix":"Angular 1.0 liberado","shuffle.descriptionSeven":"Reaccionar es de c\xf3digo abierto; los desarrolladores se regocijan","toggle.list":"Lista","toggle.grid":"Cuadr\xedcula","toggle.ascending":"Ascendente","toggle.descending":"Descendente","toggle.shuffle":"Barajar","toggle.rotate":"Girar","toggle.addItem":"A\xf1adir art\xedculo","toggle.removeItem":"Remover el art\xedculo","contactlist.searchContacts":"Buscar contactos","contactlist.addNewContact":"A\xf1adir nuevo contacto","notes.ChoseColor":"Elige un color para tu nota","notes.addNote":"A\xf1adir nueva nota","page404.title":"404","page404.subTitle":"Parece que te has perdido","page404.description":"La p\xe1gina que est\xe1s buscando no existe o se ha movido.","page404.backButton":"VOLVER A LA CASA","page500.title":"500","page500.subTitle":"error de servidor interno","page500.description":"Algo sali\xf3 mal. Por favor   int\xe9ntelo de nuevo.","page500.backButton":"VOLVER A LA CASA","page.forgetPassTitle":"Isom\xf3rfico","page.forgetPassSubTitle":"\xbfSe te olvid\xf3 tu contrase\xf1a?","page.forgetPassDescription":"Introduzca su correo electr\xf3nico y le enviaremos un enlace de restablecimiento.","page.sendRequest":"Enviar petici\xf3n","page.resetPassTitle":"Isom\xf3rfico","page.resetPassSubTitle":"Restablecer la contrase\xf1a","page.resetPassDescription":"Introduzca una nueva contrase\xf1a y confirme.","page.resetPassSave":"Salvar","page.signInTitle":"Isom\xf3rfico","page.signInRememberMe":"Recu\xe9rdame","page.signInButton":"Registrarse","page.signInPreview":"nombre de usuario  demo   contrase\xf1a  demodemo   o simplemente haga clic en cualquier bot\xf3n.","page.signInFacebook":"Iniciar sesi\xf3n usando Facebook","page.signInGooglePlus":"Acceder con Google Plus","page.signInAuth0":"Iniciar sesi\xf3n con Auth0","page.signInForgotPass":"Se te olvid\xf3 tu contrase\xf1a","page.signInCreateAccount":"Crear una cuenta Isomorphoic","page.signUpTitle":"Isom\xf3rfico","page.signUpTermsConditions":"Estoy de acuerdo con los t\xe9rminos y condiciones","page.signUpButton":"Reg\xedstrate","page.signUpFacebook":"Registrate con Facebook","page.signUpGooglePlus":"Reg\xedstrese con Google Plus","page.signUpAuth0":"Reg\xedstrese con Auth0","page.signUpAlreadyAccount":"\xbfYa tienes una cuenta? Registrarse.","widget.reportswidget.label":"Ingresos","widget.reportswidget.details":"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor","widget.singleprogresswidget1.label":"M\xe1rketing","widget.singleprogresswidget2.label":"Addvertisement","widget.singleprogresswidget3.label":"Consultante","widget.singleprogresswidget4.label":"Desarrollo","widget.stickerwidget1.number":"210","widget.stickerwidget1.text":"Correo electr\xf3nico no le\xeddo","widget.stickerwidget2.number":"1749","widget.stickerwidget2.text":"Subida de imagen","widget.stickerwidget3.number":"3024","widget.stickerwidget3.text":"Total de mensajes","widget.stickerwidget4.number":"54","widget.stickerwidget4.text":"Pedidos","widget.salewidget1.label":"Ingresos","widget.salewidget1.price":"15000 $","widget.salewidget1.details":"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor","widget.salewidget2.label":"Ingresos","widget.salewidget2.price":"15000 $","widget.salewidget2.details":"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor","widget.salewidget3.label":"Ingresos","widget.salewidget3.price":"15000 $","widget.salewidget3.details":"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor","widget.salewidget4.label":"Ingresos","widget.salewidget4.price":"15000 $","widget.salewidget4.details":"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor","widget.cardwidget1.number":"110","widget.cardwidget1.text":"Nuevos mensajes","widget.cardwidget2.number":"100%","widget.cardwidget2.text":"Volumen","widget.cardwidget3.number":"137","widget.cardwidget3.text":"Logro","widget.progresswidget1.label":"Descargar","widget.progresswidget1.details":"50% Completo","widget.progresswidget2.label":"Apoyo","widget.progresswidget2.details":"80% de clientes satisfechos","widget.progresswidget3.label":"Subir","widget.progresswidget3.details":"65% Completo","widget.vcardwidget.name":"Jhon Doe","widget.vcardwidget.title":"Sr. Desarrollador iOS","widget.vcardwidget.description":"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed eiusmod tempor ammet dolar consectetur adipisicing elit","checkout.billingform.firstname":"Nombre de pila","checkout.billingform.lastname":"Apellido","checkout.billingform.company":"nombre de empresa","checkout.billingform.email":"Direcci\xf3n de correo electr\xf3nico","checkout.billingform.mobile":"No m\xf3viles","checkout.billingform.country":"Pa\xeds","checkout.billingform.city":"Ciudad","checkout.billingform.address":"Direcci\xf3n","checkout.billingform.addressoptional":"Apartamento   suite   unidad   etc. (opcional  ","checkout.billingform.checkbox":"\xbfCrea una cuenta?","antTable.title.image":"Imagen","antTable.title.firstName":"Nombre de pila","antTable.title.lastName":"Apellido","antTable.title.city":"Ciudad","antTable.title.street":"Calle","antTable.title.email":"Email","antTable.title.dob":"DOB","Map.leaflet.basicTitle":"Mapa b\xe1sico","Map.leaflet.basicMarkerTitle":"Mapa b\xe1sico (con marcador predeterminado  ","Map.leaflet.leafletCustomMarkerTitle":"Mapa b\xe1sico (con marcador de icono personalizado  ","Map.leaflet.leafletCustomHtmlMarkerTitle":"Mapa b\xe1sico (con marcador HTML personalizado  ","Map.leaflet.leafletMarkerClusterTitle":"Mapa b\xe1sico (con grupo de marcadores  ","Map.leaflet.leafletRoutingTitle":"Enrutamiento b\xe1sico del mapa","Component.contacts.noOption":"No se ha encontrado ning\xfan contacto","email.send":"ENVIAR","email.cancel":"CANCELAR","email.compose":"COMPONER","email.noMessage":"Por favor seleccione un correo para leer","themeSwitcher.purchase":"Compra ahora","themeSwitcher.settings":"AJUSTES","sidebar.frappeChart":"Frappe Charts","topbar.myprofile":"Mi perfil","topbar.help":"Ayuda","topbar.logout":"Cerrar sesi\xf3n","topbar.viewAll":"Ver todo","topbar.viewCart":"Ver carro","topbar.totalPrice":"Precio total","sidebar.scrumboard":"tablero de scrum"}'
      );
    },
    207: function(e) {
      e.exports = JSON.parse(
        '{"sidebar.swiperslider":"Curseur","sidebar.email":"Email","sidebar.chat":"Bavarder","sidebar.ecommerce":"Commerce \xe9lectronique","sidebar.shop":"tienda","sidebar.cart":"Carro","sidebar.checkout":"revisa","sidebar.cards":"Divertido Tarjetas","sidebar.maps":"Mapas","sidebar.googleMap":"Mapa de Google","sidebar.leafletMap":"Mapa del folleto","sidebar.firestorecrud":"Firestore CRUD","sidebar.firestorecrudarticle":"Des articles","sidebar.firestorecrudinvestor":"Investisseurs","sidebar.calendar":"Calendario","sidebar.notes":"Notas","sidebar.todos":"Todos","sidebar.contacts":"Contactos","sidebar.shuffle":"Barajar","sidebar.charts":"Gr\xe1ficos","sidebar.googleCharts":"Google Carts","sidebar.recharts":"Recharts","sidebar.reactVis":"Reaccionar Vis","sidebar.reactChart2":"React-Chart-2","sidebar.reactTrend":"Reaccionar","sidebar.eChart":"Echart","sidebar.forms":"Formularios","sidebar.input":"Entrada","sidebar.editor":"Editor","sidebar.formsWithValidation":"Formularios con validaci\xf3n","sidebar.progress":"Progreso","sidebar.button":"Bot\xf3n","sidebar.tab":"Leng\xfceta","sidebar.checkbox":"Caja","sidebar.radiobox":"Radiobox","sidebar.transfer":"Transferir","sidebar.autocomplete":"Autocompletar","sidebar.boxOptions":"Opciones de Caja","sidebar.uiElements":"Elementos de la interfaz de usuario","sidebar.badge":"Distintivo","sidebar.card2":"Tarjeta","sidebar.corusel":"Parranda","sidebar.collapse":"Colapso","sidebar.popover":"Acercarse","sidebar.tooltip":"Tooltip","sidebar.tag":"Etiqueta","sidebar.timeline":"Cronograma","sidebar.dropdown":"Desplegable","sidebar.pagination":"Paginaci\xf3n","sidebar.rating":"Clasificaci\xf3n","sidebar.tree":"\xc1rbol","sidebar.advancedElements":"Elementos avanzados","sidebar.reactDates":"Reaccionar fechas","sidebar.codeMirror":"C\xf3digo Espejo","sidebar.uppy":"Uppy Uploader","sidebar.dropzone":"Zona de descenso","sidebar.feedback":"Realimentaci\xf3n","sidebar.alert":"Alerta","sidebar.modal":"Modal","sidebar.message":"Mensaje","sidebar.notification":"Notificaci\xf3n","sidebar.popConfirm":"Pop confirmar","sidebar.spin":"Girar","sidebar.tables":"Mesas","sidebar.antTables":"Tablas de hormigas","sidebar.pages":"P\xe1ginas","sidebar.500":"500","sidebar.404":"404","sidebar.signIn":"Registrarse","sidebar.signUp":"Reg\xedstrate","sidebar.forgotPw":"Olvid\xe9 contrase\xf1as","sidebar.resetPw":"Restablecer contrase\xf1as","sidebar.invoice":"Factura","sidebar.menuLevels":"Niveles de men\xfa","sidebar.item1":"Art\xedculo 1","sidebar.item2":"Art\xedculo 2","sidebar.option1":"Opci\xf3n 1","sidebar.option2":"opcion 2","sidebar.option3":"Opci\xf3n 3","sidebar.option4":"Opci\xf3n 4","sidebar.blankPage":"P\xe1gina en blanco","sidebar.githubSearch":"Github Buscar","sidebar.youtubeSearch":"B\xfasqueda de Youtube","languageSwitcher.label":"Cambiar idioma","themeSwitcher":"Selector de temas","themeSwitcher.Sidebar":"Barra lateral","themeSwitcher.Topbar":"Barra superior","themeSwitcher.Background":"Fondo","feedback.alert.basicTitle":"T\xedtulo B\xe1sico","feedback.alert.successText":"Texto de \xe9xito","feedback.alert.infoText":"Texto de la informaci\xf3n","feedback.alert.warningText":"Texto de advertencia","feedback.alert.errorText":"Texto de error","feedback.alert.closableAlertType":"Tipo de Alerta Closable","feedback.alert.iconAlertType":"Tipo de alerta de icono","feedback.alert.iconInfoAlertType":"Tipo de Alerta","feedback.alert.successTips":"consejos de \xe9xito","feedback.alert.successTipsDescription":"Descripci\xf3n detallada y consejos sobre copywriting exitoso.","feedback.alert.informationTips":"Notas informativas","feedback.alert.informationDescription":"Descripci\xf3n adicional e informaciones sobre copywriting.","feedback.alert.warningTips":"Advertencia","feedback.alert.warningDescription":"Este es un aviso de advertencia sobre copywriting.","feedback.alert.errorTips":"Error","feedback.alert.errorDescription":"Este es un mensaje de error acerca de copywriting.","feedback.alert.modalTitle":"Modal uno con personalizar Footer","feedback.alert.modalSubTitle":"Di\xe1logo modal b\xe1sico.","feedback.alert.successTitle":"\xc9xito","feedback.alert.infoTitle":"Informaci\xf3n","feedback.alert.errorTitle":"Error","feedback.alert.warningTitle":"Advertencia","feedback.alert.modalBlockTitle":"Modal","feedback.alert.confirmationModalDialogue":"Cuadro de di\xe1logo modal de confirmaci\xf3n","feedback.alert.simpleModalDialogue":"Di\xe1logo modal simple","feedback.alert.message":"Mensaje","feedback.alert.normalMessageTitle":"Mensaje normal","feedback.alert.normalMessageSubtitle":"Mensajes normales como retroalimentaci\xf3n.","feedback.alert.displayMessage":"Mostrar mensaje normal","feedback.alert.displayOtherTypeMessageTitle":"Otros tipos de mensaje","feedback.alert.displayOtherTypeMessageSubTitle":"Mensajes de \xe9xito   error y tipos de advertencia.","feedback.alert.customizeDurationTitle":"Personalizar duraci\xf3n","feedback.alert.customizeDurationSubTitle":"ustomize la duraci\xf3n de la exhibici\xf3n del mensaje de 1.5s a 10s por defecto.","feedback.alert.customizeDurationButton":"Duraci\xf3n de la pantalla personalizada","feedback.alert.messageLoadingTitle":"Mensaje de carga","feedback.alert.messageLoadingSubTitle":"Mostrar un indicador de carga global   que se descarta por s\xed mismo de forma as\xedncrona.","feedback.alert.displayLoadIndicator":"Mostrar un indicador de carga","feedback.alert.notification":"Notificaci\xf3n","feedback.alert.notificationBasicTitle":"BASIC","feedback.alert.notificationBasicSubTitle":"El uso m\xe1s simple que cierre la caja de notificaci\xf3n despu\xe9s de 4.5s.","feedback.alert.notificationBasicDescription":"Abrir el cuadro de notificaci\xf3n","feedback.alert.notificationDurationTitle":"Duraci\xf3n despu\xe9s de la cual se cierra el cuadro de notificaci\xf3n","feedback.alert.notificationDurationSubTitle":"La duraci\xf3n se puede utilizar para especificar cu\xe1nto tiempo permanece abierta la notificaci\xf3n. Una vez transcurrido el tiempo de duraci\xf3n   la notificaci\xf3n se cierra autom\xe1ticamente. Si no se especifica   el valor predeterminado es 4  5 segundos. Si establece el valor en 0   el cuadro de notificaci\xf3n nunca se cerrar\xe1 autom\xe1ticamente.","feedback.alert.notificationwithIconTitle":"Notificaci\xf3n con icono","feedback.alert.notificationwithIconSubTitle":"Un cuadro de notificaci\xf3n con un icono en el lado izquierdo.","feedback.alert.notificationwithCustomIconTitle":"Notificaci\xf3n con icono personalizado","feedback.alert.notificationwithCustomIconSubTitle":"Mensajes normales como retroalimentaci\xf3n.","feedback.alert.notificationwithCustomButtonTitle":"Notificaci\xf3n con bot\xf3n personalizado","feedback.alert.notificationwithCustomButtonSubTitle":"Mensajes normales como retroalimentaci\xf3n.","feedback.alert.popConfirm":"Pop confirmar","feedback.alert.popConfirm.basicTitle":"Confirmaci\xf3n b\xe1sica","feedback.alert.popConfirm.basicSubTitle":"El ejemplo b\xe1sico.","feedback.alert.popConfirm.delete":"Borrar","feedback.alert.popConfirm.notiWithIconTitle":"Notificaci\xf3n con icono personalizado","feedback.alert.popConfirm.notiWithIconSubTitle":"Mensajes normales como retroalimentaci\xf3n.","feedback.alert.popConfirm.TL":"TL","feedback.alert.popConfirm.top":"Parte superior","feedback.alert.popConfirm.TR":"TR","feedback.alert.popConfirm.LT":"LT","feedback.alert.popConfirm.left":"Izquierda","feedback.alert.popConfirm.LB":"LB","feedback.alert.popConfirm.RT":"RT","feedback.alert.popConfirm.right":"Derecha","feedback.alert.popConfirm.RB":"RB","feedback.alert.popConfirm.Bl":"licenciado en Derecho","feedback.alert.popConfirm.bottom":"Fondo","feedback.alert.popConfirm.BR":"BR","feedback.alert.spin":"Girar","feedback.alert.spin.basicTitle":"Girar el tama\xf1o","feedback.alert.spin.background":"Girar con fondo","feedback.alert.spin.backgroundDescription":"Descripci\xf3n de Spin With Background","feedback.alert.spin.loadingState":"Estado de carga","feedback.alert.spin.alertTitle":"T\xedtulo del mensaje de alerta","feedback.alert.spin.alertDescription":"M\xe1s detalles sobre el contexto de esta alerta.","forms.input.header":"Entrada","forms.input.basicTitle":"Uso b\xe1sico","forms.input.basicSubTitle":"Ejemplo de uso b\xe1sico.","forms.input.variationsTitle":"Tres tama\xf1os de entrada","forms.input.variationsSubtitle":"Hay tres tama\xf1os de un cuadro de entrada  grande (42px     predeterminado (35px   y peque\xf1o (30px  . Nota  Dentro de los formularios   s\xf3lo se utiliza el tama\xf1o grande.","forms.input.groupTitle":"Grupo de entrada","forms.input.groupSubTitle":"Ejemplo de Input.Group Nota  No necesita Col para controlar el ancho en el modo compacto.","forms.input.autoSizingTitle":"Autosizing la altura para ajustar el contenido","forms.input.autoSizingSubTitle":"prop de autosize para un tipo de entrada textarea hace que la altura se ajuste autom\xe1ticamente en funci\xf3n del contenido. Se puede proporcionar un objeto de opciones al tama\xf1o autom\xe1tico para especificar el n\xfamero m\xednimo y m\xe1ximo de l\xedneas que la zona de texto ajustar\xe1 autom\xe1ticamente.","forms.input.prePostTabTitle":"Pesta\xf1a Pre    Post","forms.input.prePostTabSubTitle":"El uso de pre & amp; post tabs ejemplo ..","forms.input.textAreaTitle":"\xc1rea de texto","forms.input.textAreaSubTitle":"Para casos de entrada de usuario multi-l\xednea   se puede utilizar una entrada cuyo tipo prop tiene el valor de textarea.","forms.input.searchTitle":"Buscar","forms.input.searchSubTitle":"Ejemplo de creaci\xf3n de un cuadro de b\xfasqueda agrupando una entrada est\xe1ndar con un bot\xf3n de b\xfasqueda","forms.editor.header":"Editor","forms.formsWithValidation.header":"Formulario de validaci\xf3n personalizado","forms.formsWithValidation.failLabel":"Fallar","forms.formsWithValidation.failHelp":"Debe ser la combinaci\xf3n de n\xfameros & amp; alfabetos","forms.formsWithValidation.warningLabel":"Advertencia","forms.formsWithValidation.ValidatingLabel":"Validando","forms.formsWithValidation.ValidatingHelp":"La informaci\xf3n est\xe1 siendo validada ...","forms.formsWithValidation.SuccessLabel":"\xc9xito","forms.formsWithValidation.WarninghasFeedbackLabel":"Advertencia","forms.formsWithValidation.FailhasFeedbackLabel":"Fallar","forms.formsWithValidation.FailhasFeedbackHelp":"Debe ser la combinaci\xf3n de n\xfameros & amp; alfabetos","forms.progressBar.header":"Barra de progreso","forms.progressBar.standardTitle":"Barra de progreso","forms.progressBar.standardSubTitle":"Una barra de progreso est\xe1ndar.","forms.progressBar.circularTitle":"Barra de progreso circular","forms.progressBar.circularSubTitle":"Una barra de progreso circular.","forms.progressBar.miniTitle":"Barra de progreso de tama\xf1o mini","forms.progressBar.miniSubTitle":"Adecuado para un \xe1rea estrecha.","forms.progressBar.miniCircularTitle":"Una barra de progreso circular m\xe1s peque\xf1a.","forms.progressBar.dynamicCircularTitle":"Barra de progreso circular din\xe1mica","forms.progressBar.dynamicCircularSubTitle":"Una barra de progreso din\xe1mica es mejor.","forms.progressBar.customTextTitle":"Formato de texto personalizado","forms.progressBar.customTextSubTitle":"Puede personalizar el formato de texto configurando el formato.","forms.progressBar.dashboardTitle":"Tablero","forms.progressBar.dashboardSubTitle":"Un estilo de progreso en el tablero de instrumentos.","forms.button.header":"Botones","forms.button.simpleButton":"Tipo de bot\xf3n","forms.button.iconButton":"Icono de bot\xf3n","forms.button.simpleButtonPrimaryText":"Primario","forms.button.simpleButtonDefaultText":"Defecto","forms.button.simpleButtonDashedText":"Da\xf1ado","forms.button.simpleButtonDangerText":"Peligro","forms.button.iconPrimaryButton":"buscar","forms.button.iconSimpleButton":"buscar","forms.button.iconCirculerButton":"buscar","forms.button.iconDashedButton":"buscar","forms.button.SizedButton":"Tama\xf1o del bot\xf3n","forms.button.DisabledButton":"Bot\xf3n desactivado","forms.button.LoadingButton":"Bot\xf3n de carga","forms.button.MultipleButton":"Bot\xf3n m\xfaltiple","forms.button.groupButton":"Grupo de botones","forms.Tabs.header":"Pesta\xf1as","forms.Tabs.simpleTabTitle":"buscar","forms.Tabs.simpleTabSubTitle":"Pesta\xf1as inhabilitadas","forms.Tabs.iconTabTitle":"Icono de las pesta\xf1as","forms.Tabs.miniTabTitle":"Mini pesta\xf1as","forms.Tabs.extraTabTitle":"Pesta\xf1as de acci\xf3n adicionales","forms.Tabs.TabpositionTitle":"Posici\xf3n","forms.Tabs.TabpositionSubTitle":"Posici\xf3n de las pesta\xf1as  izquierda   derecha   arriba o abajo","forms.Tabs.cardTitle":"Fichas de tipo de tarjeta","forms.Tabs.editableTitle":"Agregar y cerrar pesta\xf1as","forms.Tabs.verticalTitle":"Fichas de tipo vertical","forms.Tabs.basicTitle":"Pesta\xf1as b\xe1sicas","forms.checkbox.header":"Caja","forms.checkbox.basicTitle":"Casilla de verificaci\xf3n b\xe1sica","forms.checkbox.basicSubTitle":"Uso b\xe1sico de la casilla de verificaci\xf3n.","forms.checkbox.groupTitle":"Grupo de casillas de verificaci\xf3n","forms.checkbox.groupSubTitle":"Genera un grupo de casillas de verificaci\xf3n de una matriz. Utilizar desactivado para deshabilitar una casilla de verificaci\xf3n.","forms.checkbox.groupCheckTitle":"Grupo de casillas de verificaci\xf3n","forms.checkbox.groupCheckSubTitle":"Genera un grupo de casillas de verificaci\xf3n de una matriz. Utilizar desactivado para deshabilitar una casilla de verificaci\xf3n.","forms.radio.header":"Radio","forms.radio.simpleTitle":"Radio b\xe1sica","forms.radio.simpleSubTitle":"El uso m\xe1s simple. Utilizar desactivado para desactivar una radio.","forms.radio.groupTitle":"Grupo de radio vertical","forms.radio.groupSubTitle":"Vertical RadioGroup   con m\xe1s radios.","forms.radio.groupSecondTitle":"Grupo de radio","forms.radio.groupSecondSubTitle":"Un grupo de componentes de radio.","forms.radio.groupThirdTitle":"Grupo de radio","forms.radio.groupThirdSubTitle":"Un grupo de componentes de radio.","forms.transfer.header":"Transferir","forms.transfer.SubTitle":"Transferir con un cuadro de b\xfasqueda.","forms.transfer.Title":"Buscar","forms.autocomplete.header":"Autocompletar","forms.autocomplete.simpleTitle":"Personalizado","forms.autocomplete.simpleSubTitle":"Puede pasar AutoComplete.Option como hijos de Autocompletar   en lugar de utilizar dataSource","forms.autocomplete.customizeTitle":"Personalizar el componente de entrada","forms.autocomplete.customizeSubTitle":"Personalizar el componente de entrada","uiElements.badge.badge":"Distintivo","uiElements.badge.basicExample":"Ejemplo B\xe1sico","uiElements.badge.basicExampleSubTitle":"Uso m\xe1s simple. La insignia se ocultar\xe1 cuando count sea 0   pero podemos usar showZero para mostrarlo.","uiElements.badge.overflowCount":"Cuenta de desbordamiento","uiElements.badge.overflowCountSubTitle":"OverflowCount se muestra cuando count es mayor que overflowCount. El valor predeterminado de overflowCount es 99.","uiElements.badge.status":"Estado","uiElements.badge.statusSubTitle":"Insignia aut\xf3noma con estado.","uiElements.badge.success":"\xc9xito","uiElements.badge.error":"Error","uiElements.badge.default":"Defecto","uiElements.badge.processing":"Tratamiento","uiElements.badge.warning":"Advertencia","uiElements.badge.redBadge":"Insignia roja","uiElements.badge.redBadgeSubTitle":"Esto simplemente mostrar\xe1 una insignia roja   sin un conteo espec\xedfico.","uiElements.badge.linkSomething":"Enlace algo","uiElements.cards.cards":"Divertido Tarjetas","uiElements.cards.basicCard":"Tarjeta b\xe1sica","uiElements.cards.basicCardSubTitle":"Una tarjeta b\xe1sica que contiene un t\xedtulo   contenido y un contenido de esquina adicional.","uiElements.cards.more":"M\xe1s","uiElements.cards.cardTitle":"T\xedtulo de la tarjeta","uiElements.cards.cardContent":"Contenido de la tarjeta","uiElements.cards.lorem":"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor incididunt ut labore y dolore magna aliqua. Ut enim ad minim veniam   quis nostrud ejercicio ullamco laboris nisi ut aliquip ex y commodo consequat.","uiElements.cards.noBorder":"Sin bordes","uiElements.cards.noBorderSubTitle":"Una tarjeta sin fronteras sobre un fondo gris.","uiElements.cards.gridCard":"Tarjeta de red","uiElements.cards.gridCardSubTitle":"Las tarjetas suelen cooperar con el dise\xf1o de la cuadr\xedcula en la p\xe1gina de vista general.","uiElements.cards.loadingCard":"Carga de la tarjeta","uiElements.cards.loadingCardSubTitle":"Muestra un indicador de carga mientras se est\xe1 recuperando el contenido de la tarjeta.","uiElements.cards.whateverContent":"Cualquier contenido","uiElements.cards.customizedContentTitle":"Contenido personalizado","uiElements.cards.customizedContent":"Muestra un indicador de carga mientras se est\xe1 recuperando el contenido de la tarjeta.","uiElements.cards.europeStreetBeat":"Europa Street beat","uiElements.cards.instagram":"www.instagram.com","uiElements.carousel.carousel":"Parranda","uiElements.carousel.verticalCarousel":"Carrusel vertical","uiElements.carousel.verticalCarouselSubTitle":"Paginaci\xf3n vertical. use   vertical = true","uiElements.carousel.basicCarousel":"Carrusel b\xe1sico","uiElements.carousel.basicCarouselSubTitle":"Uso b\xe1sico","uiElements.carousel.fadeInTransition":"Fade In Transition","uiElements.carousel.fadeInTransitionSubTitle":"Las diapositivas utilizan el fundido para la transici\xf3n.   effect = fade","uiElements.carousel.scrollAutomatically":"Desplazarse autom\xe1ticamente","uiElements.carousel.scrollAutomaticallySubTitle":"Tiempo de desplazamiento a la siguiente tarjeta    imagen. auto reproducci\xf3n","uiElements.collapse.collapse":"Colapso","uiElements.collapse.collapseSubTitle":"Se puede ampliar m\xe1s de un panel a la vez   el primer panel se inicializa para estar activo en este caso. use   defaultActiveKey =   [keyNum]","uiElements.collapse.text":"Un perro es un tipo de animal domesticado. Conocido por su lealtad y fidelidad   se puede encontrar como un invitado de bienvenida en muchos hogares de todo el mundo.","uiElements.collapse.headerOne":"Este es el encabezado del panel 1","uiElements.collapse.headerTwo":"Se trata de la cabecera del panel 2","uiElements.collapse.headerThree":"Este es el encabezado del panel 3","uiElements.collapse.headerNested":"\xc9ste es panel del nido del panel","uiElements.collapse.nestedExample":"Ejemplo anidado","uiElements.collapse.nestedExampleSubTitle":"Collapse est\xe1 anidado dentro del Collapse.","uiElements.collapse.borderlessExample":"Ejemplo sin m\xe1rgenes","uiElements.collapse.borderlessExampleSubTitle":"Un estilo sin fronteras de Collapse. use   bordered =   false","uiElements.collapse.accordion":"Acorde\xf3n","uiElements.collapse.accordionSubTitle":"Acorde\xf3n   s\xf3lo se puede ampliar un panel cada vez. El primer panel se ampliar\xe1 de forma predeterminada. utilizar acorde\xf3n","uiElements.popover.popover":"Popover","uiElements.popover.basicExample":"Ejemplo B\xe1sico","uiElements.popover.basicExampleSubTitle":"El ejemplo m\xe1s b\xe1sico. El tama\xf1o de la capa flotante depende de la regi\xf3n del contenido.","uiElements.popover.hoverMe":"M\xedrame","uiElements.popover.title":"T\xedtulo","uiElements.popover.titleTrigger":"Tres maneras de activar","uiElements.popover.titleTriggerSubTitle":"El rat\xf3n para hacer clic   enfocar y moverse.","uiElements.popover.focusMe":"Enf\xf3came","uiElements.popover.clickMe":"Haz click en mi","uiElements.popover.placement":"Colocaci\xf3n","uiElements.popover.placementSubTitle":"Hay 12 opciones de colocaci\xf3n disponibles.","uiElements.popover.top":"Parte superior","uiElements.popover.topLeft":"Arriba a la izquierda","uiElements.popover.topRight":"Parte superior derecha","uiElements.popover.leftTop":"Parte superior izquierda","uiElements.popover.left":"Izquierda","uiElements.popover.leftBottom":"Abajo a la izquierda","uiElements.popover.rightTop":"Justo arriba","uiElements.popover.right":"Derecha","uiElements.popover.bottom":"Fondo","uiElements.popover.bottomLeft":"Abajo Izquierda","uiElements.popover.bottomRight":"Abajo a la derecha","uiElements.popover.boxTitle":"Control del cierre del di\xe1logo","uiElements.popover.boxSubTitle":"Utilice el apoyo visible para controlar la visualizaci\xf3n de la tarjeta.","uiElements.popover.TR":"TR","uiElements.popover.TL":"TL","uiElements.popover.LT":"LT","uiElements.popover.LB":"LB","uiElements.popover.RT":"RT","uiElements.popover.RB":"RB","uiElements.popover.BL":"licenciado en Derecho","uiElements.popover.BR":"BR","uiElements.popover.close":"Cerca","uiElements.tooltip.tooltip":"Tooltip","uiElements.tooltip.tooltipContent":"Contenido de informaci\xf3n sobre herramientas","uiElements.tooltip.basicExample":"Ejemplo B\xe1sico","uiElements.tooltip.basicExampleSubTitle":"El uso m\xe1s simple.","uiElements.tooltip.placementTitle":"Colocaci\xf3n","uiElements.tooltip.placementSubTitle":"La herramienta tiene 12 opciones de ubicaci\xf3n.","uiElements.tooltip.TL":"TL","uiElements.tooltip.TR":"TR","uiElements.tooltip.LT":"LT","uiElements.tooltip.LB":"LB","uiElements.tooltip.RT":"RT","uiElements.tooltip.RB":"RB","uiElements.tooltip.BL":"licenciado en Derecho","uiElements.tooltip.BR":"BR","uiElements.tooltip.bottom":"Fondo","uiElements.tooltip.right":"Derecha","uiElements.tooltip.left":"Izquierda","uiElements.tooltip.top":"Parte superior","uiElements.tooltip.tooltipContentSpan":"La informaci\xf3n sobre herramientas se mostrar\xe1 cuando se introduzca el rat\xf3n.","uiElements.tooltip.contentSpan":"Contenido de informaci\xf3n sobre herramientas","uiElements.tags.tags":"Etiquetas","uiElements.tags.basicExample":"Ejemplo B\xe1sico","uiElements.tags.basicExampleSubTitle":"Uso de la etiqueta b\xe1sica   y podr\xeda ser cerrable por la propiedad cerrable del sistema. La etiqueta Closable soporta eventos onClose afterClose.","uiElements.tags.tagOne":"Etiqueta 1","uiElements.tags.tagTwo":"Etiqueta 2","uiElements.tags.link":"Enlazar","uiElements.tags.preventDefault":"Prevenga el Incumplimiento","uiElements.tags.colorfulTag":"Etiqueta colorida","uiElements.tags.hotTags":"Etiquetas populares","uiElements.tags.hotTagsSubTitle":"Seleccione sus temas favoritos.","uiElements.tags.hots":"Hots","uiElements.tags.addRemoveDynamically":"Agregar y eliminar din\xe1micamente","uiElements.tags.addRemoveDynamicallySubTitle":"Generando un conjunto de etiquetas por matriz   puede agregar y quitar din\xe1micamente. Se basa en el evento afterClose   que se activar\xe1 mientras finaliza la animaci\xf3n de cierre.","uiElements.tags.newTag":"+ Nueva etiqueta","uiElements.timeline.timeline":"Cronograma","uiElements.timeline.basicExample":"Ejemplo B\xe1sico","uiElements.timeline.basicTimeline":"L\xednea de tiempo b\xe1sica","uiElements.timeline.lastNode":"Ultimo nodo","uiElements.timeline.lastNodeContent":"Cuando la l\xednea de tiempo est\xe1 incompleta y en curso   poner un nodo fantasma por fin. set   pending =   true     o   pending =   un elemento React","uiElements.timeline.seeMore":"Ver m\xe1s","uiElements.timeline.custom":"Personalizado","uiElements.timeline.customContent":"Establezca un nodo como un icono u otro elemento personalizado.","uiElements.timeline.colorExample":"Ejemplo de color","uiElements.timeline.colorExampleContent":"Establecer el color de los c\xedrculos. verde significa estado completado o de \xe9xito   rojo significa advertencia o error y azul significa estado en curso u otro estado predeterminado.","uiElements.timeline.createServiceSite":"Crear un sitio de servicios 2015-09-01","uiElements.timeline.solveInitialNetwork":"Resolver problemas de red iniciales 2015-09-01","uiElements.timeline.networkProblemSolved":"Problemas de red resueltos 2015-09-01","uiElements.timeline.technicalTesting":"Pruebas t\xe9cnicas 2015-09-01","uiElements.dropdown.dropdown":"Desplegable","uiElements.dropdown.hoverDropdown":"Despl\xe1cese","uiElements.dropdown.hoverMe":"M\xedrame","uiElements.dropdown.hoverPlacement":"Despliegue de colocaci\xf3n de cola","uiElements.dropdown.hoverDisableLink":"Desplazamiento con desplegable","uiElements.dropdown.clickedDropdown":"Desplegable pulsado","uiElements.dropdown.buttonDropdown":"Bot\xf3n con men\xfa desplegable","uiElements.pagination.pagination":"Paginaci\xf3n","uiElements.pagination.basic":"BASIC","uiElements.pagination.more":"M\xe1s","uiElements.pagination.changer":"Cambiador","uiElements.pagination.jumper":"Saltador","uiElements.pagination.miniSize":"Tama\xf1o mini","uiElements.pagination.simpleMode":"Modo simple","uiElements.pagination.controlled":"Revisado","uiElements.pagination.totalNumber":"Numero total","uiElements.rating.rating":"Clasificaci\xf3n","uiElements.rating.basicExample":"Ejemplo B\xe1sico","uiElements.rating.basicExampleSubTitle":"El uso m\xe1s simple.","uiElements.rating.halfStar":"Media estrella","uiElements.rating.halfStarSubTitle":"Soporte de media estrella.","uiElements.rating.showCopywriting":"Mostrar copywriting","uiElements.rating.showCopywritingSubTitle":"A\xf1adir copywriting en los componentes de la tarifa.","uiElements.rating.readOnly":"Solo lectura","uiElements.rating.readOnlySubTitle":"S\xf3lo lectura   no puede utilizar el rat\xf3n para interactuar.","uiElements.rating.otherCharacter":"Otro Personaje","uiElements.rating.otherCharacterSubTitle":"Reemplace la estrella predeterminada por otro car\xe1cter como alfabeto   d\xedgito   iconfonte o incluso palabra china.","uiElements.tree.tree":"\xc1rbol","uiElements.tree.basicExample":"Ejemplo b\xe1sico","uiElements.tree.basicExampleSubTitle":"El uso m\xe1s b\xe1sico   te dir\xe1 c\xf3mo usar checkable   seleccionable   disabled   defaultExpandKeys   y etc.","uiElements.tree.basicControlledExample":"Ejemplo controlado b\xe1sico","uiElements.tree.basicControlledExampleSubTitle":"ejemplo controlado b\xe1sico","uiElements.tree.draggableExample":"Ejemplo arrastrable","uiElements.tree.draggableExampleSubTitle":"Arrastre treeNode para insertar despu\xe9s del otro treeNode o inserte en el otro TreeNode padre.","uiElements.tree.loadAsync":"Cargar datos asincr\xf3nicamente","uiElements.tree.loadAsyncSubTitle":"Para cargar datos asincr\xf3nicamente cuando haga clic para expandir un treeNode.","uiElements.tree.searchableExample":"Ejemplo de b\xfasqueda","uiElements.tree.searchableExampleSubTitle":"\xc1rbol de b\xfasqueda","uiElements.tree.treeWithLine":"\xc1rbol con l\xednea","shuffle.descriptionOne":"Netscape 2.0 se expande   introduciendo Javascript","shuffle.descriptionTwo":"Jesse James Garrett lanza la especificaci\xf3n AJAX","shuffle.descriptionThree":"jQuery 1.0 publicado","shuffle.descriptionFour":"Primero underscore.js commit","shuffle.descriptionFive":"Backbone.js se convierte en una cosa","shuffle.descriptionSix":"Angular 1.0 liberado","shuffle.descriptionSeven":"Reaccionar es de c\xf3digo abierto; los desarrolladores se regocijan","toggle.list":"Lista","toggle.grid":"Cuadr\xedcula","toggle.ascending":"Ascendente","toggle.descending":"Descendente","toggle.shuffle":"Barajar","toggle.rotate":"Girar","toggle.addItem":"A\xf1adir art\xedculo","toggle.removeItem":"Remover el art\xedculo","contactlist.searchContacts":"Buscar contactos","contactlist.addNewContact":"A\xf1adir nuevo contacto","notes.ChoseColor":"Elige un color para tu nota","notes.addNote":"A\xf1adir nueva nota","page404.title":"404","page404.subTitle":"Parece que te has perdido","page404.description":"La p\xe1gina que est\xe1s buscando no existe o se ha movido.","page404.backButton":"VOLVER A LA CASA","page500.title":"500","page500.subTitle":"error de servidor interno","page500.description":"Algo sali\xf3 mal. Por favor   int\xe9ntelo de nuevo.","page500.backButton":"VOLVER A LA CASA","page.forgetPassTitle":"Isom\xf3rfico","page.forgetPassSubTitle":"\xbfSe te olvid\xf3 tu contrase\xf1a?","page.forgetPassDescription":"Introduzca su correo electr\xf3nico y le enviaremos un enlace de restablecimiento.","page.sendRequest":"Enviar petici\xf3n","page.resetPassTitle":"Isom\xf3rfico","page.resetPassSubTitle":"Restablecer la contrase\xf1a","page.resetPassDescription":"Introduzca una nueva contrase\xf1a y confirme.","page.resetPassSave":"Salvar","page.signInTitle":"Isom\xf3rfico","page.signInRememberMe":"Recu\xe9rdame","page.signInButton":"Registrarse","page.signInPreview":"nombre de usuario  demo   contrase\xf1a  demodemo   o simplemente haga clic en cualquier bot\xf3n.","page.signInFacebook":"Iniciar sesi\xf3n usando Facebook","page.signInGooglePlus":"Acceder con Google Plus","page.signInAuth0":"Iniciar sesi\xf3n con Auth0","page.signInForgotPass":"Se te olvid\xf3 tu contrase\xf1a","page.signInCreateAccount":"Crear una cuenta Isomorphoic","page.signUpTitle":"Isom\xf3rfico","page.signUpTermsConditions":"Estoy de acuerdo con los t\xe9rminos y condiciones","page.signUpButton":"Reg\xedstrate","page.signUpFacebook":"Registrate con Facebook","page.signUpGooglePlus":"Reg\xedstrese con Google Plus","page.signUpAuth0":"Reg\xedstrese con Auth0","page.signUpAlreadyAccount":"\xbfYa tienes una cuenta? Registrarse.","widget.reportswidget.label":"Ingresos","widget.reportswidget.details":"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor","widget.singleprogresswidget1.label":"M\xe1rketing","widget.singleprogresswidget2.label":"Addvertisement","widget.singleprogresswidget3.label":"Consultante","widget.singleprogresswidget4.label":"Desarrollo","widget.stickerwidget1.number":"210","widget.stickerwidget1.text":"Correo electr\xf3nico no le\xeddo","widget.stickerwidget2.number":"1749","widget.stickerwidget2.text":"Subida de imagen","widget.stickerwidget3.number":"3024","widget.stickerwidget3.text":"Total de mensajes","widget.stickerwidget4.number":"54","widget.stickerwidget4.text":"Pedidos","widget.salewidget1.label":"Ingresos","widget.salewidget1.price":"15000 $","widget.salewidget1.details":"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor","widget.salewidget2.label":"Ingresos","widget.salewidget2.price":"15000 $","widget.salewidget2.details":"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor","widget.salewidget3.label":"Ingresos","widget.salewidget3.price":"15000 $","widget.salewidget3.details":"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor","widget.salewidget4.label":"Ingresos","widget.salewidget4.price":"15000 $","widget.salewidget4.details":"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor","widget.cardwidget1.number":"110","widget.cardwidget1.text":"Nuevos mensajes","widget.cardwidget2.number":"100%","widget.cardwidget2.text":"Volumen","widget.cardwidget3.number":"137","widget.cardwidget3.text":"Logro","widget.progresswidget1.label":"Descargar","widget.progresswidget1.details":"50% Completo","widget.progresswidget2.label":"Apoyo","widget.progresswidget2.details":"80% de clientes satisfechos","widget.progresswidget3.label":"Subir","widget.progresswidget3.details":"65% Completo","widget.vcardwidget.name":"Jhon Doe","widget.vcardwidget.title":"Sr. Desarrollador iOS","widget.vcardwidget.description":"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed eiusmod tempor ammet dolar consectetur adipisicing elit","checkout.billingform.firstname":"Nombre de pila","checkout.billingform.lastname":"Apellido","checkout.billingform.company":"nombre de empresa","checkout.billingform.email":"Direcci\xf3n de correo electr\xf3nico","checkout.billingform.mobile":"No m\xf3viles","checkout.billingform.country":"Pa\xeds","checkout.billingform.city":"Ciudad","checkout.billingform.address":"Direcci\xf3n","checkout.billingform.addressoptional":"Apartamento   suite   unidad   etc. (opcional","checkout.billingform.checkbox":"\xbfCrea una cuenta?","antTable.title.image":"Imagen","antTable.title.firstName":"Nombre de pila","antTable.title.lastName":"Apellido","antTable.title.city":"Ciudad","antTable.title.street":"Calle","antTable.title.email":"Email","antTable.title.dob":"DOB","Map.leaflet.basicTitle":"Mapa b\xe1sico","Map.leaflet.basicMarkerTitle":"Mapa b\xe1sico (con marcador predeterminado","Map.leaflet.leafletCustomMarkerTitle":"Mapa b\xe1sico (con marcador de icono personalizado","Map.leaflet.leafletCustomHtmlMarkerTitle":"Mapa b\xe1sico (con marcador HTML personalizado","Map.leaflet.leafletMarkerClusterTitle":"Mapa b\xe1sico (con grupo de marcadores","Map.leaflet.leafletRoutingTitle":"Enrutamiento b\xe1sico del mapa","Component.contacts.noOption":"No se ha encontrado ning\xfan contacto","email.send":"ENVIAR","email.cancel":"CANCELAR","email.compose":"COMPONER","email.noMessage":"Por favor seleccione un correo para leer","themeSwitcher.purchase":"ACHETER MAINTENANT","themeSwitcher.settings":"AJUSTES","sidebar.selectbox":"Seleccionar","sidebar.frappeChart":"Frappe Charts","topbar.myprofile":"Mon profil","topbar.help":"Aidez-moi","topbar.logout":"Connectez - Out","topbar.viewAll":"Connectez - Out","topbar.viewCart":"Voir le panier","topbar.totalPrice":"Prix \u200b\u200btotal","sidebar.scrumboard":"Scrum Board"}'
      );
    },
    229: function(e, t, a) {
      e.exports = a(406);
    },
    25: function(e, t, a) {
      'use strict';
      a.d(t, 'b', function() {
        return r;
      });
      var i = a(46),
        o = {
          changeThemes: {
            id: 'changeThemes',
            label: 'themeSwitcher',
            defaultTheme: i.b.theme,
            options: [
              {
                themeName: 'defaultTheme',
                buttonColor: '#ffffff',
                textColor: '#323332',
              },
              {
                themeName: 'customTheme',
                buttonColor: '#ffffff',
                textColor: '#323332',
              },
            ],
          },
          topbarTheme: {
            id: 'topbarTheme',
            label: 'themeSwitcher.Topbar',
            defaultTheme: i.b.topbar,
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
            defaultTheme: i.b.sidebar,
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
            defaultTheme: i.b.layout,
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
      function r(e, t) {
        var a = {};
        return (
          o[e].options.forEach(function(e) {
            e.themeName === t && (a = e);
          }),
          a
        );
      }
      t.a = o;
    },
    27: function(e, t, a) {
      'use strict';
      var i = a(32),
        o = a(2),
        r = a(3),
        n = a.n(r),
        s = a(9),
        l = a(11),
        c = a(14),
        d = a(38),
        u = a.n(d);
      function m(e, t) {
        window.confirm(e + ', reload ?') && t(h.fetchQuestionList());
      }
      var p = {
        getQuestionList: (function() {
          var e = Object(s.a)(
            n.a.mark(function e(t, a) {
              var i, o;
              return n.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        '/question',
                        (i = u.a.stringify(t)),
                        (e.next = 4),
                        c.a
                          .get('/question?' + i)
                          .then(function(e) {
                            switch (e.status) {
                              case 200:
                                return (
                                  Object(l.a)(
                                    'success',
                                    'Get question list successfully'
                                  ),
                                  e.data
                                );
                              default:
                                return m(e.status, a), [];
                            }
                          })
                          .catch(function(e) {
                            return m('connection failed', a), [];
                          })
                      );
                    case 4:
                      return (o = e.sent), e.abrupt('return', o);
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, a) {
            return e.apply(this, arguments);
          };
        })(),
        get: function(e) {
          var t = '/products/'.concat(e);
          return c.a.get(t);
        },
        addQuestion: (function() {
          var e = Object(s.a)(
            n.a.mark(function e(t, a) {
              var i;
              return n.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        '/question',
                        (e.next = 3),
                        c.a
                          .post('/question', t)
                          .then(function(e) {
                            switch (e.status) {
                              case 200:
                                return (
                                  Object(l.a)(
                                    'success',
                                    'Add question successfully'
                                  ),
                                  e.data.id
                                );
                              default:
                                return console.log(t), m(e.status, a), null;
                            }
                          })
                          .catch(function(e) {
                            return m('connection failed', a), null;
                          })
                      );
                    case 3:
                      return (i = e.sent), e.abrupt('return', i);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, a) {
            return e.apply(this, arguments);
          };
        })(),
        editQuestion: (function() {
          var e = Object(s.a)(
            n.a.mark(function e(t, a, i) {
              var o;
              return n.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        '/question',
                        (e.next = 3),
                        c.a
                          .patch(''.concat('/question', '/').concat(t), a)
                          .then(function(e) {
                            switch (e.status) {
                              case 200:
                                return (
                                  Object(l.a)(
                                    'success',
                                    'Update question successfully'
                                  ),
                                  e.data
                                );
                              default:
                                return m(e.status, i), a;
                            }
                          })
                          .catch(function(e) {
                            return m('connection failed', i), a;
                          })
                      );
                    case 3:
                      return (o = e.sent), e.abrupt('return', o);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, a, i) {
            return e.apply(this, arguments);
          };
        })(),
        deleteQuestion: (function() {
          var e = Object(s.a)(
            n.a.mark(function e(t, a) {
              var i;
              return n.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        '/question',
                        (e.next = 3),
                        c.a
                          .delete(''.concat('/question', '/').concat(t))
                          .then(function(e) {
                            switch (e.status) {
                              case 200:
                                return (
                                  Object(l.a)(
                                    'success',
                                    'Delete question successfully'
                                  ),
                                  e.status
                                );
                              default:
                                return m(e.status, a), e.status;
                            }
                          })
                          .catch(function(e) {
                            return m('connection failed', a), {};
                          })
                      );
                    case 3:
                      return (i = e.sent), e.abrupt('return', i);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, a) {
            return e.apply(this, arguments);
          };
        })(),
        apii: (function() {
          var e = Object(s.a)(
            n.a.mark(function e() {
              var t;
              return n.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        '',
                        (e.next = 3),
                        c.a
                          .get('')
                          .then(function(e) {
                            switch (e.status) {
                              case 200:
                                return e;
                              default:
                                return m(e.status, dispatch), [];
                            }
                          })
                          .catch(function(e) {
                            return m('connection failed', dispatch), {};
                          })
                      );
                    case 3:
                      return (t = e.sent), e.abrupt('return', t);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function() {
            return e.apply(this, arguments);
          };
        })(),
      };
      function b(e, t) {
        var a = e.name ? e.name.toUpperCase() : '~',
          i = t.name ? t.name.toUpperCase() : '~';
        return a > i ? 1 : a === i ? 0 : -1;
      }
      function g(e) {
        var t = Object.assign({}, e);
        for (var a in t) '' === t[a] && (t[a] = '_');
        return t;
      }
      var f = {
          ADD_QUESTION: 'ADD_QUESTION',
          EDIT_CONTACT: 'EDIT_CONTACT',
          DELETE__CONTACT: 'DELETE__CONTACT',
          CHANGE_CONTACT: 'CHANGE_CONTACT',
          EDIT_VIEW: 'EDIT_VIEW',
          EDITING_QUESTION: 'EDITING_QUESTION',
          UPDATE_QUESTION: 'UPDATE_QUESTION',
          FETCH_QUESTION: 'FETCH_QUESTION',
          UNVALID_PAYLOAD: 'UNVALID_PAYLOAD',
          changeContact: function(e) {
            return { type: f.CHANGE_CONTACT, id: e };
          },
          fetchQuestionList: function() {
            return (
              console.log('hell'),
              (function() {
                var e = Object(s.a)(
                  n.a.mark(function e(t) {
                    var a, i;
                    return n.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = { pageSize: 500, page: 0 }),
                              (e.next = 3),
                              p.getQuestionList(a, t)
                            );
                          case 3:
                            (i = e.sent),
                              console.log(i !== []),
                              i.length > 0 &&
                                t({
                                  type: f.FETCH_QUESTION,
                                  questions: i,
                                  seectedId: i[0].id,
                                });
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })()
            );
          },
          onAddQuestion: function() {
            var e = {
              content: '',
              answerA: '',
              answerB: '',
              answerC: '',
              answerD: '',
              result: 'A',
              image: '',
              description: '',
              isShuffle: 0,
            };
            return (function() {
              var t = Object(s.a)(
                n.a.mark(function t(a, r) {
                  var s, l, c;
                  return n.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (s = g(e)),
                            console.log(s, e),
                            (t.next = 4),
                            p.addQuestion(s, a)
                          );
                        case 4:
                          (l = t.sent),
                            (c = Object(o.a)(
                              Object(o.a)({}, e),
                              {},
                              { id: l }
                            )),
                            a({
                              type: f.ADD_QUESTION,
                              contacts: [].concat(
                                Object(i.a)(r().Questions.contacts),
                                [c]
                              ),
                              selectedId: c.id,
                              editQuestion: c,
                            });
                        case 7:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function(e, a) {
                return t.apply(this, arguments);
              };
            })();
          },
          onDeleteQuestion: function(e) {
            return function(t, a) {
              var i = a().Questions.contacts,
                o = a().Questions.seectedId,
                r = [];
              i.forEach(function(a) {
                a.id === e ? p.deleteQuestion(e, t) : r.push(a);
              }),
                t({
                  type: f.DELETE__CONTACT,
                  contacts: r,
                  seectedId: e === o ? void 0 : o,
                });
            };
          },
          addQuestion: function(e) {
            return function(t, a) {
              t({
                type: f.ADD_QUESTION,
                contacts: [].concat(Object(i.a)(a().Questions.contacts), [e]),
                selectedId: e.id,
                editQuestion: e,
              });
            };
          },
          editContact: function(e) {
            return function(t, a) {
              var i = a().Questions.contacts,
                o = [];
              i.forEach(function(t) {
                t.id === e.id ? o.push(e) : o.push(t);
              }),
                t({ type: f.EDIT_CONTACT, contacts: o.sort(b) });
            };
          },
          updateQuestion: function() {
            return function(e, t) {
              var a,
                i = t().Questions.contacts,
                o = t().Questions.editingQuestion,
                r = [];
              '' !== (a = o).content.replace(/\s+/g, '') &&
              '' !== a.answerA.replace(/\s+/g, '') &&
              '' !== a.answerB.replace(/\s+/g, '') &&
              '' !== a.answerC.replace(/\s+/g, '') &&
              '' !== a.answerD.replace(/\s+/g, '')
                ? (i.forEach(
                    (function() {
                      var t = Object(s.a)(
                        n.a.mark(function t(a) {
                          return n.a.wrap(function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (a.id !== o.id) {
                                    t.next = 7;
                                    break;
                                  }
                                  return (
                                    r.push(o),
                                    (t.next = 4),
                                    p.editQuestion(o.id, o, e)
                                  );
                                case 4:
                                  t.sent, (t.next = 8);
                                  break;
                                case 7:
                                  r.push(a);
                                case 8:
                                case 'end':
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function(e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  ),
                  e({ type: f.UPDATE_QUESTION, questions: r.sort(b) }))
                : (e(f.unvalidPayload()),
                  Object(l.a)(
                    'error',
                    'C\xe2u h\u1ecfi kh\xf4ng h\u1ee3p l\u1ec7',
                    'Ki\u1ec3m tra l\u1ea1i c\xe1c tr\u01b0\u1eddng d\u1eef li\u1ec7u b\u1eaft bu\u1ed9c'
                  ));
            };
          },
          onEditQuestion: function(e, t) {
            return function(a, i) {
              var r = i().Questions.editingQuestion,
                n = Object(o.a)({}, r);
              switch (e) {
                case 'content':
                  n = Object(o.a)(Object(o.a)({}, r), {}, { content: t });
                  break;
                case 'image':
                  n = Object(o.a)(Object(o.a)({}, r), {}, { image: t });
                  break;
                case 'description':
                  n = Object(o.a)(Object(o.a)({}, r), {}, { description: t });
                  break;
                case 'result':
                  n = Object(o.a)(Object(o.a)({}, r), {}, { result: t });
                  break;
                case 'description':
                  n = Object(o.a)(Object(o.a)({}, r), {}, { description: t });
                  break;
                case 'answerA':
                  n = Object(o.a)(Object(o.a)({}, r), {}, { answerA: t });
                  break;
                case 'answerB':
                  n = Object(o.a)(Object(o.a)({}, r), {}, { answerB: t });
                  break;
                case 'answerC':
                  n = Object(o.a)(Object(o.a)({}, r), {}, { answerC: t });
                  break;
                case 'answerD':
                  n = Object(o.a)(Object(o.a)({}, r), {}, { answerD: t });
              }
              a({ type: f.EDITING_QUESTION, question: n });
            };
          },
          deleteContact: function(e) {
            return function(t, a) {
              var i = a().Questions.contacts,
                o = a().Questions.seectedId,
                r = [];
              i.forEach(function(t) {
                t.id === e || r.push(t);
              }),
                t({
                  type: f.DELETE__CONTACT,
                  contacts: r,
                  seectedId: e === o ? void 0 : o,
                });
            };
          },
          viewChange: function(e) {
            return { type: f.EDIT_VIEW, view: e };
          },
          unvalidPayload: function() {
            return { type: f.UNVALID_PAYLOAD };
          },
        },
        h = (t.a = f);
    },
    36: function(e, t, a) {
      'use strict';
      function i(e) {
        var t = 'MobileView';
        return e > 1220 ? (t = 'DesktopView') : e > 767 && (t = 'TabView'), t;
      }
      a.d(t, 'b', function() {
        return i;
      });
      var o = {
        COLLPSE_CHANGE: 'COLLPSE_CHANGE',
        COLLPSE_OPEN_DRAWER: 'COLLPSE_OPEN_DRAWER',
        CHANGE_OPEN_KEYS: 'CHANGE_OPEN_KEYS',
        TOGGLE_ALL: 'TOGGLE_ALL',
        CHANGE_CURRENT: 'CHANGE_CURRENT',
        CLEAR_MENU: 'CLEAR_MENU',
        toggleCollapsed: function() {
          return { type: o.COLLPSE_CHANGE };
        },
        toggleAll: function(e, t) {
          var a = i(e),
            r = 'DesktopView' !== a;
          return { type: o.TOGGLE_ALL, collapsed: r, view: a, height: t };
        },
        toggleOpenDrawer: function() {
          return { type: o.COLLPSE_OPEN_DRAWER };
        },
        changeOpenKeys: function(e) {
          return { type: o.CHANGE_OPEN_KEYS, openKeys: e };
        },
        changeCurrent: function(e) {
          return { type: o.CHANGE_CURRENT, current: e };
        },
        clearMenu: function() {
          return { type: o.CLEAR_MENU };
        },
      };
      t.a = o;
    },
    380: function(e, t) {},
    386: function(e, t) {},
    406: function(e, t, a) {
      'use strict';
      a.r(t);
      var i = a(0),
        o = a.n(i),
        r = a(29),
        n = a.n(r),
        s = a(41),
        l = a(65),
        c = a(47),
        d = a(56);
      function u() {
        var e = Object(l.a)([
          "\n  .header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .logo {\n    font-size: 32px;\n    font-weight: 700;\n    color: #fff;\n  }\n\n  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-thead > tr:hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {\n    background: #f8f8f8!important;\n  }\n\n  .ant-row.ant-form-item {\n    margin-bottom: 5px;\n  }\n\n  .has-success.has-feedback {\n    .ant-select {\n      .ant-select-selection {\n        .ant-select-selection__rendered {\n          .ant-select-selection__placeholder {\n            display: none !important;\n          }\n        }\n      }\n    }\n  }\n\n  /*-----------------------------------------------*/ \n  // style for project category menu [ScrumBoard]\n  /*-----------------------------------------------*/\n  .project-category {\n    .ant-select-dropdown-menu {\n      .ant-select-dropdown-menu-item {\n        padding: 8px 12px;\n        color: #000000;\n        font-family: 'Roboto';\n        font-weight: 400;\n      }\n    }\n  }\n\n  /*-----------------------------------------------*/ \n  // style for project menu [ScrumBoard]\n  /*-----------------------------------------------*/\n  .ant-dropdown {\n    &.project-menu {\n      width: 280px;\n      top: 133px !important;\n      \n      .ant-dropdown-menu {\n        padding: 0;\n        overflow: hidden;\n\n        .ant-dropdown-menu-item {\n          min-height: 54px;\n          line-height: auto;\n          display: flex;\n          align-items: center;\n          padding: 10px 20px;\n\n          &:first-child {\n            padding: 0;\n            border-bottom: 1px solid #f4f6fd;\n\n            &:hover,\n            &:focus {\n              background-color: #ffffff;\n            }\n          }\n\n          &:hover,\n          &:focus {\n            background-color: #F3F5FD;\n          }\n\n          &:last-child {\n            background-color: #E6EAF8;\n          }\n        }\n      }\n    }\n  }\n\n  /*-----------------------------------------------*/ \n  // style for popover [ScrumBoard]\n  /*-----------------------------------------------*/\n  .ant-popover {\n    .ant-checkbox-group {\n      display: flex;\n      flex-direction: column;\n      .ant-checkbox-group-item {\n        margin: 5px 0;\n        span {\n          font-size: 14px;\n          color: #788195;\n          text-transform: capitalize;\n        }\n      }\n    }\n  }\n\n  /*-----------------------------------------------*/ \n  // style for modal [ScrumBoard]\n  /*-----------------------------------------------*/\n  .ant-modal-wrap {\n    .ant-modal {\n      .ant-modal-content {\n        .ant-modal-body {\n          .render-form-wrapper {\n            padding: 10px;\n            h2 {\n              margin: 0;\n            }\n            form {\n              padding: 15px 0 3px;\n              .field-container {\n                margin-bottom: 26px;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n\n/*-----------------------------------------------*/ \n  // style form previous GlobalStyles\n  /*-----------------------------------------------*/\n\n  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-thead > tr:hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {\n    background: #f8f8f8!important;\n}\n\nfont-family: ",
          ';\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\na,\np,\nli,\ninput,\ntextarea,\nspan,\ndiv,\nimg,\nsvg {\n  &::selection {\n    background: ',
          ';\n    color: #fff;\n  }\n}\n\n.ant-row:not(.ant-form-item) {\n  ',
          ";\n  &:before,\n  &:after {\n    display: none;\n  }\n}\n\n.ant-row > div {\n  padding: 0;\n}\n\n.isoLeftRightComponent {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.isoCenterComponent {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n/********** Add Your Global CSS Here **********/\n\nbody {\n  -webkit-overflow-scrolling: touch;\n}\n\nhtml h1,\nhtml h2,\nhtml h3,\nhtml h4,\nhtml h5,\nhtml h6,\nhtml a,\nhtml p,\nhtml li,\ninput,\ntextarea,\nspan,\ndiv,\nhtml,\nbody,\nhtml a {\n  margin-bottom: 0;\n  font-family: 'Roboto', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n}\n\nhtml ul {\n  -webkit-padding-start: 0px;\n  list-style: none;\n  margin-bottom: 0;\n}\n\n.scrollbar-track-y,\n.scrollbar-thumb-y {\n  width: 5px !important;\n}\n\n.scrollbar-track-x,\n.scrollbar-thumb-x {\n  height: 5px !important;\n}\n\n.scrollbar-thumb {\n  border-radius: 0 !important;\n}\n\n.scrollbar-track {\n  background: rgba(222, 222, 222, 0.15) !important;\n}\n\n.scrollbar-thumb {\n  border-radius: 0 !important;\n  background: rgba(0, 0, 0, 0.5) !important;\n}\n\n.ant-popover-placement-bottom > .ant-popover-content > .ant-popover-arrow:after,\n.ant-popover-placement-bottomLeft\n  > .ant-popover-content\n  > .ant-popover-arrow:after,\n.ant-popover-placement-bottomRight\n  > .ant-popover-content\n  > .ant-popover-arrow:after,\n.ant-popover-placement-top > .ant-popover-content > .ant-popover-arrow:after,\n.ant-popover-placement-topLeft\n  > .ant-popover-content\n  > .ant-popover-arrow:after,\n.ant-popover-placement-topRight\n  > .ant-popover-content\n  > .ant-popover-arrow:after {\n  left: 0;\n  margin-left: -4px;\n}\n\n/* Instagram Modal */\n\n.ant-modal-wrap.instagram-modal .ant-modal {\n  max-width: 935px;\n  width: 100% !important;\n}\n\n@media only screen and (max-width: 991px) {\n  .ant-modal-wrap.instagram-modal .ant-modal {\n    padding: 0 60px;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .ant-modal-wrap.instagram-modal .ant-modal {\n    max-width: 580px;\n  }\n}\n\n.ant-modal-wrap.instagram-modal .ant-modal-content {\n  border-radius: 0;\n}\n\n.ant-modal-wrap.instagram-modal .ant-modal-content button.ant-modal-close {\n  position: fixed;\n  color: #fff;\n}\n\n.ant-modal-wrap.instagram-modal .ant-modal-content button.ant-modal-close i {\n  font-size: 24px;\n}\n\n.ant-modal-wrap.instagram-modal .ant-modal-content .ant-modal-body {\n  padding: 0;\n}\n\n/********** Add Your Global RTL CSS Here **********/\n\n/* Popover */\n\nhtml[dir='rtl'] .ant-popover {\n  text-align: right;\n}\n\n/* Ecommerce Card */\n\nhtml[dir='rtl'] .isoCardInfoForm .ant-input {\n  text-align: right;\n}\n\n/* Modal */\n\nhtml[dir='rtl'] .has-success.has-feedback:after,\nhtml[dir='rtl'] .has-warning.has-feedback:after,\nhtml[dir='rtl'] .has-error.has-feedback:after,\nhtml[dir='rtl'] .is-validating.has-feedback:after {\n  left: 0;\n  right: auto;\n}\n\nhtml[dir='rtl'] .ant-modal-close {\n  right: inherit;\n  left: 0;\n}\n\nhtml[dir='rtl'] .ant-modal-footer {\n  text-align: left;\n}\n\nhtml[dir='rtl'] .ant-modal-footer button + button {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\nhtml[dir='rtl'] .ant-confirm-body .ant-confirm-content {\n  margin-right: 42px;\n}\n\nhtml[dir='rtl'] .ant-btn > .anticon + span,\nhtml[dir='rtl'] .ant-btn > span + .anticon {\n  margin-right: 0.5em;\n}\n\nhtml[dir='rtl'] .ant-btn-loading span {\n  margin-left: 0;\n  margin-right: 0.5em;\n}\n\nhtml[dir='rtl']\n  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline) {\n  padding-left: 25px;\n  padding-right: 29px;\n}\n\nhtml[dir='rtl']\n  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline)\n  .anticon {\n  margin-right: -14px;\n  margin-left: 0;\n}\n\n/* Confirm */\n\nhtml[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-body > .anticon {\n  margin-left: 16px;\n  margin-right: 0;\n  float: right;\n}\n\nhtml[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-btns {\n  float: left;\n}\n\nhtml[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-btns button + button {\n  margin-right: 10px;\n  margin-left: 0;\n}\n\n/* Message */\n\nhtml[dir='rtl'] .ant-message .anticon {\n  margin-left: 8px;\n  margin-right: 0;\n}\n\n/* Pop Confirm */\n\nhtml[dir='rtl'] .ant-popover-message-title {\n  padding-right: 20px;\n  padding-left: 0;\n}\n\nhtml[dir='rtl'] .ant-popover-buttons {\n  text-align: left;\n}\n\n/* Notification */\n\nhtml[dir='rtl']\n  .ant-notification-notice-closable\n  .ant-notification-notice-message {\n  padding-left: 24px;\n  padding-right: 0;\n}\n\nhtml[dir='rtl']\n  .ant-notification-notice-with-icon\n  .ant-notification-notice-message,\nhtml[dir='rtl']\n  .ant-notification-notice-with-icon\n  .ant-notification-notice-description {\n  margin-right: 48px;\n}\n\nhtml[dir='rtl'] .ant-notification-notice-close {\n  right: auto;\n  left: 16px;\n}\n\nhtml[dir='rtl'] .ant-notification-notice-with-icon {\n  left: 0;\n}\n\n/* Dropzone */\n\nhtml[dir='rtl'] .dz-hidden-input {\n  display: none;\n}\n",
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      var m = Object(c.b)(
          u(),
          Object(d.font)('primary', 0),
          Object(d.palette)('primary', 0),
          ''
        ),
        p = a(32),
        b = a(31),
        g = a(191),
        f = a(127),
        h = a(2),
        T =
          (a(113),
          [
            {
              key: 'mailbox',
              label: 'sidebar.email',
              leftIcon: 'ion-android-mail',
            },
            { key: 'chat', label: 'sidebar.chat', leftIcon: 'ion-chatbubbles' },
            {
              key: 'ecommerce',
              label: 'sidebar.ecommerce',
              leftIcon: 'ion-bag',
              children: [
                { key: 'shop', label: 'sidebar.shop' },
                { key: 'cart', label: 'sidebar.cart' },
                { key: 'checkout', label: 'sidebar.checkout' },
                { key: 'card', label: 'sidebar.cards' },
              ],
            },
            {
              key: 'maps',
              label: 'sidebar.maps',
              leftIcon: 'ion-map',
              children: [
                { key: 'googlemap', label: 'sidebar.googleMap' },
                { key: 'leafletmap', label: 'sidebar.leafletMap' },
              ],
            },
            {
              key: 'my-profile',
              label: 'sidebar.profile',
              leftIcon: 'ion-person',
            },
            {
              key: 'scrum-board',
              label: 'sidebar.scrumboard',
              leftIcon: 'ion-android-checkbox-outline',
            },
            {
              key: 'invoice',
              label: 'sidebar.invoice',
              leftIcon: 'ion-clipboard',
            },
            {
              key: 'youtubeSearch',
              label: 'sidebar.youtubeSearch',
              leftIcon: 'ion-social-youtube',
            },
            {
              key: 'calendar',
              label: 'sidebar.calendar',
              leftIcon: 'ion-calendar',
            },
            { key: 'notes', label: 'sidebar.notes', leftIcon: 'ion-ios-paper' },
            {
              key: 'todo',
              label: 'sidebar.todos',
              leftIcon: 'ion-android-checkbox-outline',
            },
            {
              key: 'firestorecrud',
              label: 'sidebar.firestorecrud',
              leftIcon: 'ion-fireball',
              children: [
                { key: 'articles', label: 'sidebar.firestorecrudarticle' },
                { key: 'investors', label: 'sidebar.firestorecrudinvestor' },
              ],
            },
            {
              key: 'contacts',
              label: 'sidebar.contacts',
              leftIcon: 'ion-android-person-add',
            },
            { key: 'shuffle', label: 'sidebar.shuffle', leftIcon: 'ion-grid' },
            {
              key: 'charts',
              label: 'sidebar.charts',
              leftIcon: 'ion-arrow-graph-up-right',
              children: [
                { key: 'googleChart', label: 'sidebar.googleCharts' },
                { key: 'reecharts', label: 'sidebar.recharts' },
                { key: 'reactChart2', label: 'sidebar.reactChart2' },
                { key: 'frappeChart', label: 'sidebar.frappeChart' },
              ],
            },
            {
              key: 'Forms',
              label: 'sidebar.forms',
              leftIcon: 'ion-android-mail',
              children: [
                { key: 'InputField', label: 'sidebar.input' },
                { key: 'editor', label: 'sidebar.editor' },
                {
                  key: 'FormsWithValidation',
                  label: 'sidebar.formsWithValidation',
                },
                { key: 'progress', label: 'sidebar.progress' },
                { key: 'button', label: 'sidebar.button' },
                { key: 'tab', label: 'sidebar.tab' },
                { key: 'checkbox', label: 'sidebar.checkbox' },
                { key: 'radiobox', label: 'sidebar.radiobox' },
                { key: 'selectbox', label: 'sidebar.selectbox' },
                { key: 'transfer', label: 'sidebar.transfer' },
                { key: 'autocomplete', label: 'sidebar.autocomplete' },
              ],
            },
            {
              key: 'uielements',
              label: 'sidebar.uiElements',
              leftIcon: 'ion-leaf',
              children: [
                { key: 'op_badge', label: 'sidebar.badge' },
                { key: 'op_card', label: 'sidebar.card2' },
                { key: 'op_carousel', label: 'sidebar.corusel' },
                { key: 'op_collapse', label: 'sidebar.collapse' },
                { key: 'op_popover', label: 'sidebar.popover' },
                { key: 'op_tooltip', label: 'sidebar.tooltip' },
                { key: 'op_tag', label: 'sidebar.tag' },
                { key: 'op_timeline', label: 'sidebar.timeline' },
                { key: 'dropdown', label: 'sidebar.dropdown' },
                { key: 'pagination', label: 'sidebar.pagination' },
                { key: 'rating', label: 'sidebar.rating' },
                { key: 'tree', label: 'sidebar.tree' },
                { key: 'swiperslider', label: 'sidebar.swiperslider' },
              ],
            },
            {
              key: 'advancedUielements',
              label: 'sidebar.advancedElements',
              leftIcon: 'ion-flash',
              children: [
                { key: 'reactDates', label: 'sidebar.reactDates' },
                { key: 'codeMirror', label: 'sidebar.codeMirror' },
                { key: 'uppy', label: 'sidebar.uppy' },
                { key: 'dropzone', label: 'sidebar.dropzone' },
              ],
            },
            {
              key: 'feedback',
              label: 'sidebar.feedback',
              leftIcon: 'ion-thumbsup',
              children: [
                { key: 'alert', label: 'sidebar.alert' },
                { key: 'modal', label: 'sidebar.modal' },
                { key: 'message', label: 'sidebar.message' },
                { key: 'notification', label: 'sidebar.notification' },
                { key: 'popConfirm', label: 'sidebar.popConfirm' },
                { key: 'spin', label: 'sidebar.spin' },
              ],
            },
            {
              key: 'table',
              label: 'sidebar.tables',
              leftIcon: 'ion-android-menu',
              children: [{ key: 'table_ant', label: 'sidebar.antTables' }],
            },
            {
              key: 'pages',
              label: 'sidebar.pages',
              leftIcon: 'ion-document-text',
              children: [
                { key: '404', label: 'sidebar.404', withoutDashboard: !0 },
                { key: '500', label: 'sidebar.500', withoutDashboard: !0 },
                {
                  key: 'signin',
                  label: 'sidebar.signIn',
                  withoutDashboard: !0,
                },
                {
                  key: 'signup',
                  label: 'sidebar.signUp',
                  withoutDashboard: !0,
                },
                {
                  key: 'forgotpassword',
                  label: 'sidebar.forgotPw',
                  withoutDashboard: !0,
                },
                {
                  key: 'resetpassword',
                  label: 'sidebar.resetPw',
                  withoutDashboard: !0,
                },
              ],
            },
            {
              key: 'githubSearch',
              label: 'sidebar.githubSearch',
              leftIcon: 'ion-social-github',
            },
            {
              key: 'blank_page',
              label: 'sidebar.blankPage',
              leftIcon: 'ion-document',
            },
          ]),
        E = 'undefined' === typeof window;
      var w = a(36),
        k = (function() {
          if (!E && window.location.pathname) {
            var e = window.location.pathname.split('/');
            if (e.length > 1)
              return (function(e) {
                var t = [];
                return e
                  ? (t.push(e),
                    T.forEach(function(a) {
                      a.children &&
                        a.children.forEach(function(i) {
                          i.key === e && t.push(a.key);
                        });
                    }),
                    t)
                  : t;
              })(e[e.length - 1]);
          }
          return [];
        })(),
        v = {
          collapsed: !(!E && window.innerWidth > 1220),
          view: !E && Object(w.b)(window.innerWidth),
          height: !E && window.innerHeight,
          openDrawer: !1,
          openKeys: k,
          current: k,
        };
      var C = a(15),
        S = { idToken: null, signInInfo: { username: '', password: '' } };
      var x = a(70),
        y = a(81),
        B = JSON.parse(
          '[{\n  "id": 22143,\n  "avatar": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg",\n  "firstName": "Benjamin fsdfse fsdf sef sefse fse fse fsefse fssef ",\n  "lastName": "Jacobi",\n  "name": "Benjamin Jacobi fsef sf awfse sf efsfe sf aef sef fse fse fsf sf sf sef sfs fsf se sf sefsefs fs fsf efesse fse fsesfsaef sef esf sfsfse sef sef sefes sf sfse",\n  "mobile": "(023) 302-3161 x60451",\n  "home": "(136) 403-0476 x8388",\n  "company": "Casper Inc",\n  "work": "(399) 506-9438",\n  "note": "Quisquam et nisi. Dicta in ut eos consequatur ipsum omnis. Quisquam doloremque error praesentium sapiente et vitae. Omnis facere sint nulla similique vel voluptatem officia deleniti."\n}, {\n  "id": 17385,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/antonyzotov/128.jpg",\n  "firstName": "Clementina",\n  "lastName": "Hahn",\n  "name": "Clementina Hahn",\n  "mobile": "686.292.3548 x7219",\n  "home": "447-343-4864 x414",\n  "company": "Marquardt Inc",\n  "work": "299-721-6828 x856",\n  "note": "Distinctio voluptas repellendus rerum temporibus deserunt et corrupti sint. Odit sit labore quia. Perferendis iure eos qui tempore ex saepe consequuntur accusamus ipsa. Eius consectetur nam quas. Laborum aperiam hic dolorum quae autem consequatur."\n}, {\n  "id": 85838,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bungiwan/128.jpg",\n  "firstName": "Clinton",\n  "lastName": "Goyette",\n  "name": "Clinton Goyette",\n  "mobile": "(913) 127-1563 x082",\n  "home": "(843) 501-8804",\n  "company": "Feil - Goodwin",\n  "work": "732.111.8883",\n  "note": "Maiores animi et quidem. Ducimus voluptate est consequatur ut vitae in. Ut fugit sit ab blanditiis ab occaecati soluta quis."\n}, {\n  "id": 2791,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/benefritz/128.jpg",\n  "firstName": "Forrest",\n  "lastName": "Klein",\n  "name": "Forrest Klein",\n  "mobile": "174-628-5802 x8324",\n  "home": "(047) 141-0247",\n  "company": "Wilkinson - Howe",\n  "work": "1-624-238-9252",\n  "note": "Sit et non debitis. Quis atque facilis et sed. Illum adipisci deserunt corporis modi necessitatibus at numquam neque sint."\n}, {\n  "id": 67493,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/salleedesign/128.jpg",\n  "firstName": "General",\n  "lastName": "Kub",\n  "name": "General Kub",\n  "mobile": "779.482.9824",\n  "home": "(698) 858-0337 x3273",\n  "company": "Moen Group",\n  "work": "881.768.7522",\n  "note": "Quibusdam dolorem minima ea enim nostrum eos. Corrupti dolore velit molestiae nostrum error qui. Sit qui maxime sed quisquam rem cupiditate. Iste ex quidem. Ipsam et quia omnis facere blanditiis."\n}, {\n  "id": 75593,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stalewine/128.jpg",\n  "firstName": "Lon",\n  "lastName": "Wunsch",\n  "name": "Lon Wunsch",\n  "mobile": "(792) 607-6366 x88975",\n  "home": "447.683.3799 x38668",\n  "company": "Johns, Gibson and Schinner",\n  "work": "(735) 859-7674",\n  "note": "Velit non voluptas sed sit pariatur earum unde neque. Incidunt nam reprehenderit non mollitia. Incidunt quo illum modi ex eos consequuntur eius nihil itaque. Quis tenetur ratione repudiandae ea et architecto dolorem porro. Rem non consectetur ea iste."\n}, {\n  "id": 90096,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/cherif_b/128.jpg",\n  "firstName": "Mabelle",\n  "lastName": "Kling",\n  "name": "Mabelle Kling",\n  "mobile": "499-736-0779 x2409",\n  "home": "1-910-529-7393 x222",\n  "company": "Bins, Murray and Ryan",\n  "work": "905.098.6372",\n  "note": "Et et rerum placeat beatae doloribus earum et reiciendis. Nisi suscipit ad dolor. Tenetur hic quia nihil deleniti inventore. Blanditiis aliquam ea ea. Omnis consequatur itaque est rerum sed reiciendis laboriosam reiciendis. Consectetur ullam et laudantium at itaque aut qui et molestiae."\n}, {\n  "id": 15783,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ponchomendivil/128.jpg",\n  "firstName": "Maryse",\n  "lastName": "Koss",\n  "name": "Maryse Koss",\n  "mobile": "668-920-9662 x610",\n  "home": "075.864.1819 x8265",\n  "company": "Smitham Inc",\n  "work": "468.534.0931",\n  "note": "Libero perferendis aut repudiandae quas. Omnis aut enim voluptas magnam harum quisquam illo aliquid aliquam. Dolor et et vel nihil quibusdam fugit facere adipisci aut. Repellat quia est beatae animi ipsa. Ad sit eligendi pariatur quia illo atque qui voluptatem excepturi."\n}, {\n  "id": 42122,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/traneblow/128.jpg",\n  "firstName": "Maude",\n  "lastName": "Grant",\n  "name": "Maude Grant",\n  "mobile": "1-077-505-0657",\n  "home": "062.968.4841 x62748",\n  "company": "Thiel, Bauch and Mosciski",\n  "work": "1-318-593-2619 x206",\n  "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."\n}, {\n  "id": 5869,\n  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/silv3rgvn/128.jpg",\n  "firstName": "Orrin",\n  "lastName": "Harris",\n  "name": "Orrin Harris",\n  "mobile": "871.567.4877",\n  "home": "(466) 574-3352",\n  "company": "Haag Group",\n  "work": "1-908-422-4964",\n  "note": "Aut sequi quae omnis ut qui quaerat. Dolor et fugit blanditiis laudantium. Libero modi officiis consequatur corrupti reiciendis aut qui nemo doloribus. Consequatur voluptatibus quis vero numquam aspernatur a sit laborum voluptates."\n}]'
        );
      function A(e, t) {
        var a = e.name ? e.name.toUpperCase() : '~',
          i = t.name ? t.name.toUpperCase() : '~';
        return a > i ? 1 : a === i ? 0 : -1;
      }
      var z = {
          ADD_CONTACT: 'ADD_CONTACT',
          EDIT_CONTACT: 'EDIT_CONTACT',
          DELETE__CONTACT: 'DELETE__CONTACT',
          CHANGE_CONTACT: 'CHANGE_CONTACT',
          EDIT_VIEW: 'EDIT_VIEW',
          changeContact: function(e) {
            return { type: z.CHANGE_CONTACT, id: e };
          },
          addContact: function() {
            var e = {
              id: new Date(),
              firstName: '',
              avatar: O[new Date() % 10].avatar,
              LastName: '',
              mobile: '',
              home: '',
              name: '',
              company: '',
              work: '',
              note: '',
            };
            return function(t, a) {
              t({
                type: z.ADD_CONTACT,
                contacts: [].concat(Object(p.a)(a().Contacts.contacts), [e]),
                selectedId: e.id,
              });
            };
          },
          editContact: function(e) {
            return function(t, a) {
              var i = a().Contacts.contacts,
                o = [];
              i.forEach(function(t) {
                t.id === e.id ? o.push(e) : o.push(t);
              }),
                t({ type: z.EDIT_CONTACT, contacts: o.sort(A) });
            };
          },
          deleteContact: function(e) {
            return function(t, a) {
              var i = a().Contacts.contacts,
                o = a().Contacts.seectedId,
                r = [];
              i.forEach(function(t) {
                t.id === e || r.push(t);
              }),
                t({
                  type: z.DELETE__CONTACT,
                  contacts: r,
                  seectedId: e === o ? void 0 : o,
                });
            };
          },
          viewChange: function(e) {
            return { type: z.EDIT_VIEW, view: e };
          },
        },
        I = z,
        O = new ((function() {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 10;
            Object(x.a)(this, e), (this.size = t), (this.datas = []);
          }
          return (
            Object(y.a)(e, [
              {
                key: 'dataModel',
                value: function(e) {
                  return B[e];
                },
              },
              {
                key: 'getObjectAt',
                value: function(e) {
                  if (!(e < 0 || e > this.size))
                    return (
                      void 0 === this.datas[e] &&
                        (this.datas[e] = this.dataModel(e)),
                      this.datas[e]
                    );
                },
              },
              {
                key: 'getAll',
                value: function() {
                  if (this.datas.length < this.size)
                    for (var e = 0; e < this.size; e++) this.getObjectAt(e);
                  return this.datas.slice().sort(function(e, t) {
                    return (
                      ''
                        .concat(e.firstName)
                        .concat(e.LastName)
                        .toUpperCase() >
                      ''
                        .concat(t.firstName)
                        .concat(t.LastName)
                        .toUpperCase()
                    );
                  });
                },
              },
              {
                key: 'getSize',
                value: function() {
                  return this.size;
                },
              },
            ]),
            e
          );
        })())(10).getAll(),
        D = { contacts: O, seectedId: O[0].id, editView: !1 };
      var L = a(27),
        R = {
          contacts: [],
          seectedId: null,
          editView: !1,
          editingQuestion: {},
        };
      var N = a(63),
        j = a(114),
        M = {
          isActivated: !1,
          language: Object(N.b)(N.a.defaultLanguage || 'english'),
        },
        P = a(185),
        _ = { scoreBoard: [] };
      var U = a(37),
        F = a(25),
        G = a(115),
        q = {
          isActivated: !1,
          changeThemes: Object(F.b)(
            'changeThemes',
            F.a.changeThemes.defaultTheme || 'themedefault'
          ),
          topbarTheme: Object(F.b)(
            'topbarTheme',
            F.a.topbarTheme.defaultTheme || 'themedefault'
          ),
          sidebarTheme: Object(F.b)(
            'sidebarTheme',
            F.a.sidebarTheme.defaultTheme || 'themedefault'
          ),
          layoutTheme: Object(F.b)(
            'layoutTheme',
            F.a.layoutTheme.defaultTheme || 'themedefault'
          ),
        },
        V = a(87),
        W = { userList: [] };
      var H = Object(b.c)({
          ThemeSwitcher: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : q,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case G.a.SWITCH_ACTIVATION:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { isActivated: !e.isActivated }
                );
              case G.a.CHANGE_THEME:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  Object(U.a)({}, t.attribute, t.theme)
                );
              default:
                return e;
            }
          },
          LanguageSwitcher: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : M,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case j.a.ACTIVATE_LANG_MODAL:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { isActivated: !e.isActivated }
                );
              case j.a.CHANGE_LANGUAGE:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { language: t.language }
                );
              default:
                return e;
            }
          },
          Contacts: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : D,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case I.CHANGE_CONTACT:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { seectedId: t.id, editView: !1 }
                );
              case I.ADD_CONTACT:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  {
                    contacts: t.contacts,
                    seectedId: t.selectedId,
                    editView: !0,
                  }
                );
              case I.EDIT_CONTACT:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { contacts: t.contacts }
                );
              case I.DELETE__CONTACT:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { contacts: t.contacts, seectedId: t.seectedId }
                );
              case I.EDIT_VIEW:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { editView: t.view }
                );
              default:
                return e;
            }
          },
          Questions: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : R,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case L.a.FETCH_QUESTION:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { contacts: t.questions, seectedId: t.seectedId }
                );
              case L.a.CHANGE_CONTACT:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { seectedId: t.id, editView: !1 }
                );
              case L.a.ADD_QUESTION:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  {
                    contacts: t.contacts,
                    seectedId: t.selectedId,
                    editingQuestion: t.editQuestion,
                    editView: !0,
                  }
                );
              case L.a.EDIT_CONTACT:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { contacts: t.contacts }
                );
              case L.a.DELETE__CONTACT:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { contacts: t.contacts, seectedId: t.seectedId }
                );
              case L.a.EDIT_VIEW:
                if (!1 === t.view)
                  return Object(h.a)(
                    Object(h.a)({}, e),
                    {},
                    { editView: t.view }
                  );
                var a = e.contacts.filter(function(t) {
                  return t.id === e.seectedId;
                });
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { editView: t.view, editingQuestion: a[0] }
                );
              case L.a.EDITING_QUESTION:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { editingQuestion: t.question }
                );
              case L.a.UPDATE_QUESTION:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { contacts: t.questions }
                );
              case L.a.UNVALID_PAYLOAD:
                return Object(h.a)(Object(h.a)({}, e), {}, { editView: !0 });
              default:
                return e;
            }
          },
          UserManager: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : W,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case V.a.FETCH_USER_LIST:
              case V.a.UPDATE_FULLNAME:
                return { userList: t.userList };
              case V.a.UPDATE_USER:
                for (var a = Object(p.a)(e.userList), i = 0; i < a.length; i++)
                  if (a[i].id === t.id) {
                    a[i] = Object(h.a)(
                      Object(h.a)({}, a[i]),
                      {},
                      Object(U.a)({}, t.atribute, t.value)
                    );
                    break;
                  }
                return { userList: a };
              default:
                return e;
            }
          },
          ScoreBoard: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : _,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case P.a.FETCH_SCORE_BOARD:
                return { scoreBoard: t.scoreBoard };
              default:
                return e;
            }
          },
          Auth: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : S,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case C.a.LOGIN_SUCCESS:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { idToken: t.token }
                );
              case C.a.LOGOUT:
                return S;
              case C.a.EDIT_PASSWORD:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { password: t.payload }
                );
              case C.a.EDIT_USERNAME:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { username: t.payload }
                );
              default:
                return e;
            }
          },
          App: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : v,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case w.a.COLLPSE_CHANGE:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { collapsed: !e.collapsed }
                );
              case w.a.COLLPSE_OPEN_DRAWER:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { openDrawer: !e.openDrawer }
                );
              case w.a.TOGGLE_ALL:
                if (e.view !== t.view || t.height !== e.height) {
                  var a = t.height ? t.height : e.height;
                  return Object(h.a)(
                    Object(h.a)({}, e),
                    {},
                    { collapsed: t.collapsed, view: t.view, height: a }
                  );
                }
                break;
              case w.a.CHANGE_OPEN_KEYS:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { openKeys: t.openKeys }
                );
              case w.a.CHANGE_CURRENT:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { current: t.current }
                );
              case w.a.CLEAR_MENU:
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { openKeys: [], current: [] }
                );
              default:
                return e;
            }
            return e;
          },
        }),
        Q = a(3),
        J = a.n(Q),
        K = a(8),
        $ = a(16),
        Y = a(120);
      function Z() {
        localStorage.removeItem('id_token');
      }
      function X() {
        try {
          var e = localStorage.getItem('id_token');
          return new Y.Map({ idToken: e });
        } catch (t) {
          return Z(), new Y.Map();
        }
      }
      var ee = J.a.mark(se),
        te = J.a.mark(le),
        ae = J.a.mark(ce),
        ie = J.a.mark(de),
        oe = J.a.mark(ue),
        re = J.a.mark(me),
        ne = Object($.a)();
      function se() {
        return J.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(K.takeEvery)(
                    'LOGIN_REQUEST',
                    J.a.mark(function e(t) {
                      var a, i;
                      return J.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((a = t.payload),
                                (i = a.token),
                                console.log(a),
                                !i)
                              ) {
                                e.next = 6;
                                break;
                              }
                              return (
                                (e.next = 6),
                                Object(K.put)({
                                  type: C.a.LOGIN_SUCCESS,
                                  token: i,
                                  profile: 'Profile',
                                })
                              );
                            case 6:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, ee);
      }
      function le() {
        return J.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(K.takeEvery)(
                    C.a.LOGIN_SUCCESS,
                    J.a.mark(function e(t) {
                      return J.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                localStorage.setItem('id_token', t.token)
                              );
                            case 2:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, te);
      }
      function ce() {
        return J.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(K.takeEvery)(
                    C.a.LOGIN_ERROR,
                    J.a.mark(function e() {
                      return J.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, ae);
      }
      function de() {
        return J.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(K.takeEvery)(
                    C.a.LOGOUT,
                    J.a.mark(function e() {
                      return J.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Z();
                            case 2:
                              ne.push('/');
                            case 3:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, ie);
      }
      function ue() {
        return J.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(K.takeEvery)(
                    C.a.CHECK_AUTHORIZATION,
                    J.a.mark(function e() {
                      var t;
                      return J.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!(t = X().get('idToken'))) {
                                e.next = 4;
                                break;
                              }
                              return (
                                (e.next = 4),
                                Object(K.put)({
                                  type: C.a.LOGIN_SUCCESS,
                                  token: t,
                                  profile: 'Profile',
                                })
                              );
                            case 4:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, oe);
      }
      function me() {
        return J.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(K.all)([
                    Object(K.fork)(ue),
                    Object(K.fork)(se),
                    Object(K.fork)(le),
                    Object(K.fork)(ce),
                    Object(K.fork)(de),
                  ])
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, re);
      }
      var pe = J.a.mark(he),
        be = J.a.mark(Te),
        ge = J.a.mark(Ee),
        fe = J.a.mark(we);
      function he() {
        return J.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(K.takeEvery)(
                    I.ADD_CONTACT,
                    J.a.mark(function e() {
                      return J.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, pe);
      }
      function Te() {
        return J.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(K.takeEvery)(
                    I.EDIT_CONTACT,
                    J.a.mark(function e() {
                      return J.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, be);
      }
      function Ee() {
        return J.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(K.takeEvery)(
                    I.DELETE__CONTACT,
                    J.a.mark(function e() {
                      return J.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, ge);
      }
      function we() {
        return J.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(K.all)([
                    Object(K.fork)(he),
                    Object(K.fork)(Te),
                    Object(K.fork)(Ee),
                  ])
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, fe);
      }
      var ke = J.a.mark(ve);
      function ve(e) {
        return J.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(K.all)([me(), we()]);
              case 2:
              case 'end':
                return e.stop();
            }
        }, ke);
      }
      var Ce,
        Se = Object(f.default)(),
        xe = [g.a, Se],
        ye = Object(b.e)(H, ((Ce = xe), b.a.apply(void 0, Object(p.a)(Ce))));
      Se.run(ve);
      var Be = a(187),
        Ae = a(10),
        ze = a(125),
        Ie = a(132),
        Oe = a(131),
        De = (function(e) {
          Object(Ie.a)(a, e);
          var t = Object(Oe.a)(a);
          function a(e) {
            var i;
            return (
              Object(x.a)(this, a),
              ((i = t.call(this, e)).state = { hasError: !1 }),
              i
            );
          }
          return (
            Object(y.a)(
              a,
              [
                {
                  key: 'render',
                  value: function() {
                    return this.state.hasError
                      ? o.a.createElement(
                          'p',
                          null,
                          'Loading failed! Please reload.'
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function(e) {
                    return { hasError: !0 };
                  },
                },
              ]
            ),
            a
          );
        })(o.a.Component),
        Le = '/',
        Re = '/signin',
        Ne = '/signup',
        je = '/forgotpassword',
        Me = '/resetpassword',
        Pe = '/404',
        _e = '/500',
        Ue = '/auth0loginCallback',
        Fe = a(186),
        Ge = Object(i.lazy)(function() {
          return Promise.all([a.e(1), a.e(10), a.e(12)]).then(
            a.bind(null, 935)
          );
        }),
        qe = [
          {
            path: Le,
            exact: !0,
            component: Object(i.lazy)(function() {
              return Promise.all([a.e(0), a.e(1), a.e(2), a.e(6)]).then(
                a.bind(null, 944)
              );
            }),
          },
          {
            path: Pe,
            component: Object(i.lazy)(function() {
              return a.e(18).then(a.bind(null, 941));
            }),
          },
          {
            path: _e,
            component: Object(i.lazy)(function() {
              return a.e(19).then(a.bind(null, 940));
            }),
          },
          {
            path: Re,
            component: Object(i.lazy)(function() {
              return Promise.all([a.e(0), a.e(1), a.e(2), a.e(6)]).then(
                a.bind(null, 944)
              );
            }),
          },
          {
            path: Ne,
            component: Object(i.lazy)(function() {
              return Promise.all([
                a.e(0),
                a.e(1),
                a.e(2),
                a.e(4),
                a.e(11),
              ]).then(a.bind(null, 936));
            }),
          },
          {
            path: je,
            component: Object(i.lazy)(function() {
              return Promise.all([a.e(0), a.e(1), a.e(14)]).then(
                a.bind(null, 943)
              );
            }),
          },
          {
            path: Me,
            component: Object(i.lazy)(function() {
              return Promise.all([a.e(0), a.e(1), a.e(15)]).then(
                a.bind(null, 942)
              );
            }),
          },
          {
            path: Ue,
            component: Object(i.lazy)(function() {
              return Promise.all([a.e(4), a.e(20)]).then(a.bind(null, 934));
            }),
          },
        ];
      function Ve(e) {
        var t = e.children,
          a = Object(Be.a)(e, ['children']),
          i = Object(Ae.h)();
        return Object(s.c)(function(e) {
          return e.Auth.idToken;
        })
          ? o.a.createElement(Ae.b, a, t)
          : o.a.createElement(Ae.a, {
              to: { pathname: '/signin', state: { from: i } },
            });
      }
      function We() {
        return o.a.createElement(
          De,
          null,
          o.a.createElement(
            i.Suspense,
            { fallback: o.a.createElement(Fe.a, null) },
            o.a.createElement(
              ze.a,
              null,
              o.a.createElement(
                Ae.d,
                null,
                qe.map(function(e, t) {
                  return o.a.createElement(
                    Ae.b,
                    { key: t, path: e.path, exact: e.exact },
                    o.a.createElement(e.component, null)
                  );
                }),
                o.a.createElement(
                  Ve,
                  { path: '/dashboard' },
                  o.a.createElement(Ge, null)
                )
              )
            )
          )
        );
      }
      a(371);
      var He = a(66),
        Qe = a(30),
        Je = a(46),
        Ke = a(85),
        $e = a.n(Ke),
        Ye = a(194),
        Ze = a.n(Ye),
        Xe = a(195),
        et = {
          messages: Object(h.a)({}, Xe),
          antd: $e.a,
          locale: 'en-US',
          data: Ze.a,
        },
        tt = a(196),
        at = a.n(tt),
        it = a(197),
        ot = {
          messages: Object(h.a)({}, it),
          antd: null,
          locale: 'zh-Hans-CN',
          data: at.a,
        },
        rt = a(198),
        nt = a.n(rt),
        st = a(199),
        lt = {
          messages: Object(h.a)({}, st),
          antd: $e.a,
          locale: 'ar',
          data: nt.a,
        },
        ct = a(202),
        dt = a.n(ct),
        ut = a(200),
        mt = a.n(ut),
        pt = a(201),
        bt = {
          messages: Object(h.a)({}, pt),
          antd: dt.a,
          locale: 'it-IT',
          data: mt.a,
        },
        gt = a(205),
        ft = a.n(gt),
        ht = a(203),
        Tt = a.n(ht),
        Et = a(204),
        wt = {
          messages: Object(h.a)({}, Et),
          antd: ft.a,
          locale: 'es',
          data: Tt.a,
        },
        kt = a(208),
        vt = a.n(kt),
        Ct = a(206),
        St = a.n(Ct),
        xt = a(207),
        yt = {
          en: et,
          zh: ot,
          sa: lt,
          it: bt,
          es: wt,
          fr: {
            messages: Object(h.a)({}, xt),
            antd: vt.a,
            locale: 'fr-FR',
            data: St.a,
          },
        };
      Object(Qe.c)(yt.en.data),
        Object(Qe.c)(yt.zh.data),
        Object(Qe.c)(yt.sa.data),
        Object(Qe.c)(yt.it.data),
        Object(Qe.c)(yt.es.data),
        Object(Qe.c)(yt.fr.data);
      var Bt = yt;
      function At(e) {
        var t = e.children,
          a = Object(s.c)(function(e) {
            return e.LanguageSwitcher.language;
          }).locale,
          i = Object(s.c)(function(e) {
            return e.ThemeSwitcher.changeThemes;
          }).themeName,
          r = Bt[a];
        return o.a.createElement(
          He.a,
          { locale: r.antd },
          o.a.createElement(
            Qe.b,
            { locale: r.locale, messages: r.messages },
            o.a.createElement(c.a, { theme: Je.a[i] }, t)
          )
        );
      }
      var zt = function() {
        return o.a.createElement(
          s.a,
          { store: ye },
          o.a.createElement(
            At,
            null,
            o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(m, null),
              o.a.createElement(We, null)
            )
          )
        );
      };
      new Promise(function() {
        ye.dispatch(C.a.checkAuthorization());
      })
        .then(function() {
          return zt();
        })
        .catch(function(e) {
          return console.error(e);
        });
      var It = zt;
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      n.a.render(o.a.createElement(It, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    46: function(e, t, a) {
      'use strict';
      a.d(t, 'b', function() {
        return s;
      });
      var i = {
          palette: {
            primary: [
              '#4482FF',
              '#3A78F5',
              '#3775F2',
              'rgba(68, 130, 255, 0.2)',
              '#4C8AFF',
              'rgba(68, 130, 255, 0.75)',
              '#6AA8FF',
              '#63A1FF',
              '#3F7DFA',
              '#3369e7',
              '#5896FF',
              '#2b69e6',
              '#236cfe',
              '#4d88ff',
            ],
            secondary: [
              '#2d3446',
              '#f1f3f6',
              '#788195',
              '#E4E6E9',
              '#364d79',
              '#202739',
              '#f5f6f8',
              '#e9ebf1',
              '#F6F8FB',
              '#E9EBEE',
              '#1a1a1a',
            ],
            color: [
              '#FEAC01',
              '#42299a',
              '#F75D81',
              '#7ED321',
              '#39435f',
              '#FFCA28',
              '#F2BD1B',
              '#3b5998',
              '#344e86',
              '#dd4b39',
              '#d73925',
              '#e14615',
              '#ca3f13',
              '#e0364c',
            ],
            warning: ['#ffbf00'],
            success: ['#00b16a'],
            error: ['#f64744', '#EC3D3A', '#FF5B58'],
            grayscale: [
              '#bababa',
              '#c1c1c1',
              '#D8D8D8',
              '#f1f1f1',
              '#F3F3F3',
              '#fafafa',
              '#F9F9F9',
              '#fcfcfc',
              '#eeeeee',
              '#fbfbfb',
              '#f5f5f5',
              '#f7f8f9',
            ],
            text: ['#323332', '#595959', '#979797', '#797979', '#6a6c6a'],
            border: [
              '#e9e9e9',
              '#d8d8d8',
              '#ebebeb',
              '#d3d3d3',
              'rgba(228, 228, 228, 0.65)',
            ],
            calendar: ['#905', '#690', '#a67f59', '#07a', '#dd4a68', '#e90'],
          },
          fonts: {
            primary: 'Roboto, sans-serif',
            pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
          },
        },
        o = i,
        r = a(2),
        n = {
          defaultTheme: o,
          customTheme: Object(r.a)(
            Object(r.a)({}, o),
            {},
            { palette: { primary: ['#f00'], secondary: ['#0f0'] } }
          ),
        },
        s = {
          topbar: 'defaultTheme',
          sidebar: 'defaultTheme',
          layout: 'defaultTheme',
          theme: 'defaultTheme',
        };
      t.a = n;
    },
    63: function(e, t, a) {
      'use strict';
      a.d(t, 'b', function() {
        return g;
      });
      var i = a(169),
        o = a(170),
        r = a.n(o),
        n = a(171),
        s = a.n(n),
        l = a(172),
        c = a.n(l),
        d = a(173),
        u = a.n(d),
        m = a(174),
        p = a.n(m),
        b = {
          defaultLanguage: i.a,
          options: [
            { languageId: 'english', locale: 'en', text: 'English', icon: r.a },
            { languageId: 'chinese', locale: 'zh', text: 'Chinese', icon: s.a },
            { languageId: 'spanish', locale: 'es', text: 'Spanish', icon: c.a },
            { languageId: 'french', locale: 'fr', text: 'French', icon: u.a },
            { languageId: 'italian', locale: 'it', text: 'Italian', icon: p.a },
          ],
        };
      function g(e) {
        var t = b.options[0];
        return (
          b.options.forEach(function(a) {
            a.languageId === e && (t = a);
          }),
          t
        );
      }
      t.a = b;
    },
    87: function(e, t, a) {
      'use strict';
      var i = a(37),
        o = a(3),
        r = a.n(o),
        n = a(2),
        s = a(9),
        l = a(11),
        c = a(14),
        d = a(38),
        u = a.n(d);
      function m(e, t) {
        window.confirm(e + ', reload ?') && t(g.fetchUserList());
      }
      var p = {
          getUserList: (function() {
            var e = Object(s.a)(
              r.a.mark(function e(t, a) {
                var i, o;
                return r.a.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          '/user',
                          (i = u.a.stringify(t)),
                          (e.next = 4),
                          c.a
                            .get('/user?' + i)
                            .then(function(e) {
                              switch (e.status) {
                                case 200:
                                  return (
                                    Object(l.a)(
                                      'success',
                                      'Get user list successfully'
                                    ),
                                    e.data
                                  );
                                default:
                                  return m(e.status, a), [];
                              }
                            })
                            .catch(function(e) {
                              return m('connection failed', a), [];
                            })
                        );
                      case 4:
                        return (o = e.sent), e.abrupt('return', o);
                      case 6:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function(t, a) {
              return e.apply(this, arguments);
            };
          })(),
          updateUser: (function() {
            var e = Object(s.a)(
              r.a.mark(function e(t, a, i) {
                var o;
                return r.a.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          '/user/',
                          console.log(t, a),
                          (e.next = 4),
                          c.a
                            .patch('/user/' + ''.concat(t), a)
                            .then(function(e) {
                              switch (e.status) {
                                case 200:
                                  return (
                                    Object(l.a)(
                                      'success',
                                      'Update user successfully',
                                      ''
                                    ),
                                    e
                                  );
                                default:
                                  return m(e.status, i), null;
                              }
                            })
                            .catch(function(e) {
                              return m('connection failed', i), null;
                            })
                        );
                      case 4:
                        return (o = e.sent), e.abrupt('return', o);
                      case 6:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function(t, a, i) {
              return e.apply(this, arguments);
            };
          })(),
          apii: (function() {
            var e = Object(s.a)(
              r.a.mark(function e() {
                var t;
                return r.a.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          '',
                          (e.next = 3),
                          c.a
                            .get('')
                            .then(function(e) {
                              switch (e.status) {
                                case 200:
                                  return e;
                                default:
                                  return m(e.status, dispatch), null;
                              }
                            })
                            .catch(function(e) {
                              return m('connection failed', dispatch), null;
                            })
                        );
                      case 3:
                        return (t = e.sent), e.abrupt('return', t);
                      case 5:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function() {
              return e.apply(this, arguments);
            };
          })(),
        },
        b = {
          FETCH_USER_LIST: 'FETCH_USER_LIST',
          UPDATE_USER: 'UPDATE_USER',
          UPDATE_FULLNAME: 'UPDATE_FULLNAME',
          fetchUserList: function() {
            return (function() {
              var e = Object(s.a)(
                r.a.mark(function e(t) {
                  var a, i, o;
                  return r.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = { pageSize: 500, page: 0 }),
                            (e.next = 3),
                            p.getUserList(a, t)
                          );
                        case 3:
                          (i = e.sent),
                            (o = i
                              ? i.map(function(e, t) {
                                  return Object(n.a)(
                                    Object(n.a)({}, e),
                                    {},
                                    { key: t + 1 }
                                  );
                                })
                              : []).length > 0 &&
                              t({ type: b.FETCH_USER_LIST, userList: o });
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function(t) {
                return e.apply(this, arguments);
              };
            })();
          },
          updateUser: function(e, t, a) {
            return (function() {
              var o = Object(s.a)(
                r.a.mark(function o(n) {
                  return r.a.wrap(function(o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (
                            (o.next = 2),
                            p.updateUser(e, Object(i.a)({}, t, a), n)
                          );
                        case 2:
                          o.sent,
                            n({
                              type: b.UPDATE_USER,
                              id: e,
                              atribute: t,
                              value: a,
                            });
                        case 4:
                        case 'end':
                          return o.stop();
                      }
                  }, o);
                })
              );
              return function(e) {
                return o.apply(this, arguments);
              };
            })();
          },
        },
        g = (t.a = b);
    },
    89: function(e, t) {},
  },
  [[229, 8, 9]],
]);
//# sourceMappingURL=main.969a5626.chunk.js.map
