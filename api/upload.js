
import axios from "./axios";

const getarticleMenu = '//upload/editor'

/**
 * 
 * @param {*} params 
 */

export const addarticle=(params)=>{
    return axios({
        method: 'post',
        url: 'article/addArticle',
        data:params
      })
}
export const uploadeditor=(params)=>{
    return {
        method: 'post',
        url: 'upload/editor',
        data:params,
        headers:{
         "Content-Type":"multipart/form-data"
        }
      }
}
export const deleteupload=(params)=>{
    return {
        method: 'delete',
        url: 'upload/editor',
        data:params,
    
      }
}
