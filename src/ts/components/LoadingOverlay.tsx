import * as React from 'react'
import classNames from 'classnames'
import Lottie from './Lottie'
import animation from './loading'

interface Props {
  isLoading: boolean
}

interface State {
  isLoadingAnimationStarted: boolean
  isLoadingAnimationEnded: boolean
}

export default class extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      isLoadingAnimationStarted: false,
      isLoadingAnimationEnded: false
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.isLoading === true &&
      this.props.isLoading === false
    ) {
      setTimeout(() => {
        this.setState({ isLoadingAnimationStarted: true })
      }, 1000)
      setTimeout(() => {
        this.setState({ isLoadingAnimationEnded: true })
      }, 2000)
    }
  }

  render() {
    const {
      isLoadingAnimationStarted,
      isLoadingAnimationEnded
    } = this.state
    return isLoadingAnimationEnded ? null : (
      <div
        className={classNames(
          'cover',
          isLoadingAnimationStarted && 'loaded'
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
