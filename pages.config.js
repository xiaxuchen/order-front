import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  easycom: {
    autoscan: true,
    custom: {
      '^u-(.*)': 'uview-plus/components/u-$1/u-$1.vue',
      '^uni-(.*)': '@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  pages: [
    {
      path: 'pages/login/phone/index',
      aliasPath: '/login',
      style: {
        navigationBarTitleText: '',
        navigationBarTextStyle: 'black',
        navigationBarBackgroundColor: '#ffffff',
      },
    },
    {
      // 注意: 该字段是必须的用于标识那个是首页
      type: 'home',
      path: 'pages/index/home/index',
      aliasPath: '/home',
      style: {
        navigationBarTitleText: '首页',
      },
    },
    {
      path: 'pages/index/personal/index',
      aliasPath: '/personal',
      style: {
        navigationBarTitleText: '个人中心',
      },
    },
    {
      path: 'pages/errors/404/index',
      aliasPath: '/404',
      style: {
        navigationBarTitleText: '404',
      },
    },
  ],
  subPackages: [
    {
      root: 'pages/statement',
      pages: [
        {
          path: 'index',
          aliasPath: '/statement',
          style: {
            navigationBarTitleText: '产品服务协议',
          },
        },
      ],
    },
    {
      root: 'pages/realname',
      pages: [
        {
          path: 'index',
          aliasPath: '/realname',
          style: {
            navigationBarTitleText: '实名认证',
          },
        },
      ],
    },
    {
      root: 'pages/contact',
      pages: [
        {
          path: 'index',
          aliasPath: '/contact',
          style: {
            navigationBarTitleText: '联系我们',
          },
        },
      ],
    },
  ],
  tabBar: {
    color: '#999999',
    selectedColor: '#2b9939',
    backgroundColor: '#F8F8F8',
    list: [
      {
        iconPath: 'static/tabbar/tab-home.png',
        selectedIconPath: 'static/tabbar/tab-home-active.png',
        pagePath: 'pages/index/home/index',
        text: '首页',
      },
      {
        iconPath: 'static/tabbar/tab-personal.png',
        selectedIconPath: 'static/tabbar/tab-personal-active.png',
        pagePath: 'pages/index/personal/index',
        text: '我的',
      },
    ],
  },
  globalStyle: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'vite-uniapp-template',
    navigationBarBackgroundColor: '#ffffff',
    backgroundColor: '#f8f8f8',
  },
  condition: {
    current: 0,
    list: [
      {
        name: 'pages/contact/index',
        path: 'pages/contact/index',
      },
      {
        name: 'pages/realname/index',
        path: 'pages/realname/index',
      },
    ],
  },
})
