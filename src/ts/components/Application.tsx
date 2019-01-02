import * as React from 'react'
import {
  setUpScrollAnimation,
  sleepUntilAllImageLoaded
} from './../util'
import LoadingOverlay from './LoadingOverlay'
import * as classNames from 'classnames'

interface State {
  isLoading: boolean
}

export default class extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = { isLoading: true }
  }

  async componentDidMount() {
    setUpScrollAnimation()
    await sleepUntilAllImageLoaded()
    this.setState({ isLoading: false })
  }

  async componentDidUpdate() {
    setUpScrollAnimation()
  }

  render() {
    const { isLoading } = this.state
    return (
      <div
        className={classNames(
          'wrapper',
          isLoading && 'locked'
        )}
      >
        <LoadingOverlay isLoading={isLoading} />
        <div className='item animate'>
          <img
            className='await'
            src='http://placekitten.com/400/400'
            alt=''
          />
        </div>
        <div className='item animate'>
          <img
            className='await'
            src='http://placekitten.com/400/401'
            alt=''
          />
        </div>
        <div className='item animate'>
          <img
            className='await'
            src='http://placekitten.com/400/402'
            alt=''
          />
        </div>
        <div className='item animate'>
          <img
            className='await'
            src='http://placekitten.com/400/403'
            alt=''
          />
        </div>
        <div className='item animate'>
          <img
            className='await'
            src='http://placekitten.com/400/404'
            alt=''
          />
        </div>
        <div className='item animate'>
          <img
            className='await'
            src='http://placekitten.com/400/400'
            alt=''
          />
        </div>
        <div className='item animate'>
          <img
            className='await'
            src='http://placekitten.com/400/401'
            alt=''
          />
        </div>
        <div className='item animate'>
          <img
            className='await'
            src='http://placekitten.com/400/402'
            alt=''
          />
        </div>
        <div className='item animate'>
          <img
            className='await'
            src='http://placekitten.com/400/403'
            alt=''
          />
        </div>
        <div className='item animate'>
          <img
            className='await'
            src='http://placekitten.com/400/404'
            alt=''
          />
        </div>
      </div>
    )
  }
}
