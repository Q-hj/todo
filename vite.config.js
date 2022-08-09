/*
 * @Date: 2022-07-22 16:50:58
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-08-09 14:45:24
 * @Description: vite 配置文件
 */
import { defineConfig, loadEnv } from "vite"; // https://vitejs.dev/config/
// console.log(loadEnv);
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";

import AutoImport from "unplugin-auto-import/vite";

// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
	base: "./",
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
			// dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
			imports: ["vue"],
		}),
		// AutoImport({
		// 	resolvers: [ElementPlusResolver()],
		// }),
		//自动导入组件
		Components({
			// resolvers: [ElementPlusResolver()],
		}),
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
