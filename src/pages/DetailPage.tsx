import * as React from 'react'
import styled from 'styled-components'
import {
  withRouter,
  RouteComponentProps
} from 'react-router-dom'

type Props = RouteComponentProps

function Page({}: Props) {
  return (
    <Wrapper>
      <Title>Detail</Title>
    </Wrapper>
  )
}

export default withRouter(Page)

const Wrapper = styled.div`
  padding: 16px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
`
