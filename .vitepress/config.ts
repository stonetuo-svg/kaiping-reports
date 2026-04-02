
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '开平考察报告集',
  description: '环境设计专业本科生开平考察报告集',
  lang: 'zh-CN',

  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '范例报告', link: '/guide/sample-report' },
      { text: '学生报告', link: '/reports/' }
    ],

    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '指导',
          items: [
            { text: '写作指南', link: '/guide/writing-guide' },
            { text: '范例报告', link: '/guide/sample-report' }
          ]
        }
      ],
      '/reports/': [
        {
          text: '学生报告',
          items: [
            { text: '第1组报告', link: '/reports/group1' },
            { text: '第2组报告', link: '/reports/group2' },
            { text: '第3组报告', link: '/reports/group3' },
            // 可以继续添加更多小组
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/kaiping-diaolou' }
    ],

    // 页脚
    footer: {
      message: '环境设计专业本科生考察报告',
      copyright: '© 2026'
    },

    // 搜索
    search: {
      provider: 'local'
    }
  }
})
