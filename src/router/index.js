import Vue from 'vue'
import VueRouter from 'vue-router'

// 阻止多次点击的时候报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        // 主页路由
        {
            path: '/home',
            component: () => import('@/views/Home')
        },
        // 歌单路由
        {
            path: '/playlist',
            component: () => import('@/views/Playlist')
        },
        // 播放路由
        {
            path: '/plays',
            component: () => import('@/views/playS')
        },
        // 重定向
        {
            path:'*',
            redirect:'/home'
        }
    ]
})
export default router