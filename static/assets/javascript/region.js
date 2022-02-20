const regionTitles = {
  'pt': 'Blog do Mago',
  'en': 'Blog of the Mage'
}
const siteStatus = {
  'en': 'This is a pré alpha website',
  'pt': 'Esse é um site em estado alfa'
}
const region = navigator.language.split('-')[0]
document.title = regionTitles[region]
document.getElementById('alpha').innerText = siteStatus[region]
