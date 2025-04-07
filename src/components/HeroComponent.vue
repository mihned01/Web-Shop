
<template>
    <section class="hero bg-center bg-no-repeat h-screen flex items-center justify-center " style="background-image: url('https://picsum.photos/seed/picsum/1200/1200')" >
        <div class="heroTextCenterContainer text-center">
            <div class="ratingStars text-8xl text-yellow-500">*****</div>
            <h2 class="text-4xl font-bold text-gray-300">
             {{ randomQuote }}
            </h2>
            <button class="mt-4 px-6 py-2 bg-yellow-500 text-[#4a385d] !font-bold rounded-full">If you ain't dead, don't click </button>
        </div>
    </section>
        
</template>

<script setup>
import { ref } from 'vue';
let randomQuote= ref('You kill it, we pack it')

</script>

<style>
</style>
