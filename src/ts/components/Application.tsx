import * as React from 'react'
import { sleep, sleepUntilAllImageLoaded } from './../util'
import LoadingOverlay from './LoadingOverlay'
import * as classNames from 'classnames'
import IntersectionWrapper from './IntersectionWrapper'
import image from './../../images/icon_square.jpg'

interface State {
  isLoading: boolean
}

export default class extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = { isLoading: true }
  }

  async componentDidMount() {
    await sleepUntilAllImageLoaded()
    await sleep(1000)
    this.setState({ isLoading: false })
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
        <IntersectionWrapper
          disabled={isLoading}
          className='item'
        >
          <img className='await' src={image} alt='' />
        </IntersectionWrapper>
        <IntersectionWrapper
          disabled={isLoading}
          className='item'
        >
          <img
            className='await'
            src='http://placekitten.com/400/401'
            alt=''
          />
        </IntersectionWrapper>
        <IntersectionWrapper
          disabled={isLoading}
          className='item'
        >
          <img
            className='await'
            src='http://placekitten.com/400/402'
            alt=''
          />
        </IntersectionWrapper>
        <IntersectionWrapper
          disabled={isLoading}
          className='item'
        >
          <img
            className='await'
            src='http://placekitten.com/400/403'
            alt=''
          />
        </IntersectionWrapper>
        <IntersectionWrapper
          disabled={isLoading}
          className='item'
        >
          <img
            className='await'
            src='http://placekitten.com/400/404'
            alt=''
          />
        </IntersectionWrapper>
        <IntersectionWrapper
          disabled={isLoading}
          className='item'
        >
          <img
            className='await'
            src='http://placekitten.com/400/400'
            alt=''
          />
        </IntersectionWrapper>
        <IntersectionWrapper
          disabled={isLoading}
          className='item'
        >
          <img
            className='await'
            src='http://placekitten.com/400/401'
            alt=''
          />
        </IntersectionWrapper>
      </div>
    )
  }
}
