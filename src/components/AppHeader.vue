<script setup>
defineProps({
  title: String,
  count: { type: Number, default: 0 },
})
</script>

<template>
  <header class="header">
    <a href="/"><h1>{{ title }}</h1></a>
    <nav class="nav">
      <a href="/collection"><span class="badge">Collection ({{ count }})</span></a>
      <a href="/about"><span class="badge">About</span></a>
    </nav>
  </header>
</template>