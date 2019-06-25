module.exports = {
  title: '管理后台文档', 
  description: '徐硕豪',
  head: [
      ['link', { rel: 'icon', href: 'https://c.weimobwmc.com/static-resource/6c5af0e60047435598750aea13dab5aa.png' }],
      ['link', { rel: 'manifest', href: 'https://c.weimobwmc.com/static-resource/2d7c4863e34e4bbf955ea7055744e7bf.png' }],
  ],
  themeConfig: {
        sidebar: [
          {
            title: '开发指南',
            collapsable: false,
            children: [
              '/text/',
            ]
          },
          {
            title: '布局规范',
            collapsable: false,
            children: [
              '/layout/',
              '/layout/icon',
              '/layout/btn',
            ]
          },
          {
            title: '常用组件',
            collapsable: false,
            children: [
              '/component/upimg',
            ]
          },
          {
            title: '分享文档',
            collapsable: false,
            children: [
              '/data/',
            ]
          }
        ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated', 
},
}