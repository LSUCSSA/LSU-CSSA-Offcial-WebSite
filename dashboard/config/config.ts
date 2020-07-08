// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      authority: ['authenticated', 'cssa_management'],
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['authenticated', 'cssa_management'],
          routes: [
            {
              path: '/',
              redirect: '/welcome',
            }, // {
            //   path: '/welcome',
            //   name: 'welcome',
            //   icon: 'smile',
            //   component: './Welcome',
            // },
            // {
            //   path: '/admin',
            //   name: 'admin',
            //   icon: 'crown',
            //   component: './Admin',
            //   authority: ['admin', 'cssa_management'],
            //   routes: [
            //     {
            //       name: '官网管理',
            //       icon: 'smile',
            //       path: '/admin/siteEditor',
            //       component: './OfficialSiteEditor',
            //     },
            //   ],
            // },
            // {
            //   name: 'Roster',
            //   icon: 'user',
            //   path: '/roster',
            //   component: './Roster',
            //   authority: ['cssa_management'],
            // },
            // {
            //   // name: '个人中心',
            //   // icon: 'smile',
            //   path: '/account/center',
            //   component: './user/AccountCenter',
            // },
            {
              // name: '个人设置',
              icon: 'smile',
              path: '/account/settings',
              component: './user/AccountSettings',
            },

            {
              name: 'Site Editor',
              icon: 'smile',
              path: '/siteeditor',
              component: './OfficialSiteEditor',
            },
            {
              name: 'Roster',
              icon: 'smile',
              path: '/roster',
              component: './Roster',
            },// {
            //   name: '查询表格',
            //   icon: 'smile',
            //   path: '/roster',
            //   component: './Roster',
            // },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
