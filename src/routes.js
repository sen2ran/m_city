import React from 'react';
import Layout from './Hoc/Layout'
import { Switch } from 'react-router-dom'

import PrivateRoute from './Components/AuthRoutes/PrivateRoutes'
import PublicRoutes from './Components/AuthRoutes/PublicRoutes'


import Home from './Pages/Home'
import SignIn from './Pages/SignIn'

import Dashboard from './Pages/Admin/Dashboard'



const Routes = (props) => {
  console.log(props);
  
  return(
    <div>
      <Layout>
        <Switch>
          <PrivateRoute {...props}  path="/dashboard" exact component={Dashboard}/>
          <PublicRoutes {...props} restricted={true}  path="/sign_in" exact component={SignIn} />
          <PublicRoutes {...props} restricted={false}  path="/" exact component={Home} />

          {/* <Route exact component={Home} path="/" /> */}
          {/* <Route exact component={SignIn} path="/sign_in" /> */}
          {/* <Route exact component={Dashboard} path="/dashboard" /> */}
        </Switch>
      </Layout>
    </div>
  )
}

export default Routes;