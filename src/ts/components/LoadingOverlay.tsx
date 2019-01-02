import * as React from 'react'
import classNames from 'classnames'
import Lottie from './Lottie'
import animation from './loading'
import { sleep } from '../util'

interface Props {
  isLoading: boolean
}

interface State {
  isLoadingAnimationEnded: boolean
}

export default class extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      isLoadingAnimationEnded: false
    }
  }

  async componentDidUpdate(prevProps: Props) {
    if (
      prevProps.isLoading === true &&
      this.props.isLoading === false
    ) {
      await sleep(300)
      this.setState({ isLoadingAnimationEnded: true })
    }
  }

  render() {
    const { isLoadingAnimationEnded } = this.state
    const { isLoading } = this.props
    return isLoadingAnimationEnded ? null : (
      <div
        className={classNames(
          'cover',
          !isLoading && 'loaded'
        )}
      >
        <Lottie
          className='loading'
          src={animation}
          autoplay
        />
      </div>
    )
  }
}
