<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppItem from './components/AppItem.vue'
</script>

<template>
  <div class="page">
    <AppHeader title="Home" />

    <main>
      <AppItem
        image="shoes.jpg"
        title="Shoes"
        :cost="3"
      />
      <AppItem
        image="socks.jpg"
        title="Socks"
        :cost="10"
      />
    </main>

    <AppFooter />
  </div>
</template>
