<script setup>
import { RouterLink } from "vue-router";
import { mainStore } from "../store/mainStore";
const store = mainStore();
const obj = {
    email: "",
    password: ""
};
</script>

<template>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900">
                    Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6" @submit.prevent="store.login(obj)">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" name="email" id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            v-model="obj.email" placeholder="name@company.com" required="">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            v-model="obj.password" required="">
                    </div>
                    <button type="submit"
                        class="w-full text-white bg-green-700 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-5 text-center">Sign
                        in</button>
                </form>
                <p>Don’t have an account yet?<RouterLink
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500" to="/register">
                        Sign up</RouterLink>
                </p>
            </div>
        </div>
    </div>
</template>