const renderGift = async () => {
    // Get the ID and log it to the console to see if it's correct
    const urlParts = window.location.href.split('/')
    const lastPart = urlParts.pop() || urlParts.pop() // Safety for trailing slashes
    const requestedID = parseInt(lastPart)
    
    console.log("Searching for Gift ID:", requestedID)

    const response = await fetch('/gifts')
    const data = await response.json()
    
    console.log("Data received from server:", data)

    const giftContent = document.getElementById('gift-content')
    
    // Find the gift
    const gift = data.find(gift => gift.id === requestedID)

    if (gift) {
        console.log("Found matching gift:", gift)
        document.getElementById('image').src = gift.image
        document.getElementById('name').textContent = gift.name
        document.getElementById('submittedBy').textContent = `Submitted by: ${gift.submittedBy}`
        document.getElementById('pricePoint').textContent = `Price: ${gift.pricePoint}`
        document.getElementById('audience').textContent = `Best for: ${gift.audience}`
        document.getElementById('description').textContent = gift.description
        document.title = `UnEarthed - ${gift.name}`
    } else {
        console.log("No gift found with that ID.")
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        giftContent.innerHTML = ''
        giftContent.appendChild(message)
    }
}

renderGift()