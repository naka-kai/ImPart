import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UriEnum } from '../consts/UriConsts'
import { RouteMappingType } from '../types/commonTypes'

// TOP
const Top = lazy(() => import('../Pages/Member/Top'))

// マイタスク
const MyTaskList = lazy(() => import('../Pages/Member/MyTask/MyTaskList'))

// プロジェクト管理
const Project = lazy(() => import('../Pages/Member/Project/ProjectList'))

// チーム管理
const Team = lazy(() => import('../Pages/Member/Team/TeamList'))

// 取引先管理
const Client = lazy(() => import('../Pages/Member/Client/ClientList'))

// ダッシュボード
const Dashboard = lazy(() => import('../Pages/Member/Dashboard'))

// 時間分析
const Analysis = lazy(() => import('../Pages/Member/Analysis/BarAnalysis'))

// エクスポート
const Export = lazy(() => import('../Pages/Member/Export'))

// 各種設定
const Setting = lazy(() => import('../Pages/Member/Setting/SettingList'))

// パス コンポーネント のマッピング
const RouteMapping: RouteMappingType[] = [
    // TOP
    { path: UriEnum.Top, element: <Top /> },
    // マイタスク
    { path: UriEnum.MyTask, element: <MyTaskList /> },
    // プロジェクト管理
    { path: UriEnum.Project, element: <Project /> },
    // チーム管理
    { path: UriEnum.Team, element: <Team /> },
    // 取引先管理
    { path: UriEnum.Client, element: <Client /> },
    // ダッシュボード
    { path: UriEnum.Dashboard, element: <Dashboard /> },
    // 時間分析
    { path: UriEnum.Analysis, element: <Analysis /> },
    // エクスポート
    { path: UriEnum.Export, element: <Export /> },
    // 各種設定
    { path: UriEnum.Setting, element: <Setting /> },
]

const MemberRouter: React.FC = () => {
    return (
        <>
            <Routes>
                {RouteMapping.map((route, key) => (
                    <Route
                        key={key.toString()}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </>
    )
}

export default MemberRouter
