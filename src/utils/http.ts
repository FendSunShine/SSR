
// const defaultConfig = {
//     timeout: 5000,
//     baseUrl:'',
    
// }
// const axiosInstance = axios.create(defaultConfig)

// // 请求拦截
// axiosInstance.interceptors.request.use(config => {
//     return config
// }, err => {
//     return Promise.reject(err)
// })

// // 添加响应拦截器
// axiosInstance.interceptors.response.use(function (response) {
//     // 2xx 范围内的状态码都会触发该函数。
//     // 对响应数据做点什么
//         return response;
//     }, function (error) {
//         // 超出 2xx 范围的状态码都会触发该函数。
//         // 对响应错误做点什么
//         return Promise.reject(error);
//     });


// // 封装请求
// function RequestGet(url, pramas){
//     return axiosInstance.get(url, pramas).then(res => res.data).catch()
// }

// function RequestPost(url, pramas){
//     return axiosInstance.post(url, pramas).then(res => res.data).catch()
// }

// export default {
//     RequestGet,
//     RequestPost
//

// ts
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

const defaultConfig = {
    timeout: 5000,
    baseUrl:'',
    
}

class Http {
    constructor(){
        this.httpRequestInterceptors()
        this.httpResponseInterceptors()
    }
    // 私有类
    private static axiosInstance = axios.create(defaultConfig)

    // 请求拦截
    private httpRequestInterceptors(){
        Http.axiosInstance.interceptors.request.use((config) => {
            return config
        }, err => {
            return Promise.reject(err)
        })
    }

    // 添加响应拦截器
    private httpResponseInterceptors(){
        Http.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
               // 2xx 范围内的状态码都会触发该函数。
                // 对响应数据做点什么
            return response
        }, err => {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(err)
        })
    }

    // 封装请求
    public httpGet<T>(url: string, parmas: AxiosRequestConfig): Promise<T>{
        return Http.axiosInstance.get(url, parmas).then(res => res.data).catch()
    }

    public httppost<T>(url: string, parmas: AxiosRequestConfig): Promise<T>{
        return Http.axiosInstance.post(url, parmas).then(res => res.data).catch()
    }

}


export const http = new Http( )