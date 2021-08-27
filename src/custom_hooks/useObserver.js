import * as React from 'react'
import useIntersectionObserver from '@react-hook/intersection-observer'

const Component = () => {
  const [ref, setRef] = React.useState()
  const {isIntersecting} = useIntersectionObserver(ref)
  return <div ref={setRef}>Is intersecting? {isIntersecting}</div>
}
