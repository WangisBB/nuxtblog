import { getarticlepage } from '../api/article'
export const state = () => ({
    articlelist: []
});
export const mutations = {
    gettarticle(state, data) {
        state.articlelist = data;

    }
};
export const getters = {
    islogin(state) {
        return !!state.token;
    }
};
export const actions = {
    getarticlepage({ commit }, params) {
        

        return new Promise((resolve, reject) => {
            
            getarticlepage(params).then(({ data }) => {
                // 保存cookie
               
                commit("gettarticle",data)
                resolve(data)
              
            }).catch(err => reject(err))
        })


    }
};