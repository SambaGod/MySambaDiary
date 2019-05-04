import Api from '@/services/Api.js'

export default {
    register(credentials) {
        console.log("aaaaa")
        return Api().post('/test', credentials)
    }
}