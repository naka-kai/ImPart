import React from 'react'
import { UriEnum } from './UriConsts'
import { MdTaskAlt } from 'react-icons/md'
import { GoProject } from 'react-icons/go'
import { RiTeamFill } from 'react-icons/ri'
import { FaBuilding } from 'react-icons/fa'
import { LuLayoutDashboard } from 'react-icons/lu'
import { GrAnalytics } from 'react-icons/gr'
import { PiExportBold } from 'react-icons/pi'
import { IoSettingsOutline } from 'react-icons/io5'

// メインサイドバーのメニュータイプ
export interface MainSidebarMenuType<T> {
    key: T
    title: string
    href: UriEnum
    svg: JSX.Element
    children_array?: {
        key: T
        title: string
        href: UriEnum
        svg: JSX.Element
    }[]
}

export enum MainSidebarStatusEnum {
    MyTask = 1,
    Project,
    Team,
    Client,
    Dashboard,
    Analysis,
    Export,
    Setting,
}

export const MainSidebarInfo: MainSidebarMenuType<MainSidebarStatusEnum>[] = [
    {
        key: MainSidebarStatusEnum.MyTask,
        title: 'マイタスク',
        href: UriEnum.MyTask,
        svg: <MdTaskAlt />,
    },
    {
        key: MainSidebarStatusEnum.Project,
        title: 'プロジェクト管理',
        href: UriEnum.Project,
        svg: <GoProject />,
    },
    {
        key: MainSidebarStatusEnum.Team,
        title: 'チーム管理',
        href: UriEnum.Team,
        svg: <RiTeamFill />,
    },
    {
        key: MainSidebarStatusEnum.Client,
        title: '取引先管理',
        href: UriEnum.Client,
        svg: <FaBuilding />,
    },
    {
        key: MainSidebarStatusEnum.Dashboard,
        title: 'ダッシュボード',
        href: UriEnum.Dashboard,
        svg: <LuLayoutDashboard />,
    },
    {
        key: MainSidebarStatusEnum.Analysis,
        title: '時間分析',
        href: UriEnum.Analysis,
        svg: <GrAnalytics />,
    },
    {
        key: MainSidebarStatusEnum.Export,
        title: 'エクスポート',
        href: UriEnum.Export,
        svg: <PiExportBold />,
    },
    {
        key: MainSidebarStatusEnum.Setting,
        title: '各種設定',
        href: UriEnum.Setting,
        svg: <IoSettingsOutline />,
    },
]
