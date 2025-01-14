document.addEventListener('DOMContentLoaded', () => {
	const contactForm = document.querySelector('#contactForm');
  
	if (contactForm) {
	  contactForm.addEventListener('submit', (event) => {
		event.preventDefault();
		const formData = new FormData(contactForm);
  
		fetch('php/send-email.php', {
		  method: 'POST',
		  body: formData,
		})
		  .then(response => response.text())
		  .then(data => {
			if (data === 'OK') {
			  alert('Message envoyé avec succès !');
			} else {
			  alert('Erreur : ' + data);
			}
		  })
		  .catch(error => {
			alert('Une erreur est survenue : ' + error.message);
		  });
	  });
	}
  });


  document.addEventListener("DOMContentLoaded", () => {
	const carousels = document.querySelectorAll('.carousel');
  
	carousels.forEach((carousel) => {
	  const paginationLinks = carousel.querySelectorAll('.pagination .page-link[data-bs-slide-to]');
	  const prevBtn = carousel.querySelector('.prev-slide');
	  const nextBtn = carousel.querySelector('.next-slide');
  
	  // Synchroniser la pagination avec les diapositives
	  paginationLinks.forEach(link => {
		link.addEventListener('click', (event) => {
		  event.preventDefault();
		  const index = parseInt(link.getAttribute('data-bs-slide-to'), 10);
		  const bsCarousel = bootstrap.Carousel.getInstance(carousel);
		  if (bsCarousel) {
			bsCarousel.to(index);
		  }
		});
	  });
  
	  // Gérer les boutons "Précédent" et "Suivant"
	  if (prevBtn && nextBtn) {
		prevBtn.addEventListener('click', (event) => {
		  event.preventDefault();
		  const bsCarousel = bootstrap.Carousel.getInstance(carousel);
		  if (bsCarousel) {
			bsCarousel.prev();
		  }
		});
  
		nextBtn.addEventListener('click', (event) => {
		  event.preventDefault();
		  const bsCarousel = bootstrap.Carousel.getInstance(carousel);
		  if (bsCarousel) {
			bsCarousel.next();
		  }
		});
	  }
	});
  
	// Initialiser les carrousels lorsqu'un modal est ouvert
	const modals = document.querySelectorAll('.modal');
	modals.forEach((modal) => {
	  modal.addEventListener('shown.bs.modal', (event) => {
		const carousel = modal.querySelector('.carousel');
		if (carousel) {
		  new bootstrap.Carousel(carousel);
		}
	  });
	});
  });
  
  
  
  