<template>
    <div class="product-details w-full flex">
        <div class="w-1/2 p-4">
            <img class="w-full" :src="product.productImage" alt="coffin image">
        </div>

        <div class="w-1/2 p-4">
            <h3> {{ product.nameOfCoffins }} </h3>
            <p class="text-[#f3dc15] text-2xl !font-bold">Price:{{ product.price }} </p>
            <p> {{ product.description }}</p>
        </div>
    </div>

</template>

<script setup>
import { useProducts } from "../modules/useProducts.js";
import { useRoute } from "vue-router";

const { coffinProducts } = useProducts();
const route = useRoute();
const product = coffinProducts.value.find(product => product.id == route.params.id); 
    //by writing only == we are not checking the type of the id, so it will work even if the id is a string or a number.
    // if we want to check the type of the id we can use ===


</script>

<style>
</style>