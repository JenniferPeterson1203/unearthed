// Select the <header> element from our HTML
const header = document.querySelector('header')

// Create a container for the entire header
const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

// Create the left side of the header (Logo + Title)
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const logo = document.createElement('img')
logo.className = 'logo' 
// logo.src = '/logo.png' // Make sure your logo is named logo.png!
logo.src = 'https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_1:1/v1772241981/WEB-103/nasa-vhSz50AaFAs-unsplash_zull2r.jpg'
logo.alt = 'UnEarthed Logo'

const title = document.createElement('h1')
title.textContent = 'UnEarthed'

// Put the logo and title inside the left div
headerLeft.appendChild(logo)
headerLeft.appendChild(title)

// Create the right side (Home Button)
const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
// When clicked, go back to the home page
headerButton.addEventListener('click', () => {
  window.location = '/'
})

headerRight.appendChild(headerButton)

// Put both sides into the main container, and the container into the header
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)
header.appendChild(headerContainer)