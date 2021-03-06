import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/views/detail/index'),
    meta: {
      title: '详情页'
    }
  },

  {
    path: '/archive',
    name: 'Archive',
    component: () => import('@/views/archive/index'),
    meta: {
      title: '归档'
    }
  },
  {
    path: '/friendsLink',
    name: 'FriendsLink',
    component: () => import('@/views/friendslink/index'),
    meta: {
      title: '友链'
    }
  },
  {
    path: '/reward',
    name: 'Reward',
    component: () => import('@/views/reward/index'),
    meta: {
      title: '赞赏'
    }
  },
  {
    path: '/board',
    name: 'Board',
    component: () => import('@/views/board/index'),
    meta: {
      title: '留言板'
    }
  },
  {
    path: '/aboutMe',
    name: 'AboutMe',
    component: () => import('@/views/aboutme/index'),
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user/index'),
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/likeCollect',
    name: 'LikeCollect',
    component: () => import('@/views/likecollect/index'),
    meta: {
      title: '喜欢/收藏'
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
