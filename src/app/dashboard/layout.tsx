import React from 'react'

import Navigation from '@/components/Navigation'


const Rootlayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en">
      <body style={{backgroundColor: 'var(--color-white)'}}>
        <div className='dashboard__wrraper'>
          <aside>
            <Navigation />
          </aside>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

export default Rootlayout