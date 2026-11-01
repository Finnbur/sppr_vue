<script setup>
import { computed } from 'vue'
import { collection, totalCount, increase, decrease } from '../services/collectionService'

const cards = computed(() => Object.values(collection))
</script>

<template>
  <main>
    <h1>Collection</h1>

    <p v-if="cards.length === 0">You haven't saved any cards yet.</p>

    <template v-else>
      <p>{{ cards.length }} different cards, {{ totalCount }} in total</p>

      <div class="card-grid">
        <article v-for="card in cards" :key="card.id" class="card">
          <div class="card-info">
            <h2 class="title">{{ card.title }}</h2>

            <div class="card-bottom">
              <div class="counter">
                <button @click="decrease(card.id); $event.currentTarget.blur()">−</button>
                  <span class="count">{{ card.count }}</span>
                <button @click="increase(card); $event.currentTarget.blur()">+</button>
              </div>
            </div>
          </div>

          <div class="image-container">
            <img :src="card.image" :alt="card.title">
          </div>
        </article>
      </div>
    </template>
  </main>
</template>