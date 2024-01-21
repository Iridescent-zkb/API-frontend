﻿export default [
  { name:'主页',path: '/', icon: 'smile', component: './Index' },
  { name:'登录',path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name:'管理页',
    routes: [
      // { path: '/admin', redirect: '/admin/sub-page' },
      // { path: '/admin/sub-page', component: './Admin' },
      { name: '接口管理', icon: 'table', path: '/admin/interface_info', component: './Admin/InterfaceInfo' },
    ],
  },
  // { icon: 'table', path: '/list', component: './TableList',name:'表格页'},
  // { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
