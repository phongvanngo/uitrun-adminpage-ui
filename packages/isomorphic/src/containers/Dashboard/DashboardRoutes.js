import React, { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import Loader from '@iso/components/utility/loader';

const routes = [
  {
    path: 'questions',
    component: lazy(() => import('@iso/containers/CQuestions/Questions')),
  },
  {
    path: 'user_manager',
    component: lazy(() =>
      import('@iso/containers/Ta_UserManager/AntTables/AntTables')
    ),
  },
  {
    path: 'board',
    component: lazy(() =>
      import('@iso/containers/Ta_Board/AntTables/AntTables')
    ),
  },
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}
