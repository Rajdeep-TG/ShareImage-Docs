module.exports = {
  onBrokenLinks: 'ignore',
  title: 'ShareImage',
  tagline: 'Generate Dynamic ShareImages!',
  url: 'https://docs.shareimage.zype.cf',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Rajdeep-TG', // Usually your GitHub org/user name.
  projectName: 'ShareImage-Docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ShareImage',
      logo: {
        alt: 'My Site Logo',
        src: 'https://res.cloudinary.com/zype/image/upload/ShareImage/Logo.png',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Zype-Z/ShareImage',
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
              label: 'Python Docs',
              to: 'docs/python/',
            },
            {
              label: 'API Docs (Beta)',
              to: 'docs/api/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/shareimage',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/QfqhyPS6va',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/RajdeepTG',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Zype-Z/ShareImage',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zype Inc. Built for Developers.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Rajdeep-TG/ShareImage-Docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Rajdeep-TG/ShareImage-Docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
