import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "TryK's Note",
  description: 'to show content in separate pages',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
    ],
    sidebar: {
      '/openwrt/': [
        {
          text: 'OpenWRT',
          collapsed: false,
          items: [
            { text: '기본 설정', link: '/openwrt/01-basic' },
            { text: 'tailscale', link: '/openwrt/02-tailscale' }
          ]
        }
      ],
      '/truenas/': [
        {
          text: '설정',
          collapsed: false,
          items: [
            { text: '기본 설정', link: '/truenas/01-basic' },
            { text: '네트워크 설정', link: '/truenas/02-network' }
          ]
        }
      ]
    }
  }
})
