module.exports = {
  title: 'Project Error',
  tagline: 'Project Error, a meme organization.',
  url: 'https://docs.projecterror.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'project-error', // Usually your GitHub org/user name.
  projectName: 'docs.projecterror.dev', // Usually your repo name.
  themeConfig: {
    defaultMode: 'dark',
    respectPrefersColorScheme: true,
    navbar: {
      title: 'Project Error Docs',
      logo: {
        alt: 'Project Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/project-error/docs.projecterror.dev',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started with NPWD',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/rNXB48WUVx',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/project-error/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Project Error`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/project-error/docs.projecterror.dev',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
