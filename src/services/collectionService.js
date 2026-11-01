import { reactive, computed, watch } from 'vue'

const STORAGE_KEY = 'shop-collection'

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY))
  } catch {
    return {}
  }
}

// { [cardId]: { id, title, image, count } }
export const collection = reactive(load())

watch(
  collection,
  (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    } catch (e) {
      console.error('Could not save collection', e)
    }
  },
  { deep: true }
)

export const totalCount = computed(() =>
  Object.values(collection).reduce((sum, cards) => sum + cards.count, 0)
)

export function getCount(id) {
  return collection[id]?.count ?? 0
}

export function increase({ id, title, image }) {
  if (collection[id]) {
    collection[id].count++
  } else {
    collection[id] = { id, title, image, count: 1 }
  }
}

export function decrease(id) {
  const entry = collection[id]
  if (!entry) return
  entry.count--
  if (entry.count <= 0) delete collection[id]
}