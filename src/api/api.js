import * as axios from 'axios'

const instanse = axios.create({
    baseURL : "https://frontend-test-assignment-api.abz.agency/api/v1"
})

export const usersAPI = {
    getUsers(page,count) {
        return instanse.get(`/users?page=${page}&count=${count}` )
      
    },
    getNewUsers() {
        return instanse.get("/users?page=1&count=6")
    }
}

export const loginAPI = {
    getPositions() {
        return instanse.get("/positions")
    },
    getToken(){
        return instanse.get("/token")
    },
    postUser(formData,token) {
        return instanse.post("/users",formData,{
            headers : {
                'Content-Type' : 'multipart/form-data',
                token : token
            }
        })
    }
}