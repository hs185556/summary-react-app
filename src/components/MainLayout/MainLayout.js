import React from 'react'
import Header from './Header'

function MainLayout({ children,location }) {
    return (
        <div>
            <Header location={location}></Header>
            {children}
        </div>
    )
}

export default MainLayout;