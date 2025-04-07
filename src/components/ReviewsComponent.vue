<template>
    <h4 class="text-6xl font-semibold text-gray-100">Customer reviews from beyond the grieve</h4>

    <div class="flex flex-wrap gap-8 mx-auto ownGrid-parent">
    <div v-for="(review, index) in reviews" :key="index" class="border-b border-gray-300 p-4 inset-shadow-[#f3dc15] shadow-md shadow-[#f3dc15] bg-gray-100 rounded-lg ownGrid-child">
        <span class="text-black">"</span>
    <h3 class="text-xl font-semibold text-[#896780]">{{ review.reviewAuthor }}</h3>
    <div class="flex items-center my-2">
    <!-- Render stars based on reviewRating -->
    <template v-for="star in 5" :key="star">
    <svg
    v-if="star <= review.reviewRating"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    class="w-5 h-5 text-yellow-500"
    >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
    <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    class="w-5 h-5 text-gray-300"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
    </svg>
    </template>
    </div>
    <p class="text-gray-600">{{ review.reviewText }}</p>
    </div>
    </div>
    </template>
    
    <script setup>
    import { useReviews } from "@/modules/useReviews";
    
    
    const { reviews } = useReviews();
    
    </script>
    
    <style scoped>
    h4 {
    font-family: 'Creepster', cursive;
    }

   .ownGrid-parent {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    }

    .ownGrid-child {
    grid-column: span 4;
    }

    </style>