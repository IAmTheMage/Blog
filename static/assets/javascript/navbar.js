const menubutton = document.getElementById('nav')
const mobilenavbar = document.getElementById('mobilenavbar')
const contactButton = document.querySelector('li>button');

let isOpen = false;

console.log("Hello")
menubutton.addEventListener('click', () => {
  const width = screen.width;
  if(width > 736) return null;
  if(!isOpen) {
    isOpen = true
    const hamburguerLines = document.querySelectorAll('.menuline')
    hamburguerLines.forEach(line => {
      line.classList.add('menulineclicked')
    })
    mobilenavbar.classList.remove('hidden')
    mobilenavbar.classList.add('flex')
  }
  else {
    isOpen = false
    const hamburguerLines = document.querySelectorAll('.menuline')
    hamburguerLines.forEach(line => {
      line.classList.remove('menulineclicked')
    })
    mobilenavbar.classList.remove('flex')
    mobilenavbar.classList.add('hidden')
  }
})

contactButton.addEventListener('click', () => {
  console.log("Hello")
  window.location.href = '/contact'
})
