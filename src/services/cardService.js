export const fetchCards = async (search, rarity) => {
    const params = new URLSearchParams()

    if (search) params.set('name', search)
    if (rarity && rarity !== 'all') params.set('rarity', rarity)

    const url = `https://api.magicthegathering.io/v1/cards?${params}`

    console.log(url)

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("Error: couldn't fetch cards")
    }
    const data = await response.json()
    console.log(data)
    return data.cards
}