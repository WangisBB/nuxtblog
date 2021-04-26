const LIMIT = 9;
const CURRENT_PAGE = 1;
export const actions = {
    nuxtServerInit({ commit }, { app }) {
        if (app.$cookies) {
            const token = app.$cookies.get("token") || null;
            if (token) {
                commit("user/init", token);
            }
        }
    },
    async login({ commit, state }, params) {
        let postParam = {
            currentPage: params.currentPage || CURRENT_PAGE,
            limit: LIMIT
        }
        const res = await service.getArtAll(postParam).catch(err => {
            
        })
        if (res && res.code === 200) {
            commit('article/GET_ART_SUCCESS', res.data)
        }
    },
    // async getAllArtList({commit, state}, params) {
    //     let postParam = {
    //       currentPage: params.currentPage || CURRENT_PAGE,
    //       limit: LIMIT
    //     }
    //     const res = await service.getArtAll(postParam).catch(err => {
    //       
    //     })
    //     if (res && res.code === 200) {
    //       commit('article/GET_ART_SUCCESS', res.data)
    //     }
    //   },
};