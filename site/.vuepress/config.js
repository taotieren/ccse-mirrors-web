const moment = require('moment')

module.exports = {
  base: '/',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'CCSE Open Source Mirrors',
      description: 'In-campus open source mirror site supported by SUSTech Center for Computational Science and Engineering',
    }
  },

  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'news', dirname: '_news',
            path: '/news/', itemPermalink: '/news/:year/:month/:slug.html',
            layout: 'IndexNews', itemLayout: 'Layout',
            pagination: { lengthPerPage: 9, layout: 'IndexNews' }
          }
        ]
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return moment(timestamp).format('YYYY-MM-DD HH:mm')
        }
      }
    ],
    '@vuepress/back-to-top'
  ],

  themeConfig: {
    locales: {
      '/': {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'News', link: '/news/' },
          { text: 'Help', link: '/help/' },
          { text: 'Status', link: '/status/' },
          { text: 'SUSTech CCSE', link: 'http://hpc.sustech.edu.cn/' },
          { text: 'SUSTech cra', link: 'https://www.cra.moe/' }
        ],
        sidebar: {
        }
      }
    },
    docsRepo: 'ziqin/ccse-mirrors-web',
    docsDir: 'site',
    editLinks: true,
    editLinkText: 'Edit on GitHub',
    search: false,
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: true
    }
  },

  markdown: {
    lineNumbers: false,
    toc: {
      includeLevel: [2, 3, 4]
    }
  }
}
