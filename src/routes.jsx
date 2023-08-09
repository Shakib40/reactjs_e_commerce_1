import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Loadable from 'react-loadable';
// import OnRouteChange from '@containers/common/OnRouteChange/index';
import PageLoader from '@components/common/PageLoader';
// import Login from '@containers/Login';
import Header from '@containers/common/Header';
import OnRouteChange from '@containers/common/OnRouteChange/index';
import Footer from '@components/common/footer';
import WelcomePage from '@components/WelcomePage';
import Notification from '@components/common/notification';
import BeforeLogin from '@containers/BeforeLogin';
import { APP_CONFIG } from '@constants';

import ScrollTop from '@components/common/ScrollTop';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (window.localStorage.getItem('isUserLogin') ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            from: props.location,
          },
        }}
      />
    ))
    }
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (!window.localStorage.getItem('isUserLogin') ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/dashboard',
          state: {
            from: props.location,
          },
        }}
      />
    ))
    }
  />
);

const LoadingComponent = ({ isLoading, isError }) => {
  if (isLoading) {
    return <PageLoader />;
  }
  if (isError) {
    return <div>Sorry, unable to load the page</div>;
  }
  return null;
};

const DashBoard = Loadable({
  loader: () => import('@components/VulHuntDashBoard'),
  loading: LoadingComponent,
});

export default (
  <Router>
    <div>
      <Header />
      <Notification />
      <ScrollTop />
      <OnRouteChange>
        <Switch>
          <PublicRoute
            exact
            path={`${APP_CONFIG.BASE_URL}/`}
            component={WelcomePage}
          />
          <PublicRoute
            exact
            path={`${APP_CONFIG.BASE_URL}/login`}
            component={BeforeLogin}
          />
          <PrivateRoute
            exact
            path={`${APP_CONFIG.BASE_URL}/dashboard`}
            component={DashBoard}
          />
        </Switch>
      </OnRouteChange>
      <Footer />
    </div>
  </Router>
);
