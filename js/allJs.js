 const elements = document.querySelectorAll('b');

 
 //
 //The function of the appearance and disappearance of a word
 //
setInterval(() => {
    elements.forEach((element) => {
        if (element.classList.contains('is-visible')) {
            element.classList.remove('is-visible');
            element.classList.add('is-hidden');
        } 
        else {
            element.classList.remove('is-hidden');
            element.classList.add('is-visible');
        }
    });
}, 5000);


//
//slider
//
//
const slider = document.querySelector(".slides");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("pointerdown", (e) => {
	isDown = true;
	slider.classList.add("dragging");
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});
slider.addEventListener("pointerleave", () => {
	isDown = false;
	slider.classList.remove("dragging");
});
slider.addEventListener("pointerup", () => {
	isDown = false;
	slider.classList.remove("dragging");
});
slider.addEventListener("pointermove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 3; //scroll-fast
	slider.scrollLeft = scrollLeft - walk;
});


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#services-nav .nav-link');
    const tabPanes = document.querySelectorAll('#services-content .tab-pane');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('data-target').substring(1);

            // Remove active classes from all links and panes
            navLinks.forEach(function(nav) {
                nav.classList.remove('active');
                nav.setAttribute('aria-selected', 'false');
            });

            tabPanes.forEach(function(pane) {
                pane.classList.remove('active', 'show');
            });

            // Add active class to the clicked link
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');

            // Add active class to the target pane
            const targetPane = document.getElementById(targetId);
            targetPane.classList.add('active', 'show');
        });
    });
});


//
//modal iframe google maps (jQuery)
//
//

document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('open-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const links = document.querySelectorAll('a[href^="#"]');

    // Открытие модального окна
    openModalBtn.addEventListener('click', () => {
        modalOverlay.classList.add('show');
    });

    // Закрытие модального окна при клике на оверлей
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.classList.remove('show');
        }
    });

    // Плавная прокрутка к якорям
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});


//
// emailJS API
//
//
/* function sendEmail(e) {
    e.preventDefault(); 
  
    
    var templateParams = {
      from_name: document.querySelector('input[name="name"]').value,
      telephone: document.querySelector('input[name="telephone"]').value,
      package: document.querySelector('select[name="nubexSelect"]').value,
      message: document.querySelector('textarea[name="message"]').value
    };
  
    
    emailjs.send('service_4iovkfb', 'template_2wzrzmg', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('Your message has been sent successfully!');
       document.getElementById('contactform').reset(); 
    }, function(error) {
       console.log('FAILED...', error);
       alert('An error occurred while sending the message. Please try again later.');
    });
  } */
  
  

  // As we're about to shift content out of .columns, we need it to hide its overflow


  
document.addEventListener('DOMContentLoaded', function() {
          const images = document.querySelectorAll('.column__item-imgwrap img');
          const modal = document.getElementById('gallery-modal');
          const modalImg = document.getElementById('gallery-modal-img');
          const closeBtn = document.querySelector('.gallery-close');
          const prevBtn = document.querySelector('.gallery-prev');
          const nextBtn = document.querySelector('.gallery-next');
      
          let currentIndex = 0;
      
          const imagesArray = Array.from(images);
      
          images.forEach((img, index) => {
            img.addEventListener('click', () => {
              openModal(index);
            });
          });
      
          function openModal(index) {
            currentIndex = index;
            modal.style.display = 'block';
            modalImg.src = imagesArray[currentIndex].src;
          }
      
          function closeModal() {
            modal.style.display = 'none';
          }
      
          function showNext() {
            currentIndex = (currentIndex + 1) % imagesArray.length;
            modalImg.src = imagesArray[currentIndex].src;
          }
      
          function showPrev() {
            currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
            modalImg.src = imagesArray[currentIndex].src;
          }
      
          closeBtn.addEventListener('click', closeModal);
          nextBtn.addEventListener('click', showNext);
          prevBtn.addEventListener('click', showPrev);
      
          window.addEventListener('click', (e) => {
            if (e.target == modal) {
              closeModal();
            }
          });
        });

        document.querySelector(".columns").style.overflowY = "hidden";

// Set up timeline
const timeline = new ScrollTimeline({
source: document.documentElement,
});

// Loop all eligible columns
document.querySelectorAll(".column-reverse").forEach(($column) => {
// Flip item order in reverse columns
$column.style.flexDirection = "column-reverse";

// Hook Animation
$column.animate(
  {
    transform: [
      "translateY(calc(-100% + 100vh))",
      "translateY(calc(100% - 100vh))"
    ]
  },
  {
    fill: "both",
    timeline
  }
);
});