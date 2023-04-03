const showCards = (numToShow) => {
  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i++) {
    if (i >= numToShow) {
      cards[i].style.display = 'none';
    } else {
      cards[i].style.display = 'block';
    }
  }
}

const showMoreButton = document.getElementById('show-more-button');
let numToShow = 2;
showCards(numToShow);

showMoreButton.addEventListener('click', () => {
  numToShow += 2;
  showCards(numToShow);

});
