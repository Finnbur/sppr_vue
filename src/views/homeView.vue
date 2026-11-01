<script setup>
import { ref, onMounted, watch } from 'vue'
import CardItem from '../components/CardItem.vue'
import { totalCount } from '../services/collectionService.js'
import { fetchCards } from '@/services/cardService.js'

function handleCountChange(title, Count, Add) {
  console.log(`${title} count is now ${Count}`)
  if (Add == true) {
    totalCount.value++
  } else {
    totalCount.value--
  }
}

const cards = ref([])
const searchQuery = ref('')
const selectedRarity = ref('all')

async function loadCards() {
  try {
    // an empty query gives the normal cards, anything else gives search results
    cards.value = await fetchCards(searchQuery.value.trim(), selectedRarity.value)
  } catch (error) {
    console.error(error)
  }
}

onMounted(loadCards)

watch(searchQuery, (value) => {
  if (value.trim() === '') loadCards()
})

</script>
<template>
  <main>
      <div class="toolbar">
      <h2 class="toolbar-title">Cards</h2>

      <div class="toolbar-controls">
        <div class="rarity">
          <select v-model="selectedRarity" @change="loadCards" id="rarity">
            <option value="all">All</option>
            <option value="common">Common</option>
            <option value="uncommon">Uncommon</option>
            <option value="rare">Rare</option>
            <option value="mythic">Mythic Rare</option>
            <option value="special">Special</option>
          </select>
        </div>

        <div class="search">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input v-model="searchQuery" @keyup.enter="loadCards" type="search" placeholder="Search cards..." aria-label="Search cards">
        </div>
      </div>
    </div>



    
    <div class="card-grid">
      <template v-for="(card, index) in cards" :key="index">
        <template v-if="card.imageUrl" class="card-item">
          <CardItem
            :id="card.id"
            :image="card.imageUrl"
            :title="card.name"
            @count-change="handleCountChange"
          />
        </template>
      </template>
    </div>
  </main>
</template>