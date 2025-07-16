import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // 未来你可以在这里扩展自定义样式，比如颜色、字体等
        },
    },
    plugins: [
        require('@tailwindcss/typography'),//添加Typography插件

    ], // 插件配置区，我们马上会用到这里
}
export default config