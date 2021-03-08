module.exports = {
  title: "Project Error",
  tagline: "Developers striving to produce quality open source FiveM resources",
  url: "https://docs.projecterror.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "project-error", // Usually your GitHub org/user name.
  projectName: "docs.projecterror.dev", // Usually your repo name.
  themeConfig: {
    defaultMode: "dark",
    respectPrefersColorScheme: true,
    navbar: {
      title: "Project Error",
      logo: {
        alt: "Project Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Resource Docs",
          position: "left",
        },
        {
          href: "https://discord.gg/rNXB48WUVx",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://github.com/project-error/docs.projecterror.dev",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Projects",
          items: [
            {
              label: "New Phone Who Dis",
              href: "https://github.com/project-error/new-phone-who-dis",
            },
            {
              label: "New Garage Who Dis",
              to: "#",
            },
            {
              label: "New Bank Who Dis",
              to: "#",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/rNXB48WUVx",
            },
            {
              label: "GitHub",
              href: "https://github.com/project-error/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Project Error`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/project-error/docs.projecterror.dev",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
