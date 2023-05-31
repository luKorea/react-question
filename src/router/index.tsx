import React, { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

import MainLayout from '@/Layout/MainLayout'
import ManageLayout from '@/Layout/ManageLayout'
import QuestionLayout from '@/Layout/QuestionLayout'

// 首页
const Home = lazy(() => import('@/views/Home'))
const Login = lazy(() => import('@/views/Login'))
const Register = lazy(() => import('@/views/Register'))
const NotFound = lazy(() => import('@/views/NotFound'))

// 问卷管理
const ManageList = lazy(() => import('@/views/Manage/List'))
const ManageStar = lazy(() => import('@/views/Manage/Star'))
const ManageTrash = lazy(() => import('@/views/Manage/Trash'))

// 问卷详情
const QuestionEdit = lazy(() => import('@/views/Question/Edit'))
const QuestionStat = lazy(() => import('@/views/Question/Stat'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <ManageList />
          },
          {
            path: 'star',
            element: <ManageStar />
          },
          {
            path: 'trash',
            element: <ManageTrash />
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <QuestionEdit />
      },
      {
        path: 'stat/:id',
        element: <QuestionStat />
      }
    ]
  }
]

export default routes
