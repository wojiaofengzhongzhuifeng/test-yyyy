import { defineConfig } from 'umi';

export default defineConfig({
  antd: {},
  title: '数字化管理平台',
  history: {
    type: 'browser',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // { path: '/', component: '@/pages/index' },
    {
      path: '/',
      component: '@/layout/index',
      routes: [
        {
          path: '/',
          component: './Home',
        },
        {
          path: '/home',
          component: './Home',
        },
        {
          path: '/login',
          component: './Login',
        },
      ],
    },
  ],
  sass: {
    implementation: require('node-sass'),
  },
  cssModulesTypescriptLoader: {},
  define: {
    USERNAME: "你的数字建筑物用户名",
    PASSWORD: "你的数字建筑物密码",
    BUILDING_KEY: "建筑id",
    
    BASE_URL: "http://building-bos.rickricks.com",
    BASE_3D_URL: "http://building-bos3d.rickricks.com",
    BOS3D_DATABASE_KEY: "sessionStorage 里面的 buildingModelDB"
  }
  
});
