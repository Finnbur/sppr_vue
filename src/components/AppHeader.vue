<script setup>
defineProps({
  title: String,
  count: { type: Number, default: 0 },
})
</script>

<template>
  <header class="header">
    <a href="/"><h1>{{ title }}</h1></a>
    <span class="badge">Count: {{ count }}</span>
    <a href="/about"><span class="badge">About</span></a>
  </header>
</template>
