import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'
import reportRouter from './modules/report'

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  }
]

export default new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/users',
    component: Layout,
    redirect: '/users/index',
    meta: { title: 'Users', icon: 'peoples', noCache: true, roles: ['admin'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/user/users'),
        name: 'user-manager',
        meta: { title: 'Quản lý users', icon: 'peoples', noCache: true, roles: ['admin'] }
      },
      {
        path: 'roles',
        component: () => import('@/views/user/users'),
        name: 'user-role',
        meta: { title: 'Phân quyền', icon: 'peoples', noCache: true, roles: ['admin'] }
      }
    ]
  },
  {
    path: '/suppliers',
    component: Layout,
    redirect: '/users/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/suppliers/list'),
        name: 'supplier-manager',
        meta: { title: 'Supplier', icon: 'tree', noCache: true }
      },
      {
        path: 'products',
        component: () => import('@/views/suppliers/list'),
        name: 'supplier-manager',
        meta: { title: 'Sản phẩm', icon: 'products', noCache: true }
      }
    ],
    meta: { title: 'Quản lý Supplier', icon: 'tree', noCache: true, roles: ['admin'] }
  },
  {
    path: '/publishers',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/publisher/index'),
        name: 'publisher-manager',
        meta: { title: 'Quản lý Publisher', icon: 'user-link', noCache: true }
      }
    ],
    meta: { roles: ['admin'] }
  },
  {
    path: '/stores',
    component: Layout,
    redirect: '/stores',
    meta: { title: 'Quản lý Stores', icon: 'products and services', noCache: true, roles: ['admin'] },
    children: [
      {
        path: 'categories',
        component: () => import('@/views/store/categories'),
        name: 'categories-manager',
        meta: { title: 'Danh mục - Thương hiệu', icon: 'products', noCache: true, roles: ['admin'] }
      },
      {
        path: 'campaign',
        component: () => import('@/views/user/users'),
        name: 'campaign-manager',
        meta: { title: 'Chiến dịch', icon: 'campaigns', noCache: true, roles: ['admin'] }
      },
      {
        path: 'orders',
        component: () => import('@/views/user/users'),
        name: 'orders-manager',
        meta: { title: 'Đơn hàng', icon: 'order', noCache: true, roles: ['admin'] }
      },
      {
        path: 'advertisement',
        component: () => import('@/views/user/users'),
        name: 'advertiser-manager',
        meta: { title: 'Quảng cáo', icon: 'advert', noCache: true, roles: ['admin'] }
      }
    ]
  },
  reportRouter,
  {
    path: '/blog',
    component: Layout,
    redirect: '/blog/list',
    children: [
      {
        path: 'create',
        component: () => import('@/views/blog/create'),
        name: 'CreateArticle',
        meta: { title: 'createArticle', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/blog/edit'),
        name: 'EditArticle',
        meta: { title: 'editArticle', noCache: true },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/blog/list'),
        name: 'ArticleList',
        meta: { title: 'articleList', icon: 'list' }
      }
    ],
    meta: { title: 'Quản lý Blogs', icon: 'tree', noCache: true, roles: ['admin'] }
  },
  { path: '*', redirect: '/404', hidden: true }
]
