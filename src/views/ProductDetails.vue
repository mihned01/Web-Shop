<template>
    <div class="product-details w-full">
        <div class="w-1/2">
            <img class="w-full" src="product.productImage" alt="">
        </div>

        <div class="w-full p-4">
            <h3>{{ product.nameOfCoffins }}</h3>
            <p class="text-[f3dc15] text-2xl !font-bold">Price: {{ product.price }}</p>
            <p> {{ product.description }}</p>
        </div>

    </div>
</template>