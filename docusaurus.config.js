module.exports = {
  title: "Project Error",
  tagline: "An open source collective centered around quality.",
  url: "https://docs.projecterror.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "project-error", // Usually your GitHub org/user name.
  projectName: "docs.projecterror.dev", // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ["lua"]
    },
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
          label: "Documentation",
          position: "left",
        },
        {
          href: "https://discord.gg/uy5N7jT5aJ",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://github.com/project-error/docs.projecterror.dev",
          label: "GitHub",
          position: "right",
        },
        {
          label: "Donate",
          href: "https://ko-fi.com/projecterror",
          position: "right",
        }
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Popular Projects",
          items: [
            {
              label: "New Phone Who Dis (NPWD)",
              href: "https://github.com/project-error/npwd",
            },
            {
              label: "FiveM React Boilerplate Lua",
              href: "https://github.com/project-error/fivem-react-boilerplate-lua",
            },
            {
              label: "PE Basic Loading",
              href: "https://github.com/project-error/pe-basicloading",
            },
            {
              label: "PE V8 Utils",
              href: "https://github.com/project-error/pe-utils"
            }
          ],
        },
        {
          title: "Community Links",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/rNXB48WUVx",
            },
            {
              label: "GitHub",
              href: "https://github.com/project-error/",
            },
            {
              label: "Donate",
              href: "https://ko-fi.com/projecterror"
            }
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
