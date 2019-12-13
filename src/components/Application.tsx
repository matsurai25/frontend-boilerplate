import * as React from 'react'
import { Route, Redirect, Switch } from 'react-router'
import IndexPage from '../pages/IndexPage'
import DetailPage from '../pages/DetailPage'
import { BrowserRouter } from 'react-router-dom'

export default function() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path={'/detail/:userId'}
            component={DetailPage}
            exact
          />
          <Route path={'/'} component={IndexPage} exact />
          <Redirect from={'*'} to={'/'} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
