import React from 'react';
import Layout from './Hoc/Layout'
import { Switch } from 'react-router-dom'

import PrivateRoute from './Components/AuthRoutes/PrivateRoutes'
import PublicRoutes from './Components/AuthRoutes/PublicRoutes'


import Home from './Pages/Home'
import SignIn from './Pages/SignIn'

import Dashboard from './Pages/Admin/Dashboard'
import Matches from './Pages/Admin/Matches'
import AddEditMatch from './Pages/Admin/AddEditMatch'





const Routes = (props) => {
  console.log(props);
  
  return(
    <div>
      <Layout>
        <Switch>
          <PrivateRoute {...props}  path="/dashboard" exact component={Dashboard}/>
          <PrivateRoute {...props}  path="/admin_matches" exact component={Matches}/>
          <PrivateRoute {...props}  path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>

          
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