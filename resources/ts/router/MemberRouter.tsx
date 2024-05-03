import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UriEnum } from '../consts/UriConsts'
import MyTaskList from '../Pages/Member/MyTask/MyTaskList'

const MemberRouter: React.FC = () => {
    return (
        <>
            <Routes>
                <Route
                    path={UriEnum.MyTask}
                    element={<MyTaskList />}
                />
            </Routes>
        </>
    )
}

export default MemberRouter
