
<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
  <header  class="flex justify-between"  >
    <div class="flex items-center p-4">
      <img alt="Vue logo" class="logo h-36 w-28" src="@/assets/logo.svg" width="125" height="125" />
      <span class="logoText text-[#896780] text-8xl">Bone Voyage</span>
    </div>


    <div class="wrapper">
      
      <NavBar />

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
  <FooterComponent/>
</template>

<style> /*we removed scoped so it works for the new NavBar component*/
.logoText{
  font-family: "Creepster", cursive;
}


header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #896780;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
