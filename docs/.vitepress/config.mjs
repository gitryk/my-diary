import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TryK\'s Note',
  description: "내 일상과 생각을 기록하는 공간",
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: '소개', link: '/about' }
    ],
    sidebar: [
      {
        text: '가이드',
        items: [
          { text: '시작하기', link: '/getting-started' },
          { text: '사용법', link: '/usage' }
        ]
      }
    ]
  }
})