import vue from 'rollup-plugin-vue'
import node from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import typescript from "rollup-plugin-typescript2"
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import { terser } from 'rollup-plugin-terser'

import fs from 'fs'
import path from 'path'

import pack from './package.json'

const babelConfig = {
    exclude: 'node_modules/**',
    runtimeHelpers: true,
    babelrc: false,
    presets: [['@babel/preset-env', { modules: false }]]
}

const bannerTxt = `/*! AriaUI v${pack.version} */`

const baseFolder = './src/'
const componentsFolder = 'components/'

const components = fs
    .readdirSync(baseFolder + componentsFolder)
    .filter((f) =>
        fs.statSync(path.join(baseFolder + componentsFolder, f)).isDirectory()
    )

const entries = {
    'index': './src/index.ts',
    'helpers': './src/utils/helpers.ts',
    'config': './src/utils/configComponent.ts',
    ...components.reduce((obj, name) => {
        obj[name] = (baseFolder + componentsFolder + name)
        return obj
    }, {})
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const vuePluginConfig = {
    template: {
        isProduction: true,
        compilerOptions: {
            whitespace: 'condense'
        }
    }
}

export default () => {
    const mapComponent = (name) => {
        return [
            {
                input: baseFolder + componentsFolder + `${name}/index.ts`,
                external: ['vue', '@heroicons/vue/solid', '@heroicons/vue/outline'],
                output: {
                    format: 'umd',
                    name: capitalize(name),
                    file: `dist/components/${name}/index.js`,
                    banner: bannerTxt,
                    exports: 'named',
                    globals: {
                      vue: 'Vue',
                      '@heroicons/vue/solid': '@heroicons/vue/solid',
                      '@heroicons/vue/outline': '@heroicons/vue/outline',
                    }
                },
                plugins: [
                    typescript({ useTsconfigDeclarationDir: true }),
                    vue(vuePluginConfig),
                    peerDepsExternal(), 
                    node({
                        extensions: ['.vue', '.js', '.ts']
                    }),
                    postcss({
                      config: {
                        path: './postcss.config.js'
                      },
                      extensions: ['.css'],
                      extract: false
                    }),
                    cjs(),
                    babel(babelConfig),
                ]
            }
        ]
    }

    let config = [
        {
            input: entries,
            external: ['vue', '@heroicons/vue/solid', '@heroicons/vue/outline'],
            output: {
                format: 'esm',
                dir: `dist/esm`
            },
            plugins: [
                typescript({ useTsconfigDeclarationDir: true }),
                vue(vuePluginConfig),
                peerDepsExternal(), 
                node({
                    extensions: ['.vue', '.js', '.ts']
                }),
                babel(babelConfig),
                postcss({
                  config: {
                    path: './postcss.config.js'
                  },
                  extensions: ['.css'],
                  extract: false
                }),
                cjs(),
            ]
        },
        {
            input: entries,
            external: ['vue', '@heroicons/vue/solid', '@heroicons/vue/outline'],
            output: {
                format: 'cjs',
                dir: 'dist/cjs',
                exports: 'named'
            },
            plugins: [
                typescript({ useTsconfigDeclarationDir: true }),
                vue(vuePluginConfig),
                peerDepsExternal(), 
                node({
                    extensions: ['.vue', '.js', '.ts']
                }),
                babel(babelConfig),
                postcss({
                  config: {
                    path: './postcss.config.js'
                  },
                  extensions: ['.css'],
                  extract: false
                }),
                cjs(),
            ]
        },
        {
            input: 'src/index.ts',
            external: ['vue', '@heroicons/vue/solid', '@heroicons/vue/outline'],
            output: {
                format: 'umd',
                name: 'AriaUI',
                file: 'dist/ariaUI.js',
                exports: 'named',
                banner: bannerTxt,
                globals: {
                  vue: 'Vue',
                  '@heroicons/vue/solid': '@heroicons/vue/solid',
                  '@heroicons/vue/outline': '@heroicons/vue/outline',
                }
            },
            plugins: [
                typescript({ useTsconfigDeclarationDir: true }),
                vue(vuePluginConfig),
                peerDepsExternal(), 
                node({
                    extensions: ['.vue', '.js', '.ts']
                }),
                babel(babelConfig),
                postcss({
                  config: {
                    path: './postcss.config.js'
                  },
                  extensions: ['.css'],
                  extract: false
                }),
                cjs(),
            ]
        },
        {
            input: 'src/index.ts',
            external: ['vue', '@heroicons/vue/solid', '@heroicons/vue/outline'],
            output: {
                format: 'esm',
                file: 'dist/ariaUI.esm.js',
                banner: bannerTxt
            },
            plugins: [
                typescript({ useTsconfigDeclarationDir: true }),
                vue(vuePluginConfig),
                peerDepsExternal(), 
                node({
                    extensions: ['.vue', '.js', '.ts']
                }),
                babel(babelConfig),
                postcss({
                  config: {
                    path: './postcss.config.js'
                  },
                  extensions: ['.css'],
                  extract: false
                }),
                cjs(),
            ]
        },
        // individual components
        ...components.map((f) => mapComponent(f)).reduce((r, a) => r.concat(a), [])
    ]

    if (process.env.MINIFY === 'true') {
        config = config.filter((c) => !!c.output.file)
        config.forEach((c) => {
            c.output.file = c.output.file.replace(/\.js/g, '.min.js')
            c.plugins.push(terser({
                output: {
                    comments: '/^!/'
                }
            }))
        })
    }
    return config
}