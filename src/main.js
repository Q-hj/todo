/*
 * @Date: 2022-07-22 16:50:58
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-08-12 14:26:41
 * @Description:
 */
import { createApp } from 'vue';
import './style/index.less';
import './plugin/index';
import App from './App.vue';

createApp(App).mount('#app');

// 取消加载动画
const loading = document.querySelector('#Loading');
document.body.removeChild(loading);
