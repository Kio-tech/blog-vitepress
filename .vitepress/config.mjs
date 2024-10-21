import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 自动生成侧边栏

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog-vitepress/",  // 使用Github Pages部署增加的配置
  head: [["link", { rel: "icon", href: "/jumao.svg" }]], // 配置地址栏图标
  title: "商秋的BLOG",
  description: "网站描述",
  themeConfig: {

    logo: 'jumao.svg', // 配置网站左上标题旁边LOGO图标，位于public目录

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '冷知识', link: '/content/冷知识/四舍五入为什么不科学' }
    ],

    sidebar: {
      "/content/冷知识": set_sidebar("content/冷知识")  // 自动生成侧边栏，键是nav的link，set_sidebar传递的参数是相对于根路径的文件夹路径
    
    },
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   },
    //   {
    //     text: '冷知识',
    //     items: [
    //       { text: '四舍五入为什么不科学', link: '/冷知识/四舍五入为什么不科学' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 设置搜索框
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    // 底部版权信息
    footer: {
      copyright: '冀ICP备2024087472号-1'
    }
  }
})
