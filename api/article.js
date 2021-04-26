import axios from "./axios";

const getarticleMenu = "/articleMenu";
const article = "/article";


//添加文集
export function addarticleMenu(params) {
    return {
        method: "post",
        url: getarticleMenu,
        data: params
    }
}

/**
 * 
 * @param {type:number} params  获取 1文集，2tag 
 */
export function getarticleMenuapi(params) {
    return {
        method: "get",
        url: getarticleMenu,
        params: params
    }
}
/**
 * 
 * @param {*} params 修改文集
 */
export function putarticleMenu(params) {
    return {
        method: "put",
        url: getarticleMenu,
        data: params
    };
}
/**
 * 
 * @param {*} id  删除
 */
export function delarticleMenu(id) {
    return {
        method: "delete",
        url: `${getarticleMenu}/${id}`
    }
}
/**
 * 
 * @param {menuid,tag} params 根据menuid，tag查询文章
 */
export function getarticlelist(params) {
    return {
        method: "get",
        url: `${article}/MenuArticle`,
        params
    }
}
export function getarticlepage(axios,params) {
    return axios.$get( `http://api.lihaile.work${article}`,{params});
}
export function getarticle(axios,params) {
    return axios.$get( `http://api.lihaile.work${article}/${params}`);
}

export function postarticle(params) {
   return {
        method: "post",
        url: `${article}`,
        data:params
    }
}
export function putarticle(params) {
    return {
        method: "put",
        url: `${article}`,
        data:params
    }
}