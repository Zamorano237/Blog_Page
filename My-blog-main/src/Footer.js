import React from 'react'
import { useStoreState } from 'easy-peasy'

const Footer = () => {
  const postCount = useStoreState((state) => state.postCount)
  const today = new Date()
  return (
    <footer className='Footer'>
        <p> {postCount} post Copyright WATBO Yvan &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer