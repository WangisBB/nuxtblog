import { $login } from '../api/service'
export const state = () => ({
    token: ""
});
export const mutations = {
    init(state, token) {
        state.token = token;
    }
};
export const getters = {
    islogin(state) {
        return !!state.token;
    }
};
export const actions = {
    login({commit},{axios, params}) {
       
 
        console.log(axios,params)

        return new Promise((resolve, reject) => {
            
            $login(axios,params).then(({ data }) => {
                // 保存cookie
                console.log(data)
                
                document.cookie = "token=" + data.token;
                commit("init", data.token)
                resolve(data)
                
            }).catch(err => reject(err))
        })


    }
};