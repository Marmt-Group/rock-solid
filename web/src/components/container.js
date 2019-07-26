import React from 'react'

import styles from './container.module.scss'

const Container = ({ children }) => {
  // let numSteps = useState(10.0)
  // let sections = useState('')

  // const buildThresholdList = () => {
  //   let thresholds = []
  //   numSteps = 20

  //   for (let i = 1.0; i <= numSteps; i++) {
  //     let ratio = i / numSteps
  //     thresholds.push(ratio)
  //   }

  //   thresholds.push(0)
  //   return thresholds
  // }

  // const handleIntersect = (entries, observer) => {
  //   for (let entry of entries) {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('active')
  //     }
  //   }
  // }

  // const createObserver = () => {
  //   let observer

  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: buildThresholdList()
  //   }

  //   observer = new IntersectionObserver(handleIntersect, options)

  //   sections.forEach(element => {
  //     observer.observe(element)
  //   })
  // }

  // useEffect(() => {
  //   sections = document.querySelectorAll('section');
  //   createObserver();
  // }, [])

  return <div className={styles.root}>{children}</div>
}

export default Container
