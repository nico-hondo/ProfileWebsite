import React, { useContext } from 'react'
import { ThemeContext } from './context-api'

const TdakAdaPost = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode

  return (
    <main className='noPost'>
        <section className='noPost-Wrapper'>
            <div className='noPost-Head'>
                <h2>Recent Posts</h2>
            </div>
            <div className="noPost-Direction mt-3 mb-4" style={{color : darkMode ? '#9D9EA2' : '#818893'}}>        
                Sometimes I write about web development, other times about random interesting stuff.
            </div>
            <div className='noPost-TextDesc'>
                "Don't have any posts."
            </div>
        </section>
    </main>
  )
}

export default TdakAdaPost
