<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { totalCount } from './services/collectionService.js'
</script>

<template>
  <div class="page">
    <AppHeader title="MTG Cards" :count="totalCount" />
    <RouterView />
    <AppFooter />
  </div>
</template>
