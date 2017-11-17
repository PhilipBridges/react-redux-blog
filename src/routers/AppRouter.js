import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AddPostPage from '../components/AddPostPage';
import Post from '../components/Post';
import Profile from '../components/Profile';
import Header from '../components/Header';
import Seens from '../components/Seens';
import SeensList from '../components/SeensList';
import AddSeenPage from '../components/AddSeenPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
      <Route path="/" component={DashboardPage} exact={true}/>
        <Route path="/login" component={LoginPage} />
        <Route path="/create" component={AddPostPage} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/seens" component={Seens} exact={true}/>
        <Route path="/seens/:id" component={Seens}/>
        <PrivateRoute path="/seens/create" component={AddSeenPage} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
