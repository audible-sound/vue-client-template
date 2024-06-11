import { defineStore } from 'pinia';
import { serverAxios } from '../api/serverApi';

export const mainStore = defineStore("mainStore", {
    state: () => ({
        latestProducts: [],
        isLoggedIn: false
    }),
    actions: {
        getLatest() {
            serverAxios.get('/product/latest').then(res => {
                this.latestProducts = res.data.data;
            })
        },
        registerUser(obj) {
            serverAxios.post('/user/register',
                {
                    email: obj.email,
                    password: obj.password,
                    first_name: obj.first_name,
                    last_name: obj.last_name,
                    address: obj.address,
                    city: obj.city,
                    country: obj.country,
                    postal_code: obj.postal_code,
                    address_line1: obj.address_line1,
                    address_line2: obj.address_line2
                }
            ).then(res => {
                this.router.push({
                    path: "/"
                })
                document.cookie = `token = ${res.data.access_token}; path = /`
                this.isLoggedIn = true; 
            })
        },
        login(obj) {
            serverAxios.post('/user/login',
                {
                    email: obj.email,
                    password:  obj.password
                }
            ).then(res => {
                this.router.push({
                    path: "/"
                })
                document.cookie = `token = ${res.data.access_token}; path = /`
                this.isLoggedIn = true; 
            })
        },
        logOut() {
            document.cookie = 'token' + '=; Max-Age=-99999999;';
            this.isLoggedIn = false;
        }
    }
})