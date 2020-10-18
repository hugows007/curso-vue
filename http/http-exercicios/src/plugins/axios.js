import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://AQUI-VAI-A-URL-DO-BACKEND/',
            headers: {
                'Authorization': 'abc123'
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            // Manipulando a resposta
            // const array = []
            // for(let chave in res.data){
            //     array.push({id: chave, ...res.data[chave]})
            // }
            //
            // res.data = array
            return res
        }, error => Promise.reject(error))
    }
})