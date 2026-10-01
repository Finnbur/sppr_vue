<script setup>
import AppItem from '../components/AppItem.vue'
import { totalCount } from '../countState.vue'

function handleCountChange(title, Count, Add) {
  console.log(`${title} count is now ${Count}`)
  if (Add == true) {
    totalCount.value++
  } else {
    totalCount.value--
  }
}
</script>

<template>
    <main>
      <AppItem
        image="shoes.jpg"
        title="Shoes"
        :cost="3"
        @count-change="handleCountChange"
      />
      <AppItem
        image="socks.jpg"
        title="Socks"
        :cost="10"
        @count-change="handleCountChange"
      />
    </main>
</template>
