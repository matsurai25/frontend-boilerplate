import * as React from 'react'
import { Route, Redirect } from 'react-router'
import IndexPage from '../pages/IndexPage'
import { BrowserRouter } from 'react-router-dom'
import { urls } from '../const'

export default function() {
  return (
    <>
      <BrowserRouter>
        <Route path={urls.index} component={IndexPage} />
        <Redirect from={'*'} to={urls.index} />
      </BrowserRouter>
    </>
  )
}
