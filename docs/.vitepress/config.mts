import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "B.R.A.S",
  description: "Documentation pour le B.R.A.S",
  base: '/',
  head: [['link', { rel: 'icon', href: 'https://src.ks-infinite.fr/bras/bras.png' }]],
  themeConfig: {
    logo: 'https://src.ks-infinite.fr/bras/bras.png',

    footer: {
      message: 'Documentation/code du Projet B.R.A.S présent sur ce site sous license CC BY 4.0. (pour en savoir plus rdv dans la section LICENSE)',
      copyright: 'Copyright © 2023-present Lucas W.'
    },

    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Menu', link: '/' },
      { text: 'Introduction', link: '/docs/introduction' },
      { text: 'ADR', link: '/ADR/'},
      { text: 'Changelog', link: '/CHANGELOG'},
      { text: 'License', link: '/license'}
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Documentation', link: '/docs/' },
          { text: 'Introduction', link: '/docs/introduction' },
          { text: 'Installation', link: '/docs/installation'},
          { text: 'Bibliothèque', link: "/docs/bibliotheque"},
        ]
      },
      {
        text: 'Programmation',
        items: [
          { text: 'Widget Liste', link: "/docs/widget"},
          { text: 'Liste des fonctions', link: '/functions/' },
          { text: 'Liste des Variables', link: "/docs/variable"}
        ]
      },
      {
        text: 'Composants',
        items: [
          { text: 'Liste des composants', link: '/composants/' },
          { text: '4069', link: '/composants/4069' },
          { text: 'HMI', link: '/composants/hmi'},
          { text: 'Arduino', link: '/composants/arduino'},
          { text: 'csn-a2', link: '/composants/csn-a2'},
        ]
      },
      {
        text: 'Mention',
        items: [
          { text: 'license', link: '/license' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
