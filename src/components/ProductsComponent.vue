<template>
    <section class="!mb-10">
        <div>
            <h4 class="text-white text-6xl py-15">Shop coffins to die for</h4>
        </div>
        <div class="flex flex-wrap gap-8">
            <div v-for="coffinProduct in coffinProducts" :key="coffinProduct" class="coffinCard w-[cal(50%-1rem)] flex-nowrap p-8 bg-[#f3dc15] text-stone-800 flex rounded-2xl inset-shadow-sm inset-shadow-[#896780] shadow-md shadow-[#f3dc15]" >
                <div class="w-2/5 flex flex-col justify-between">
                    <div>
                        <p class="text-[#896780] !font-bold">{{ coffinProduct.tagLine }}</p>
                        <h3 class="text-4xl !mt-3">{{ coffinProduct.nameOfCoffins }}</h3>
                        <p>{{ coffinProduct.description }}</p>
                    </div>
                    <p class="text-4xl content-end">{{ coffinProduct.price }} DKK</p>
                </div>
                <div class="w-3/5 flex flex-col items-end">
                    <img class="size-48":src="coffinProduct.productImage" alt="">
                    <button class="text-xl text-stone-200 bg-stone-900 rounded-full py-4 px-8 !mt-2">Add to cart</button>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script setup>
import { useProducts } from '../modules/useProducts'

const { coffinProducts } = useProducts()

</script>

<style>

</style>