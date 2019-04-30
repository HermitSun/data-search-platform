/**
 * meta 配置参数
 * @param {string} title 页面标题
 */
export default [
    {
        path: '/not-found',
        name: 'PageNotFound',
        component: () => import('views/PageNotFound.vue'),
        meta: {
            title: '找不到页面'
        }
    },
    {
        path: '/',
        name: 'UserIndex',
        component: () => import('views/user/Index.vue'),
        meta: {
            title: '搜索'
        }
    },
    {
        path: '/result-list',
        name: 'ResultList',
        component: () => import('views/user/ResultList.vue'),
        meta: {
            title: '搜索结果列表'
        }
    },
    {
        path: '/result-detail',
        name: 'ResultDetail',
        component: () => import('views/user/ResultDetail.vue'),
        meta: {
            title: '搜索结果详情'
        }
    },
    {
        path: '/admin',
        name: 'AdminIndex',
        component: () => import('views/admin/Admin.vue'),
        meta: {
            title: '管理员首页'
        },
        children: [
            {
                path: '/admin/upload',
                name: 'UploadQuestionnaire',
                component: () => import('views/admin/UploadQuestionnaire.vue'),
                meta: {
                    title: '上传问卷'
                }
            }
        ]
    },
    {
        path: '*',
        redirect: '/not-found'
    }
];
