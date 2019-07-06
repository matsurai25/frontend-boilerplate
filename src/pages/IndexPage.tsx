import * as React from 'react'
import styled from 'styled-components'
import {
  withRouter,
  RouteComponentProps
} from 'react-router-dom'
import { connect, ResolveThunks } from 'react-redux'
import { fetchContextUser } from '../modules/context/operations'
import { RootState } from '../modules/reducer'

const mapStateToProps = (state: RootState) => ({
  context: state.context
})

const mapDispatchToProps = {
  fetchContextUser
}

type Props = RouteComponentProps &
  ReturnType<typeof mapStateToProps> &
  ResolveThunks<typeof mapDispatchToProps>

function Page({ context, fetchContextUser }: Props) {
  React.useEffect(() => {
    fetchContextUser()
  }, [])
  return (
    <Wrapper>
      <Title>Sample</Title>
      {context.isLoading ? (
        <div>isLoading</div>
      ) : (
        <div>Loaded</div>
      )}
    </Wrapper>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Page))

const Wrapper = styled.div`
  padding: 16px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
`
