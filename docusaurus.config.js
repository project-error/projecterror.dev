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
    gtag: {
      trackingID: "UA-191466813-1",
    },
    defaultMode: "dark",
    respectPrefersColorScheme: true,
    sitemap: {
      cacheTime: 600 * 1000, // 600 sec - cache purge period
      changefreq: "weekly",
      priority: 0.5,
      trailingSlash: false,
    },
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
          href: "https://discord.gg/teaFPbAmdn",
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
          editUrl:
            "https://github.com/project-error/docs.projecterror.dev/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        offlineModeActivationStrategies: ["appInstalled", "queryString"],
        pwaHead: [
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo.png",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/logo.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/icon.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000",
          },
        ],
      },
    ],
  ],
};
