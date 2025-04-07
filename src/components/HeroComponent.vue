<template>
    <section class="hero bg-cover bg-center h-screen flex items-center justify-center" style="background-image: url('https://picsum.photos/1280/800');">
        <div class="hero-text-container text-center">
            <div class="ratingStars text-8xl text-yellow-500">*****</div>
            <h2 class="text-4xl font-bold text-black-300">
                {{ randomQuote }}
            </h2>
            <button class="mt-4 px-6 py-2 bg-yellow-500 text-[#4a385d] !font-bold rounded-full">Click if you are dead</button>
        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue'

let randomQuote = ref('6 six feet under')
</script>

<style>

</style>