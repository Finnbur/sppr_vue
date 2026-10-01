<script setup>
import { ref } from 'vue'

const props = defineProps({
  image: String,
  title: String,
  cost: Number,
})

const emit = defineEmits(['count-change'])

const count = ref(0)

function decreaseCount() {
  if (count.value >= 1) {
    count.value--
    emit('count-change', props.title, count.value, false)
  }
}

function increaseCount() {
  count.value++
  emit('count-change', props.title, count.value, true)
}
</script>

<template>
  <article class="item">
    <div class="image-container">
      <img :src="'/' + image" :alt="title">
    </div>

    <div class="item-info">
      <h2>{{ title }}</h2>
      <p class="price">${{ cost }}</p>

      <div class="counter">
        <button @click="decreaseCount">−</button>
        <span class="count">{{ count }}</span>
        <button @click="increaseCount">+</button>
      </div>
    </div>
  </article>
</template>
