import React from 'react'
import lazyLoad from '@/routes/utils/lazyLoad'
import LayoutIndex from '@/layouts/index'

// dashboard 模块
const userRouter: Array<any> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: 'home'
    },
    children: [
      {
        path: '/',
        element: lazyLoad(React.lazy(() => import('@/views/home/index'))),
        meta: {
          requiresAuth: true,
          title: '首页',
          key: 'home'
        }
      }
    ]
  }
]

export default userRouter
