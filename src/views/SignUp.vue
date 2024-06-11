<script setup>
import Footer from "../components/Footer.vue";
import { mainStore } from "../store/mainStore";

const store = mainStore();
let obj = {
    "first_name": "",
    "last_name": "",
    "email": "",
    "password": "",
    "address_line1": "",
    "address_line2": "",
    "city": "",
    "country": "",
    "postal_code": "",
}
</script>

<template>
    <section>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900">
                        Register Account
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="store.registerUser(obj)">
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your
                                    email</label>
                                <input type="email" name="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="name@company.com" required="" v-model="obj.email">
                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required="" v-model="obj.password">
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="firstName" class="block mb-2 text-sm font-medium text-gray-900">First
                                    Name</label>
                                <input type="text" name="firstName" id="firstName"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="First Name" required="" v-model="obj.first_name">
                            </div>
                            <div>
                                <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900">Last
                                    Name</label>
                                <input type="text" name="lastName" id="lastName"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="Last Name" required="" v-model="obj.last_name">
                            </div>
                        </div>
                        <div>
                            <div>
                                <label for="addressLine1" class="block mb-2 text-sm font-medium text-gray-900">Address
                                    Line 1</label>
                                <input type="text" name="addressLine1" id="addressLine1"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="Address Line 1" required="" v-model="obj.address_line1">
                            </div>
                        </div>
                        <div>
                            <div>
                                <label for="addressLine2" class="block mb-2 text-sm font-medium text-gray-900">Address
                                    Line 2</label>
                                <input type="text" name="addressLine2" id="addressLine2"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="Address Line 2" v-model="obj.address_line2">
                            </div>
                            <div class="grid grid-cols-2 gap-4 py-8">
                                <div>
                                    <label for="city" class="block mb-2 text-sm font-medium text-gray-900">
                                        City</label>
                                    <input type="text" name="City" id="City"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="City" required="" v-model="obj.city">
                                </div>
                                <div>
                                    <label for="country" class="block mb-2 text-sm font-medium text-gray-900">
                                        Country</label>
                                    <input type="text" name="country" id="country"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Country" required="" v-model="obj.country">
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label for="postCode"
                                        class="block mb-2 text-sm font-medium text-gray-900">Postcode</label>
                                    <input type="text" name="postCode" id="postCode"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Postcode" required="" v-model="obj.postal_code">
                                </div>
                            </div>
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-green-700 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-5 text-center">Sign
                            Up</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>