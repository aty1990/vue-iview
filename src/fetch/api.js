import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
//require("@/assets/js/loading")
const prifix = "/service";

const baseUrl = "http://192.168.3.18:82";  // qa环境

//const baseUrl = "http://192.168.8.104:8080";  //qa环境


//const baseUrl = "https://app.sgmlink.com"+prifix;     //生产

//POST传参序列化
axios.defaults.baseURL = baseUrl;
// 封装文件上传的头信息
Vue.prototype.$http = axios.create({
    timeout: 10000,
    transformRequest: [function (data) {
        return qs.stringify(data)
        }
    ],
    paramsSerializer: function (data) {
        return qs.stringify(data)
    }
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: params},{timeout: 30000} )
        .then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        })
        .catch((error) => {
            reject(error)
        })
    })
}

//post
export function postData(url, data,loadflag) {
    if(loadflag){
        //$("body").Loading({text : "数据请求中..."});
    }
    return new Promise((resolve, reject) => {
        axios.post(url, data,{
            headers: {
                'content-type': 'application/json'
            },
            timeout: 10000
        })
        .then(response => {
            resolve(response.data);
            //$("body").Loading('hide');
        }, err => {
            reject(err);
            //$("body").Loading('hide');
        })
        .catch((error) => {
           // $("body").Loading('hide');
           
            reject(error)
        })
    })
}

export default {
    /**
     * 获取验证图片id
     * @param  {[type]} params [description]
     * @return {[type]}        [description]
     */
    getUser(params){
        return fetch('/users/getUser', params,true)
    },
    /**
     * 获取短信验证码
     * @param  {[type]} params [description]
     * @return {[type]}        [description]
     */
    getVerifyCodeWthPicCode(params){
        return postData('/ibuick/rest/api/public/userAuth/h5/getVerifyCode', params,true)
    },
    baseUrl : baseUrl
}