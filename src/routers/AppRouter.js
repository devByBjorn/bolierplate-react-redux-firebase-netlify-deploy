import React from "react"
import {
  Router,
  Switch,
  Route,
} from "react-router-dom"
import { createBrowserHistory } from 'history'
import DashboardPage from '../components/DashboardPage'
import LoginPage from '../components/LoginPage'
import Private from '../components/Private'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

/* 
  We have two type of customized Routes here: PrivateRoute and PublicRoute. The PrivateRoute is used when you create a page that only should be available for a user in loged in state. The PublicRoute is used when you create a page that should be available for loged out users. See PrivateRoute.js and PublicRoute.js for conditonal rendering of components depending on users loged in/out state. 

  https://www.npmjs.com/package/history - the history package makes it possible for us to manually create our own history. We do that by assigning the variable "history" below the value of createBrowserHistory(). By createing this variable we can export it and use the history where ever we like, not just in the in our Router.  

  BrowserRouter has the history porp built in, but then we can not export the history and use it in other files. 
*/

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true} />
      <PrivateRoute path="/dashboard" component={DashboardPage} />
      <PrivateRoute path="/private" component={Private} exact={true} />
    </Switch>
  </Router>
)

export default AppRouter
