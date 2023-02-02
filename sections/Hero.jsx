'use client'

import { motion } from 'framer-motion'

import styles from '../styles'
import { slideIn, staggetContainer, textVariant } from '../utils/motion'

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggetContainer}
      initial='hidden'
      whileInView='show' // whileInView is a custom hook that detects when the element is in the viewport
      viewport={{ once: false, amount: 0.25 }} //states how much and how often the element should be in the viewport to trigger the animation
    ></motion.div>
  </section>
)

export default Hero
