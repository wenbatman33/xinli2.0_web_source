import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia';
import 'ant-design-vue/dist/antd.less';
import '@/assets/scss/main.scss';
import 'swiper/css';
import './registerServiceWorker';
import i18n from '@/i18n';

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn'); 设置语言 或 moment.lang('zh-cn');
/////////////////////////
window.staticPath = '';
/////////////////////////

createApp(App).use(router).use(createPinia()).use(Antd).use(i18n).mount('#app');
