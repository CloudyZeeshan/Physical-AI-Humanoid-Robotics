import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A comprehensive educational guide to intelligent physical systems',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://physical-ai-humanoid-robotics-omega-three.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yourusername', // Usually your GitHub org/user name.
  projectName: 'my-book', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Internationalization with English and Urdu support
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      ur: {
        label: 'اردو (Urdu)',
        direction: 'rtl',
        htmlLang: 'ur-PK',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/cloudyzeeshan',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: 'blog',
          blogSidebarCount: 5,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    headTags: [
      {
        tagName: 'meta',
        attributes: {
          name: 'description',
          content: 'A professional learning platform for Physical AI and humanoid robotics with expert tutorials, modules, and research-backed blog content.',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          name: 'keywords',
          content: 'Physical AI, humanoid robotics, ROS 2, robotics education, digital twin, AI brain architecture, robotics blog',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          property: 'og:title',
          content: 'Physical AI & Humanoid Robotics',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          property: 'og:description',
          content: 'Explore professional courses, blog articles, and hands-on learning resources for building intelligent physical systems and humanoid robots.',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          property: 'og:type',
          content: 'website',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      },
    ],
    navbar: {
      title: 'Physical AI Hub',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
        },
        {
          to: '/about',
          label: 'About',
          position: 'left',
        },
        {
          to: '/topics',
          label: 'Topics',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          to: '/contact',
          label: 'Contact',
          position: 'left',
        },
        {
          to: '/privacy',
          label: 'Privacy',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'textbookSidebar',
          position: 'right',
          label: 'Chapters',
        },
        {
          href: 'https://github.com/cloudyzeeshan',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Topics',
              to: '/topics',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Chapter 1: Introduction',
              to: '/docs/chapter-1-introduction-to-physical-ai',
            },
            {
              label: 'Chapter 4: Digital Twin',
              to: '/docs/chapter-4-digital-twin-simulation',
            },
          ],
        },
        {
          title: 'Legal & Contact',
          items: [
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
            {
              label: 'Contact Email',
              href: 'mailto:support@physicalai-robotics.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Made for educational use.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'typescript', 'yaml', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
