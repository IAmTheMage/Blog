window.onload = () => {
  const regionTitles = {
    'pt': 'Blog do Mago',
    'en': 'Blog of the Mage'
  }
  document.title = regionTitles[navigator.language.split('-')[0]]
}