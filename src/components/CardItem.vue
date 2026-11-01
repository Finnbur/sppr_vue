<script setup>
import { computed } from 'vue'
import { getCount, increase, decrease } from '../services/collectionService'

const props = defineProps({
  id: String,
  image: String,
  title: String,
})

const key = computed(() => props.id ?? props.title)
const count = computed(() => getCount(key.value))

function decreaseCount() {
  decrease(key.value)
}

function increaseCount() {
  increase({ id: key.value, title: props.title, image: props.image })
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
  } catch (e) {
    console.error('Copy failed', e)
  }
}
</script>

<template>
  <article class="card">
    <div class="card-info">
      <h2 class="title" @click="copyText(title)">{{ title }}</h2>

      <div class="card-bottom">

        <div class="counter">
          <button @click="decreaseCount(); $event.currentTarget.blur()">−</button>
          <span class="count">{{ count }}</span>
          <button @click="increaseCount(); $event.currentTarget.blur()">+</button>
        </div>
      </div>
    </div>

    <div class="image-container">
      <img :src="image" :alt="title">
    </div>
  </article>
</template>
