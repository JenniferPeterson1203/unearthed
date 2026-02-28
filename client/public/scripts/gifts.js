const renderGifts = async () => {
  // 1. Fetch the data from our Express server
  const response = await fetch('/gifts')
  const data = await response.json()

  // 2. Select the <main> element where we want to put the gifts
  const mainContent = document.getElementById('main-content')

  if (data) {
    // 3. Loop through each gift in our data array
    data.map(gift => {
      // Create a 'Card' container for each gift
      const card = document.createElement('div')
      card.className = 'card'

      // Top part of the card (Image)
      const topContainer = document.createElement('div')
      topContainer.className = 'top-container'
      topContainer.style.backgroundImage = `url(${gift.image})`

      // Bottom part (Info)
      const bottomContainer = document.createElement('div')
      bottomContainer.className = 'bottom-container'

      const name = document.createElement('h3')
      name.textContent = gift.name

      const price = document.createElement('p')
      price.textContent = `Price: ${gift.pricePoint}`

      const audience = document.createElement('p')
      audience.textContent = `For: ${gift.audience}`

      // Create the 'Read More' link
      const readMoreLink = document.createElement('a')
      readMoreLink.textContent = 'Read More >'
      readMoreLink.href = `/gifts/${gift.id}`
      readMoreLink.setAttribute('role', 'button')

      // Assemble the card pieces
      bottomContainer.appendChild(name)
      bottomContainer.appendChild(price)
      bottomContainer.appendChild(audience)
      bottomContainer.appendChild(readMoreLink)

      card.appendChild(topContainer)
      card.appendChild(bottomContainer)

      // Finally, add the finished card to the page
      mainContent.appendChild(card)
    })
  } else {
    // If no data comes back, show a friendly message
    const message = document.createElement('h2')
    message.textContent = 'No Gifts Available 😞'
    mainContent.appendChild(message)
  }
}


// Get everything in the URL after the domain
const requestedUrl = window.location.pathname.split('/').pop()

if (requestedUrl && requestedUrl !== 'index.html') {
    // If there is extra text in the URL that isn't home, go to 404
    window.location.href = '../404.html'
} else {
  // Run the function when the page loads!
    renderGifts()
}