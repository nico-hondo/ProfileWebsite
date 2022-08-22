import React, { useContext } from 'react'
import { ThemeContext } from './context-api'

const TdakAdaPost = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode

  return (
    <div className='noPost pt-5'>
        <h2>Recent Posts</h2>
        <div className='noPostWrapper' style={{color : darkMode ? '#9D9EA2' : '#818893'}}>
            <div className='noPost-text mt-3 mb-4'>
                Sometimes I write about web development, other times about random interesting stuff.
            </div>
            <div className='noPost-textDesc'>
                Don't have any posts.
            </div>
        </div>
    </div>
  )
}

export default TdakAdaPost
