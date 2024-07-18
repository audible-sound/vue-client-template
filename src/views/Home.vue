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
    <Navbar/>
    <div class="pb-20 flex flex-row">
        <ProductCard v-for="product in store.latestProducts" :key="product.id" :product="product"/>
    </div>
    <Footer/>
</template>