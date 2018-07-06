module.exports = {
    title: 'luckVicky',
    description: 'Just playing around',
    port:8081,
    description: '项目组在线文档.',
    base: '/',
    themeConfig: {
        locales:{
            '/': {
              lang: 'zh-CN',
              title: 'Essence KHFE.',
              description: '安信证券手机开户项目组在线文档.'
            }
        },
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Test', link: '/test/' },
          { text: 'External', link: 'https://baidu.com' },
        ],
        sidebar: {
            // 侧边栏在 /foo/ 上
            '/guide/': [
              '',
              'one',
              'two'
            ],
            // 侧边栏在 /bar/ 上
            '/test/': [
              '',
              'three',
              'four'
            ]
          }
    }
}