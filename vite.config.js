/*
 * @Date: 2022-07-22 16:50:58
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-07-24 13:19:52
 * @Description: vite 配置文件
 */
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
// import AutoImport from "unplugin-auto-import/vite";
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [
		vue(),
		AutoImport({
			// dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
			imports: ["vue"], //自动导入vueAPI
		}),
		// AutoImport({
		// 	resolvers: [ElementPlusResolver()],
		// }),
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
