/** When your routing report is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const reportRouter = {
  path: '/report',
  component: Layout,
  redirect: '/report/complex-report',
  name: 'Table',
  meta: {
    title: 'Báo cáo',
    icon: 'table'
  },
  children: [
    {
      path: 'revenue-analyze',
      component: () => import('@/views/charts/mixchart'),
      name: 'revenue-analyze',
      meta: { title: 'Doanh thu', icon: 'products', noCache: true, roles: ['admin'] }
    },
    {
      path: 'campaigns-analyze',
      component: () => import('@/views/report/complexTable'),
      name: 'order-analyze',
      meta: { title: 'Đơn hàng', icon: 'campaigns', noCache: true, roles: ['admin'] }
    },
    {
      path: 'orders-analyze',
      component: () => import('@/views/report/dynamicTable/index'),
      name: 'sale-analyze',
      meta: { title: 'Bán hàng', icon: 'order', noCache: true, roles: ['admin'] }
    },
    {
      path: 'advert-analyze',
      component: () => import('@/views/report/dynamicTable/index'),
      name: 'campaign-analyze',
      meta: { title: 'Affiliate', icon: 'advert', noCache: true, roles: ['admin'] }
    },
    {
      path: 'p-summary',
      component: () => import('@/views/campaign/index'),
      name: 'p-summary',
      meta: { title: 'Tổng quan', icon: 'advert', noCache: true, roles: ['publisher'] }
    },
    {
      path: 'p-campaign',
      component: () => import('@/views/campaign/index'),
      name: 'p-campaign',
      meta: { title: 'Chiến dịch', icon: 'products', noCache: true, roles: ['publisher'] }
    },
    {
      path: 'p-order',
      component: () => import('@/views/campaign/index'),
      name: 'p-order',
      meta: { title: 'Đơn hàng', icon: 'campaigns', noCache: true, roles: ['publisher'] }
    },
    {
      path: 'p-trafic',
      component: () => import('@/views/campaign/index'),
      name: 'p-trafic',
      meta: { title: 'Trafic', icon: 'order', noCache: true, roles: ['publisher'] }
    }
  ]
}
export default reportRouter
