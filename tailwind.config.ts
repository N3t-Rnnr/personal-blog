import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            typography: (theme: (path: string) => string) => ({ // <-- 关键的修复在这里
                DEFAULT: {
                    css: {
                        // 这里可以覆盖 prose 的默认浅色模式样式
                    },
                },
                invert: {
                    css: {
                        // 这里是 prose 在暗黑模式下的样式 (dark:prose-invert)
                        '--tw-prose-body': theme('colors.gray[300]'),
                        '--tw-prose-headings': theme('colors.gray[100]'),
                        '--tw-prose-lead': theme('colors.gray[400]'),
                        '--tw-prose-links': theme('colors.blue[400]'),
                        '--tw-prose-bold': theme('colors.gray[100]'),
                        '--tw-prose-counters': theme('colors.gray[400]'),
                        '--tw-prose-bullets': theme('colors.gray[600]'),
                        '--tw-prose-hr': theme('colors.gray[700]'),
                        '--tw-prose-quotes': theme('colors.gray[100]'),
                        '--tw-prose-quote-borders': theme('colors.gray[700]'),
                        '--tw-prose-captions': theme('colors.gray[400]'),
                        '--tw-prose-code': theme('colors.gray[100]'),
                        '--tw-prose-pre-code': theme('colors.gray[300]'),
                        '--tw-prose-pre-bg': 'rgba(0,0,0,0.2)',
                        '--tw-prose-th-borders': theme('colors.gray[600]'),
                        '--tw-prose-td-borders': theme('colors.gray[700]'),
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
export default config