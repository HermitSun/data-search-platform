import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import Store from '@/store';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

// 跳转之前
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    if (to.path.indexOf('/admin/') < 0) {
        next();
    } else {
        let token = Store.state.token;
        if (!token) {
            token = localStorage.getItem('token');
        }
        if (!token) {
            next('/admin');
        } else {
            next();
        }
    }
});

export default router;
