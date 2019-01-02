import * as React from 'react'
import classNames from 'classnames'
import { sleep } from '../util'

interface Props {
  /** このプロパティがオフになっている場合、イベントを発火させない */
  disabled?: boolean
  className?: string
}

interface State {
  isAppeared: boolean
}

export default class extends React.Component<Props, State> {
  private observer: IntersectionObserver
  private wrapper = React.createRef<HTMLDivElement>()

  constructor(props) {
    super(props)
    this.state = {
      isAppeared: false
    }
  }

  async componentDidMount() {
    this.observer = new IntersectionObserver(
      changes => {
        changes.forEach(change => {
          if (change.intersectionRect.height > 200) {
            if (!this.props.disabled) {
              this.setState({ isAppeared: true })
              this.observer.unobserve(change.target)
            }
          }
        })
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    )
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.disabled === true &&
      this.props.disabled === false
    ) {
      this.observer.observe(this.wrapper.current)
    }
  }

  render() {
    const { className, children } = this.props
    const { isAppeared } = this.state
    return (
      <div
        ref={this.wrapper}
        className={classNames(
          className,
          isAppeared && 'appeared'
        )}
      >
        {children}
      </div>
    )
  }
}
