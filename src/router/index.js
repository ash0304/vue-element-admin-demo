import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '',
    component: Layout,
    redirect: '/Dashboard',
    children: [
      {
        path: '/Dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'm01'
        }
      }
    ]
  },
  {
    path: '/PromoteCenter',
    component: Layout,
    redirect: '/PromoteCenter/PromoteMaterial',
    name: 'PromoteCenter',
    meta: {
      title: '推广中心',
      icon: 'm02'
    },
    children: [
      {
        path: '/PromoteCenter/CollaborationInfo',
        component: () => import('@/views/promoteCenter/CollaborationInfo'),
        name: 'CollaborationInfo',
        meta: {
          title: 'CollaborationInfo'
        }
      }
    ]
  },
  {
    path: '/TeamManage',
    component: Layout,
    redirect: '/TeamManage/MemberManage',
    name: 'TeamManage',
    meta: {
      title: '团队管理',
      icon: 'm03'
    },
    children: [
      {
        path: '/TeamManage/MemberManage',
        component: () => import('@/views/teamManage/MemberManage'),
        name: 'MemberManage',
        meta: {
          title: 'MemberManage'
        }
      },
      {
        path: '/TeamManage/AgentList',
        component: () => import('@/views/teamManage/AgentList'),
        name: 'AgentList',
        meta: {
          title: 'AgentList'
        }
      }
    ]
  },
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
    hidden: true,
    meta: {
      title: 'login'
    }
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = []

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
  mode: 'history'
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
