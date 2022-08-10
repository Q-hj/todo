/*
 * @Date: 2022-07-22 16:50:58
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-08-10 15:33:52
 * @Description: vite 配置文件
 */
import { defineConfig, loadEnv } from "vite"; // https://vitejs.dev/config/
// console.log(loadEnv);
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";

import AutoImport from "unplugin-auto-import/vite";

import importsListen, { imports } from "vite-plugin-vue-autoimportconfigextend";

// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// console.log(loadEnv());
export default defineConfig({
	base: "./",
	server: {
		port: 8123,
		host:"0.0.0.0",
		// strictPort: true, // 严格端口 true:如果端口已被使用，则直接退出，而不会再进行后续端口的尝试。
		/**
		 * @description 解决chrome设置origin:*也跨域机制,代理/api前缀到服务基地址
		 * 最终的地址会将axios设置的baseUrl:/api代理拼接成[target][/api],然后通过rewrite重写掉/api为'' 这样就是我们真实的基地址了
		 */
		proxy: {
			"/api": {
				// import.meta.env.VITE_APP_BASE_API
				target: "http://124.222.90.238/" , // 接口基地址
				changeOrigin: true,
				rewrite: (url) => url.replace(/^\/api/, ""),
			},
		},
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"), // 路径别名
		},
		extensions: [".js", ".json", ".ts"], // 使用路径别名时想要省略的后缀名，可以自己 增减
	},

	plugins: [
		vue(),
		//自动导入API
		AutoImport({
			dts: true,
			// dts: "src/auto-imports.d.ts", // 可以自定义文件生成的位置，默认是根目录下
			imports: ["vue",{ utils: ['default', 'utils'] }],
			 
			// imports: imports(
			// 	"vue",
			// 	// "vue-router",
			// 	// "pinia",
			// 	// src 下 apis 文件夹中 index.ts 文件 所有export自动引入
			// 	// { target: "apis", include: ["index.ts"] },

			// 	// src 下 utils 文件夹中 所有直接子ts文件内 所有export自动引入
			// 	{ target: "utils" }
			// ),
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
// imports config
export interface dirImportOpts {
  alias?: string, // src的路径别名，默认@
  target: string; // 导入的路径 只能是src目录下的
  prefix?: string; // 导入文件名的前缀过滤
  suffix?: string; // 导入文件名的后缀过滤
  include?: string[]; // 导入的文件名（无视过滤）
  exclude?: string[]; // 不导入的文件名
}