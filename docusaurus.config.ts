import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
    title: "PHYS1112 Notes",
    favicon: "img/ljnux-logo-icon-bg.png",

    url: "https://phys1112-notes.ljnux.com",
    baseUrl: "/",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    routeBasePath: "/",
                    path: "docs",
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [
                        [
                            rehypeKatex,
                            { displayMode: true, fleqn: true, trust: true },
                        ],
                    ],
                    sidebarPath: "./sidebars.ts",
                    breadcrumbs: false,
                    editUrl:
                        "https://github.com/AlaisterLeung/phys1112-notes/tree/main/",
                },
                blog: false,
                theme: {
                    customCss: ["./src/css/styles.css"],
                },
            } satisfies Preset.Options,
        ],
    ],

    stylesheets: [
        {
            href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
            type: "text/css",
            integrity:
                "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
            crossorigin: "anonymous",
        },
    ],

    themes: [
        [
            "@easyops-cn/docusaurus-search-local",
            {
                indexDocs: true,
                indexBlog: false,
                docsRouteBasePath: "/",
                hashed: true,
            },
        ],
    ],

    themeConfig: {
        image: "img/ljnux-logo-icon-bg.png",
        navbar: {
            title: "PHYS1112 Notes",
            logo: {
                alt: "LJNUX Logo",
                src: "img/ljnux-logo-icon.svg",
            },
            items: [
                {
                    href: "https://github.com/AlaisterLeung/phys1112-notes",
                    label: "GitHub",
                    position: "right",
                },
                {
                    type: "html",
                    value: '<a class="sponsor-button-link" href="https://github.com/sponsors/AlaisterLeung" target="_blank" rel="noopener noreferrer"><img class="sponsor-button-img" src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" /></a>',
                    position: "right",
                },
            ],
            hideOnScroll: true,
        },
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        footer: {
            style: "dark",
            copyright: `Copyright © ${new Date().getFullYear()} LJNUX. Built with Docusaurus.`,
        },
        tableOfContents: {
            maxHeadingLevel: 4,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        colorMode: {
            defaultMode: "dark",
        },

        metadata: [
            {
                name: "keywords",
                content:
                    "phys1112, phy, phys, physics, 1112, notes, hkust, ust",
            },
        ],
    } satisfies Preset.ThemeConfig,

    headTags: [
        {
            tagName: "script",
            attributes: {
                type: "application/ld+json",
            },
            innerHTML: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "WebSite",
                name: "PHYS1112 Notes by LJNUX",
                alternateName: [
                    "LJNUX",
                    "PHYS1112",
                    "PHYS 1112",
                    "PHYS1112 Notes",
                    "PHYS 1112 Notes",
                ],
                url: "https://phys1112-notes.ljnux.com/",
            }),
        },
    ],
};

export default config;
