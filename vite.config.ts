/*
 * @Date: 2022-07-22 16:50:58
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-08-11 10:52:20
 * @Description: vite 配置文件
 */

import { resolve } from 'path';

import vue from '@vitejs/plugin-vue';

import { defineConfig, loadEnv } from 'vite'; // https://vitejs.dev/config/
// console.log(loadEnv);

import AutoImport from 'unplugin-auto-import/vite';

import Components from 'unplugin-vue-components/vite';

import importsListen, { imports } from 'vite-plugin-vue-autoimportconfigextend';

// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// console.log(loadEnv());
export default defineConfig({
	base: './',
	server: {
		port: 8123,
		host: '0.0.0.0',
		// strictPort: true, //若端口已被占用则会直接退出，而不是尝试下一个可用端口。

		proxy: {
			// '/api': 'http://124.222.90.238:9122',
			'/api': {
				// import.meta.env.VITE_APP_BASE_API
				target: 'http://124.222.90.238:9122', // 接口基地址
				changeOrigin: true,
				rewrite: (url) => {
					return url.replace(/^\/api/, '/web/manage');
				},
			},
		},
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'), // 路径别名
		},
		extensions: ['.js', '.json', '.ts'], // 使用路径别名时想要省略的后缀名，可以自己 增减
	},

	plugins: [
		vue(),
		//自动导入API
		AutoImport({
			dts: true,
			// dts: "src/auto-imports.d.ts", // 可以自定义文件生成的位置，默认是根目录下
			// imports: ["vue",{ utils: ['default', 'utils'] }],

			imports: imports(
				'vue',
				// "vue-router",
				// "pinia",
				// src 下 apis 文件夹中 index.ts 文件 所有export自动引入
				// { target: "apis", include: ["index.ts"] },

				// src 下 utils 文件夹中 所有直接子ts文件内 所有export自动引入
				{ target: 'utils', include: ['http.js'] }
			),
			// 	resolvers: [ElementPlusResolver()],
		}),

		//自动导入组件
		Components({
			// resolvers: [ElementPlusResolver()],
		}),
		// 监听imports配置的路径文件变化，触发服务重启（重新生成声明文件）
		importsListen(),
	],
	css: {
		// css预处理器
		preprocessorOptions: {
			// less: {
			// 	charset: false,
			// 	additionalData: '@import "./src/style/common.less";',
			// },
		},
	},
});
