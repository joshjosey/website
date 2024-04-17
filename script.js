// Add event listeners on skill cards to add class for flipping on back
document.querySelectorAll('.skill-cell').forEach(card => {
  card.addEventListener('mousemove', () => {
	card.classList.add('flip');
	setTimeout(() => {
	  card.classList.remove('flip');
	}, 1500); // flip back after 1.5 secs
  })
})
