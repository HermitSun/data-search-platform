/**
 * meta 配置参数
 * @param {string} title 页面标题
 */
export default [
    {
        path: '/not-found',
        name: '找不到页面',
        component: () => import('views/PageNotFound.vue'),
        meta: {
            title: '找不到页面'
        }
    },
    {
        path: '/',
        name: '搜索',
        component: () => import('views/user/Index.vue'),
        meta: {
            title: '搜索'
        }
    },
    {
        path: '/result-list',
        name: '搜索结果列表',
        component: () => import('views/user/ResultList.vue'),
        meta: {
            title: '搜索结果列表'
        }
    },
    {
        path: '/result-detail/:filename',
        name: '搜索结果详情',
        component: () => import('views/user/ResultDetail.vue'),
        meta: {
            title: '搜索结果详情'
        }
    },
    {
        path: '/admin',
        name: '管理员登录',
        component: () => import('views/admin/Admin.vue'),
        meta: {
            title: '登录'
        },
        children: [
            {
                path: '/admin/upload',
                name: '上传问卷',
                component: () => import('views/admin/UploadQuestionnaire.vue'),
                isLeaf: true,
                iconClass: 'el-icon-upload2',
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
