// import Vue from 'vue';
const IS_DEV = process.env.NODE_ENV !== "production";


import { Message } from "element-ui";


export default function ({ $axios, redirect,store,route }) {
    $axios.defaults.baseURL = IS_DEV ?
    "http://api.lihaile.work/" :
        "http://api.lihaile.work/";
    $axios.onRequest(config => {
      let  token = store.state.user.token || null
                if (token) {
                    console.log(store.state.user.token)
                    // config.headers.common['Authorization'] = 'Bearer ' + token
                    config.headers.Authorization = 'Bearer ' + token
                }
    })
  
    $axios.onError(error => {
    
      const code = parseInt(error.response && error.response.status)
      switch (code) {
        case 400:
          Message({
            type:"error",
            message:error.response.data.message
        })
   
          break;
        case 401:
          Message({
            type:"error",
            message:"登陆过期"+code
        })
        store.commit('user/init', null)
        // redirect('/login')
        redirect("/login?redirect=" + route.path)
          break;
      
        default:
          break;
      }
     
    })
  }
