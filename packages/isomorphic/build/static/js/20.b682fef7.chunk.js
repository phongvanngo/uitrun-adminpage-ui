(this.webpackJsonpisomorphic = this.webpackJsonpisomorphic || []).push([
  [20],
  {
    412: function(e, t, o) {
      'use strict';
      function n() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state
        );
        null !== e && void 0 !== e && this.setState(e);
      }
      function a(e) {
        this.setState(
          function(t) {
            var o = this.constructor.getDerivedStateFromProps(e, t);
            return null !== o && void 0 !== o ? o : null;
          }.bind(this)
        );
      }
      function r(e, t) {
        try {
          var o = this.props,
            n = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(o, n));
        } finally {
          (this.props = o), (this.state = n);
        }
      }
      function i(e) {
        var t = e.prototype;
        if (!t || !t.isReactComponent)
          throw new Error('Can only polyfill class components');
        if (
          'function' !== typeof e.getDerivedStateFromProps &&
          'function' !== typeof t.getSnapshotBeforeUpdate
        )
          return e;
        var o = null,
          i = null,
          l = null;
        if (
          ('function' === typeof t.componentWillMount
            ? (o = 'componentWillMount')
            : 'function' === typeof t.UNSAFE_componentWillMount &&
              (o = 'UNSAFE_componentWillMount'),
          'function' === typeof t.componentWillReceiveProps
            ? (i = 'componentWillReceiveProps')
            : 'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              (i = 'UNSAFE_componentWillReceiveProps'),
          'function' === typeof t.componentWillUpdate
            ? (l = 'componentWillUpdate')
            : 'function' === typeof t.UNSAFE_componentWillUpdate &&
              (l = 'UNSAFE_componentWillUpdate'),
          null !== o || null !== i || null !== l)
        ) {
          var c = e.displayName || e.name,
            s =
              'function' === typeof e.getDerivedStateFromProps
                ? 'getDerivedStateFromProps()'
                : 'getSnapshotBeforeUpdate()';
          throw Error(
            'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
              c +
              ' uses ' +
              s +
              ' but also contains the following legacy lifecycles:' +
              (null !== o ? '\n  ' + o : '') +
              (null !== i ? '\n  ' + i : '') +
              (null !== l ? '\n  ' + l : '') +
              '\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks'
          );
        }
        if (
          ('function' === typeof e.getDerivedStateFromProps &&
            ((t.componentWillMount = n), (t.componentWillReceiveProps = a)),
          'function' === typeof t.getSnapshotBeforeUpdate)
        ) {
          if ('function' !== typeof t.componentDidUpdate)
            throw new Error(
              'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
            );
          t.componentWillUpdate = r;
          var p = t.componentDidUpdate;
          t.componentDidUpdate = function(e, t, o) {
            var n = this.__reactInternalSnapshotFlag
              ? this.__reactInternalSnapshot
              : o;
            p.call(this, e, t, n);
          };
        }
        return e;
      }
      o.r(t),
        o.d(t, 'polyfill', function() {
          return i;
        }),
        (n.__suppressDeprecationWarning = !0),
        (a.__suppressDeprecationWarning = !0),
        (r.__suppressDeprecationWarning = !0);
    },
    478: function(e, t, o) {
      'use strict';
      o(215);
      var n = o(138);
      t.a = n.a;
    },
    553: function(e, t, o) {
      'use strict';
      var n = o(70),
        a = o(132),
        r = o(131),
        i = o(512),
        l = o(513),
        c = o.n(l),
        s = o(16),
        p = Object(s.a)({ forceRefresh: !0 }),
        u = {
          clientID: 'your_client_id',
          domain: 'your_domain_name',
          allowedConnections: ['Username-Password-Authentication'],
          rememberLastLogin: !0,
          language: 'en',
          closable: !0,
          options: {
            auth: {
              autoParseHash: !0,
              responseType: 'token id_token',
              redirect: !0,
              redirectUrl: 'https://your_domain_name/auth0loginCallback',
            },
            languageDictionary: {
              title: 'Isomorphic',
              emailInputPlaceholder: 'demo@gmail.com',
              passwordInputPlaceholder: 'demodemo',
            },
            theme: {
              labeledSubmitButton: !0,
              logo: 'your_logo_url',
              primaryColor: '#E14615',
              authButtons: {
                connectionName: {
                  displayName: 'Log In',
                  primaryColor: '#b7b7b7',
                  foregroundColor: '#000000',
                },
              },
            },
          },
        },
        f = o(478),
        m = (function(e) {
          Object(a.a)(o, e);
          var t = Object(r.a)(o);
          function o() {
            var e;
            Object(n.a)(this, o);
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
              r[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(r))).lock = new c.a(
                u.clientID,
                u.domain,
                u.options
              )),
              (e.login = function() {
                e.lock && e.lock.show();
              }),
              (e.handleAuthentication = function() {
                e.lock.on('authenticated', e.setSession),
                  e.lock.on('authorization_error', function(e) {
                    return Object(f.a)('error', 'Wrong mail or password');
                  });
              }),
              (e.setSession = function(e) {
                var t = JSON.stringify(
                  1e3 * e.expiresIn + new Date().getTime()
                );
                localStorage.setItem('access_token', e.accessToken),
                  localStorage.setItem('id_token', e.idToken),
                  localStorage.setItem('expires_at', t),
                  p.replace('/dashboard');
              }),
              (e.logout = function() {
                localStorage.removeItem('access_token'),
                  localStorage.removeItem('id_token'),
                  localStorage.removeItem('expires_at'),
                  p.replace('/');
              }),
              (e.isAuthenticated = function() {
                var e = JSON.parse(localStorage.getItem('expiresAt'));
                return new Date().getTime() < e;
              }),
              e
            );
          }
          return o;
        })(i.EventEmitter);
      t.a = new m();
    },
    934: function(e, t, o) {
      'use strict';
      o.r(t);
      var n = o(0),
        a = o.n(n),
        r = o(553),
        i = o(15);
      t.default = function() {
        return (
          Object(n.useEffect)(
            function() {
              r.a.handleAuthentication(), i.a.login();
            },
            [r.a.handleAuthentication]
          ),
          a.a.createElement('p', null, 'Loading ...')
        );
      };
    },
  },
]);
//# sourceMappingURL=20.b682fef7.chunk.js.map
