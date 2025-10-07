 document.addEventListener('DOMContentLoaded', () => {
  
  document.querySelectorAll('.topnav a').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href') || '';
      if (href.startsWith('#')) {
        e.preventDefault();
        const id = href.slice(1);
        const target = document.getElementById(id);
        if (target) {
          
          const offset = 60;
          const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  });


  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    const toggleScrollBtn = () => {
      scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
    };
    window.addEventListener('scroll', toggleScrollBtn);

    toggleScrollBtn();
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }


  const profileImg = document.querySelector('.about-content img');
  if (profileImg) {
    profileImg.addEventListener('mouseover', () => profileImg.style.transform = 'scale(1.1)');
    profileImg.addEventListener('mouseout',  () => profileImg.style.transform = 'scale(1)');
  }

  const facts = [
    "It took me 3 years to get Cephalobot's picture frame.",
    "It's been 5 years since Animal Crossing: New Horizons was first released.",
    "The DLC for Animal Crossing: New Horizons is called Happy Home Paradise.",
    "Bea is bad at decorating my island in ACNH.",
    "The maximum number of villagers you can have in ACNH is 10.",
    "Bea has 8 villagers in my island right now.",
    "Bea has a total of 300+ hours in Animal Crossing: New Horizons."
  ];
  const factBtn = document.getElementById('factBtn');
  const randomFactP = document.getElementById('randomFact');
  if (factBtn && randomFactP) {
    factBtn.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * facts.length);
      randomFactP.textContent = facts[randomIndex];
    });
  }


  const greetingElement = document.getElementById('greeting');
  if (greetingElement) {
    greetingElement.textContent = "Welcome to the internet! - Bo Burnham";
  }


  const contactForm = document.getElementById('contactForm');
  const thankYouMsg = document.getElementById('thankYouMsg');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); 
      
      alert("Thanks for contacting me! I’ll get back to you in five minutes.");
      
      contactForm.style.display = 'none';
      if (thankYouMsg) thankYouMsg.style.display = 'block';
    });
  }
});


const productSelect = document.getElementById("productSelect");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const qtyDisplay = document.querySelector(".quantity");
const cartSummary = document.getElementById("cartSummary");
 
let quantity = 1;
 
plusBtn.addEventListener("click", () => {
  quantity++; 
  qtyDisplay.textContent = quantity;
  updateSummary();
});
 
minusBtn.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--; 
    qtyDisplay.textContent = quantity;
    updateSummary();
  }
});
 
productSelect.addEventListener("change", updateSummary);
 
function updateSummary() {
  const selectedProduct = productSelect.value;
  if (selectedProduct) {
    cartSummary.textContent = `You selected: ${selectedProduct} × ${quantity}`;
  } else {
    cartSummary.textContent = "Please select a product and quantity.";
  }
}