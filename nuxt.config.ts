export default defineNuxtConfig({

    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@nuxt/image',
    ],
    image: {
        format: ['webp'],
    },
    content: {
        highlight: {
            langs: [
                'json',
                'js',
                'javascript',
                'ts',
                'typescript',
                'html',
                'css',
                'vue',
                'shell',
                'bash',
                'mdc',
                'mermaid',
                'md',
                'yaml',
                'python',
                'c',
                'csharp',
                'cpp',
                'sql',
                'java',
                'xml',
                'scala',
                'kotlin',
            ],
            theme: {
                default: 'catppuccin-frappe',
                // Theme used if `html.dark`
                dark: 'github-dark',
            },
        },
    },
})
