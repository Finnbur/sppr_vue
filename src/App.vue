<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { totalCount } from './countState.vue'
</script>

<template>
  <div class="page">
    <AppHeader title="My Shop" :count="totalCount" />
    <RouterView />
    <AppFooter />
  </div>
</template>
