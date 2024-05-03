import React from 'react'
import MainSidebar from './MainSidebar'
import Header from './Header'

const Wrap = () => {
    return (
        <div className="flex">
            <MainSidebar />
            <div>
                <Header />
                <main></main>
            </div>
        </div>
    )
}

export default Wrap
