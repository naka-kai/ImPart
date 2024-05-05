import React from 'react'
import { MainSidebarInfo } from '../consts/MainSidebarConst'
import { Link } from 'react-router-dom'

const MainSidebar = () => {
    return (
        <>
            {MainSidebarInfo.map((item, key) => (
                <div key={item.key.toString()}>
                    <Link to={item.href}>
                        <div>{item.title}</div>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default MainSidebar
