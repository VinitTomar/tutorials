// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tutorials',
  tagline: 'Software engineering is cool',
  url: 'https://vinittomar.github.io',
  baseUrl: '/tutorials/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.png',
  organizationName: 'Vinit Tomar',
  projectName: 'Tutorials',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
            const filteredDocs = args.docs.filter(d => d.frontMatter.hide != true);
            return await defaultSidebarItemsGenerator({ ...args, docs: filteredDocs });
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        items: [
          { to: '/aws-sam/introduction/', label: 'AWS SAM', position: 'left' },
        ],
        hideOnScroll: true
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
