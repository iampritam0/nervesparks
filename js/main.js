document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-car-brands-input');
    const cards = document.querySelectorAll('.cardGroup');
  
    searchInput.addEventListener('input', function() {
      const searchValue = this.value.toLowerCase();
  
      cards.forEach(function(card) {
        const brandName = card.querySelector('.card-title').innerText.toLowerCase();
  
        if (brandName.includes(searchValue)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  