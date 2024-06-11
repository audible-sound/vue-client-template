<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ProductCard from "../components/ProductCard.vue";
import { mainStore } from "../store/mainStore"; 
import { onMounted } from "vue";

const store = mainStore();
onMounted(() => {
    store.getLatest();
});
</script>

<template>
    <div class="container">
        <Navbar />
        <h1 class="px-8 m-8 text-3xl font-bold">
            Latest Products
        </h1>
        <div class="px-8 mb-8 grid grid-cols-5 gap-8">
            <ProductCard v-for="product in store.latestProducts" :key="product.id" :product="product"/>
        </div>
        <Footer />
    </div>
</template>

<style scoped>
</style>