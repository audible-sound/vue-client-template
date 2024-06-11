<script setup>
import {RouterLink} from "vue-router";
import { mainStore } from "../store/mainStore";

const store = mainStore();
</script>

<template>
    <header class="bg-green-700 w-screen">
        <!-- Navbar Container-->
        <div class="flex flex-row place-content-between p-8">
            <!-- Logo and Navigation Links-->
            <div class="flex flex-row space-x-4">
                <RouterLink to="/">
                    <div>Logo</div>
                </RouterLink>
                <nav>
                    <!-- Desktop -->
                    <div>
                        <ul class="flex flex-row space-x-4">
                            <li>
                                <RouterLink to="/"><div class="underline">Home</div></RouterLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <!-- Search Bar and User Profile-->
            <div class="flex flex-row space-x-4">
                <div v-if="!store.isLoggedIn">
                    <RouterLink to="/login"><div class="underline">Sign In</div></RouterLink>
                </div>
                <div v-if="store.isLoggedIn">
                    <button class="underline" @click="store.logOut()">Log Out</button>
                </div>
            </div>
        </div>
    </header>
</template>