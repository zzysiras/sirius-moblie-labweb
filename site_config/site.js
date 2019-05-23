// 全局的一些配置
export default {
  rootPath: '/ice/scaffold-preview/ice-opensource-site', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  defaultLanguage: 'zh-cn',
  'en-us': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/demo1.html',
      },
      {
        key: 'blog',
        text: 'BLOG',
        link: '/en-us/blog/index.html',
      },
      {
        key: 'community',
        text: 'COMMUNITY',
        link: '/en-us/community/index.html',
      },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: 'the disclaimer content',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Overview',
          link: '/en-us/docs/demo1.html',
        },
        {
          text: 'Quick start',
          link: '/en-us/docs/demo2.html',
        },
        {
          text: 'Developer guide',
          link: '/en-us/docs/dir/demo3.html',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'Blog',
          link: '/en-us/blog/index.html',
        },
        {
          text: 'Community',
          link: '/en-us/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2018 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '历程',
        link: '/zh-cn/docs/demo1.html',
      },
      {
        key: 'blog',
        text: '论文',
        link: '/zh-cn/blog/index.html',
      },
      {
        key: 'community',
        text: '团建',
        link: '/zh-cn/community/index.html',
      },
    ],
    disclaimer: {
      title: '免责声明',
      content: '免责声明的具体内容',
    },
    documentation: {
      title: '联系我们',
      list: [
        {
          text: '合作邮箱',
          link: '#',
        },
        {
          text: '实验室公众号',
          link: '#',
        },
        {
          text: '地址',
          link: '#',
        },
      ],
    },
    resources: {
      title: '友情链接',
      list: [
        {
          text: '川大官网',
          link: '#',
        },
        {
          text: '后台入口',
          link: '#',
        },
      ],
    },
    copyright: 'Copyright © 2018 数字媒体实验室 design by zzy',
  },
};
