import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "TryK's Note",
  description: '내 일상과 생각을 기록하는 공간',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' }
    ],
    sidebar: {
      '/': [  // ✅ 홈 경로 사이드바 추가
        {
          text: '카테고리',
          collapsed: false,
          items: [
            { text: 'OpenWRT', link: '/openwrt/01-basic' },
            { text: 'TrueNAS', link: '/truenas/01-basic' }
          ]
        }
      ],
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
          text: 'TrueNAS',
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