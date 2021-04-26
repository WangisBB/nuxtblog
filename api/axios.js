import axios from "axios";
// API请求地址
//axios.defaults.baseURL = process.env.API_ROOT
import Vue from "vue";
import Cookies from 'cookie-universal';
 
const cookies = new Cookies();
 


const IS_DEV = process.env.NODE_ENV !== "production";
axios.defaults.baseURL = IS_DEV ?
"http://api.lihaile.work/" :
    "http://api.lihaile.work/";
Vue.prototype.$baseURL = axios.defaults.baseURL;
import { Message } from "element-ui";

// 请求超时
//axios.defaults.timeout = 5000
// axios.defaults.withCredentials = true;


// 公共请求参数
const commonParam = {};

// console.log(Nuxt)
// 拦截请求


// post方法
export default axios;