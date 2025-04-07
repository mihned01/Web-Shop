<script setup>
import HeroComponent from '@/components/HeroComponent.vue';
import ProductsComponent from '@/components/ProductsComponent.vue';
import ReviewsComponent from '@/components/ReviewsComponent.vue';

</script>

<template>
  <main>
    <HeroComponent />
    <div class="!mx-8">
      <ProductsComponent/>
      <ReviewsComponent/>
    </div>
    
  </main>
</template>