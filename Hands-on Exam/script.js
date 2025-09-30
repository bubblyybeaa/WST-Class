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
    "Supernatural fanfics started the omegaverse. Don't ask me why or how.",
    "It's been 10 years since Undertale was first released.",
    "I miss my husband (has literal thousands of them) <3",
    "I GOT TO SEE DEAR EVAN HANSEN LIVE!!",
    "I GOT TO SEE HAMILTON LIVE!!",
    "I GOT TO SEE SIX THE MUSICAL LIVE!!",
    "I GOT TO SEE MISS SAIGON LIVE!!",
    "I have nine cats.",
    "i'm in a cult...",
    "Patrick Wilson, from the Conjuring series, played Raoul in Phantom of the Opera.",
    "Oscar Isaac has three roles in the MCU (Apocalypse, Miguel O'Hara and Moon Knight).",
    "I had my braces since 9th grade and I still don't know when I'm getting these off.",
    "I'm bad at decorating my island in ACNH.",
    "What else do you want to know?",
    "I bet you won't spam this to see everything (pls don't)."
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
