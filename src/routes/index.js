import React from 'react'
import { Route, Switch } from 'react-router'

import Home from '../components/Home'
import Users from '../components/users/Index'
import SingleUser from '../components/users/SingleUser'

const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
            <Route path="/users/:id" component={SingleUser} />
        </Switch>
    </div>
)

export default routes
