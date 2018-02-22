import React from 'react'
import { Route, Switch } from 'react-router'

import Home from '../components/Home'
import Users from '../components/users/Index'

const routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
    </Switch>
)

export default routes
